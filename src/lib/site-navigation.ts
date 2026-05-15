export type NavItem = {
  name: string;
  href: string;
};

export const practiceNav: NavItem[] = [
  { name: "Meet John D. Forsyth", href: "/attorney" },
  { name: "Professional Philosophy", href: "/philosophy" },
  { name: "Resources", href: "/resources" },
  { name: "Up Close and Personal", href: "/personal" },
  { name: "Contact", href: "/contact" },
];

export const resultsNav: NavItem[] = [
  { name: "Recent Client Cases", href: "/cases/recent" },
  { name: "Past Client Cases", href: "/cases/past" },
  { name: "Client Testimonials", href: "/testimonials" },
];

export const practiceAreas: NavItem[] = [
  { name: "Sex Crimes Defense", href: "/practice-areas/sex-crimes" },
  { name: "DUI/Vehicular Homicide", href: "/practice-areas/dui" },
  { name: "Three Strikes", href: "/practice-areas/three-strikes" },
  { name: "Domestic Violence", href: "/practice-areas/domestic-violence" },
  { name: "Cannabis", href: "/practice-areas/cannabis" },
  { name: "Federal Criminal Defense", href: "/practice-areas/federal-weapons" },
  { name: "Attempted Homicide", href: "/practice-areas/attempted-homicide" },
  { name: "Homicide/Kidnapping", href: "/practice-areas/homicide-kidnapping" },
];

export const footerQuickLinks: NavItem[] = [
  { name: "About John D. Forsyth", href: "/attorney" },
  { name: "Case Results", href: "/cases/recent" },
  { name: "Client Testimonials", href: "/testimonials" },
  { name: "Resources", href: "/resources" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export const areasServed: string[] = [
  "San Francisco County",
  "Alameda County",
  "Contra Costa County",
  "Marin County",
  "San Mateo County",
  "Santa Clara County",
  "All California Counties",
];
