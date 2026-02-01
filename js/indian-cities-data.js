/**
 * Indian Cities Data for Active Mobility Calculator
 * Sources: Census data, transport surveys, mobility plans (2024)
 * Data compiled from multiple sources for modal split estimates
 */

const indianCitiesData = [
    {
        id: 1,
        city: "Bengaluru",
        state: "Karnataka",
        population: 14000000,
        area_km2: 741,
        density: 18900,
        currentModalSplit: {
            walking: 29,
            bicycle: 3.5,
            twoWheeler: 23,
            car: 10,
            bus: 29,
            metro: 1,
            autoRickshaw: 3,
            train: 1.5
        },
        existingCyclingInfra: {
            dedicatedLanes: 20, // km (very limited)
            sharedPaths: 50,
            planned: 465 // from CMP
        },
        sources: [
            "Bengaluru Comprehensive Mobility Plan 2024",
            "DULT Karnataka transport surveys"
        ]
    },
    {
        id: 2,
        city: "Delhi",
        state: "Delhi NCR",
        population: 32940000,
        area_km2: 1484,
        density: 22200,
        currentModalSplit: {
            walking: 30,
            bicycle: 9,
            twoWheeler: 15,
            car: 8,
            bus: 20,
            metro: 11,
            autoRickshaw: 5,
            train: 2
        },
        existingCyclingInfra: {
            dedicatedLanes: 200,
            sharedPaths: 100,
            planned: 500
        },
        sources: [
            "Delhi Master Plan 2041",
            "TUMI Delhi Transport Analysis 2024"
        ]
    },
    {
        id: 3,
        city: "Mumbai",
        state: "Maharashtra",
        population: 21290000,
        area_km2: 603,
        density: 35300,
        currentModalSplit: {
            walking: 46,
            bicycle: 3,
            twoWheeler: 8,
            car: 3,
            bus: 17,
            metro: 5,
            autoRickshaw: 4,
            train: 14
        },
        existingCyclingInfra: {
            dedicatedLanes: 15,
            sharedPaths: 30,
            planned: 200
        },
        sources: [
            "Mumbai Comprehensive Mobility Plan 2016",
            "Mumbai Metro modal share data 2024"
        ]
    },
    {
        id: 4,
        city: "Pune",
        state: "Maharashtra",
        population: 7340000,
        area_km2: 450,
        density: 16300,
        currentModalSplit: {
            walking: 35,
            bicycle: 11,
            twoWheeler: 26,
            car: 8,
            bus: 15,
            metro: 0,
            autoRickshaw: 4,
            train: 1
        },
        existingCyclingInfra: {
            dedicatedLanes: 25,
            sharedPaths: 40,
            planned: 300
        },
        sources: [
            "Pune Cycle Plan",
            "EMBARQ India Pune mobility study"
        ]
    },
    {
        id: 5,
        city: "Chennai",
        state: "Tamil Nadu",
        population: 12050000,
        area_km2: 426,
        density: 28300,
        currentModalSplit: {
            walking: 25,
            bicycle: 5,
            twoWheeler: 31,
            car: 10,
            bus: 18,
            metro: 3,
            autoRickshaw: 6,
            train: 2
        },
        existingCyclingInfra: {
            dedicatedLanes: 10,
            sharedPaths: 20,
            planned: 150
        },
        sources: [
            "Chennai Second Master Plan",
            "Modal split development study 2024"
        ]
    },
    {
        id: 6,
        city: "Hyderabad",
        state: "Telangana",
        population: 11060000,
        area_km2: 650,
        density: 17000,
        currentModalSplit: {
            walking: 28,
            bicycle: 4,
            twoWheeler: 35,
            car: 13,
            bus: 12,
            metro: 3,
            autoRickshaw: 4,
            train: 1
        },
        existingCyclingInfra: {
            dedicatedLanes: 18,
            sharedPaths: 35,
            planned: 250
        },
        sources: [
            "Hyderabad transport survey 2018",
            "Question of Cities mobility analysis"
        ]
    }
];

// Regional emission factors for India (g CO2 per passenger-km)
const indiaEmissionFactors = {
    car: 100,
    bicycle: 9,
    motorcycle: 39,
    bus: 25,
    metro: 15,
    walking: 0
};

// Export for use in calculator
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { indianCitiesData, indiaEmissionFactors };
}
