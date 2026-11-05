/* =========================================================================
   SITE DATA — in the CMS these become editable menus, taxonomies and
   content entries. Audience codes: o = Aquaculture farms & operators,
   g = Government authorities & investors, r = Universities & research.
   ========================================================================= */
const NAV = [
 {
  "id": "about",
  "label": "About Us",
  "ar": "من نحن",
  "tpl": "T2",
  "page": "about.html",
  "intro": "Identity, credibility and ambitions of Gulf Aquaculture.",
  "items": [
   [
    "Our Story",
    "g",
    "about.html#our-story"
   ],
   [
    "Vision & Mission",
    "g",
    "about.html#vision-mission"
   ],
   [
    "Our Leadership & Team",
    "gr",
    "about.html#leadership-team"
   ],
   [
    "Our Approach to Aquaculture",
    "or",
    "about.html#our-approach"
   ],
   [
    "Our Regional Role",
    "g",
    "about.html#regional-role"
   ],
   [
    "Our Achievements",
    "go",
    "about.html#achievements"
   ]
  ]
 },
 {
  "id": "operations",
  "label": "Operations & Facilities",
  "ar": "العمليات والمرافق",
  "tpl": "T3",
  "page": "operations.html",
  "intro": "Land-based hatcheries, research facilities and offshore marine farming.",
  "items": [
   [
    "Sheikh Khalifa Marine Research Centre (SKMRC)",
    "rg",
    "operations.html#skmrc"
   ],
   [
    "Balghailam Island Hatchery",
    "o",
    "operations.html#balghailam"
   ],
   [
    "Delma Island – Marine Fish Farming",
    "og",
    "operations.html#delma"
   ],
   [
    "Khorfakkan – Marine Fish Farming",
    "og",
    "operations.html#khorfakkan"
   ],
   [
    "Infrastructure & Technology",
    "ogr",
    "operations.html#infrastructure"
   ]
  ]
 },
 {
  "id": "species",
  "label": "Species",
  "ar": "الأنواع",
  "tpl": "T5",
  "page": "species.html",
  "intro": "Locally adapted species — biology, farming performance and fry availability.",
  "items": [
   [
    "Orange-Spotted Grouper (Hamoor)",
    "o",
    "species-orange-spotted-grouper.html"
   ],
   [
    "Malabar Red Snapper (Hamra)",
    "o",
    "species-malabar-red-snapper.html"
   ],
   [
    "Mangrove Red Snapper (Shiqra)",
    "o",
    "species-mangrove-red-snapper.html"
   ],
   [
    "Seabream",
    "o",
    "species-seabream.html"
   ],
   [
    "Other Species & Development Programmes",
    "or",
    "species.html#other-species"
   ],
   [
    "Fry Orders & Availability",
    "o",
    "contact.html#fry"
   ]
  ]
 },
 {
  "id": "science",
  "label": "Science & Technology",
  "ar": "العلوم والتكنولوجيا",
  "tpl": "T4",
  "page": "science.html",
  "intro": "The science behind every stage of production.",
  "items": [
   [
    "Marine Biology & Biotechnology",
    "r",
    "science.html#marine-biology"
   ],
   [
    "Broodstock Management",
    "or",
    "science.html#broodstock"
   ],
   [
    "Larval Development",
    "ro",
    "science.html#larval-development"
   ],
   [
    "Live Feed Systems",
    "o",
    "science.html#live-feed"
   ],
   [
    "Microbiology & Virology",
    "r",
    "science.html#microbiology"
   ],
   [
    "Water Quality & Environmental Monitoring",
    "or",
    "science.html#water-quality"
   ],
   [
    "Biosecurity & Fish Health",
    "o",
    "science.html#biosecurity"
   ],
   [
    "Sustainable Production Technologies",
    "go",
    "science.html#sustainable-technologies"
   ]
  ]
 },
 {
  "id": "research",
  "label": "Research & Innovation",
  "ar": "البحث والابتكار",
  "tpl": "T6",
  "page": "research.html",
  "intro": "SKMRC as a platform for regional and international collaboration.",
  "items": [
   [
    "Sheikh Khalifa Marine Research Centre",
    "r",
    "research.html#skmrc"
   ],
   [
    "Marine Innovation Park",
    "rg",
    "research.html#innovation-park"
   ],
   [
    "Research Programmes",
    "r",
    "research.html#programmes"
   ],
   [
    "Academic Partnerships",
    "r",
    "research.html#partnerships"
   ],
   [
    "Scientific Publications",
    "r",
    "research.html#publications"
   ],
   [
    "Research Collaboration",
    "r",
    "research.html#collaboration"
   ],
   [
    "Innovation & Development",
    "gr",
    "research.html#innovation"
   ]
  ]
 },
 {
  "id": "sustainability",
  "label": "Sustainability",
  "ar": "الاستدامة والأمن الغذائي",
  "tpl": "T7",
  "page": "sustainability.html",
  "intro": "Aquaculture's strategic role for the UAE and the region.",
  "items": [
   [
    "UAE Food Security",
    "g",
    "sustainability.html#food-security"
   ],
   [
    "Sustainable Aquaculture",
    "go",
    "sustainability.html#sustainable-aquaculture"
   ],
   [
    "Local Species & Environmental Adaptation",
    "og",
    "sustainability.html#local-species"
   ],
   [
    "Reducing Dependence on Imported Fry",
    "go",
    "sustainability.html#imported-fry"
   ],
   [
    "Marine Ecosystem Protection",
    "gr",
    "sustainability.html#ecosystem"
   ],
   [
    "Responsible Production",
    "go",
    "sustainability.html#responsible-production"
   ],
   [
    "Regional Aquaculture Development",
    "g",
    "sustainability.html#regional-development"
   ]
  ]
 },
 {
  "id": "news",
  "label": "News & Insights",
  "ar": "الأخبار والرؤى",
  "tpl": "T8",
  "page": "news.html",
  "intro": "Ongoing activity, published directly by the Gulf Aquaculture team.",
  "items": [
   [
    "Company News",
    "ogr",
    "news.html#company"
   ],
   [
    "Industry Developments",
    "og",
    "news.html#industry"
   ],
   [
    "Research & Scientific Publications",
    "r",
    "news.html#research"
   ],
   [
    "Projects & Partnerships",
    "g",
    "news.html#partnerships"
   ],
   [
    "Events & Conferences",
    "ogr",
    "news.html#events"
   ],
   [
    "Media Gallery",
    "ogr",
    "news.html#media"
   ]
  ]
 },
 {
  "id": "contact",
  "label": "Contact",
  "ar": "تواصل معنا",
  "tpl": "T9",
  "page": "contact.html",
  "intro": "Separate enquiry pathways, routed to the right team.",
  "items": [
   [
    "Commercial Aquaculture Enquiries",
    "o",
    "contact.html#commercial"
   ],
   [
    "Fry Orders & Availability",
    "o",
    "contact.html#fry"
   ],
   [
    "Government & Institutional Partnerships",
    "g",
    "contact.html#gov"
   ],
   [
    "Research & Academic Collaboration",
    "r",
    "contact.html#research"
   ],
   [
    "Investment & Strategic Partnerships",
    "g",
    "contact.html#invest"
   ],
   [
    "General Enquiries",
    "",
    "contact.html#general"
   ]
  ]
 }
];
const AUDIENCES = {
 "o": {
  "name": "Aquaculture Farms & Operators",
  "short": "Operators",
  "ar": "المزارع والمشغلون",
  "blurb": "Production capacity, species availability, fry quality, biosecurity, technical capabilities and commercial enquiries.",
  "links": [
   [
    "Species & fry availability",
    "species.html"
   ],
   [
    "Production cycle",
    "index.html#cycle"
   ],
   [
    "Biosecurity & fish health",
    "science.html#biosecurity"
   ],
   [
    "Facilities & capacity",
    "operations.html"
   ],
   [
    "Order fry",
    "contact.html#fry"
   ],
   [
    "Commercial enquiry",
    "contact.html#commercial"
   ]
  ]
 },
 "g": {
  "name": "Government Authorities & Investors",
  "short": "Gov & Investors",
  "ar": "الجهات الحكومية والمستثمرون",
  "blurb": "Food security, regional production capacity, infrastructure, sustainability and strategic importance.",
  "links": [
   [
    "UAE food security",
    "sustainability.html#food-security"
   ],
   [
    "Production capacity",
    "sustainability.html#stats"
   ],
   [
    "Infrastructure",
    "operations.html#infrastructure"
   ],
   [
    "Sustainability",
    "sustainability.html"
   ],
   [
    "Institutional partnerships",
    "contact.html#gov"
   ],
   [
    "Investment enquiry",
    "contact.html#invest"
   ]
  ]
 },
 "r": {
  "name": "Universities & Research Institutions",
  "short": "Research",
  "ar": "الجامعات ومؤسسات البحث",
  "blurb": "Scientific expertise, laboratory capabilities, research programmes and opportunities for collaboration.",
  "links": [
   [
    "Scientific expertise",
    "science.html"
   ],
   [
    "SKMRC laboratories",
    "research.html#skmrc"
   ],
   [
    "Research programmes",
    "research.html#programmes"
   ],
   [
    "Publications",
    "news.html#research"
   ],
   [
    "Propose a collaboration",
    "contact.html#research"
   ]
  ]
 }
};
const SPECIES = [
 {
  "slug": "orange-spotted-grouper",
  "name": "Orange-Spotted Grouper",
  "local": "Hamoor",
  "ar": "هامور",
  "sci": "Epinephelus coioides",
  "href": "species-orange-spotted-grouper.html"
 },
 {
  "slug": "malabar-red-snapper",
  "name": "Malabar Red Snapper",
  "local": "Hamra",
  "ar": "حمرة",
  "sci": "Lutjanus malabaricus",
  "href": "species-malabar-red-snapper.html"
 },
 {
  "slug": "mangrove-red-snapper",
  "name": "Mangrove Red Snapper",
  "local": "Shiqra",
  "ar": "شقرة",
  "sci": "Lutjanus argentimaculatus",
  "href": "species-mangrove-red-snapper.html"
 },
 {
  "slug": "seabream",
  "name": "Seabream",
  "local": "—",
  "ar": "",
  "sci": "Sparidae · species to be confirmed",
  "href": "species-seabream.html"
 }
];
const STAGES = [
 {
  "t": "Broodstock Management",
  "aud": "or",
  "href": "science.html#broodstock",
  "d": "Selected, conditioned brood fish of locally adapted species are maintained under controlled temperature and photoperiod to trigger natural spawning and preserve genetic quality.",
  "fac": "Balghailam Island broodstock facilities · SKMRC",
  "tech": "Photoperiod & thermal control, RAS, genetic management",
  "ph": "Animated broodstock tanks; fish health and genetic-selection overlays."
 },
 {
  "t": "Spawning & Larval Development",
  "aud": "ro",
  "href": "science.html#larval-development",
  "d": "Eggs are collected, incubated and hatched; larvae are reared through the most delicate early stages in precisely controlled conditions.",
  "fac": "Balghailam larval rearing · SKMRC laboratories",
  "tech": "Incubation systems, microscopy, water-quality monitoring",
  "ph": "Microscopic visualisation: egg → embryo → first-feeding larva (AI-assisted, labelled as visualisation)."
 },
 {
  "t": "Live Feed & Hatchery Production",
  "aud": "o",
  "href": "science.html#live-feed",
  "d": "Microalgae, rotifers and Artemia are cultured on site to provide the right nutrition at each larval stage.",
  "fac": "Live-feed production units",
  "tech": "Microalgae culture, rotifer & Artemia systems, nutritional enrichment",
  "ph": "Animated live-feed chain: microalgae → rotifers → Artemia → larvae."
 },
 {
  "t": "Nursery & Fry Conditioning",
  "aud": "o",
  "href": "science.html#biosecurity",
  "d": "Juveniles are weaned onto formulated feed, graded and health-checked under strict biosecurity before transfer to sea cages or delivery to clients.",
  "fac": "Nursery operations · Balghailam & SKMRC",
  "tech": "Grading, weaning protocols, biosecurity & fish-health screening",
  "ph": "Nursery tanks time-lapse; fry quality & specification callouts."
 },
 {
  "t": "Marine Farming & Grow-Out",
  "aud": "og",
  "href": "operations.html#delma",
  "d": "Fish are grown to market size in offshore sea cages at Delma Island and Khorfakkan, operated under contract with the Environment Agency – Abu Dhabi.",
  "fac": "Delma Island · Khorfakkan sea cages",
  "tech": "Sea-cage infrastructure, environmental monitoring, operational management",
  "ph": "Underwater sea-cage environment with aerial transition (drone footage + AI visualisation)."
 }
];
const FACILITIES = [
 [
  "A",
  "Sheikh Khalifa Marine Research Centre",
  "Hatchery, nursery, laboratories, Marine Innovation Park, research facilities.",
  "rg",
  "operations.html#skmrc"
 ],
 [
  "B",
  "Balghailam Island Hatchery",
  "Broodstock, larval rearing, nursery, laboratory and water-quality infrastructure.",
  "o",
  "operations.html#balghailam"
 ],
 [
  "C",
  "Delma Island – Marine Fish Farming",
  "Offshore sea cages under contract with the Environment Agency – Abu Dhabi.",
  "og",
  "operations.html#delma"
 ],
 [
  "D",
  "Khorfakkan – Marine Fish Farming",
  "Large-scale sea-cage operation on the UAE's east coast.",
  "og",
  "operations.html#khorfakkan"
 ],
 [
  "E",
  "Infrastructure & Technology",
  "RAS, water intake & filtration, monitoring, biosecurity, live feed, environmental management.",
  "ogr",
  "operations.html#infrastructure"
 ]
];
const SCIENCE_DESC = [
 "Applied biology and biotechnology underpinning species development.",
 "Conditioning, selection and genetic management of brood fish.",
 "Controlled rearing through the critical early life stages.",
 "Microalgae, rotifers and Artemia produced on site.",
 "Pathogen screening and microbial management.",
 "Continuous monitoring across hatchery and sea cages.",
 "Protocols that protect stock — and clients' farms.",
 "RAS and resource-efficient production systems."
];
const RESEARCH_DESC = [
 "Laboratories and research facilities",
 "Space for innovation and applied projects",
 "Current programmes and objectives",
 "Universities and research institutions",
 "Papers, reports and findings"
];
const SUST_HOME = [
 [
  "UAE Food Security",
  "Strengthening national seafood supply through local production.",
  "g",
  "sustainability.html#food-security"
 ],
 [
  "Reducing Dependence on Imported Fry",
  "Locally produced, locally adapted fry for regional farms.",
  "go",
  "sustainability.html#imported-fry"
 ],
 [
  "Local Species & Environmental Adaptation",
  "Species suited to Gulf temperatures and salinity.",
  "og",
  "sustainability.html#local-species"
 ],
 [
  "Marine Ecosystem Protection",
  "Monitoring and responsible practices at sea.",
  "gr",
  "sustainability.html#ecosystem"
 ],
 [
  "Responsible Production",
  "Biosecurity, welfare and environmental standards.",
  "go",
  "sustainability.html#responsible-production"
 ],
 [
  "Regional Aquaculture Development",
  "Building the Gulf's aquaculture sector.",
  "g",
  "sustainability.html#regional-development"
 ]
];
const ENQUIRIES = [
 [
  "commercial",
  "Commercial Aquaculture Enquiries",
  "Farms & operators",
  "o"
 ],
 [
  "fry",
  "Fry Orders & Availability",
  "Species, quantity, size",
  "o"
 ],
 [
  "gov",
  "Government & Institutional Partnerships",
  "Authorities & public bodies",
  "g"
 ],
 [
  "research",
  "Research & Academic Collaboration",
  "Universities & institutes",
  "r"
 ],
 [
  "invest",
  "Investment & Strategic Partnerships",
  "Investors & strategic partners",
  "g"
 ],
 [
  "general",
  "General Enquiries",
  "Media, careers, other",
  "n"
 ]
];
const POSTS = [
 {
  "t": "Placeholder — Grouper fry season now open for orders",
  "cat": "company",
  "aud": "o",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — SKMRC publishes larval rearing study",
  "cat": "research",
  "aud": "r",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — New partnership for regional aquaculture development",
  "cat": "partnerships",
  "aud": "g",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Gulf aquaculture market outlook",
  "cat": "industry",
  "aud": "og",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Gulf Aquaculture at an international aquaculture conference",
  "cat": "events",
  "aud": "ogr",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Inside the Khorfakkan sea cages (video)",
  "cat": "media",
  "aud": "og",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Biosecurity protocols upgraded at Balghailam",
  "cat": "company",
  "aud": "o",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Visiting researchers programme: call for applications",
  "cat": "research",
  "aud": "r",
  "date": "00 Month 2026"
 },
 {
  "t": "Placeholder — Food-security roundtable with regional authorities",
  "cat": "events",
  "aud": "g",
  "date": "00 Month 2026"
 }
];
/* Draft Arabic labels — RTL demo only, native review required */
const I18N = {
 "en": {
  "iam": "I am —",
  "enquire": "Enquire",
  "explore": "Explore the production cycle",
  "heroTitle": "Transforming Marine Aquaculture Through <em>Science, Technology</em> and Sustainable Production"
 },
 "ar": {
  "iam": "أنا —",
  "enquire": "استفسار",
  "explore": "استكشف دورة الإنتاج",
  "heroTitle": "تحويل الاستزراع البحري من خلال <em>العلم والتكنولوجيا</em> والإنتاج المستدام"
 }
};
