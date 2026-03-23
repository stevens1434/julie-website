const clean = (value?: string) => value?.trim() ?? "";
const baseUrl = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;

export const withBase = (path: string) => {
  if (!path) return "";
  if (/^(https?:)?\/\//.test(path) || path.startsWith("mailto:") || path.startsWith("#")) {
    return path;
  }

  if (path === "/") {
    return baseUrl;
  }

  return `${baseUrl}${path.replace(/^\/+/, "")}`;
};

export const siteMeta = {
  name: "Julie Stevens",
  credentials: "BSN, RN, CPN",
  role: "Doctor of Nursing Practice - Family Nurse Practitioner Student",
  institution: "University of Michigan-Flint",
  location: "Michigan",
  description:
    "Employer-facing portfolio for Julie Stevens, a DNP-FNP student with over 16 years of bedside nursing experience across pediatric, adult, critical care, nephrology, and primary care settings."
};

export const contactConfig = {
  publicEmail: clean(import.meta.env.PUBLIC_EMAIL) || "juritter@med.umich.edu",
  linkedinUrl:
    clean(import.meta.env.PUBLIC_LINKEDIN_URL) ||
    "https://www.linkedin.com/in/julie-stevens-bsn-rn-cpn-3a48824a",
  formEndpoint: clean(import.meta.env.PUBLIC_FORM_ENDPOINT),
  bookingUrl: clean(import.meta.env.PUBLIC_BOOKING_URL),
  cvPdfPath: clean(import.meta.env.PUBLIC_CV_PDF_PATH),
  headshotPath:
    clean(import.meta.env.PUBLIC_HEADSHOT_PATH) ||
    "https://res.cloudinary.com/stevens1434/image/upload/v1774275510/Other/julie.png"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/clinical-experience", label: "Clinical Experience" },
  { href: "/leadership-scholarship", label: "Leadership & Scholarship" },
  { href: "/cv-contact", label: "CV & Contact" }
];

export const homeStats = [
  { value: "16+", label: "Years of bedside nursing", detail: "Adult, pediatric, critical care, radiology, and nephrology practice." },
  { value: "2027", label: "DNP-FNP graduation target", detail: "Doctor of Nursing Practice, University of Michigan-Flint." },
  { value: "8", label: "Advanced practice rotations listed", detail: "Primary care, pediatrics, FQHC, sports medicine, and allergy/asthma." },
  { value: "Across the lifespan", label: "Patient-care perspective", detail: "Family-centered care from infancy through adulthood." }
];

export const focusAreas = [
  {
    title: "Family-centered primary care",
    text:
      "Julie is preparing for family nurse practitioner practice with a patient-centered approach grounded in prevention, education, and continuity across the lifespan."
  },
  {
    title: "Rural and underserved access",
    text:
      "Her scholarly and clinical work emphasizes equitable access, especially for patients who face practical barriers to specialty care and ongoing follow-up."
  },
  {
    title: "High-acuity clinical judgment",
    text:
      "Years in pediatric and adult critical care environments shape her calm decision-making, interdisciplinary collaboration, and accountability under pressure."
  }
];

export const clinicalSettings = [
  "Primary care",
  "Family medicine",
  "Federally qualified health centers",
  "Pediatric primary care",
  "Allergy and asthma specialty care",
  "Sports and functional medicine",
  "Pediatric dialysis",
  "Pediatric intensive care",
  "Cardiac intensive care",
  "Adult step-down and interventional radiology"
];

export const leadershipPillars = [
  {
    title: "Integrity and accountability",
    text:
      "Julie aims to build trust through ethical decision-making, transparency, and accountability in each professional role."
  },
  {
    title: "Respect and cultural humility",
    text:
      "She values respectful care, diverse perspectives, and inclusive collaboration that keeps patients and families at the center of planning."
  },
  {
    title: "Service-driven improvement",
    text:
      "Community volunteering and work with underserved populations reinforce her commitment to health equity, evidence-based practice, and measurable improvement."
  }
];

export const scholarlyProject = {
  title: "DNP Quality Improvement Project",
  timeline: "January 2026 to present",
  completion: "Winter semester 2027",
  setting: "Rural federally qualified health center",
  question:
    "Can offering diabetic eye exams in the clinic for diabetic patients via retinal imaging increase the number of completed annual diabetic screenings during routine diabetic follow-up appointments?",
  introduction:
    "This project addresses a persistent diabetic-retinopathy screening gap by bringing retinal imaging into routine primary-care visits for patients who may not have ready access to specialty eye care.",
  aim:
    "Evaluate whether in-clinic retinal photography with remote expert review can improve annual diabetic-eye-exam completion and support FQHC quality targets tied to diabetes screening performance.",
  whyItMatters:
    "The work aligns clinical workflow improvement with better preventive care access for rural and underserved populations."
};

export const rotations = [
  {
    preceptor: "Rachel Lethorn, MS, PA-C",
    focus: "Primary Care Sports and Functional Medicine",
    dates: "January 2025 to April 2025",
    location: "Brighton, Michigan"
  },
  {
    preceptor: "Henri Godbold, MD",
    focus: "Primary Care (FQHC)",
    dates: "January 2025 to April 2025",
    location: "Hamtramck, Michigan"
  },
  {
    preceptor: "April Joy Ping, MD",
    focus: "Pediatric Primary Care",
    dates: "May 2025 to August 2025",
    location: "Howell, Michigan"
  },
  {
    preceptor: "Allan P. Frank, MD, MS",
    focus: "Primary Care",
    dates: "September 2025 to November 2025",
    location: "Corktown, Michigan"
  },
  {
    preceptor: "Katelyn Nordyk, MSN, CPNP",
    focus: "Pediatric Primary Care",
    dates: "October 2025 to December 2025",
    location: "Dundee, Michigan"
  },
  {
    preceptor: "Andrea M. Tanner, FNP-C",
    focus: "Primary Care (FQHC)",
    dates: "January 2026 to March 2026",
    location: "Flint, Michigan"
  },
  {
    preceptor: "Kathryn Ackers, FNP-BC",
    focus: "Family Medicine",
    dates: "February 2026 to April 2026",
    location: "Dexter, Michigan"
  },
  {
    preceptor: "Jessica Baird, DNP, FNP-BC",
    focus: "Allergy and Asthma Specialty Clinic",
    dates: "March 2026 to April 2026",
    location: "Okemos, Michigan"
  }
];

export const careArc = [
  {
    title: "Current pediatric nephrology practice",
    text:
      "Julie currently serves in pediatric dialysis at University of Michigan C.S. Mott Children's Hospital, caring for acute and outpatient dialysis patients in one of only three pediatric dialysis units in Michigan."
  },
  {
    title: "Critical care depth",
    text:
      "Her background includes pediatric intensive care, cardiac intensive care, neonatal critical care float coverage, adult step-down intensive care, and high-acuity peri-procedural recovery."
  },
  {
    title: "Travel and adaptive practice",
    text:
      "Travel nursing roles across Michigan and Minnesota strengthened her adaptability, rapid onboarding, and comfort delivering safe care across unfamiliar systems."
  },
  {
    title: "Primary care transition",
    text:
      "Advanced practice rotations show an intentional move toward family medicine, preventive care, and outpatient care delivery in both community and FQHC settings."
  }
];

export const summaryHighlights = [
  "Over 16 years of bedside clinical nursing experience spanning adult and pediatric medical-surgical units, intensive care, interventional radiology, and pediatric dialysis.",
  "More than four years of experience caring for patients with chronic kidney disease, including pediatric patients from 18 months to 23 years old.",
  "Consistently recognized for leadership, communication, organization, critical thinking, and time management.",
  "Skilled in family-centered care and interdisciplinary collaboration with patients and families from diverse cultural backgrounds.",
  "Experienced with EPIC, Cerner, Microsoft Word, Excel, Office, and Teams."
];

export const education = [
  {
    degree: "Doctor of Nursing Practice - Family Nurse Practitioner",
    school: "University of Michigan-Flint",
    location: "Flint, Michigan",
    dates: "August 2023 to April 2027"
  },
  {
    degree: "Bachelor of Science in Nursing",
    school: "University of Washington",
    location: "Bothell, Washington",
    dates: "June 2016"
  },
  {
    degree: "Associate Degree in Nursing",
    school: "Everett Community College",
    location: "Everett, Washington",
    dates: "March 2015"
  },
  {
    degree: "Associate of Applied Science Degree - Licensed Practical Nursing",
    school: "North Seattle Community College",
    location: "Seattle, Washington",
    dates: "August 2009 to March 2015"
  }
];

export const certifications = [
  { name: "Certified Pediatric Nurse", issuer: "PNCB", dates: "2016 to 2027" },
  { name: "Basic Life Support for Healthcare Providers", issuer: "BLS", dates: "Current through 2027" },
  { name: "Pediatric Advanced Life Support", issuer: "PALS", dates: "Current through 2027" },
  { name: "Advanced Cardiovascular Life Support", issuer: "ACLS", dates: "Current through 2027" },
  { name: "Registered Nurse, State of Michigan", issuer: "State of Michigan", dates: "2018 to 2028" },
  { name: "Sigma Theta Tau Honor Society of Nursing", issuer: "Sigma Theta Tau", dates: "2014 to 2016" }
];

export const professionalExperience = [
  {
    title: "Registered Nurse, Pediatric Dialysis Unit",
    organization: "University of Michigan C.S. Mott Children's Hospital",
    location: "Ann Arbor, Michigan",
    dates: "February 2022 to Present",
    bullets: [
      "Provide acute and outpatient dialysis care in one of only three pediatric dialysis units in Michigan.",
      "Perform and monitor hemodialysis and peritoneal dialysis with thorough pre-, intra-, and post-dialysis assessment.",
      "Assess dialysis access, monitor fluid balance and hemodynamic stability, and respond to dialysis-related complications.",
      "Coordinate family-centered education and collaborate with nephrologists, dietitians, social workers, and technicians."
    ]
  },
  {
    title: "Registered Nurse, Pediatric Intensive Care Unit",
    organization: "University of Michigan C.S. Mott Children's Hospital",
    location: "Ann Arbor, Michigan",
    dates: "October 2020 to 2023",
    bullets: [
      "Cared for critically ill pediatric patients in a Level 1 trauma center using invasive and noninvasive respiratory and hemodynamic support.",
      "Safely recovered patients from the operating room, interventional radiology, MRI, and bedside procedures.",
      "Provided and managed sedation under physician supervision and supported complex therapies including CRRT and ECMO."
    ]
  },
  {
    title: "Registered Nurse, Adult Stepdown Intensive Care Unit",
    organization: "Detroit Medical Center, Huron Valley-Sinai Hospital",
    location: "Commerce Township, Michigan",
    dates: "August 2020 to November 2020",
    bullets: [
      "Managed critically ill adult patients diagnosed with COVID-19 in a high-acuity step-down intensive care environment.",
      "Monitored respiratory status, hemodynamic support, laboratory trends, and postoperative recovery needs."
    ]
  },
  {
    title: "Travel Nurse, Pediatric Intensive Care Unit",
    organization: "AYA Healthcare at Bronson Children's Hospital",
    location: "Kalamazoo, Michigan",
    dates: "March 2020 to June 2020",
    bullets: [
      "Delivered critical care to pediatric patients from newborn through young adulthood in a Level 1 trauma and burn center.",
      "Managed sedation and complex lines, drains, and ventilatory support in a travel assignment setting."
    ]
  },
  {
    title: "Registered Nurse, Pediatric Critical Care Central Staffing Resource",
    organization: "University of Michigan C.S. Mott Children's Hospital",
    location: "Ann Arbor, Michigan",
    dates: "May 2019 to March 2020",
    bullets: [
      "Floated across the PICU, pediatric cardiothoracic unit, and Level 4 NICU caring for newborn through young adult populations.",
      "Administered specialized IV medications, supported ventilatory care, and coordinated care for highly specialized pediatric patients."
    ]
  },
  {
    title: "Travel Nurse, Pediatric and Cardiac Intensive Care Units",
    organization: "RTG Medical at Helen DeVos Children's Hospital",
    location: "Grand Rapids, Michigan",
    dates: "April 2019 to December 2019",
    bullets: [
      "Cared for critically ill pediatric and neonatal patients with congenital cardiac conditions and postoperative cardiac surgery needs.",
      "Managed advanced drains, lines, respiratory support, and immediate post-procedural recovery."
    ]
  },
  {
    title: "Travel Nurse, Pediatric and Cardiac Intensive Care Units",
    organization: "Cross Country Travel Corp at Children's Hospital of Minnesota",
    location: "Minneapolis, Minnesota",
    dates: "January 2019 to April 2019",
    bullets: [
      "Supported critically ill pediatric patients and newborns with congenital cardiac conditions through intensive-care and post-surgical recovery.",
      "Worked with advanced monitoring and therapies including inhaled nitric oxide, CRRT, and ECMO-related care."
    ]
  }
];

export const clinicalOverview = {
  title: "Advanced practice preparation backed by high-acuity nursing experience",
  text:
    "Julie's training reflects both breadth and intention: strong bedside foundations, complex pediatric and adult care, and a focused transition into family and community-based primary care."
};

export const bestFitOpportunities = [
  "Family nurse practitioner roles with strong mentorship and interdisciplinary collaboration.",
  "Primary care settings that value prevention, chronic disease management, and family-centered communication.",
  "Community, pediatric, or hybrid practices where high-acuity judgment and care coordination are assets."
];

export const leadershipOverview = {
  title: "A leadership philosophy grounded in integrity, respect, and equitable care",
  text:
    "Julie's leadership perspective blends clinical rigor with cultural humility, community service, and a sustained commitment to improving access for underserved patients."
};

export const leadershipSummary = [
  "As a DNP student, Julie strives to lead with integrity by fostering trust through ethical decision-making, transparency, and accountability in all professional roles.",
  "She values respect as a foundation of leadership and demonstrates it by embracing diverse perspectives, practicing cultural humility, and creating inclusive environments that support collaboration and patient-centered care."
];

export const serviceOrientationText =
  "Volunteering within local and underserved communities has strengthened Julie's commitment to service and reinforced her responsibility to address health disparities. Her leadership approach is shaped by continuous learning, evidence-based practice, and a belief that equitable, high-quality care is a shared responsibility that extends beyond individual clinical encounters.";

export const cvContactOverview = {
  title: "Professional qualifications and employer contact options",
  text:
    "This page is structured as a print-friendly curriculum vitae with direct contact pathways for interview requests and employer outreach."
};

export const contactReasons = [
  "Employment opportunity",
  "Interview request",
  "Reference request",
  "Networking or collaboration",
  "Other"
];
