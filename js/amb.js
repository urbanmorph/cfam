/**
 * National Active Mobility Bill - Interactive Data and Visualizations
 * Created: 2026
 * Description: Comprehensive JavaScript file for the Active Mobility Bill research page
 */

// ============================================================================
// SECTION 1: DATA DEFINITIONS
// ============================================================================

/**
 * International Cities Data
 * 14 cities with investment, modal share, infrastructure, policies, years, and regions
 */
const citiesData = [
    {
        id: 1,
        city: "Amsterdam",
        country: "Netherlands",
        region: "Europe",
        modalShare: 27,
        infrastructure: "35,000+ km dedicated bike paths nationwide",
        investment: "EUR 780 million (2022), EUR 1.1 billion by 2030",
        perCapitaInvestment: "EUR 24+ per person annually",
        keyPolicies: [
            "CROW Design Manual for Bicycle Traffic - nationally recognized standards",
            "Mandatory vs. Optional Cycle Paths distinction",
            "Equipment Requirements: Front/rear lights, reflective materials on pedals",
            "Cycle Streets (Fietsstraat) - 30 km/h speed limit",
            "Bicycle parking financed from car parking income"
        ],
        year: 2022,
        legislation: "CROW Fietsberaad (National Knowledge Centre for Cycling Policy, established 2001)"
    },
    {
        id: 2,
        city: "Copenhagen",
        country: "Denmark",
        region: "Europe",
        modalShare: 45,
        infrastructure: "12,000+ km national cycle routes",
        investment: "DKK 2 billion (2021-2035) through Bicycle Subsidy Scheme",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "1923 Traffic Law, revised 1932 - mandatory use of bicycle infrastructure",
            "Mandatory Infrastructure Use since 1932",
            "Front and rear lights mandatory when street lights are on",
            "Bicycle VIN Requirement since 1948",
            "National Knowledge Centre for Cycling Promotion (established 2022)"
        ],
        year: 2022,
        legislation: "Traffic Law 1923/1932, Bicycle Subsidy Scheme"
    },
    {
        id: 3,
        city: "Paris",
        country: "France",
        region: "Europe",
        modalShare: "N/A",
        infrastructure: "Cycle paths established during roadworks in urban areas",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Mobility Orientation Law (LOM) 2019",
            "Triple bicycle use by 2024 target",
            "Mandatory bicycle marking against theft",
            "Mandatory cycling courses at primary school (savoir rouler)",
            "Workplace Mobility Package: EUR 400/year tax-free for cycling commutes",
            "Cyclist must yield to pedestrians at crosswalks",
            "20 km/h speed limit in pedestrian-priority zones"
        ],
        year: 2019,
        legislation: "Loi d'Orientation des Mobilités (LOM) 2019"
    },
    {
        id: 4,
        city: "Barcelona",
        country: "Spain",
        region: "Europe",
        modalShare: "10% increase in pedestrian trips, 30% increase in cycling",
        infrastructure: "503 Superblocks planned; 120 intersections identified",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "2013-2018 Urban Mobility Plan of Barcelona",
            "10 km/h speed limit inside superblocks",
            "Pedestrians and cyclists legally prioritized over motor vehicles",
            "Through-traffic banned from interior streets",
            "21% reduction in car travel targeted",
            "Cars without DGT environmental label banned from certain areas (since 2020)"
        ],
        year: 2013,
        legislation: "Urban Mobility Plan of Barcelona 2013-2018"
    },
    {
        id: 5,
        city: "Singapore",
        country: "Singapore",
        region: "Asia",
        modalShare: "N/A",
        infrastructure: "1,000 km cycling paths by 2025 target (440 km as of 2024)",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Active Mobility Act 2017",
            "Device Classification: bicycles, PABs, PMDs, PMAs with different rules",
            "Mandatory Theory Test from January 2022",
            "25 km/h speed limit on shared paths, 10 km/h in Silver Zones",
            "Path Hierarchy from July 2025: dedicated cycling paths for bicycles only",
            "Retailer obligations for compliance"
        ],
        year: 2017,
        legislation: "Active Mobility Act 2017"
    },
    {
        id: 6,
        city: "Tokyo",
        country: "Japan",
        region: "Asia",
        modalShare: "N/A",
        infrastructure: "National bicycle promotion plan with bike paths and parking",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Act on Promotion of Use of Bicycles",
            "Act on Development of Bicycle Paths (1970)",
            "All bicycles must be registered (Tokyo fee: JPY 660)",
            "New 2026 Enforcement 'Blue Ticket' System: fines JPY 3,000-12,000",
            "113 different infractions with immediate fines",
            "Sidewalk use exceptions: riders under 13, over 70, or with disability"
        ],
        year: 2026,
        legislation: "Act on Promotion of Use of Bicycles, Blue Ticket System (2026)"
    },
    {
        id: 7,
        city: "Seoul",
        country: "South Korea",
        region: "Asia",
        modalShare: "N/A",
        infrastructure: "Four types of bicycle roads across the city",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "National Bike Path Master Plan (2009)",
            "Road Traffic Act: bicycles classified as vehicles",
            "Four Types of Bicycle Roads: only, shared, lanes, priority",
            "At crosswalks without bicycle crossing: must dismount and walk",
            "Only pedal-assist e-bikes allowed on bicycle infrastructure",
            "National bicycle certification 'stamp tour' with Bike Passport"
        ],
        year: 2009,
        legislation: "National Bike Path Master Plan 2009, Road Traffic Act"
    },
    {
        id: 8,
        city: "Portland",
        country: "USA",
        region: "North America",
        modalShare: 6,
        infrastructure: "Extensive network with motor-vehicle-free bridges",
        investment: "$613 million over 20 years (2010 plan), $55 million (2024-2027 STIP)",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Oregon 'Bike Bill' (ORS 366.514) - 1971",
            "Facilities for walking/biking must be provided with all road construction",
            "25% modal share target by 2030",
            "White front light visible from 500 feet, red rear light from 600 feet",
            "Mandatory helmets for persons under 16 years",
            "Platinum 'bicycle-friendly city' status"
        ],
        year: 1971,
        legislation: "Oregon Bike Bill (ORS 366.514) 1971"
    },
    {
        id: 9,
        city: "New York City",
        country: "USA",
        region: "North America",
        modalShare: "N/A",
        infrastructure: "1,525 miles bike lanes including 644 protected lanes/paths (2022)",
        investment: "N/A",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "NY Vehicle and Traffic Law (VTL); Rules of the City of New York (RCNY)",
            "Bicyclists granted all rights and duties of motor vehicle drivers",
            "Motor vehicles banned from bicycle lanes",
            "Illegal to open vehicle door endangering cyclists ('dooring' law)",
            "Exercise due care to avoid colliding with bicyclist - $100-250 penalty",
            "610,000+ daily cycling trips"
        ],
        year: 2022,
        legislation: "NY Vehicle and Traffic Law, RCNY bicycle regulations"
    },
    {
        id: 10,
        city: "Vancouver",
        country: "Canada",
        region: "North America",
        modalShare: "Two-thirds of trips target by active transport/transit by 2030",
        infrastructure: "Expanding pathway and bike lane networks",
        investment: "$130 million across 400+ projects since 2017, $100 million over 3 years (Budget 2023)",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "B.C. Active Transportation Infrastructure Grants Program",
            "Active Mobility Plan 2023-2027",
            "Government funds 50-80% of project costs",
            "Maximum $500,000 per project",
            "Indigenous communities: 80% funding",
            "$10.9 million federal investment for Vancouver Island"
        ],
        year: 2023,
        legislation: "B.C. Active Transportation Infrastructure Grants Program, Active Mobility Plan 2023-2027"
    },
    {
        id: 11,
        city: "Bogota",
        country: "Colombia",
        region: "Latin America",
        modalShare: 8,
        infrastructure: "600 km ciclorrutas (permanent bike lanes)",
        investment: "World Bank supported Sustainable Mobility Plan (2009)",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Law 1811 - cyclist priority, 1.5m passing distance",
            "Law 1753 of 2015 (National Development Plan)",
            "Ciclovía Program since 1976: 120 km car-free streets every Sunday",
            "25 km/h maximum on bike lanes, 35 kg maximum vehicle weight",
            "2,550% increase in cycling trips (2009-2021)",
            "Modal share: 0.4% (2009) to 10.2% (2021)"
        ],
        year: 2015,
        legislation: "Law 1811 (cyclist priority), Law 1753 of 2015, Ciclovía Program"
    },
    {
        id: 12,
        city: "Buenos Aires",
        country: "Argentina",
        region: "Latin America",
        modalShare: "2,550% increase in bike trips (2009-2021)",
        infrastructure: "286 km bicycle lane network",
        investment: "World Bank supported Sustainable Mobility Plan",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "Sustainable Mobility Plan (2009); 'More Bikes, Less Emissions'",
            "Sustainable Mobility Law with four pillars",
            "Fund for the Development of Sustainable Mobility",
            "277 km bike lanes built across all communes (12 years)",
            "EcoBici public bike sharing system since 2010",
            "Carbon neutral city by 2050 target"
        ],
        year: 2009,
        legislation: "Sustainable Mobility Law, Sustainable Mobility Plan 2009"
    },
    {
        id: 13,
        city: "Amsterdam (Municipal)",
        country: "Netherlands",
        region: "Europe",
        modalShare: 27,
        infrastructure: "35,000+ km dedicated bike paths nationwide",
        investment: "EUR 120 million municipal investment (2020)",
        perCapitaInvestment: "EUR 24+ per person annually",
        keyPolicies: [
            "Municipal investment supplementing national policy",
            "Fines: EUR 75 for no lights, EUR 120 for red light violation",
            "Integration with national CROW standards",
            "Cycle parking facilities funded from car parking income"
        ],
        year: 2020,
        legislation: "Municipal cycling policy aligned with national framework"
    },
    {
        id: 14,
        city: "Copenhagen (Municipal)",
        country: "Denmark",
        region: "Europe",
        modalShare: 45,
        infrastructure: "Integrated bicycle planning in urban development",
        investment: "Part of DKK 2 billion national scheme",
        perCapitaInvestment: "N/A",
        keyPolicies: [
            "45%+ modal share for work/study trips",
            "Specific modal share targets: 40% by 2012 (achieved 45% by 2014)",
            "Fine: DKK 500 per missing light",
            "Lights must be visible from 300 meters",
            "Integration with national cycle route network"
        ],
        year: 2014,
        legislation: "Municipal cycling policy achieving national targets"
    }
];

/**
 * Key Definitions from the Bill
 */
const keyDefinitions = {
    activeMobility: "Non-motorized transportation modes including walking and cycling that rely on human power for movement.",
    pedestrian: "Any person traveling on foot, including persons using wheelchairs, mobility aids, or pushing strollers.",
    cyclist: "Any person operating a bicycle or similar human-powered wheeled vehicle on public roads or designated paths.",
    cycleTrack: "A dedicated path or lane specifically designed and designated for bicycle use, either segregated or marked on roadways.",
    footpath: "A paved or unpaved path designed and designated primarily for pedestrian use, separate from vehicular traffic.",
    sharedPath: "A path designed for use by both pedestrians and cyclists, with appropriate width and markings for safe shared use.",
    protectedLane: "A bicycle lane physically separated from motor vehicle traffic by barriers, curbs, or other protective infrastructure.",
    modalShare: "The percentage of total trips made using a particular mode of transportation (e.g., walking, cycling, driving).",
    sustainableMobility: "Transportation systems that minimize environmental impact, promote public health, and ensure equitable access.",
    activeTransportation: "Synonymous with active mobility; transportation that involves physical activity such as walking and cycling."
};

/**
 * Infrastructure Types and Specifications
 */
const infrastructureTypes = [
    {
        type: "Footpath",
        description: "Paved pedestrian walkway",
        minimumWidth: {
            arterialRoads: "2.5 meters",
            collectorRoads: "2.0 meters",
            localRoads: "1.8 meters"
        },
        features: [
            "Must be continuous and unobstructed",
            "Tactile paving at crossings for visually impaired",
            "Adequate drainage",
            "Smooth, slip-resistant surface",
            "Clear of utilities and street furniture"
        ]
    },
    {
        type: "Cycle Track (One-way)",
        description: "Dedicated one-directional bicycle path",
        minimumWidth: {
            arterialRoads: "2.0 meters",
            collectorRoads: "1.8 meters",
            localRoads: "Shared path (3.0 meters minimum)"
        },
        features: [
            "Physical separation from motor traffic preferred",
            "Clear lane markings and signage",
            "Smooth pavement surface",
            "Protection at intersections",
            "Integration with public transport stops"
        ]
    },
    {
        type: "Cycle Track (Two-way)",
        description: "Dedicated bidirectional bicycle path",
        minimumWidth: {
            arterialRoads: "3.0 meters",
            collectorRoads: "2.5 meters",
            localRoads: "Shared path (3.0 meters minimum)"
        },
        features: [
            "Centerline marking for direction separation",
            "Wider at curves and intersections",
            "Physical separation from motor traffic",
            "Clear sight lines at crossings",
            "Adequate lighting for night use"
        ]
    },
    {
        type: "Shared Path",
        description: "Path for both pedestrians and cyclists",
        minimumWidth: {
            allRoadTypes: "3.0 meters minimum"
        },
        features: [
            "Clear markings to delineate pedestrian and cycling zones",
            "Adequate width to prevent conflicts",
            "Speed limit signage (typically 15-20 km/h for cyclists)",
            "Priority given to pedestrians",
            "Regular maintenance"
        ]
    },
    {
        type: "Protected Bike Lane",
        description: "On-road bike lane with physical protection",
        minimumWidth: {
            standard: "1.5-2.0 meters"
        },
        features: [
            "Physical barriers (bollards, planters, curbs)",
            "Protected intersections",
            "Clear color differentiation (typically green or red)",
            "Connection to bike network",
            "Protection from parked cars (no 'door zone')"
        ]
    },
    {
        type: "Bicycle Boulevard/Priority Street",
        description: "Low-traffic street prioritizing bicycles",
        minimumWidth: {
            standard: "Street width with traffic calming"
        },
        features: [
            "Traffic calming measures (speed bumps, chicanes)",
            "20-30 km/h speed limit",
            "Through-traffic restrictions for motor vehicles",
            "Bicycle priority signage",
            "Intersection treatments favoring cyclists"
        ]
    },
    {
        type: "Pedestrian Priority Zone/Superblock",
        description: "Area where pedestrians have absolute priority",
        minimumWidth: {
            standard: "Varies by zone design"
        },
        features: [
            "10 km/h maximum speed limit",
            "Through-traffic banned",
            "Shared space design",
            "Ample seating and green space",
            "Single-point vehicle access"
        ]
    },
    {
        type: "Safe Crossing Facilities",
        description: "Infrastructure enabling safe street crossings",
        types: [
            "Zebra crossings with raised platforms",
            "Signalized pedestrian crossings",
            "Bicycle-specific crossings with bike symbols",
            "Refuge islands on wide roads",
            "Scramble crossings at major intersections"
        ],
        features: [
            "High-visibility markings",
            "Adequate lighting",
            "Countdown timers at signals",
            "Curb ramps for wheelchair access",
            "Audible signals for visually impaired"
        ]
    }
];

/**
 * Rights and Responsibilities
 */
const rightsResponsibilities = {
    pedestrianRights: [
        "Right to safe passage on all public streets and spaces",
        "Highest priority in the road user hierarchy",
        "Right to unobstructed footpaths free from vehicles and encroachments",
        "Right to safe crossing facilities at regular intervals",
        "Right to accessible infrastructure (ramps, tactile paving, audible signals)",
        "Right to adequate street lighting for night-time safety",
        "Right to file grievances against infrastructure violations"
    ],
    cyclistRights: [
        "Right to safe passage on roads and dedicated cycling infrastructure",
        "Right to minimum 1.5 meters passing distance from motor vehicles",
        "Right to use full lane where no bicycle infrastructure exists",
        "Right to protected bicycle lanes free from motor vehicle encroachment",
        "Right to secure bicycle parking facilities",
        "Right to priority over motor vehicles in designated areas",
        "Right to integration with public transport systems"
    ],
    motoristResponsibilities: [
        "Maintain minimum 1.5 meters distance when passing cyclists",
        "Yield to pedestrians at all crossings (marked and unmarked)",
        "Exercise due care to avoid colliding with pedestrians and cyclists",
        "Prohibited from driving, parking, or stopping on footpaths and cycle tracks",
        "Observe speed limits in school zones (30 km/h), hospital zones (30 km/h), and pedestrian priority zones (10 km/h)",
        "Check for cyclists before opening vehicle doors",
        "Sound horn only when necessary, avoid excessive honking near schools/hospitals"
    ],
    pedestrianResponsibilities: [
        "Use footpaths where available",
        "Cross at designated crossings where available",
        "Observe traffic signals at signalized crossings",
        "Avoid obstructing cycle tracks or roadways",
        "Exercise caution when crossing streets"
    ],
    cyclistResponsibilities: [
        "Use cycle tracks where available and safe",
        "Yield to pedestrians on shared paths",
        "Observe speed limits (25 km/h shared paths, 10 km/h pedestrian zones)",
        "Use required safety equipment (lights after dark, reflectors)",
        "Ride in designated direction on one-way cycle tracks",
        "Signal turns and stops where safe to do so",
        "Avoid riding on footpaths unless designated as shared path"
    ],
    employerObligations: [
        "Provide secure cycle parking for establishments with 100+ employees",
        "Provide changing rooms and shower facilities for cyclist employees",
        "Prepare Sustainable Mobility Plan",
        "Consider incentives for employees who walk or cycle to work",
        "May provide tax-exempt mobility allowance up to Rs. 3,000/month for sustainable commuters"
    ],
    governmentObligations: [
        "Allocate minimum 10% of urban transport budgets to active mobility",
        "Provide active mobility infrastructure with all new road construction",
        "Maintain national design standards and guidelines",
        "Establish National Active Mobility Fund",
        "Conduct regular audits of infrastructure compliance",
        "Ensure enforcement of penalties for violations",
        "Provide education and awareness programs"
    ]
};

/**
 * Scenario-Based Information
 * Real-world scenarios with legal implications
 */
const scenarios = [
    {
        id: "scenario1",
        category: "Pedestrian Safety",
        title: "Obstructed Footpath",
        description: "A shopkeeper has placed merchandise on the footpath, forcing pedestrians to walk on the road.",
        legalProvision: "Prohibition on Obstruction - No permanent or temporary structure shall be erected on footpaths. No construction materials, debris, or goods shall be stored on pedestrian infrastructure.",
        applicablePenalty: "Rs. 10,000 (first offense), Rs. 25,000 (repeat offense)",
        solution: "File complaint with Urban Local Body; enforcement officers must remove obstruction and issue penalty. Pedestrians have enforceable right to unobstructed footpaths.",
        internationalExample: "NYC RCNY § 4-08(e)(9) - similar prohibition with penalties"
    },
    {
        id: "scenario2",
        category: "Cyclist Safety",
        title: "Close Pass by Motor Vehicle",
        description: "A car overtakes a cyclist with less than 1 meter of clearance, causing the cyclist to swerve.",
        legalProvision: "Minimum Passing Distance - The driver of a motor vehicle must maintain a minimum lateral distance of 1.5 meters when overtaking or passing a cyclist.",
        applicablePenalty: "Rs. 2,000 (first offense), Rs. 5,000 (repeat offense)",
        solution: "Report to traffic police with evidence (video/witness). Driver must maintain 1.5m distance. If injury caused, penalty increases to Rs. 25,000.",
        internationalExample: "Colombia Law 1811 mandates 1.5 meters passing distance"
    },
    {
        id: "scenario3",
        category: "Infrastructure Violation",
        title: "Car Parked in Cycle Track",
        description: "Multiple vehicles are regularly parked in a protected cycle track, blocking cyclist access.",
        legalProvision: "No motor vehicle shall be parked on cycle tracks or shared paths.",
        applicablePenalty: "Rs. 2,000 (first offense), Rs. 5,000 (repeat offense)",
        solution: "Install camera-based enforcement systems. Urban Local Bodies may tow vehicles and issue automated penalties. Evidence from enforcement cameras is admissible.",
        internationalExample: "NYC ban on parking in bike lanes; Singapore Active Mobility Act enforcement"
    },
    {
        id: "scenario4",
        category: "Road Design",
        title: "New Road Without Footpath",
        description: "A new road is being constructed without any provision for pedestrian footpaths or cycle tracks.",
        legalProvision: "Infrastructure with All New Roads - Facilities for pedestrians and cyclists shall mandatorily be provided wherever a road is constructed, reconstructed, or significantly modified. No road project shall receive approval without incorporating footpaths and cycle tracks.",
        applicablePenalty: "Project approval must be withheld; responsible officials may face administrative action",
        solution: "File complaint citing mandatory infrastructure provision. Project cannot proceed without active mobility infrastructure. Community can seek judicial intervention.",
        internationalExample: "Oregon Bike Bill (1971) - pioneering mandate for walking/biking facilities with all roads"
    },
    {
        id: "scenario5",
        category: "Speed Management",
        title: "Speeding in School Zone",
        description: "Vehicles regularly exceed 50 km/h in a street adjacent to a school during peak hours.",
        legalProvision: "Speed Limits in Sensitive Zones - Maximum speed limit shall be 30 km/h within 200 meters of schools.",
        applicablePenalty: "Motor Vehicles Act penalties apply; enhanced enforcement required",
        solution: "Install speed monitoring cameras, deploy traffic calming infrastructure (speed bumps, raised crossings), increase signage, conduct enforcement drives.",
        internationalExample: "Barcelona Superblocks (10 km/h), Singapore Silver Zones, France pedestrian-priority zones (20 km/h)"
    },
    {
        id: "scenario6",
        category: "Pedestrian Priority",
        title: "Driver Fails to Yield at Crossing",
        description: "A driver fails to stop at a zebra crossing where pedestrians are waiting to cross.",
        legalProvision: "Failure to yield to pedestrian at crossing is a traffic violation. Drivers must exercise due care to avoid colliding with pedestrians.",
        applicablePenalty: "Rs. 2,000 (first offense), Rs. 5,000 (repeat offense); Rs. 25,000 if causing injury",
        solution: "Report to traffic police. Install cameras at major crossings. Conduct driver education programs. NYC model: civil penalty up to $250 if causing physical injury.",
        internationalExample: "NY VTL § 1146 - due care requirement with $100-250 penalties"
    },
    {
        id: "scenario7",
        category: "Workplace Mobility",
        title: "Lack of Bicycle Facilities at Office",
        description: "An office with 500 employees has no secure bicycle parking or changing facilities.",
        legalProvision: "Workplace Mobility Plans - Every establishment employing more than 100 persons shall provide secure cycle parking facilities and changing rooms with shower facilities for cyclists.",
        applicablePenalty: "Administrative penalties; establishment may be required to comply within specified timeframe",
        solution: "Employees can demand compliance citing employer obligations. Establishments may provide tax-exempt mobility allowance up to Rs. 3,000/month for sustainable commuters.",
        internationalExample: "France LOM - EUR 400/year tax-free for cycling commutes; companies with 50+ employees must include sustainable mobility in negotiations"
    },
    {
        id: "scenario8",
        category: "E-Mobility Regulation",
        title: "E-Scooter on Pedestrian Path",
        description: "Motorized e-scooters are being used at high speeds on pedestrian-only paths.",
        legalProvision: "Device Classification and Speed Limits - Motorized Personal Mobility Devices must use cycle paths, not pedestrian paths. Speed limits: 25 km/h on shared paths, 10 km/h in pedestrian-priority zones.",
        applicablePenalty: "Device-specific penalties; may require theory test certification for riders",
        solution: "Enforce device classification rules. Require mandatory theory test (Singapore model). Designate appropriate infrastructure for different device types.",
        internationalExample: "Singapore Active Mobility Act 2017 - comprehensive device classification with theory test requirement from 2022"
    },
    {
        id: "scenario9",
        category: "Budget Allocation",
        title: "Insufficient Active Mobility Funding",
        description: "City's annual budget allocates only 2% for walking and cycling infrastructure despite high demand.",
        legalProvision: "Dedicated Funding - Not less than 10% of all urban transport budgets at Central, State, and Municipal levels shall be allocated to active mobility infrastructure.",
        applicablePenalty: "Budget must be revised to comply; citizens can seek judicial review of budget allocation",
        solution: "Advocate for budget compliance. Establish National Active Mobility Fund with multiple funding sources (government allocation, fuel cess, parking fees, climate finance).",
        internationalExample: "Netherlands EUR 1.1B by 2030; Vancouver $130M across 400+ projects; France comprehensive LOM funding"
    },
    {
        id: "scenario10",
        category: "Public Awareness",
        title: "Driver Ignorance of Cyclist Rights",
        description: "Drivers routinely violate cyclist rights due to lack of awareness and education.",
        legalProvision: "Active Mobility in Driver Training - Every applicant for a motor vehicle driving license shall demonstrate knowledge of rights of pedestrians and cyclists, safe passing distances, priority rules, and penalties.",
        applicablePenalty: "Driving license cannot be issued without passing active mobility knowledge test",
        solution: "Update driver licensing curriculum. Include Code of Conduct for road users in driving tests. Conduct public awareness campaigns.",
        internationalExample: "France LOM mandatory cycling courses in schools (savoir rouler); Singapore mandatory theory test for active mobility users"
    },
    {
        id: "scenario11",
        category: "Innovative Programs",
        title: "Implementing Car-Free Streets",
        description: "City wants to implement weekly car-free streets to promote active mobility.",
        legalProvision: "Weekly Car-Free Streets - Cities with population exceeding 10 lakh shall designate at least one weekly period (minimum 4 hours) during which specified streets are closed to motor vehicles.",
        applicablePenalty: "N/A - this is an opportunity, not a violation",
        solution: "Implement Ciclovía program (Bogota model). Cities with 50 lakh+ population should maintain 50 km of car-free streets. Schedule weekly closures (e.g., Sunday mornings 7am-2pm).",
        internationalExample: "Bogota Ciclovía - 120 km car-free every Sunday since 1976, serving ~2 million users weekly (20% of population)"
    },
    {
        id: "scenario12",
        category: "Enforcement Technology",
        title: "Persistent Cycle Lane Violations",
        description: "Despite penalties, motor vehicles continue to park illegally in protected bicycle lanes.",
        legalProvision: "Enforcement Technology - Urban Local Bodies may install camera-based enforcement systems at protected cycle lanes, pedestrian crossings, and school/hospital zones. Evidence from such systems shall be admissible for issuing automated penalties.",
        applicablePenalty: "Automated penalty system with Rs. 2,000-5,000 fines",
        solution: "Install automated camera enforcement (NYC Senate Bill S3304 model). Issue penalties via camera evidence. Display real-time violation data publicly.",
        internationalExample: "NYC proposed Bicycle Lane Safety Program - cameras at up to 50 protected lanes with $50 penalty for violations"
    }
];

/**
 * Penalty Schedule
 */
const penaltySchedule = [
    { offense: "Driving on footpath/cycle track", firstOffense: "Rs. 5,000", repeatOffense: "Rs. 10,000" },
    { offense: "Parking on footpath/cycle track", firstOffense: "Rs. 2,000", repeatOffense: "Rs. 5,000" },
    { offense: "Failure to yield to pedestrian at crossing", firstOffense: "Rs. 2,000", repeatOffense: "Rs. 5,000" },
    { offense: "Violation of minimum passing distance", firstOffense: "Rs. 2,000", repeatOffense: "Rs. 5,000" },
    { offense: "Obstruction of pedestrian/cycling infrastructure", firstOffense: "Rs. 10,000", repeatOffense: "Rs. 25,000" },
    { offense: "Causing injury to pedestrian/cyclist due to negligence", firstOffense: "Rs. 25,000", repeatOffense: "Rs. 50,000" }
];

// ============================================================================
// SECTION 2: UTILITY FUNCTIONS
// ============================================================================

/**
 * Format currency based on type
 */
function formatCurrency(value, type) {
    if (!value || value === "N/A") return "N/A";
    return value;
}

/**
 * Get color by region
 */
function getRegionColor(region) {
    const colors = {
        "Europe": "#3498db",
        "Asia": "#e74c3c",
        "North America": "#2ecc71",
        "Latin America": "#f39c12"
    };
    return colors[region] || "#95a5a6";
}

/**
 * Format modal share for display
 */
function formatModalShare(modalShare) {
    if (typeof modalShare === 'number') {
        return modalShare + '%';
    }
    return modalShare;
}

// ============================================================================
// SECTION 3: INITIALIZATION FUNCTIONS
// ============================================================================

/**
 * Initialize Comparison DataTable
 * Creates an interactive, sortable, searchable table of all cities
 */
function initializeCitiesTable() {
    try {
        const tableContainer = document.getElementById('citiesTable');
        if (!tableContainer) {
            console.warn('Cities table container not found');
            return;
        }

        // Check if DataTable is available
        if (typeof $.fn.DataTable === 'undefined') {
            console.error('DataTables library not loaded');
            return;
        }

        // Build table HTML
        let tableHTML = `
            <table id="citiesComparisonTable" class="table table-striped table-hover" style="width:100%">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Country</th>
                        <th>Region</th>
                        <th>Modal Share</th>
                        <th>Infrastructure</th>
                        <th>Investment</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        citiesData.forEach(city => {
            tableHTML += `
                <tr>
                    <td><strong>${city.city}</strong></td>
                    <td>${city.country}</td>
                    <td><span class="badge" style="background-color: ${getRegionColor(city.region)}">${city.region}</span></td>
                    <td>${formatModalShare(city.modalShare)}</td>
                    <td>${city.infrastructure.substring(0, 50)}...</td>
                    <td>${formatCurrency(city.investment)}</td>
                    <td>${city.year}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="showCityDetails(${city.id})">Details</button></td>
                </tr>
            `;
        });

        tableHTML += `
                </tbody>
            </table>
        `;

        tableContainer.innerHTML = tableHTML;

        // Initialize DataTable
        $('#citiesComparisonTable').DataTable({
            pageLength: 10,
            order: [[6, 'desc']], // Sort by year descending
            responsive: true,
            language: {
                search: "Search cities:",
                lengthMenu: "Show _MENU_ cities per page"
            }
        });

        console.log('Cities comparison table initialized successfully');
    } catch (error) {
        console.error('Error initializing cities table:', error);
    }
}

/**
 * Show detailed city information in a modal or dedicated section
 */
function showCityDetails(cityId) {
    const city = citiesData.find(c => c.id === cityId);
    if (!city) return;

    const modalHTML = `
        <div class="modal fade" id="cityModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${city.city}, ${city.country}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6>Overview</h6>
                                <p><strong>Region:</strong> ${city.region}</p>
                                <p><strong>Modal Share:</strong> ${formatModalShare(city.modalShare)}</p>
                                <p><strong>Year:</strong> ${city.year}</p>
                                <p><strong>Legislation:</strong> ${city.legislation}</p>
                            </div>
                            <div class="col-md-6">
                                <h6>Investment</h6>
                                <p><strong>Total:</strong> ${city.investment}</p>
                                <p><strong>Per Capita:</strong> ${city.perCapitaInvestment}</p>
                            </div>
                        </div>
                        <hr>
                        <h6>Infrastructure</h6>
                        <p>${city.infrastructure}</p>
                        <hr>
                        <h6>Key Policies</h6>
                        <ul>
                            ${city.keyPolicies.map(policy => `<li>${policy}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById('cityModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal using Bootstrap 5 API
    const modalElement = document.getElementById('cityModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// ============================================================================
// SECTION 4: CHART.JS VISUALIZATIONS
// ============================================================================

/**
 * Create Modal Share Comparison Chart
 */
/**
 * Parse investment amount from text to USD millions
 */
function parseInvestment(investmentText) {
    if (!investmentText || investmentText === 'N/A' || investmentText.toLowerCase().includes('world bank')) return null;

    const text = investmentText.toLowerCase();
    let maxAmount = 0;

    // Find all number + unit combinations
    const billionMatches = text.matchAll(/([\d.,]+)\s*(?:billion|b(?:\s|$))/gi);
    const millionMatches = text.matchAll(/([\d.,]+)\s*million/gi);

    // Process billions
    for (const match of billionMatches) {
        const num = parseFloat(match[1].replace(',', ''));
        let amount = 0;

        // Look backwards for currency
        const beforeNum = text.substring(0, match.index);
        if (beforeNum.includes('eur')) {
            amount = num * 1100; // EUR billion to USD million
        } else if (beforeNum.includes('dkk')) {
            amount = num * 145; // DKK billion to USD million
        } else {
            amount = num * 1000; // USD billion to million
        }

        if (amount > maxAmount) maxAmount = amount;
    }

    // Process millions
    for (const match of millionMatches) {
        const num = parseFloat(match[1].replace(',', ''));
        let amount = 0;

        const beforeNum = text.substring(0, match.index);
        if (beforeNum.includes('eur')) {
            amount = num * 1.1; // EUR million to USD million
        } else {
            amount = num; // USD million
        }

        if (amount > maxAmount) maxAmount = amount;
    }

    return maxAmount > 0 ? maxAmount : null;
}

/**
 * Parse infrastructure km from text
 */
function parseInfrastructure(infraText) {
    if (!infraText) return null;

    const text = infraText.toLowerCase();
    const numMatch = text.match(/([\d,]+)\+?\s*km/);

    if (numMatch) {
        return parseFloat(numMatch[1].replace(',', ''));
    }

    return null;
}

/**
 * Create Investment Comparison Chart
 * Shows cities with significant investment programs - grouped bar chart by category
 */
function createInvestmentChart() {
    try {
        const canvas = document.getElementById('investmentChart');
        if (!canvas) {
            console.warn('Investment chart canvas not found');
            return;
        }

        const ctx = canvas.getContext('2d');

        // Collect cities with investment data
        const citiesWithInvestment = [];

        citiesData.forEach(city => {
            const investment = parseInvestment(city.investment);
            console.log(`${city.city}: ${city.investment} => ${investment} USD millions`);
            if (investment && investment > 0) {
                const hasLegislation = city.legislation &&
                                      city.legislation !== 'N/A' &&
                                      (city.legislation.toLowerCase().includes('act') ||
                                       city.legislation.toLowerCase().includes('law') ||
                                       city.legislation.toLowerCase().includes('loi'));

                citiesWithInvestment.push({
                    city: city.city,
                    country: city.country,
                    region: city.region,
                    investment: investment,
                    investmentText: city.investment,
                    modalShare: city.modalShare || 0,
                    infrastructure: parseInfrastructure(city.infrastructure) || 0,
                    hasLegislation: hasLegislation,
                    legislation: city.legislation
                });
            }
        });

        console.log(`Total cities with investment: ${citiesWithInvestment.length}`);

        // Sort by modal share (descending) to show impact correlation
        citiesWithInvestment.sort((a, b) => b.modalShare - a.modalShare);

        // Prepare chart data - add ⚖️ symbol for cities with legislation
        const labels = citiesWithInvestment.map(c => c.hasLegislation ? `${c.city} ⚖️` : c.city);
        const investments = citiesWithInvestment.map(c => c.investment);
        const modalShares = citiesWithInvestment.map(c => c.modalShare);
        const colors = citiesWithInvestment.map(c => getRegionColor(c.region));

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Investment (USD Millions)',
                        data: investments,
                        backgroundColor: colors.map(c => c + '80'), // Add transparency
                        borderColor: colors,
                        borderWidth: 2,
                        yAxisID: 'y',
                        order: 2
                    },
                    {
                        label: 'Modal Share (%)',
                        data: modalShares,
                        type: 'line',
                        borderColor: '#d24d65',
                        backgroundColor: '#d24d65',
                        borderWidth: 3,
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBackgroundColor: '#d24d65',
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        yAxisID: 'y1',
                        order: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                const index = context[0].dataIndex;
                                const city = citiesWithInvestment[index];
                                return city.city + ', ' + city.country;
                            },
                            label: function(context) {
                                const index = context.dataIndex;
                                const city = citiesWithInvestment[index];
                                const datasetLabel = context.dataset.label;

                                if (datasetLabel.includes('Investment')) {
                                    return 'Investment: ' + city.investmentText;
                                } else if (datasetLabel.includes('Modal Share')) {
                                    return 'Modal Share: ' + city.modalShare + '%';
                                }
                                return '';
                            },
                            afterBody: function(context) {
                                const index = context[0].dataIndex;
                                const city = citiesWithInvestment[index];
                                const lines = [];

                                lines.push(''); // Empty line for spacing

                                if (city.infrastructure > 0) {
                                    lines.push('📏 Infrastructure: ' + city.infrastructure.toLocaleString() + ' km');
                                }

                                lines.push(''); // Empty line for spacing

                                if (city.hasLegislation) {
                                    lines.push('⚖️ FORMAL LEGISLATION');
                                    lines.push('└─ ' + city.legislation);
                                } else {
                                    lines.push('📋 Policy/Program Based');
                                    lines.push('└─ No formal legislation');
                                }

                                return lines;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 11
                            }
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Investment (USD Millions)',
                            font: {
                                size: 13,
                                weight: 'bold'
                            }
                        },
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000) {
                                    return '$' + (value / 1000).toFixed(1) + 'B';
                                }
                                return '$' + value + 'M';
                            }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Modal Share (%)',
                            font: {
                                size: 13,
                                weight: 'bold'
                            }
                        },
                        beginAtZero: true,
                        max: 50,
                        grid: {
                            drawOnChartArea: false, // Don't draw grid lines for this axis
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    }
                }
            }
        });

        console.log('Investment comparison chart created successfully');
    } catch (error) {
        console.error('Error creating investment chart:', error);
    }
}

// ============================================================================
// SECTION 5: SCENARIO SELECTOR TOOL
// ============================================================================

/**
 * Initialize Scenario Selector
 */
function initializeScenarioSelector() {
    try {
        // Add click event listeners to filter buttons
        const filterButtons = document.querySelectorAll('.scenario-filter');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                // Get category and display scenarios
                const category = this.getAttribute('data-category');
                displayScenarios(category);
            });
        });

        // Display all scenarios initially
        displayScenarios('all');

        // Set first button as active
        if (filterButtons.length > 0) {
            filterButtons[0].classList.add('active');
        }

        console.log('Scenario selector initialized successfully');
    } catch (error) {
        console.error('Error initializing scenario selector:', error);
    }
}

/**
 * Filter scenarios by category (deprecated - using button clicks now)
 */
function filterScenarios(category) {
    displayScenarios(category || 'all');
}

/**
 * Display scenarios based on filter
 */
function displayScenarios(category) {
    const container = document.getElementById('scenarioResults');
    if (!container) {
        console.warn('Scenario results container not found');
        return;
    }

    const filteredScenarios = category === 'all'
        ? scenarios
        : scenarios.filter(s => s.category === category);

    if (filteredScenarios.length === 0) {
        container.innerHTML = '<div class="col-12"><p class="text-center text-muted">No scenarios found for this category.</p></div>';
        return;
    }

    let html = '';

    filteredScenarios.forEach(scenario => {
        html += `
            <div class="col-md-6 mb-4">
                <div class="card h-100 scenario-card">
                    <div class="card-header bg-cfam-light">
                        <h5 class="mb-0">${scenario.title}</h5>
                        <small class="text-muted"><i class="fas fa-tag me-1"></i>${scenario.category}</small>
                    </div>
                    <div class="card-body">
                        <p><strong><i class="fas fa-question-circle text-cfam-teal me-2"></i>Scenario:</strong> ${scenario.description}</p>
                        <hr>
                        <p><strong><i class="fas fa-balance-scale text-cfam-green me-2"></i>Legal Provision:</strong> ${scenario.legalProvision}</p>
                        <p><strong><i class="fas fa-exclamation-triangle text-warning me-2"></i>Applicable Penalty:</strong><br>
                        <span class="badge bg-danger text-white mt-1">${scenario.applicablePenalty}</span></p>
                        <p><strong><i class="fas fa-lightbulb text-cfam-yellow me-2"></i>Solution:</strong> ${scenario.solution}</p>
                        <p class="mb-0"><small><strong><i class="fas fa-globe text-cfam-teal me-2"></i>International Example:</strong> ${scenario.internationalExample}</small></p>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ============================================================================
// SECTION 6: ACCORDION CONTENT GENERATOR
// ============================================================================

/**
 * Generate Definitions Accordion
 */
function generateDefinitionsAccordion() {
    try {
        const container = document.getElementById('definitionsAccordion');
        if (!container) {
            console.warn('Definitions accordion container not found');
            return;
        }

        let html = '';

        Object.entries(keyDefinitions).forEach(([key, value], index) => {
            const cleanKey = key.replace(/([A-Z])/g, ' $1').trim();
            const titleCase = cleanKey.charAt(0).toUpperCase() + cleanKey.slice(1);

            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapse${index}">
                            ${titleCase}
                        </button>
                    </h2>
                    <div id="collapse${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#definitionsAccordion">
                        <div class="accordion-body">
                            ${value}
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        console.log('Definitions accordion generated successfully');
    } catch (error) {
        console.error('Error generating definitions accordion:', error);
    }
}

/**
 * Generate Infrastructure Types Accordion
 */
function generateInfrastructureAccordion() {
    try {
        const container = document.getElementById('infrastructureAccordion');
        if (!container) {
            console.warn('Infrastructure accordion container not found');
            return;
        }

        let html = '';

        infrastructureTypes.forEach((infra, index) => {
            const widthSpecs = infra.minimumWidth && typeof infra.minimumWidth === 'object'
                ? Object.entries(infra.minimumWidth).map(([key, value]) =>
                    `<li>${key.replace(/([A-Z])/g, ' $1').trim()}: ${value}</li>`
                  ).join('')
                : '<li>Refer to local guidelines</li>';

            const features = (infra.features || infra.types || []).map(feature =>
                `<li>${typeof feature === 'string' ? feature : JSON.stringify(feature)}</li>`
            ).join('');

            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingInfra${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInfra${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapseInfra${index}">
                            ${infra.type}
                        </button>
                    </h2>
                    <div id="collapseInfra${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="headingInfra${index}" data-bs-parent="#infrastructureAccordion">
                        <div class="accordion-body">
                            <p><strong>Description:</strong> ${infra.description}</p>
                            <p><strong>Minimum Width Specifications:</strong></p>
                            <ul>
                                ${widthSpecs}
                            </ul>
                            <p><strong>Features:</strong></p>
                            <ul>
                                ${features}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        console.log('Infrastructure accordion generated successfully');
    } catch (error) {
        console.error('Error generating infrastructure accordion:', error);
    }
}

/**
 * Generate Rights and Responsibilities Accordion
 */
function generateRightsAccordion() {
    try {
        const container = document.getElementById('rightsAccordion');
        if (!container) {
            console.warn('Rights accordion container not found');
            return;
        }

        let html = '';

        const sections = [
            { key: 'pedestrianRights', title: 'Pedestrian Rights' },
            { key: 'cyclistRights', title: 'Cyclist Rights' },
            { key: 'motoristResponsibilities', title: 'Motorist Responsibilities' },
            { key: 'pedestrianResponsibilities', title: 'Pedestrian Responsibilities' },
            { key: 'cyclistResponsibilities', title: 'Cyclist Responsibilities' },
            { key: 'employerObligations', title: 'Employer Obligations' },
            { key: 'governmentObligations', title: 'Government Obligations' }
        ];

        sections.forEach((section, index) => {
            const items = rightsResponsibilities[section.key];

            html += `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingRights${index}">
                        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseRights${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="collapseRights${index}">
                            ${section.title}
                        </button>
                    </h2>
                    <div id="collapseRights${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="headingRights${index}" data-bs-parent="#rightsAccordion">
                        <div class="accordion-body">
                            <ul>
                                ${items.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;

        console.log('Rights and responsibilities accordion generated successfully');
    } catch (error) {
        console.error('Error generating rights accordion:', error);
    }
}

/**
 * Generate Penalty Schedule Table
 */
function generatePenaltyTable() {
    try {
        const container = document.getElementById('penaltyTable');
        if (!container) {
            console.warn('Penalty table container not found');
            return;
        }

        let html = `
            <table class="table table-bordered table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>Offense</th>
                        <th>First Offense</th>
                        <th>Repeat Offense</th>
                    </tr>
                </thead>
                <tbody>
        `;

        penaltySchedule.forEach(penalty => {
            html += `
                <tr>
                    <td>${penalty.offense}</td>
                    <td><span class="badge bg-warning text-dark">${penalty.firstOffense}</span></td>
                    <td><span class="badge bg-danger text-white">${penalty.repeatOffense}</span></td>
                </tr>
            `;
        });

        html += `
                </tbody>
            </table>
            <p class="text-muted"><small><strong>Note:</strong> These are MINIMUM penalties that States cannot reduce under the National Active Mobility Act.</small></p>
        `;

        container.innerHTML = html;

        console.log('Penalty table generated successfully');
    } catch (error) {
        console.error('Error generating penalty table:', error);
    }
}

// ============================================================================
// SECTION 7: MAIN INITIALIZATION
// ============================================================================

/**
 * Initialize all components when document is ready
 */
function initializeAMB() {
    console.log('Initializing Active Mobility Bill interactive components...');

    // Initialize data tables
    initializeCitiesTable();

    // Initialize charts
    createInvestmentChart();

    // Initialize scenario selector
    initializeScenarioSelector();

    // Generate accordions
    generateDefinitionsAccordion();
    generateInfrastructureAccordion();
    generateRightsAccordion();

    // Generate penalty table
    generatePenaltyTable();

    console.log('All Active Mobility Bill components initialized successfully');
}

// ============================================================================
// SECTION 8: EXPORT AND EVENT LISTENERS
// ============================================================================

// Initialize when DOM is ready
if (typeof jQuery !== 'undefined') {
    $(document).ready(function() {
        initializeAMB();
    });
} else {
    // Fallback if jQuery is not available
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeAMB);
    } else {
        initializeAMB();
    }
}

// Make functions available globally
window.showCityDetails = showCityDetails;
window.filterScenarios = filterScenarios;
window.displayScenarios = displayScenarios;
window.initializeAMB = initializeAMB;
window.citiesData = citiesData;
window.keyDefinitions = keyDefinitions;
window.infrastructureTypes = infrastructureTypes;
window.rightsResponsibilities = rightsResponsibilities;
window.scenarios = scenarios;
window.penaltySchedule = penaltySchedule;

console.log('Active Mobility Bill JavaScript loaded successfully');
