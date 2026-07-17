export const site = {
  brand: "Kansas City Rat Control",
  domain: "kansascityratcontrol.com",
  url: "https://kansascityratcontrol.com",
  phone: "816-339-8830",
  phoneE164: "+1-816-339-8830",
  phoneHref: "tel:+18163398830",
  hoursShort: "Answered day or night",
  centroid: { lat: 39.0997, lng: -94.5786 },
  description:
    "Rat control in Kansas City, MO. A local exterminator handles Norway rats and mice with inspection, trapping, and metal entry-point sealing. Answered day or night. Call 816-339-8830.",
};

// Answered around the clock (used in schema hours).
export const hours = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
];

// Cities named in copy, mirrored in areaServed schema.
export const areaCities = [
  { name: "Kansas City", region: "MO" },
  { name: "Independence", region: "MO" },
  { name: "Lee's Summit", region: "MO" },
  { name: "Blue Springs", region: "MO" },
  { name: "Raytown", region: "MO" },
  { name: "Gladstone", region: "MO" },
  { name: "Liberty", region: "MO" },
  { name: "North Kansas City", region: "MO" },
  { name: "Overland Park", region: "KS" },
  { name: "Olathe", region: "KS" },
  { name: "Lenexa", region: "KS" },
  { name: "Shawnee", region: "KS" },
  { name: "Kansas City", region: "KS" },
];

export const serviceNav = [
  { label: "Rat Control", slug: "rat-control-in-kansas-city", glyph: "i-rat", img: "/images/rat-control.jpg" },
  { label: "Rat Exterminator", slug: "rat-exterminator-in-kansas-city", glyph: "i-target", img: "/images/rat-exterminator.jpg" },
  { label: "Rat Removal", slug: "rat-removal-in-kansas-city", glyph: "i-trap", img: "/images/rat-removal.jpg" },
  { label: "Rat Inspection", slug: "rat-inspection-in-kansas-city", glyph: "i-search", img: "/images/rat-inspection.jpg" },
  { label: "Rodent Exclusion & Sealing", slug: "rodent-exclusion-in-kansas-city", glyph: "i-seal", img: "/images/rodent-exclusion.jpg" },
  { label: "Attic Rat Cleanup", slug: "attic-rat-cleanup-in-kansas-city", glyph: "i-home", img: "/images/attic-cleanup.jpg" },
  { label: "Dead Rat Removal", slug: "dead-rat-removal-in-kansas-city", glyph: "i-alert", img: "/images/dead-rat-removal.jpg" },
  { label: "Commercial Rat Control", slug: "commercial-rat-control-in-kansas-city", glyph: "i-building", img: "/images/commercial.jpg" },
  { label: "Mouse Control", slug: "mouse-control-in-kansas-city", glyph: "i-mouse", img: "/images/mouse-control.jpg" },
];

export const areaNav = [
  { label: "Independence, MO", slug: "rat-control-services-in-independence" },
  { label: "Lee's Summit, MO", slug: "rat-control-services-in-lees-summit" },
  { label: "Blue Springs, MO", slug: "rat-control-services-in-blue-springs" },
  { label: "Raytown, MO", slug: "rat-control-services-in-raytown" },
  { label: "Gladstone, MO", slug: "rat-control-services-in-gladstone" },
  { label: "Liberty, MO", slug: "rat-control-services-in-liberty" },
  { label: "North Kansas City, MO", slug: "rat-control-services-in-north-kansas-city" },
  { label: "Overland Park, KS", slug: "rat-control-services-in-overland-park" },
  { label: "Olathe, KS", slug: "rat-control-services-in-olathe" },
  { label: "Lenexa, KS", slug: "rat-control-services-in-lenexa" },
  { label: "Shawnee, KS", slug: "rat-control-services-in-shawnee" },
  { label: "Kansas City, KS", slug: "rat-control-services-in-kansas-city-ks" },
];

// Service-area accordion by county (matches the county model in the design reference).
export const counties = [
  {
    name: "Jackson County, MO",
    places: ["Kansas City", "Independence", "Lee's Summit", "Blue Springs", "Raytown", "Grandview"],
  },
  {
    name: "Clay County, MO",
    places: ["North Kansas City", "Gladstone", "Liberty", "Kearney", "Smithville"],
  },
  {
    name: "Platte County, MO",
    places: ["Parkville", "Riverside", "Platte City", "Weston"],
  },
  {
    name: "Johnson County, KS",
    places: ["Overland Park", "Olathe", "Lenexa", "Shawnee", "Leawood", "Prairie Village"],
  },
  {
    name: "Wyandotte County, KS",
    places: ["Kansas City, KS", "Bonner Springs", "Edwardsville"],
  },
];

// Stock imagery (Unsplash CDN, free license, hotlink-supported). Relevant per page.
const U = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;
export const IMG = {
  hero: U("1536622638768-9403a9d35a1a", 1500),
  "rat-control-in-kansas-city": U("1569169373444-1533c948aee9"),
  "rat-exterminator-in-kansas-city": U("1566324896857-03bf006cb4ed"),
  "rat-removal-in-kansas-city": U("1575378064390-5a323bbac5d7"),
  "rat-inspection-in-kansas-city": U("1676630656246-3047520adfdf"),
  "rodent-exclusion-in-kansas-city": U("1607400201515-c2c41c07d307"),
  "attic-rat-cleanup-in-kansas-city": U("1752852381113-7d93abc9d7ea"),
  "dead-rat-removal-in-kansas-city": U("1765959617888-30837a158667"),
  "commercial-rat-control-in-kansas-city": U("1589109807644-924edf14ee09"),
  "mouse-control-in-kansas-city": U("1718220186749-bc831bba08f8"),
};

// Full URL list for sitemap (trailing slashes preserved).
export const allPaths = [
  "/",
  "/services/",
  "/service-areas/",
  "/how-it-works/",
  "/about-us/",
  "/contact/",
  "/blog/",
  "/blog/how-to-get-rid-of-rats-kansas-city/",
  "/blog/rat-exterminator-cost-kansas-city/",
  "/blog/signs-of-rats-in-your-house/",
  "/privacy-policy/",
  "/terms/",
  "/disclaimer/",
  ...serviceNav.map((s) => `/${s.slug}/`),
  ...areaNav.map((a) => `/${a.slug}/`),
];
