/**
 * Indian Cities Active Mobility Impact Calculator
 * Based on ITDP Protected Bicycle Lane Network Impact Model
 */

function initializeIndianCalculator() {
    const calculatorHTML = `
        <div class="calculator-container">
            <div class="row mb-4">
                <div class="col-md-6">
                    <label for="citySelect" class="form-label"><strong>Select Indian City</strong></label>
                    <select id="citySelect" class="form-select">
                        <option value="">Choose a city...</option>
                        ${indianCitiesData.map(city =>
                            `<option value="${city.id}">${city.city}, ${city.state} (${(city.population/1000000).toFixed(1)}M people)</option>`
                        ).join('')}
                    </select>
                </div>
                <div class="col-md-6">
                    <label for="plannedLanes" class="form-label"><strong>Planned Protected Bike Lanes (km)</strong></label>
                    <input type="number" id="plannedLanes" class="form-control" min="10" max="2000" step="10" placeholder="e.g. 100">
                    <small class="text-muted">Bogotá built 500km for $130M</small>
                </div>
            </div>

            <div class="text-center mb-3">
                <button id="calculateBtn" class="btn btn-primary btn-lg" disabled>
                    <i class="fas fa-calculator me-2"></i>Calculate Impact
                </button>
            </div>

            <div id="calculatorResults" class="mt-4" style="display: none;">
                <div class="alert alert-success">
                    <h4 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Impact Analysis</h4>
                    <hr>
                    <div id="resultsContent"></div>
                </div>

                <div class="row mt-4">
                    <div class="col-md-3">
                        <div class="impact-card bg-success text-white">
                            <div class="impact-icon"><i class="fas fa-leaf"></i></div>
                            <div class="impact-value" id="co2Saved">0</div>
                            <div class="impact-label">tons CO₂/year</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="impact-card bg-info text-white">
                            <div class="impact-icon"><i class="fas fa-rupee-sign"></i></div>
                            <div class="impact-value" id="costEstimate">₹0</div>
                            <div class="impact-label">Est. Investment</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="impact-card bg-warning text-dark">
                            <div class="impact-icon"><i class="fas fa-heartbeat"></i></div>
                            <div class="impact-value" id="livesSaved">0</div>
                            <div class="impact-label">Lives saved/year</div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="impact-card bg-primary text-white">
                            <div class="impact-icon"><i class="fas fa-chart-line"></i></div>
                            <div class="impact-value" id="roiRatio">0:1</div>
                            <div class="impact-label">ROI Ratio</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    return calculatorHTML;
}

function setupCalculatorEvents() {
    const citySelect = document.getElementById('citySelect');
    const plannedLanes = document.getElementById('plannedLanes');
    const calculateBtn = document.getElementById('calculateBtn');

    // Enable button when both inputs are filled
    function checkInputs() {
        calculateBtn.disabled = !(citySelect.value && plannedLanes.value && plannedLanes.value >= 10);
    }

    citySelect.addEventListener('change', checkInputs);
    plannedLanes.addEventListener('input', checkInputs);

    calculateBtn.addEventListener('click', function() {
        calculateImpact();
    });
}

function calculateImpact() {
    const cityId = parseInt(document.getElementById('citySelect').value);
    const plannedKm = parseFloat(document.getElementById('plannedLanes').value);

    const city = indianCitiesData.find(c => c.id === cityId);
    if (!city) return;

    // Calculate People Near Bikeways (PNB)
    // Assume 0.6 km catchment on each side = 1.2 km width
    const catchmentArea = plannedKm * 1.2; // km²
    const peopleNearBikeways = catchmentArea * city.density;
    const pnbPercentage = (peopleNearBikeways / city.population) * 100;

    // Estimate cycling activity (simplified ITDP model)
    // Based on regression: pkt/year = f(PNB, population)
    const avgTripLength = 8; // km (average for Indian cities)
    const tripsPerPerson = 250; // days/year
    const cyclingAdoptionRate = Math.min(0.15, pnbPercentage / 100 * 0.3); // Max 15% adoption
    const totalCyclingPkt = peopleNearBikeways * avgTripLength * tripsPerPerson * cyclingAdoptionRate;

    // Modal shift (conservative: 6-7% from car, 2-3% from two-wheeler)
    const modalShiftFromCar = 0.065;
    const modalShiftFromTwoWheeler = 0.025;

    const pktShiftedFromCar = totalCyclingPkt * modalShiftFromCar;
    const pktShiftedFromTwoWheeler = totalCyclingPkt * modalShiftFromTwoWheeler;

    // CO₂ calculations (using India emission factors)
    const co2FromCar = pktShiftedFromCar * indiaEmissionFactors.car / 1000000; // to metric tons
    const co2FromTwoWheeler = pktShiftedFromTwoWheeler * indiaEmissionFactors.motorcycle / 1000000;
    const co2FromBike = (pktShiftedFromCar + pktShiftedFromTwoWheeler) * indiaEmissionFactors.bicycle / 1000000;
    const totalCO2Saved = co2FromCar + co2FromTwoWheeler - co2FromBike;

    // Cost estimation (based on Bogotá: $130M for 500km = $260K/km)
    const costPerKm = 260000; // USD
    const totalCostUSD = plannedKm * costPerKm;
    const totalCostINR = totalCostUSD * 83; // Approx INR conversion
    const totalCostCrores = totalCostINR / 10000000;

    // Health benefits (scaled from Bogotá: 300 deaths prevented for 500km)
    const deathsPreventedPerKm = 300 / 500;
    const deathsPrevented = Math.round(plannedKm * deathsPreventedPerKm);

    // Economic benefits (travel time + health)
    const travelTimeSavingsPerKm = 80000000 / 500; // Bogotá ratio
    const healthBenefitPerKm = 230000000 / 500;
    const annualBenefitUSD = (travelTimeSavingsPerKm + healthBenefitPerKm) * plannedKm;
    const annualBenefitINR = annualBenefitUSD * 83;
    const annualBenefitCrores = annualBenefitINR / 10000000;

    // ROI
    const roiRatio = annualBenefitUSD / totalCostUSD;

    // Display results
    document.getElementById('calculatorResults').style.display = 'block';
    document.getElementById('co2Saved').textContent = totalCO2Saved.toLocaleString('en-IN', {maximumFractionDigits: 0});
    document.getElementById('costEstimate').textContent = `₹${totalCostCrores.toFixed(0)} Cr`;
    document.getElementById('livesSaved').textContent = deathsPrevented;
    document.getElementById('roiRatio').textContent = `${roiRatio.toFixed(2)}:1`;

    // Detailed results
    const resultsHTML = `
        <div class="row">
            <div class="col-md-6">
                <h6><strong>${city.city} Impact Summary:</strong></h6>
                <ul class="mb-0">
                    <li>Protected bike lanes: <strong>${plannedKm} km</strong></li>
                    <li>People within 300m: <strong>${peopleNearBikeways.toLocaleString('en-IN', {maximumFractionDigits: 0})}</strong> (${pnbPercentage.toFixed(1)}% of population)</li>
                    <li>Estimated cycling adoption: <strong>${(cyclingAdoptionRate*100).toFixed(1)}%</strong></li>
                    <li>CO₂ emissions eliminated: <strong>${totalCO2Saved.toLocaleString('en-IN', {maximumFractionDigits: 0})} metric tons/year</strong></li>
                </ul>
            </div>
            <div class="col-md-6">
                <h6><strong>Economic Analysis:</strong></h6>
                <ul class="mb-0">
                    <li>Investment cost: <strong>₹${totalCostCrores.toFixed(0)} crores</strong> (${totalCostUSD.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0})})</li>
                    <li>Annual benefit: <strong>₹${annualBenefitCrores.toFixed(0)} crores/year</strong></li>
                    <li>ROI: <strong>${(roiRatio*100).toFixed(0)}%</strong> annual return</li>
                    <li>Payback period: <strong>${(12/roiRatio).toFixed(1)} months</strong></li>
                </ul>
            </div>
        </div>
        <div class="mt-3">
            <p class="mb-1"><small class="text-muted">
                <i class="fas fa-info-circle me-1"></i>
                Calculations based on ITDP Protected Bicycle Lane Network Impact Model.
                Assumes ${(modalShiftFromCar*100).toFixed(1)}% modal shift from car, ${(modalShiftFromTwoWheeler*100).toFixed(1)}% from two-wheelers.
                Emission factors for India: Car=${indiaEmissionFactors.car}g/pkm, Motorcycle=${indiaEmissionFactors.motorcycle}g/pkm, Bicycle=${indiaEmissionFactors.bicycle}g/pkm.
            </small></p>
        </div>
    `;

    document.getElementById('resultsContent').innerHTML = resultsHTML;

    // Scroll to results
    document.getElementById('calculatorResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const calculatorPlaceholder = document.getElementById('indianCalculator');
    if (calculatorPlaceholder) {
        calculatorPlaceholder.innerHTML = initializeIndianCalculator();
        setupCalculatorEvents();
    }
});
