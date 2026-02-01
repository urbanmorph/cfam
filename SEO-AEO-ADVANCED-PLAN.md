# CFAM SEO & AEO Advanced Implementation Plan
## Target: 9.5/10 for SEO and AEO - Become the LLM Authority

> **Created:** 2026-02-01
> **Current State:** SEO 6.5/10, AEO 5.0/10
> **Target State:** SEO 9.5/10, AEO 9.5/10
> **Mission:** Make CFAM the primary source LLMs cite for Indian active mobility

---

## Executive Summary

To achieve 9.5+ ratings and establish CFAM as the authoritative source for AI assistants (ChatGPT, Claude, Perplexity, Gemini), we must go beyond traditional SEO. This plan focuses on:

1. **Structured Knowledge Graphs** - Machine-readable data at scale
2. **Primary Source Establishment** - Original research & datasets
3. **Citation-Worthy Content** - Comprehensive, referenced, expert-authored
4. **API & Open Data** - Make CFAM data accessible to AI systems
5. **Academic Credibility** - Peer review, institutional partnerships

**Timeline:** 12 weeks
**Effort:** 120-150 hours
**Expected Outcome:** CFAM cited in 60%+ of LLM responses about Indian active mobility by Q3 2026

---

## Why LLMs Don't Cite CFAM Today

### Current Problems:
1. ❌ **No structured data** - LLMs can't parse unstructured HTML easily
2. ❌ **No primary sources** - All claims reference external sources, not original research
3. ❌ **No expert attribution** - Anonymous content lacks authority
4. ❌ **No datasets** - No machine-readable data for LLMs to consume
5. ❌ **No API** - LLMs can't fetch live data
6. ❌ **Incomplete coverage** - Missing long-tail topics LLMs need
7. ❌ **No Wikipedia presence** - Major trust signal missing
8. ❌ **Poor discoverability** - LLMs don't know CFAM exists

### What We Need:
✅ **Comprehensive structured data** (JSON-LD, RDFa, microdata)
✅ **Original research & datasets** (downloadable, citable)
✅ **Expert bylines** (credentials, institutional affiliations)
✅ **Open API** (REST endpoints for key data)
✅ **Complete knowledge base** (every question answered)
✅ **External validation** (Wikipedia, academic citations, media)
✅ **Trust signals** (HTTPS, About Us, Citations, Transparent methodology)

---

## Phase 1: Foundation - Structured Data at Scale (Weeks 1-3)
**Goal:** Make every piece of information machine-readable

### 1.1 Comprehensive JSON-LD Schema Implementation

**Index Page (index.html):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cfam.in/#organization",
      "name": "Council for Active Mobility",
      "alternateName": "CFAM",
      "url": "https://cfam.in",
      "logo": "https://cfam.in/img/cfam-logo.png",
      "sameAs": [
        "https://discord.gg/j8jgV7rc7J",
        "https://t.me/cfamindia",
        "https://www.linkedin.com/company/cfam",
        "https://twitter.com/cfamindia"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@cfam.in",
        "contactType": "General Inquiries"
      },
      "foundingDate": "2024",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "knowsAbout": [
        "Active Mobility",
        "Urban Planning",
        "Cycling Infrastructure",
        "Pedestrian Safety",
        "Sustainable Transportation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://cfam.in/#website",
      "url": "https://cfam.in",
      "name": "Council for Active Mobility",
      "publisher": {
        "@id": "https://cfam.in/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://cfam.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ItemList",
      "name": "Active Mobility Resources",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Article",
            "name": "National Active Mobility Bill",
            "url": "https://cfam.in/amb.html"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "SoftwareApplication",
            "name": "Altmo - Active Mobility Tracker",
            "url": "https://www.altmo.app",
            "applicationCategory": "HealthApplication",
            "operatingSystem": "iOS, Android"
          }
        }
      ]
    }
  ]
}
```

**NAMo Bill Page (amb.html) - Add Legislation Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Legislation",
  "name": "National Active Mobility Bill",
  "alternateName": "NAMo Bill",
  "legislationIdentifier": "CFAM-NAMo-2024",
  "legislationJurisdiction": {
    "@type": "Country",
    "name": "India"
  },
  "legislationDate": "2024",
  "legislationType": "Proposed Bill",
  "legislationResponsible": {
    "@type": "Organization",
    "name": "Council for Active Mobility"
  },
  "about": "A comprehensive framework for active mobility infrastructure in India including pedestrian footpaths, cycling lanes, and first/last-mile connectivity",
  "text": "Full bill text available at https://cfam.in/amb.html",
  "keywords": [
    "active mobility",
    "cycling infrastructure",
    "pedestrian safety",
    "urban planning India",
    "sustainable transportation"
  ]
}
```

**Calculator - Add Dataset Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "Indian Cities Active Mobility Impact Calculator",
  "description": "ROI calculations for active mobility infrastructure across 14 Indian cities including Bangalore, Mumbai, Delhi, Chennai, and others",
  "url": "https://cfam.in/amb.html#calculator",
  "creator": {
    "@id": "https://cfam.in/#organization"
  },
  "datePublished": "2024",
  "dateModified": "2026-02-01",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "application/json",
    "contentUrl": "https://cfam.in/api/calculator-data.json"
  },
  "spatialCoverage": {
    "@type": "Country",
    "name": "India"
  },
  "temporalCoverage": "2024/..",
  "variableMeasured": [
    "Lives saved per year",
    "Healthcare cost savings",
    "CO2 emissions reduced",
    "Economic benefits"
  ]
}
```

**Persona Pages - Add HowTo Schema:**
Each action page should have step-by-step structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How Citizens Can Support Active Mobility in India",
  "description": "A step-by-step guide for ordinary citizens to advocate for safer streets and active mobility infrastructure",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Join the Community",
      "text": "Connect with 2,500+ members on Discord or Telegram",
      "url": "https://cfam.in/action/citizen.html#join"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Use Altmo App",
      "text": "Track your walking and cycling activities",
      "url": "https://www.altmo.app"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Contact Your Councillor",
      "text": "Find your local representative and request safer streets",
      "url": "https://cfam.in/councillors.html"
    }
  ]
}
```

### 1.2 Comprehensive FAQ Schema

Create `/faq.html` with **50+ questions** covering every aspect:

**Structured Data:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is active mobility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Active mobility refers to human-powered transportation including walking, cycling, using wheelchairs, and other non-motorized forms of movement. In India, it accounts for 40-60% of all trips but receives less than 10% of transport infrastructure budgets."
      }
    },
    {
      "@type": "Question",
      "name": "How many people die in road accidents in India annually?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India records 1.5 lakh (150,000) road deaths annually according to Ministry of Road Transport data. Of these, 60% are pedestrians and cyclists who are vulnerable road users lacking proper infrastructure."
      }
    },
    {
      "@type": "Question",
      "name": "What is the National Active Mobility Bill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The National Active Mobility Bill (NAMo Bill) is a proposed legislative framework by the Council for Active Mobility to mandate comprehensive pedestrian and cycling infrastructure across all Indian cities with population over 1 lakh. It includes 10 chapters covering footpaths, cycle lanes, intersections, transit integration, and accessibility."
      }
    },
    {
      "@type": "Question",
      "name": "How much does cycling infrastructure cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Protected cycle lanes in India cost ₹20-40 lakh per km ($25,000-50,000 USD). A city of 1 crore (10 million) population needs approximately ₹400-600 crore ($50-75 million) for a comprehensive 300-500 km network, which delivers a 4:1 to 7:1 ROI within 5-7 years."
      }
    }
  ]
}
```

**Questions to cover (minimum 50):**
- What is active mobility?
- Why is active mobility important for India?
- How many road deaths in India?
- What percentage are pedestrians/cyclists?
- What is the NAMo Bill?
- How much does cycling infrastructure cost?
- What is ROI for active mobility?
- Which Indian cities have cycling infrastructure?
- What is Hejje Gala?
- How does Altmo app work?
- What are IRC standards for cycling?
- How wide should footpaths be?
- What is protected cycle lane?
- How to design intersections for cyclists?
- What is vehicular cycling?
- What is the 8-80 principle?
- How to integrate cycling with metro?
- What are first-mile/last-mile solutions?
- How does Copenhagen cycling infrastructure work?
- What did Bogotá do for cyclists?
- How does Amsterdam design for cycling?
- What is Vision Zero?
- How to reduce air pollution with cycling?
- What are health benefits of cycling?
- How much CO2 does cycling save?
- What is modal share?
- How to measure active mobility?
- What is level of traffic stress (LTS)?
- How to design for accessibility?
- What are universal design principles?
- How to make cycling safe for children?
- What is Safe Routes to School?
- How to design cycle parking?
- What are bike-share systems?
- How to maintain cycling infrastructure?
- What are best practices for footpaths?
- How to handle monsoon drainage on cycle paths?
- What materials for cycle lanes in India?
- How to prevent encroachment?
- What is institutional framework for active mobility?
- Which department handles cycling infrastructure?
- How to fund active mobility projects?
- What are CSR opportunities?
- How do companies benefit from employee cycling?
- What is ESG reporting for mobility?
- How to advocate for cycling infrastructure?
- How to contact local councillor?
- What are political benefits of active mobility?
- How to organize community rides?
- What safety gear for cycling in India?

### 1.3 BreadcrumbList Schema

Add to all pages for navigation context:
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cfam.in"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Take Action",
      "item": "https://cfam.in/action/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Citizens Guide",
      "item": "https://cfam.in/action/citizen.html"
    }
  ]
}
```

### Files to Modify in Phase 1:
- `index.html` - Add Organization, Website, ItemList schemas
- `amb.html` - Add Legislation, Dataset schemas
- `action/*.html` - Add HowTo schemas for each persona
- NEW: `faq.html` - Comprehensive FAQ with FAQPage schema
- ALL pages - Add BreadcrumbList schema

**Estimated Time:** 25 hours
**Impact:** SEO 6.5→7.5, AEO 5.0→6.5

---

## Phase 2: Primary Source Establishment (Weeks 3-6)
**Goal:** Create original, citable research and datasets

### 2.1 Publish Original Research

**Research Paper 1: "The Economic Case for Active Mobility in Indian Cities"**
- **Format:** Academic paper (15-20 pages, PDF)
- **Content:**
  - Original methodology for ROI calculation
  - Data collection process for 14 cities
  - Statistical analysis
  - Cost-benefit analysis
  - Sensitivity analysis
  - Limitations and future research
- **Authors:** With credentials (urban planners, economists, public health experts)
- **Publication:** Host at `cfam.in/research/economic-case.pdf`
- **DOI:** Get DOI from Zenodo or similar
- **Citation format:** APA, MLA, Chicago provided
- **Structured Data:**
```json
{
  "@type": "ScholarlyArticle",
  "name": "The Economic Case for Active Mobility in Indian Cities: A 14-City Analysis",
  "author": [
    {
      "@type": "Person",
      "name": "Dr. [Name]",
      "affiliation": "Indian Institute of Technology",
      "jobTitle": "Urban Planning Professor"
    }
  ],
  "datePublished": "2026",
  "publisher": {
    "@id": "https://cfam.in/#organization"
  },
  "abstract": "This study analyzes the return on investment for active mobility infrastructure across 14 Indian cities...",
  "citation": "Author. (2026). The Economic Case for Active Mobility in Indian Cities. Council for Active Mobility.",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "DOI",
    "value": "10.5281/zenodo.XXXXXX"
  }
}
```

**Research Paper 2: "Safety Audit of Indian Pedestrian Infrastructure"**
- Field surveys of 100+ km footpaths across cities
- Gap analysis vs IRC:103 standards
- Accessibility compliance audit
- Recommendations by city

**Research Paper 3: "Modal Share Trends in Indian Cities (2015-2025)"**
- Longitudinal study of walking/cycling trends
- Impact of infrastructure investments
- Predictive modeling

### 2.2 Publish Open Datasets

**Dataset 1: CFAM Active Mobility Infrastructure Database**
- **Format:** CSV, JSON, GeoJSON
- **Content:**
  - Every cycle lane in India (location, length, type, year built)
  - Every footpath survey data point
  - Safety incidents database
  - Infrastructure quality scores
- **License:** CC BY 4.0
- **API Access:** `api.cfam.in/v1/infrastructure`
- **Update Frequency:** Monthly
- **Documentation:** Full data dictionary

**Dataset 2: Indian Cities Modal Share Data (2015-2025)**
- City-wise transportation mode splits
- Temporal trends
- Demographic breakdowns
- Sources and methodology

**Dataset 3: Active Mobility ROI Calculator Source Data**
- All assumptions documented
- City-specific variables
- Calculation formulas
- Validation data

**Dataset 4: Councillor Contact Database**
- Already exists at `councillors.html`
- Export to CSV/JSON
- Add structured data
- API endpoint

### 2.3 Create Data Portal

**New Page:** `data.cfam.in` or `cfam.in/data/`

**Features:**
- Browse datasets by category
- Download in multiple formats (CSV, JSON, Excel, GeoJSON)
- API documentation
- Interactive data visualizations
- Embed code for charts
- Citation guidelines
- Update logs

**Structured Data:**
```json
{
  "@type": "DataCatalog",
  "name": "CFAM Active Mobility Data Portal",
  "description": "Open datasets on active mobility infrastructure, safety, and usage patterns across India",
  "url": "https://cfam.in/data/",
  "dataset": [
    {
      "@type": "Dataset",
      "name": "Indian Cycling Infrastructure Database",
      "description": "Comprehensive inventory of cycle lanes across Indian cities",
      "distribution": [
        {
          "@type": "DataDownload",
          "encodingFormat": "text/csv",
          "contentUrl": "https://cfam.in/data/cycling-infrastructure.csv"
        },
        {
          "@type": "DataDownload",
          "encodingFormat": "application/json",
          "contentUrl": "https://cfam.in/data/cycling-infrastructure.json"
        },
        {
          "@type": "DataDownload",
          "encodingFormat": "application/geo+json",
          "contentUrl": "https://cfam.in/data/cycling-infrastructure.geojson"
        }
      ],
      "license": "https://creativecommons.org/licenses/by/4.0/"
    }
  ]
}
```

### Files to Create in Phase 2:
- NEW: `/research/economic-case.pdf` - Academic paper
- NEW: `/research/safety-audit.pdf` - Field study
- NEW: `/research/modal-share.pdf` - Trend analysis
- NEW: `/data/index.html` - Data portal homepage
- NEW: `/data/cycling-infrastructure.csv` - Dataset 1
- NEW: `/data/modal-share.csv` - Dataset 2
- NEW: `/data/calculator-source.csv` - Dataset 3
- NEW: `/api/` - API endpoint documentation
- NEW: `/research/index.html` - Research portal

**Estimated Time:** 60 hours (includes research, data collection, writing)
**Impact:** SEO 7.5→8.5, AEO 6.5→8.0

---

## Phase 3: Expert Attribution & Authority (Weeks 6-8)
**Goal:** Establish credibility through expert authors and institutional partnerships

### 3.1 Add Author Profiles

**New Page:** `cfam.in/team/`

**Structure:**
- Individual profile pages for each contributor
- Photos, credentials, affiliations
- Published works, media appearances
- Social profiles (LinkedIn, Twitter/X)

**Structured Data:**
```json
{
  "@type": "Person",
  "@id": "https://cfam.in/team/dr-urban-planner/#person",
  "name": "Dr. Urban Planner",
  "jobTitle": "Principal Urban Mobility Advisor",
  "affiliation": {
    "@type": "Organization",
    "name": "Council for Active Mobility"
  },
  "alumniOf": {
    "@type": "Organization",
    "name": "Massachusetts Institute of Technology"
  },
  "description": "Dr. Planner has 15 years experience in sustainable urban transportation planning across Asian cities",
  "sameAs": [
    "https://www.linkedin.com/in/urbanplanner",
    "https://scholar.google.com/citations?user=XXXXX"
  ],
  "knows About": [
    "Urban Planning",
    "Active Mobility",
    "Transportation Engineering"
  ]
}
```

### 3.2 Add Author Bylines to All Content

**Every page should have:**
```html
<div class="author-attribution">
  <p class="byline">
    <strong>Written by:</strong>
    <a href="/team/dr-urban-planner/">Dr. Urban Planner</a>, Principal Mobility Advisor
  </p>
  <p class="reviewed-by">
    <strong>Reviewed by:</strong>
    <a href="/team/prof-transport/">Prof. Transport Engineer</a>, IIT Delhi
  </p>
  <p class="last-updated">Last updated: February 1, 2026</p>
</div>
```

**Add to schema:**
```json
{
  "@type": "Article",
  "author": {
    "@id": "https://cfam.in/team/dr-urban-planner/#person"
  },
  "reviewedBy": {
    "@type": "Person",
    "name": "Prof. Transport Engineer",
    "affiliation": "IIT Delhi"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2026-02-01"
}
```

### 3.3 Institutional Partnerships

**Add logos and endorsements:**
- Academic institutions (IITs, NITs, CEPT University)
- Government bodies (if applicable - approach MoHUA, MoRTH)
- International organizations (ITDP, C40 Cities, etc.)
- Corporate partners (companies in Hejje Gala)

**Structured Data:**
```json
{
  "@type": "Organization",
  "name": "Council for Active Mobility",
  "member": [
    {
      "@type": "Organization",
      "name": "Institute for Transportation and Development Policy",
      "url": "https://www.itdp.org"
    },
    {
      "@type": "Organization",
      "name": "Indian Institute of Technology Delhi",
      "url": "https://home.iitd.ac.in"
    }
  ]
}
```

### Files to Create in Phase 3:
- NEW: `/team/index.html` - Team directory
- NEW: `/team/[person-slug].html` - Individual profiles (5-10 people)
- NEW: `/partners/` - Institutional partners page
- UPDATE: All content pages - Add author bylines

**Estimated Time:** 15 hours
**Impact:** SEO 8.5→9.0, AEO 8.0→8.5

---

## Phase 4: API & Programmatic Access (Weeks 8-10)
**Goal:** Make CFAM data accessible to LLMs and developers

### 4.1 Build REST API

**Endpoints:**

```
GET /api/v1/cities
GET /api/v1/cities/{city-slug}
GET /api/v1/cities/{city-slug}/infrastructure
GET /api/v1/calculator?city={city}&investment={amount}
GET /api/v1/councillors?ward={ward}&city={city}
GET /api/v1/stats/hejje-gala
GET /api/v1/research/papers
GET /api/v1/faq
```

**Example Response:**
```json
{
  "city": "bangalore",
  "population": 12000000,
  "cycling_infrastructure": {
    "total_km": 45,
    "protected_lanes_km": 12,
    "painted_lanes_km": 33,
    "bike_share_stations": 450
  },
  "pedestrian_infrastructure": {
    "footpath_km": 2400,
    "irc_compliant_percentage": 15
  },
  "investment_needed": {
    "amount_inr": 60000000000,
    "amount_usd": 750000000
  },
  "roi": {
    "lives_saved_annual": 450,
    "healthcare_savings_inr": 12000000000,
    "roi_ratio": 5.2
  }
}
```

### 4.2 Create API Documentation

**New Page:** `cfam.in/api/docs/`

**Include:**
- Authentication (if needed, or open access)
- Rate limits
- Example requests/responses
- Error codes
- SDKs (Python, JavaScript)
- OpenAPI/Swagger spec

**Structured Data:**
```json
{
  "@type": "WebAPI",
  "name": "CFAM Active Mobility API",
  "description": "Programmatic access to active mobility data for Indian cities",
  "documentation": "https://cfam.in/api/docs/",
  "termsOfService": "https://cfam.in/api/terms/",
  "provider": {
    "@id": "https://cfam.in/#organization"
  }
}
```

### 4.3 Create RSS/Atom Feeds

**Feeds for:**
- Latest news/blog posts
- Research publications
- Infrastructure updates by city
- Hejje Gala leaderboard updates

**Example:** `cfam.in/feed.xml`

### Files to Create in Phase 4:
- NEW: `/api/v1/` - API implementation (can be static JSON initially)
- NEW: `/api/docs/index.html` - API documentation
- NEW: `/api/openapi.yaml` - OpenAPI specification
- NEW: `/feed.xml` - RSS feed
- NEW: `/sitemap.xml` - Comprehensive sitemap (if not yet created)

**Estimated Time:** 20 hours
**Impact:** AEO 8.5→9.0 (major boost - LLMs can now fetch live data)

---

## Phase 5: External Validation & Link Building (Weeks 10-12)
**Goal:** Build trust signals through external citations

### 5.1 Wikipedia Presence

**Create/Update Wikipedia Articles:**

1. **Create:** "Council for Active Mobility" Wikipedia page
   - Requires notability (media coverage, research publications)
   - Neutral point of view
   - Citations from independent sources
   - Link to cfam.in as official website

2. **Update:** "Cycling in India" Wikipedia article
   - Add section on NAMo Bill
   - Cite CFAM research
   - Link to datasets

3. **Update:** "Transportation in [City]" articles
   - Add active mobility sections
   - Reference CFAM data for each city

**Why this matters for LLMs:**
- Wikipedia is heavily weighted in LLM training data
- Backlink from Wikipedia = massive trust signal
- LLMs often cite Wikipedia directly

### 5.2 Academic Citations

**Get research papers cited:**
- Submit to preprint servers (arXiv, SSRN)
- Submit to peer-reviewed journals (Transportation Research, Journal of Transport Geography)
- Present at conferences (Velo-city, Sustainable Transport conferences)
- Reach out to urban planning researchers to cite CFAM data

### 5.3 Media Coverage

**Press Strategy:**
- Press releases for major announcements
- Media kit at `cfam.in/media/`
- Pitch stories to The Hindu, Indian Express, Times of India
- Reach out to urban columnists
- Get quoted as expert source

**Media Kit Contents:**
- High-res logos and photos
- Fact sheets
- Infographics (downloadable)
- Press releases archive
- Spokesperson contacts
- Expert available for comment

### 5.4 Government Submissions

**Submit NAMo Bill to:**
- Ministry of Housing and Urban Affairs (MoHUA)
- Ministry of Road Transport and Highways (MoRTH)
- NITI Aayog
- State governments

**Get listed on:**
- India.gov.in (if applicable)
- Smart Cities Mission resources
- AMRUT scheme documents

### 5.5 Strategic Partnerships & Backlinks

**Target high-authority sites:**
- ITDP (itdp.org) - Collaborate on India reports
- C40 Cities (c40.org) - Partner cities program
- World Resources Institute (wri.org) - India office collaboration
- Observer Research Foundation (orfonline.org) - Policy papers
- The Better India (thebetterindia.com) - Success stories
- YourStory (yourstory.com) - Startup/corporate angle (Altmo/Hejje Gala)

**Estimated Time:** 25 hours
**Impact:** SEO 9.0→9.5, AEO 9.0→9.5

---

## Phase 6: Content Completeness & Long-Tail (Ongoing)
**Goal:** Answer every possible question about active mobility in India

### 6.1 Comprehensive Content Inventory

**Create pages for every major topic:**

**Concepts:**
- What is active mobility?
- What is protected cycle lane?
- What is vehicular cycling?
- What is Vision Zero?
- What is modal share?
- What is LTS (Level of Traffic Stress)?
- What is 8-80 principle?
- What is tactical urbanism?

**Implementation:**
- How to design cycle lanes in India
- How to design footpaths (IRC:103 standards)
- How to design intersections for safety
- How to integrate with metro/transit
- How to handle monsoon drainage
- How to prevent encroachment
- How to maintain infrastructure

**Cities (14+ pages):**
- Active mobility in Bangalore
- Active mobility in Mumbai
- Active mobility in Delhi
- ... (one page per city with local data)

**Use Cases:**
- Cycling to work in India
- Safe routes to school
- Wheelchair accessibility
- Senior citizen mobility
- Women's safety while cycling
- Cycling in monsoon

**Policy:**
- IRC:11 standards (pedestrians)
- IRC:103 standards (cycle lanes)
- Model Streets for All policy
- Smart Cities Mission guidelines
- AMRUT scheme

**Comparisons:**
- India vs Copenhagen cycling
- India vs Netherlands cycling
- India vs Bogotá TransMilenio
- India vs Singapore active mobility

### 6.2 Glossary

**New Page:** `cfam.in/glossary/`

**Define 100+ terms:**
- Active mobility
- Protected cycle lane
- Separated cycle lane
- Painted bike lane
- Shared path
- Greenway
- Footpath
- Sidewalk vs footpath
- Right of way
- Level of Service (LOS)
- Level of Traffic Stress (LTS)
- Modal share
- Mode shift
- First-mile connectivity
- Last-mile connectivity
- Transit-oriented development (TOD)
- Complete streets
- Vision Zero
- Safe Systems Approach
- 8-80 principle
- Vehicular cycling
- Protected intersection
- Dutch junction
- Copenhagen turn
- Two-stage left turn
- AADT (Annual Average Daily Traffic)
- PCU (Passenger Car Unit)
- IRC (Indian Roads Congress)
- UTTIPEC (Unified Traffic and Transportation Infrastructure Planning and Engineering Centre)
- MoHUA, MoRTH, NITI Aayog
- ...

**Structured Data:**
```json
{
  "@type": "DefinedTermSet",
  "name": "Active Mobility Glossary",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "name": "Protected Cycle Lane",
      "description": "A bicycle facility physically separated from motor vehicle traffic by vertical elements such as bollards, planters, or parked cars",
      "inDefinedTermSet": "https://cfam.in/glossary/"
    }
  ]
}
```

### Files to Create in Phase 6:
- NEW: `/concepts/*.html` - 20+ concept pages
- NEW: `/implementation/*.html` - 15+ how-to guides
- NEW: `/cities/*.html` - 14+ city pages
- NEW: `/policy/*.html` - 10+ policy explainers
- NEW: `/glossary.html` - Comprehensive glossary
- UPDATE: `faq.html` - Expand to 100+ questions

**Estimated Time:** 40+ hours (ongoing)
**Impact:** AEO 9.5→9.8 (comprehensive coverage = LLM confidence)

---

## Technical SEO Enhancements (Parallel to All Phases)

### 7.1 robots.txt
```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

Sitemap: https://cfam.in/sitemap.xml
Sitemap: https://cfam.in/sitemap-research.xml
Sitemap: https://cfam.in/sitemap-data.xml
```

### 7.2 Comprehensive Sitemap

**sitemap.xml** - Main pages
**sitemap-research.xml** - Research papers
**sitemap-data.xml** - Datasets
**sitemap-blog.xml** - News/blog posts

### 7.3 Enhanced Meta Tags (All Pages)

```html
<!-- Primary Meta Tags -->
<title>National Active Mobility Bill - Council for Active Mobility (CFAM)</title>
<meta name="title" content="National Active Mobility Bill - Council for Active Mobility (CFAM)">
<meta name="description" content="Comprehensive legislative framework for pedestrian and cycling infrastructure across Indian cities. 1.5 lakh annual road deaths, 60% vulnerable users. Join the movement for safer streets.">
<meta name="keywords" content="active mobility india, cycling infrastructure india, pedestrian safety india, NAMo Bill, urban planning india, sustainable transportation, CFAM">
<meta name="author" content="Dr. Urban Planner, Council for Active Mobility">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://cfam.in/amb.html">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://cfam.in/amb.html">
<meta property="og:title" content="National Active Mobility Bill - CFAM">
<meta property="og:description" content="Comprehensive legislative framework for pedestrian and cycling infrastructure across Indian cities. 1.5 lakh annual road deaths.">
<meta property="og:image" content="https://cfam.in/img/namo-bill-og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="en_IN">
<meta property="og:site_name" content="Council for Active Mobility">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://cfam.in/amb.html">
<meta property="twitter:title" content="National Active Mobility Bill - CFAM">
<meta property="twitter:description" content="Comprehensive legislative framework for pedestrian and cycling infrastructure across Indian cities.">
<meta property="twitter:image" content="https://cfam.in/img/namo-bill-twitter-image.jpg">
<meta name="twitter:creator" content="@cfamindia">
<meta name="twitter:site" content="@cfamindia">

<!-- Additional SEO -->
<meta name="geo.region" content="IN" />
<meta name="geo.placename" content="India" />
<meta name="language" content="English">
<meta http-equiv="content-language" content="en-IN">

<!-- Article Metadata (for content pages) -->
<meta property="article:published_time" content="2024-01-15T00:00:00+05:30">
<meta property="article:modified_time" content="2026-02-01T00:00:00+05:30">
<meta property="article:author" content="https://cfam.in/team/dr-urban-planner/">
<meta property="article:section" content="Urban Planning">
<meta property="article:tag" content="Active Mobility, Cycling, Pedestrian Safety, India">
```

### 7.4 Internal Linking Strategy

**Every page should link to:**
- Homepage (breadcrumb)
- Related persona pages
- Relevant FAQ entries
- Glossary terms (tooltip definitions)
- Research citations
- Data sources

**Implement contextual links:**
```html
When we mention <a href="/glossary.html#protected-cycle-lane" title="Physically separated from motor traffic">protected cycle lanes</a>, we're referring to...
```

---

## LLM-Specific Optimizations

### 8.1 Structured Content for AI Parsing

**Use clear hierarchies:**
```html
<article>
  <h1>Main Topic</h1>
  <div class="summary">
    <p><strong>Summary:</strong> Clear one-sentence takeaway that LLMs can extract</p>
  </div>

  <section>
    <h2>Subtopic</h2>
    <p>Each section answers one specific question clearly in the first paragraph.</p>

    <div class="key-facts">
      <h3>Key Facts:</h3>
      <ul>
        <li><strong>Statistic:</strong> 1.5 lakh road deaths annually in India</li>
        <li><strong>Context:</strong> 60% are pedestrians and cyclists</li>
        <li><strong>Source:</strong> Ministry of Road Transport and Highways, 2023</li>
      </ul>
    </div>
  </section>
</article>
```

### 8.2 Citations and Sources

**Every claim needs a source:**
```html
<p>
  India records 1.5 lakh road deaths annually
  <sup><a href="#ref-1" id="cite-1">[1]</a></sup>,
  of which 60% are vulnerable road users
  <sup><a href="#ref-2" id="cite-2">[2]</a></sup>.
</p>

<!-- At bottom of page -->
<section id="references">
  <h2>References</h2>
  <ol>
    <li id="ref-1">
      Ministry of Road Transport and Highways. (2023).
      <em>Road Accidents in India 2023</em>.
      Government of India.
      Retrieved from <a href="https://morth.nic.in">https://morth.nic.in</a>
    </li>
  </ol>
</section>
```

**Structured Data for Citations:**
```json
{
  "@type": "Article",
  "citation": [
    {
      "@type": "CreativeWork",
      "name": "Road Accidents in India 2023",
      "author": {
        "@type": "Organization",
        "name": "Ministry of Road Transport and Highways"
      },
      "datePublished": "2023",
      "url": "https://morth.nic.in"
    }
  ]
}
```

### 8.3 Fact Boxes and Data Cards

**Create extractable fact cards:**
```html
<aside class="fact-card" itemscope itemtype="https://schema.org/Claim">
  <h4>Key Statistic</h4>
  <p itemprop="claimReviewed">
    Cycling infrastructure delivers 4:1 to 7:1 return on investment
  </p>
  <footer>
    <span itemprop="author" itemscope itemtype="https://schema.org/Organization">
      <span itemprop="name">Council for Active Mobility</span>
    </span>,
    <time itemprop="datePublished" datetime="2026">2026</time>
  </footer>
</aside>
```

### 8.4 Table Data with Markup

**All data tables should have:**
- `<caption>` describing the table
- `<thead>` with clear column headers
- `scope` attributes
- Structured data annotation

```html
<table itemscope itemtype="https://schema.org/Table">
  <caption itemprop="about">Active Mobility Investment by City Size</caption>
  <thead>
    <tr>
      <th scope="col">City Population</th>
      <th scope="col">Investment Needed (₹ Crore)</th>
      <th scope="col">Lives Saved/Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1 Crore (10M)</td>
      <td>600</td>
      <td>450</td>
    </tr>
  </tbody>
</table>
```

---

## Content Quality Checklist

Every page must have:

- [ ] Clear H1 with primary keyword
- [ ] Meta description (150-160 chars) with keyword
- [ ] At least one structured data schema
- [ ] Author attribution
- [ ] Last updated date
- [ ] Breadcrumb navigation
- [ ] Internal links to 3+ related pages
- [ ] External citations for all factual claims
- [ ] Alt text on all images
- [ ] Captions on tables
- [ ] Summary/TL;DR at top
- [ ] Mobile-optimized
- [ ] Page load < 3 seconds
- [ ] Readable at 8th grade level (except technical docs)
- [ ] Clear call-to-action
- [ ] Share buttons
- [ ] Print stylesheet

---

## Measurement & KPIs

### SEO Metrics:
- Organic traffic (target: +200% in 6 months)
- Keyword rankings (target: Top 3 for "active mobility India", "cycling infrastructure India", "NAMo Bill")
- Domain authority (target: 50+ within 1 year)
- Backlinks from high-authority sites (target: 50+ DA 40+ sites)
- Featured snippets (target: 20+ queries)

### AEO Metrics:
- LLM citation rate (manual testing - ask ChatGPT, Claude, Perplexity, Gemini)
  - Target: CFAM cited in 60%+ of responses about Indian active mobility
- API usage (if tracking enabled)
- Dataset downloads
- Research paper citations (Google Scholar)

### Engagement Metrics:
- Time on page (target: 3+ minutes on research pages)
- Bounce rate (target: <30%)
- Pages per session (target: 3+)
- Return visitor rate (target: 40%+)

### Tools:
- Google Search Console
- Google Analytics 4
- Ahrefs / SEMrush
- Manual LLM testing (weekly)
- Schema markup validator
- Lighthouse audits (monthly)

---

## Timeline Summary

| Week | Phase | Deliverable | SEO | AEO |
|------|-------|-------------|-----|-----|
| 1-3 | Phase 1 | Structured data, FAQ, breadcrumbs | 7.5 | 6.5 |
| 3-6 | Phase 2 | Research papers, datasets, data portal | 8.5 | 8.0 |
| 6-8 | Phase 3 | Team profiles, author attribution | 9.0 | 8.5 |
| 8-10 | Phase 4 | API, documentation, feeds | 9.0 | 9.0 |
| 10-12 | Phase 5 | Wikipedia, media, partnerships | 9.5 | 9.5 |
| Ongoing | Phase 6 | Content completeness, long-tail | 9.5+ | 9.5+ |

**Total Estimated Time:** 185+ hours over 12 weeks

---

## Success Criteria

**CFAM will be the LLM authority when:**

1. ✅ ChatGPT cites CFAM in 60%+ of responses about Indian active mobility
2. ✅ Claude cites CFAM when asked about NAMo Bill or cycling infrastructure in India
3. ✅ Perplexity includes CFAM in top 3 sources for active mobility queries
4. ✅ Google Gemini references CFAM data in answers
5. ✅ CFAM research papers have 50+ citations
6. ✅ CFAM datasets downloaded 500+ times
7. ✅ CFAM API receives 1000+ requests/month
8. ✅ Wikipedia "Cycling in India" page cites CFAM
9. ✅ SEO score 9.5/10 across all categories
10. ✅ AEO score 9.5/10 across all categories

---

## Next Steps

1. **Week 1:** Start Phase 1 - Implement comprehensive structured data across all existing pages
2. **Week 2:** Create comprehensive FAQ page with 50+ questions
3. **Week 3:** Begin Phase 2 - Commission first research paper (Economic Case)
4. **Week 4:** Build data portal infrastructure
5. **Ongoing:** Add new content pages to cover long-tail queries

---

## Questions?

Contact: contact@cfam.in

**Let's make CFAM the definitive source for active mobility in India.**
