/**
 * National Active Mobility Bill - Budget Analysis Interactive Functions
 * Created: February 4, 2026
 * Description: Chart visualizations, DataTables, and interactive features
 */

// ============================================================================
// INITIALIZATION
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  console.log('Budget Analysis page loaded');

  // Initialize all components
  initializeSummaryTable();
  initializeCityRankingTable();
  initializeCharts();
  populateCityCards();

  // Add event listeners
  setupTabListeners();
});

// ============================================================================
// DATATABLES INITIALIZATION
// ============================================================================

function initializeSummaryTable() {
  if (!$.fn.DataTable.isDataTable('#summaryTable')) {
    const table = $('#summaryTable').DataTable({
      data: cityBudgetData,
      columns: [
        {
          data: 'city',
          render: function(data, type, row) {
            return `<strong>${data}</strong>`;
          }
        },
        {
          data: 'population',
          render: function(data) {
            return (data / 1000000).toFixed(1) + 'M';
          }
        },
        { data: 'cycleLanes' },
        { data: 'footpaths' },
        {
          data: 'budget.totalCost',
          render: function(data) {
            return '₹' + data.toFixed(1);
          }
        },
        {
          data: 'peopleReached',
          render: function(data) {
            return (data / 1000000).toFixed(2) + 'M';
          }
        },
        {
          data: 'benefits.bcr',
          render: function(data) {
            return data.toFixed(2) + ':1';
          }
        }
      ],
      order: [[6, 'desc']], // Sort by BCR descending
      pageLength: 10,
      responsive: true,
      language: {
        search: "Search cities:",
        lengthMenu: "Show _MENU_ cities",
        info: "Showing _START_ to _END_ of _TOTAL_ cities"
      }
    });
  }
}

function initializeCityRankingTable() {
  if (!$.fn.DataTable.isDataTable('#cityRankingTable')) {
    const table = $('#cityRankingTable').DataTable({
      data: cityBudgetData,
      columns: [
        {
          data: 'city',
          render: function(data, type, row) {
            let html = `<strong>${data}</strong>`;
            if (row.notable) {
              html += `<br><small class="text-muted">${row.notable}</small>`;
            }
            return html;
          }
        },
        {
          data: 'population',
          render: function(data) {
            return (data / 1000000).toFixed(1) + 'M';
          }
        },
        {
          data: 'density',
          render: function(data) {
            return data.toLocaleString();
          }
        },
        {
          data: 'currentCyclingShare',
          render: function(data) {
            return data.toFixed(1) + '%';
          }
        },
        {
          data: null,
          render: function(data, type, row) {
            return row.cycleLanes + row.footpaths;
          }
        },
        {
          data: 'budget.totalCost',
          render: function(data) {
            return '₹' + data.toFixed(1) + ' Cr';
          }
        },
        {
          data: null,
          render: function(data, type, row) {
            const costPerPerson = (row.budget.totalCost * 10000000) / row.peopleReached;
            return '₹' + costPerPerson.toFixed(0);
          }
        },
        {
          data: 'benefits.bcr',
          render: function(data) {
            let color = 'success';
            if (data < 10) color = 'warning';
            if (data < 5) color = 'danger';
            return `<span class="badge bg-${color}">${data.toFixed(2)}:1</span>`;
          }
        },
        {
          data: 'annualImpact.co2Reduction',
          render: function(data) {
            return data.toLocaleString();
          }
        }
      ],
      order: [[7, 'desc']], // Sort by BCR descending
      pageLength: 10,
      responsive: true,
      language: {
        search: "Search cities:",
        lengthMenu: "Show _MENU_ cities",
        info: "Showing _START_ to _END_ of _TOTAL_ cities"
      }
    });
  }
}

// ============================================================================
// CHART VISUALIZATIONS
// ============================================================================

function initializeCharts() {
  createBudgetDistributionChart();
  createBCRChart();
  createROIChart();
  createModalShareChart();
}

// Budget Distribution Pie Chart
function createBudgetDistributionChart() {
  const ctx = document.getElementById('budgetDistributionChart');
  if (!ctx) return;

  const colors = [
    'rgba(13, 117, 118, 0.8)',   // CFAM Green
    'rgba(35, 162, 165, 0.8)',   // CFAM Teal
    'rgba(210, 77, 101, 0.8)',   // CFAM Pink
    'rgba(251, 200, 49, 0.8)',   // CFAM Yellow
    'rgba(148, 98, 0, 0.8)'      // Dark Yellow
  ];

  const borderColors = [
    'rgba(13, 117, 118, 1)',
    'rgba(35, 162, 165, 1)',
    'rgba(210, 77, 101, 1)',
    'rgba(251, 200, 49, 1)',
    'rgba(148, 98, 0, 1)'
  ];

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: cityBudgetData.map(city => city.city),
      datasets: [{
        data: cityBudgetData.map(city => city.budget.totalCost),
        backgroundColor: colors,
        borderColor: borderColors,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: {
              size: 12
            }
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const label = context.label || '';
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ₹${value.toFixed(1)} Cr (${percentage}%)`;
            }
          }
        }
      }
    }
  });
}

// Benefit-Cost Ratio Bar Chart
function createBCRChart() {
  const ctx = document.getElementById('bcrChart');
  if (!ctx) return;

  const sortedData = [...cityBudgetData].sort((a, b) => b.benefits.bcr - a.benefits.bcr);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedData.map(city => city.city),
      datasets: [{
        label: 'Benefit-Cost Ratio',
        data: sortedData.map(city => city.benefits.bcr),
        backgroundColor: 'rgba(13, 117, 118, 0.7)',
        borderColor: 'rgba(13, 117, 118, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Benefit-Cost Ratio (20-year)',
            font: {
              weight: 'bold'
            }
          },
          ticks: {
            callback: function(value) {
              return value.toFixed(0) + ':1';
            }
          }
        },
        x: {
          title: {
            display: true,
            text: 'City',
            font: {
              weight: 'bold'
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `BCR: ${context.parsed.y.toFixed(2)}:1`;
            }
          }
        }
      }
    }
  });
}

// ROI Comparison Chart
function createROIChart() {
  const ctx = document.getElementById('roiChart');
  if (!ctx) return;

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: cityBudgetData.map(city => city.city),
      datasets: [
        {
          label: 'Investment (₹ Cr)',
          data: cityBudgetData.map(city => city.budget.totalCost),
          backgroundColor: 'rgba(210, 77, 101, 0.7)',
          borderColor: 'rgba(210, 77, 101, 1)',
          borderWidth: 2,
          yAxisID: 'y'
        },
        {
          label: '20-Year Benefits (₹ Cr)',
          data: cityBudgetData.map(city => city.benefits.totalBenefits),
          backgroundColor: 'rgba(13, 117, 118, 0.7)',
          borderColor: 'rgba(13, 117, 118, 1)',
          borderWidth: 2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      scales: {
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          title: {
            display: true,
            text: 'Investment (₹ Crores)',
            color: 'rgba(210, 77, 101, 1)',
            font: {
              weight: 'bold'
            }
          },
          ticks: {
            color: 'rgba(210, 77, 101, 1)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: '20-Year Benefits (₹ Crores)',
            color: 'rgba(13, 117, 118, 1)',
            font: {
              weight: 'bold'
            }
          },
          ticks: {
            color: 'rgba(13, 117, 118, 1)'
          },
          grid: {
            drawOnChartArea: false
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              let label = context.dataset.label || '';
              if (label) {
                label += ': ₹';
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y.toFixed(1) + ' Cr';
              }
              return label;
            },
            footer: function(tooltipItems) {
              const index = tooltipItems[0].dataIndex;
              const city = cityBudgetData[index];
              return `BCR: ${city.benefits.bcr.toFixed(2)}:1`;
            }
          }
        }
      }
    }
  });
}

// Modal Share Comparison Chart
function createModalShareChart() {
  const ctx = document.getElementById('modalShareChart');
  if (!ctx) return;

  // Calculate projected modal share (simplified projection)
  const projectedData = cityBudgetData.map(city => {
    const increase = 3; // Simplified 3% increase projection
    return {
      city: city.city,
      current: city.currentCyclingShare,
      projected: Math.min(city.currentCyclingShare + increase, 15) // Cap at 15%
    };
  });

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: projectedData.map(d => d.city),
      datasets: [
        {
          label: 'Current Cycling Modal Share',
          data: projectedData.map(d => d.current),
          backgroundColor: 'rgba(210, 77, 101, 0.7)',
          borderColor: 'rgba(210, 77, 101, 1)',
          borderWidth: 2
        },
        {
          label: 'Projected Modal Share (Post-Infrastructure)',
          data: projectedData.map(d => d.projected),
          backgroundColor: 'rgba(13, 117, 118, 0.7)',
          borderColor: 'rgba(13, 117, 118, 1)',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 15,
          title: {
            display: true,
            text: 'Cycling Modal Share (%)',
            font: {
              weight: 'bold'
            }
          },
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.dataset.label}: ${context.parsed.y.toFixed(1)}%`;
            }
          }
        }
      }
    }
  });
}

// ============================================================================
// CITY CARDS GENERATION
// ============================================================================

function populateCityCards() {
  const container = document.getElementById('cityCards');
  if (!container) return;

  cityBudgetData.forEach(city => {
    const card = createCityCard(city);
    container.appendChild(card);
  });
}

function createCityCard(city) {
  const card = document.createElement('div');
  card.className = 'city-detail-card';

  const totalInfra = city.cycleLanes + city.footpaths;
  const costPerPerson = (city.budget.totalCost * 10000000) / city.peopleReached;

  card.innerHTML = `
    <div class="city-detail-header">
      <h4>${city.city}</h4>
      <div class="city-meta">
        Population: ${(city.population / 1000000).toFixed(1)}M |
        Density: ${city.density.toLocaleString()} per km²
        ${city.notable ? `<br><small><i class="fas fa-star me-1"></i>${city.notable}</small>` : ''}
      </div>
    </div>

    <div class="city-detail-body">
      <div class="city-stats-grid">
        <div class="city-stat">
          <div class="city-stat-value">${totalInfra} km</div>
          <div class="city-stat-label">Total Infrastructure</div>
        </div>
        <div class="city-stat">
          <div class="city-stat-value">₹${city.budget.totalCost.toFixed(1)} Cr</div>
          <div class="city-stat-label">Total Cost</div>
        </div>
        <div class="city-stat">
          <div class="city-stat-value">${(city.peopleReached / 1000000).toFixed(2)}M</div>
          <div class="city-stat-label">People Reached</div>
        </div>
        <div class="city-stat">
          <div class="city-stat-value">${city.benefits.bcr.toFixed(2)}:1</div>
          <div class="city-stat-label">Benefit-Cost Ratio</div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <h6 class="text-cfam-green">Current Modal Share</h6>
          <div class="modal-share-table">
            <table class="table table-sm">
              <tbody>
                <tr><td>Walking</td><td class="text-end">${city.modalShare.walking}%</td></tr>
                <tr><td>Bicycle</td><td class="text-end"><strong>${city.modalShare.bicycle}%</strong></td></tr>
                <tr><td>Transit</td><td class="text-end">${city.modalShare.transit}%</td></tr>
                <tr><td>Motorcycle</td><td class="text-end">${city.modalShare.motorcycle}%</td></tr>
                <tr><td>Car</td><td class="text-end">${city.modalShare.car}%</td></tr>
                <tr><td>Taxi/Ridehailing</td><td class="text-end">${city.modalShare.taxi}%</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-md-6">
          <h6 class="text-cfam-teal">Budget Breakdown</h6>
          <div class="budget-breakdown-table">
            <table class="table table-sm">
              <tbody>
                <tr>
                  <td>Cycle Lanes (${city.cycleLanes} km)</td>
                  <td class="text-end">₹${city.budget.cycleLanesCost.toFixed(1)} Cr</td>
                </tr>
                <tr>
                  <td>Footpaths (${city.footpaths} km)</td>
                  <td class="text-end">₹${city.budget.footpathsCost.toFixed(1)} Cr</td>
                </tr>
                <tr>
                  <td>Ancillary Costs (20%)</td>
                  <td class="text-end">₹${city.budget.ancillaryCost.toFixed(1)} Cr</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Total Project Cost</strong></td>
                  <td class="text-end"><strong>₹${city.budget.totalCost.toFixed(1)} Cr</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      <div class="impact-summary">
        <h6>Expected Annual Impacts</h6>
        <ul class="impact-list">
          <li>Cycling Activity: ${city.annualImpact.cyclingActivity.toLocaleString()} million passenger-km</li>
          <li>Car Travel Reduction: ${city.annualImpact.carReduction.toFixed(1)} million passenger-km</li>
          <li>Motorcycle Travel Reduction: ${city.annualImpact.motorcycleReduction.toFixed(1)} million passenger-km</li>
          <li>CO₂ Emissions Reduction: ${city.annualImpact.co2Reduction.toLocaleString()} tonnes/year</li>
        </ul>

        <h6 class="mt-3">20-Year Lifecycle Benefits</h6>
        <ul class="impact-list">
          <li>Carbon Benefits: ₹${city.benefits.carbonBenefits.toFixed(1)} Cr ($${city.benefits.carbonBenefitsUSD.toFixed(1)}M)</li>
          <li>Health Benefits: ₹${city.benefits.healthBenefits.toFixed(1)} Cr ($${city.benefits.healthBenefitsUSD.toFixed(1)}M)</li>
          <li><strong>Total Benefits: ₹${city.benefits.totalBenefits.toFixed(1)} Cr ($${city.benefits.totalBenefitsUSD.toFixed(1)}M)</strong></li>
          <li><strong>Cost per Person Reached: ₹${costPerPerson.toFixed(0)}</strong></li>
        </ul>
      </div>

      ${city.sources && city.sources.length > 0 ? `
        <div class="mt-3">
          <h6 class="text-muted small">Data Sources:</h6>
          <ul class="small">
            ${city.sources.map(source =>
              `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`
            ).join('')}
          </ul>
        </div>
      ` : ''}
    </div>
  `;

  return card;
}

// ============================================================================
// TAB LISTENERS
// ============================================================================

function setupTabListeners() {
  const tabButtons = document.querySelectorAll('[data-bs-toggle="tab"]');

  tabButtons.forEach(button => {
    button.addEventListener('shown.bs.tab', function(event) {
      // Redraw charts when tabs are shown to fix canvas sizing issues
      const targetId = event.target.getAttribute('data-bs-target');

      if (targetId === '#overview') {
        // Reinitialize overview charts if needed
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      } else if (targetId === '#economic-case') {
        // Reinitialize economic charts if needed
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 100);
      }
    });
  });
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function formatCurrency(value, decimals = 1) {
  return '₹' + value.toFixed(decimals) + ' Cr';
}

function formatNumber(value) {
  return value.toLocaleString();
}

function formatPercent(value, decimals = 1) {
  return value.toFixed(decimals) + '%';
}

function formatPopulation(value) {
  return (value / 1000000).toFixed(1) + 'M';
}

// ============================================================================
// EXPORT FUNCTIONS
// ============================================================================

// Make functions available globally if needed
if (typeof window !== 'undefined') {
  window.formatCurrency = formatCurrency;
  window.formatNumber = formatNumber;
  window.formatPercent = formatPercent;
  window.formatPopulation = formatPopulation;
}

// Console log for debugging
console.log('Budget analysis JavaScript loaded successfully');
console.log('Cities:', cityBudgetData.length);
console.log('Total Investment:', aggregateStats.totalCostCrores, 'Crores');
console.log('Average BCR:', aggregateStats.averageBCR);
