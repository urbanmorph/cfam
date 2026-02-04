/**
 * National Active Mobility Bill - Budget Analysis Data
 * Created: February 4, 2026
 * Source: Indian Cities NMT Budget Analysis based on ITDP Impact Model
 */

// ============================================================================
// CITY BUDGET DATA
// ============================================================================

const cityBudgetData = [
  {
    id: 1,
    city: "Delhi NCR",
    population: 33000000,
    density: 11320,
    currentCyclingShare: 4.0,
    cycleLanes: 200,
    footpaths: 300,
    peopleReached: 13200000,
    percentReached: 40,

    // Current Modal Share
    modalShare: {
      walking: 28.0,
      bicycle: 4.0,
      transit: 23.0,
      motorcycle: 15.0,
      car: 25.0,
      taxi: 5.0
    },

    // Budget Breakdown (in Crores)
    budget: {
      cycleLanesCost: 100.0,
      footpathsCost: 90.0,
      ancillaryCost: 38.0,
      totalCost: 228.0,
      totalCostUSD: 27.5
    },

    // Annual Impacts
    annualImpact: {
      cyclingActivity: 4158, // million passenger-km
      carReduction: 99.8, // million passenger-km
      motorcycleReduction: 62.4, // million passenger-km
      co2Reduction: 16965 // tonnes per year
    },

    // 20-Year Lifecycle Benefits (in Crores)
    benefits: {
      carbonBenefits: 140.8,
      carbonBenefitsUSD: 17.0,
      healthBenefits: 26400.0,
      healthBenefitsUSD: 3180.7,
      totalBenefits: 26540.8,
      totalBenefitsUSD: 3197.7,
      bcr: 116.41
    },

    // Data Sources
    sources: [
      {
        title: "ORF - Prioritising Non-Motorised Transport",
        url: "https://www.orfonline.org/expert-speak/prioritising-non-motorised-transport-in-india"
      },
      {
        title: "Population Statistics 2025",
        url: "https://statisticstimes.com/demographics/country/india-cities-population.php"
      }
    ]
  },

  {
    id: 2,
    city: "Bangalore",
    population: 14000000,
    density: 11000,
    currentCyclingShare: 2.0,
    cycleLanes: 150,
    footpaths: 225,
    peopleReached: 4900000,
    percentReached: 35,

    modalShare: {
      walking: 15.0,
      bicycle: 2.0,
      transit: 43.0,
      motorcycle: 20.0,
      car: 15.0,
      taxi: 5.0
    },

    budget: {
      cycleLanesCost: 75.0,
      footpathsCost: 67.5,
      ancillaryCost: 28.5,
      totalCost: 171.0,
      totalCostUSD: 20.6
    },

    annualImpact: {
      cyclingActivity: 1544,
      carReduction: 37.0,
      motorcycleReduction: 23.2,
      co2Reduction: 6297
    },

    benefits: {
      carbonBenefits: 52.3,
      carbonBenefitsUSD: 6.3,
      healthBenefits: 9800.0,
      healthBenefitsUSD: 1180.7,
      totalBenefits: 9852.3,
      totalBenefitsUSD: 1187.0,
      bcr: 57.62
    },

    sources: [
      {
        title: "CEEW - Cycle-Friendly Future",
        url: "https://www.ceew.in/blogs/5-steps-to-a-cycle-friendly-future-for-india"
      },
      {
        title: "India Cycles4Change Challenge",
        url: "https://itdp.org/2024/07/02/what-we-learned-from-indias-cycles4change-and-streets4people-challenges/"
      }
    ]
  },

  {
    id: 3,
    city: "Chennai",
    population: 10000000,
    density: 26903,
    currentCyclingShare: 2.0,
    cycleLanes: 100,
    footpaths: 150,
    peopleReached: 3000000,
    percentReached: 30,
    notable: "First Indian city to adopt NMT Policy (2014), mandates 60% of transport budget for NMT",

    modalShare: {
      walking: 18.0,
      bicycle: 2.0,
      transit: 30.0,
      motorcycle: 15.0,
      car: 30.0,
      taxi: 5.0
    },

    budget: {
      cycleLanesCost: 50.0,
      footpathsCost: 45.0,
      ancillaryCost: 19.0,
      totalCost: 114.0,
      totalCostUSD: 13.7
    },

    annualImpact: {
      cyclingActivity: 945,
      carReduction: 22.7,
      motorcycleReduction: 14.2,
      co2Reduction: 3856
    },

    benefits: {
      carbonBenefits: 32.0,
      carbonBenefitsUSD: 3.9,
      healthBenefits: 6000.0,
      healthBenefitsUSD: 722.9,
      totalBenefits: 6032.0,
      totalBenefitsUSD: 726.7,
      bcr: 52.91
    },

    sources: [
      {
        title: "Chennai NMT Policy",
        url: "https://itdp.org/2014/10/27/chennai-adopts-nmt-policy-quantum-leap-towards-safer-streets/"
      },
      {
        title: "Chennai Budget for Walkable Streets",
        url: "https://itdp.in/how-chennai-and-coimbatore-city-budgets-are-championing-walkable-streets/"
      }
    ]
  },

  {
    id: 4,
    city: "Pune",
    population: 7000000,
    density: 8500,
    currentCyclingShare: 5.0,
    cycleLanes: 120,
    footpaths: 180,
    peopleReached: 2450000,
    percentReached: 35,
    notable: "Technical partnership with ITDP, 500+ km NMT-aligned streets completed",

    modalShare: {
      walking: 15.0,
      bicycle: 5.0,
      transit: 30.0,
      motorcycle: 25.0,
      car: 20.0,
      taxi: 5.0
    },

    budget: {
      cycleLanesCost: 60.0,
      footpathsCost: 54.0,
      ancillaryCost: 22.8,
      totalCost: 136.8,
      totalCostUSD: 16.5
    },

    annualImpact: {
      cyclingActivity: 772,
      carReduction: 18.5,
      motorcycleReduction: 11.6,
      co2Reduction: 3149
    },

    benefits: {
      carbonBenefits: 26.1,
      carbonBenefitsUSD: 3.1,
      healthBenefits: 4900.0,
      healthBenefitsUSD: 590.4,
      totalBenefits: 4926.1,
      totalBenefitsUSD: 593.5,
      bcr: 36.01
    },

    sources: [
      {
        title: "ITDP India",
        url: "https://itdp.in/"
      },
      {
        title: "Question of Cities - Modal Shifts",
        url: "https://questionofcities.org/how-most-indian-cities-moved-from-public-to-private-transport-modes/"
      }
    ]
  },

  {
    id: 5,
    city: "Pimpri Chinchwad",
    population: 2500000,
    density: 7500,
    currentCyclingShare: 5.0,
    cycleLanes: 773,
    footpaths: 1160,
    peopleReached: 1250000,
    percentReached: 50,
    notable: "Active ITDP Cycling Cities Campaign participant, 773 km planned for 2025",

    modalShare: {
      walking: 15.0,
      bicycle: 5.0,
      transit: 30.0,
      motorcycle: 28.0,
      car: 18.0,
      taxi: 4.0
    },

    budget: {
      cycleLanesCost: 386.5,
      footpathsCost: 347.9,
      ancillaryCost: 146.9,
      totalCost: 881.2,
      totalCostUSD: 106.2
    },

    annualImpact: {
      cyclingActivity: 394,
      carReduction: 9.5,
      motorcycleReduction: 5.9,
      co2Reduction: 1606
    },

    benefits: {
      carbonBenefits: 13.3,
      carbonBenefitsUSD: 1.6,
      healthBenefits: 2500.0,
      healthBenefitsUSD: 301.2,
      totalBenefits: 2513.3,
      totalBenefitsUSD: 302.8,
      bcr: 2.85
    },

    sources: [
      {
        title: "ITDP Cycling Cities Campaign",
        url: "https://itdp.org/2024/11/22/three-city-perspectives-on-improving-urban-cycling/"
      }
    ]
  }
];

// ============================================================================
// AGGREGATE STATISTICS
// ============================================================================

const aggregateStats = {
  totalCities: 5,
  totalPopulation: 66500000,
  totalCycleLanes: 1343,
  totalFootpaths: 2014,
  totalInfrastructure: 3357,
  totalCostCrores: 1531.0,
  totalCostUSD: 184.5,
  totalPeopleReached: 24800000,
  averageBCR: 52.76,

  // Aggregated Annual Impacts
  totalCyclingActivity: 7813, // million passenger-km
  totalCarReduction: 187.5, // million passenger-km
  totalMotorcycleReduction: 117.3, // million passenger-km
  totalCO2Reduction: 31873, // tonnes per year

  // Aggregated 20-Year Benefits (Crores)
  totalCarbonBenefits: 264.5,
  totalHealthBenefits: 49600.0,
  totalBenefits: 49864.5,

  // Cost Breakdown
  totalCycleLanesCost: 671.5,
  totalFootpathsCost: 604.4,
  totalAncillaryCost: 255.1
};

// ============================================================================
// COST ASSUMPTIONS
// ============================================================================

const costAssumptions = {
  cycleLanePerKm: 50, // lakhs
  footpathPerKm: 30, // lakhs
  ancillaryPercent: 20, // percent of infrastructure costs

  cycleLaneComponents: [
    "Physical segregation (bollards, planters, kerbs)",
    "Road surface treatment/resurfacing",
    "Lane markings and signage",
    "Drainage modifications"
  ],

  footpathComponents: [
    "Paving/repaving with accessible materials",
    "Leveling and grading",
    "Tactile paving for accessibility",
    "Minor drainage works"
  ],

  ancillaryComponents: [
    "Wayfinding signage",
    "Street furniture (benches, bicycle parking)",
    "Landscaping and greenery",
    "Traffic calming measures",
    "Public lighting improvements"
  ]
};

// ============================================================================
// BENEFITS METHODOLOGY
// ============================================================================

const benefitsMethodology = {
  carbonBenefits: {
    carEmissions: 120, // grams CO2 per passenger-km
    motorcycleEmissions: 80, // grams CO2 per passenger-km
    socialCostOfCarbon: 50, // USD per tonne
    socialCostOfCarbonINR: 4150 // INR per tonne
  },

  healthBenefits: {
    annualBenefitPerCyclist: 10000, // INR per person per year
    adoptionRate: 0.10, // 10% of people near bikeways become regular cyclists
    components: [
      "Reduced healthcare costs",
      "Increased productivity",
      "Improved mental health",
      "Reduced air pollution exposure",
      "Lower obesity and lifestyle disease rates"
    ]
  },

  modalShiftAssumptions: {
    source: "ITDP model calibration from Bogotá and Guangzhou",
    shiftFromCar: 2.4, // percent
    shiftFromMotorcycle: 1.5, // percent
    averageCyclingDistance: 315, // km per person per year (for those near bikeways)
    baseYear: 2024,
    projectionPeriod: 20 // years
  },

  excludedBenefits: [
    "Reduced traffic congestion",
    "Decreased road maintenance costs",
    "Property value increases",
    "Tourism and economic activity boost",
    "Improved air quality beyond CO2",
    "Noise reduction benefits",
    "Enhanced social equity and accessibility",
    "Reduced parking infrastructure needs"
  ]
};

// ============================================================================
// NATIONAL CONTEXT
// ============================================================================

const nationalContext = {
  metroRailInvestment: {
    since2010: 20000000, // Crores (20 trillion)
    through2026: 3000000, // Crores (3 trillion)
    totalUSD: 241000 // Million USD
  },

  nmtInvestment: {
    cities: 5,
    totalCostCrores: 1531.0,
    totalCostUSD: 184.5,
    costPerPersonReached: 617, // INR
    costPerPersonReachedUSD: 7.44,
    roi: 52.76
  },

  cycles4Change: {
    cities: 117,
    implementedCities: 48,
    streetRevamps: 1400, // km
    footpaths: 350, // km
    cycleTracks: 220, // km
    healthyStreetPolicies: 15,
    completionDate: "January 2024"
  },

  smartCitiesMission: {
    cities: 100,
    cycleTracks: 713, // km developed nationally
    smartRoads: 1740, // km
    nmtStreets: 3500, // km identified
    conclusionDate: "March 31, 2025"
  }
};

// ============================================================================
// GRANT ALLOCATION FRAMEWORK
// ============================================================================

const grantAllocationMatrix = [
  {
    category: "Mega Cities",
    populationMin: 10000000,
    populationMax: null,
    centralShare: 40,
    stateShare: 30,
    municipalShare: 30,
    examples: ["Delhi", "Mumbai", "Bangalore"]
  },
  {
    category: "Metro Cities",
    populationMin: 5000000,
    populationMax: 10000000,
    centralShare: 50,
    stateShare: 30,
    municipalShare: 20,
    examples: ["Chennai", "Pune", "Hyderabad"]
  },
  {
    category: "Tier-1 Cities",
    populationMin: 1000000,
    populationMax: 5000000,
    centralShare: 60,
    stateShare: 25,
    municipalShare: 15,
    examples: ["Pimpri Chinchwad", "Jaipur"]
  },
  {
    category: "Tier-2 Cities",
    populationMin: 500000,
    populationMax: 1000000,
    centralShare: 70,
    stateShare: 20,
    municipalShare: 10,
    examples: ["Smart Cities Mission cities"]
  }
];

// ============================================================================
// FUNDING SOURCES
// ============================================================================

const fundingSources = {
  central: [
    "Ministry of Housing and Urban Affairs",
    "Ministry of Road Transport and Highways",
    "NITI Aayog Smart Cities Mission",
    "AMRUT 2.0 Scheme",
    "Green Climate Fund"
  ],

  state: [
    "State Urban Development Funds",
    "State Finance Commission grants",
    "Road Safety Fund allocations",
    "State Climate Action Plan budgets",
    "Urban Transport Fund"
  ],

  municipal: [
    "Property tax revenues",
    "Parking fee revenues",
    "Development charges",
    "CSR partnerships",
    "Municipal bonds"
  ]
};

// ============================================================================
// IMPLEMENTATION PHASES
// ============================================================================

const implementationPhases = [
  {
    phase: "Phase 1",
    years: "1-2",
    title: "Pilot Projects",
    cities: 5,
    budgetCrores: 1531,
    budgetUSD: 184.5,
    focus: [
      "5 cities (this analysis)",
      "High-visibility corridors",
      "Monitoring & evaluation framework",
      "Stakeholder engagement"
    ]
  },
  {
    phase: "Phase 2",
    years: "3-5",
    title: "Scale-Up",
    cities: 48,
    budgetCrores: 12000,
    budgetUSD: 1445,
    focus: [
      "Expand to 48 Cycles4Change cities",
      "Network completion in pilot cities",
      "Integration with transit systems",
      "Safety enforcement programs"
    ]
  },
  {
    phase: "Phase 3",
    years: "5-10",
    title: "National Coverage",
    cities: 117,
    budgetCrores: 25000,
    budgetUSD: 3012,
    focus: [
      "All 117 challenge participant cities",
      "Maintenance programs",
      "Behavior change campaigns",
      "Achieve 20% cycling modal share target"
    ]
  }
];

// ============================================================================
// EXCHANGE RATES AND CONVERSIONS
// ============================================================================

const exchangeRates = {
  date: "February 2026",
  usdToInr: 83,
  lakh: 100000,
  crore: 10000000,
  lakhToUSD: 1205,
  croreToUSD: 120482,
  kmToMiles: 0.621
};

// ============================================================================
// EXPORT DATA
// ============================================================================

// Make data available globally
if (typeof window !== 'undefined') {
  window.cityBudgetData = cityBudgetData;
  window.aggregateStats = aggregateStats;
  window.costAssumptions = costAssumptions;
  window.benefitsMethodology = benefitsMethodology;
  window.nationalContext = nationalContext;
  window.grantAllocationMatrix = grantAllocationMatrix;
  window.fundingSources = fundingSources;
  window.implementationPhases = implementationPhases;
  window.exchangeRates = exchangeRates;
}
