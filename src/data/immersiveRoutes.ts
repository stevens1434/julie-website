import {
  careArc,
  certifications,
  clinicalSettings,
  contactConfig,
  education,
  focusAreas,
  homeStats,
  leadershipPillars,
  professionalExperience,
  rotations,
  scholarlyProject,
  siteMeta,
  summaryHighlights
} from "./site";

type Action = {
  label: string;
  href?: string;
  external?: boolean;
  action?: "print";
};

type PanelMeta = {
  label: string;
  value: string;
};

type Panel = {
  label?: string;
  title: string;
  text?: string;
  list?: string[];
  meta?: PanelMeta[];
  link?: Action;
};

type Section = {
  label: string;
  title: string;
  intro?: string;
  panels: Panel[];
};

type Hero = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lede: string;
  primaryAction?: Action;
  secondaryAction?: Action;
  tags: string[];
  aside: Panel;
};

type RouteThemeView = {
  zoneLabel: string;
  hero: Hero;
  metrics?: typeof homeStats;
  sections: Section[];
  contactCards?: Panel[];
  renderForm?: boolean;
};

export type ImmersiveRoute = {
  path: string;
  label: string;
  retro: RouteThemeView;
  starwars: RouteThemeView;
  jurassic: RouteThemeView;
};

const homeSharedTags = [
  "University of Michigan-Flint DNP-FNP student",
  "Michigan-based clinical practice",
  "Critical care to primary care trajectory"
];

const clinicalMetrics = [
  { value: `${rotations.length}`, label: "Documented rotations", detail: "Primary care, pediatrics, FQHC, sports medicine, and specialty clinic training." },
  { value: `${clinicalSettings.length}`, label: "Practice environments", detail: "Exposure across outpatient, inpatient, dialysis, ICU, and specialty settings." },
  { value: `${certifications.length}`, label: "Credentials on file", detail: "Licensure, life-support certifications, and pediatric specialty recognition." },
  { value: "Across the lifespan", label: "Patient range", detail: "Clinical preparation spans infants, children, adolescents, adults, and families." }
];

const leadershipMetrics = [
  { value: `${leadershipPillars.length}`, label: "Leadership pillars", detail: "Integrity, cultural humility, service, and accountable improvement." },
  { value: "2027", label: "Target completion", detail: "DNP quality-improvement work continues through winter semester 2027." },
  { value: "Rural FQHC", label: "Project setting", detail: "The scholarly project centers on diabetic eye-screening access in a federally qualified health center." },
  { value: "Equity-driven", label: "Practice lens", detail: "Leadership philosophy is rooted in respect, inclusion, and measurable care access." }
];

const cvMetrics = [
  { value: "16+", label: "Years of nursing", detail: "Adult, pediatric, critical care, radiology, and nephrology practice depth." },
  { value: `${education.length}`, label: "Academic milestones", detail: "Formal nursing education from practical nursing through doctoral preparation." },
  { value: `${professionalExperience.length}`, label: "Roles highlighted", detail: "Selected roles show ICU, dialysis, travel, and tertiary academic practice." },
  { value: "Direct outreach", label: "Employer access", detail: "Email, LinkedIn, scheduling, and inquiry-form pathways remain available." }
];

const bestFitOpportunities = [
  "Family nurse practitioner roles with strong mentorship and interdisciplinary collaboration.",
  "Primary care settings that value prevention, chronic disease management, and family-centered communication.",
  "Community, pediatric, or hybrid practices where high-acuity judgment and care coordination are assets."
];

const contactCards: Panel[] = [
  {
    label: "Email Channel",
    title: "Direct professional contact",
    text: contactConfig.publicEmail,
    link: { label: "Email Julie", href: `mailto:${contactConfig.publicEmail}`, external: true }
  },
  {
    label: "LinkedIn Signal",
    title: "Professional profile",
    text: "Professional background, experience, and public profile updates.",
    link: { label: "Open LinkedIn", href: contactConfig.linkedinUrl, external: true }
  },
  contactConfig.bookingUrl
    ? {
        label: "Scheduling Console",
        title: "Interview booking",
        text: "Use the scheduling link to reserve time directly on Julie's calendar.",
        link: { label: "Schedule interview", href: contactConfig.bookingUrl, external: true }
      }
    : {
        label: "Scheduling Console",
        title: "Interview booking",
        text: "Direct interview scheduling can be activated soon. For now, please reach out by email or LinkedIn."
      },
  {
    label: "Reference Vault",
    title: "References",
    text: "Professional and personal references are available upon request."
  }
];

const homeResearchPanels: Panel[] = [
  {
    label: "Scholarly Transmission",
    title: scholarlyProject.title,
    text: scholarlyProject.introduction,
    meta: [
      { label: "Timeline", value: scholarlyProject.timeline },
      { label: "Completion", value: scholarlyProject.completion }
    ],
    link: { label: "Review leadership and scholarship", href: "/leadership-scholarship" }
  },
  {
    label: "Clinical Sectors",
    title: "Care environments already explored",
    list: clinicalSettings
  }
];

const rotationPanels = rotations.map((rotation) => ({
  label: rotation.focus,
  title: rotation.preceptor,
  text: rotation.location,
  meta: [{ label: "Dates", value: rotation.dates }]
}));

const careArcPanels = careArc.map((item) => ({
  label: "Career Arc",
  title: item.title,
  text: item.text
}));

const certificationPanels = certifications.map((item) => ({
  label: item.issuer,
  title: item.name,
  meta: [{ label: "Active dates", value: item.dates }]
}));

const leadershipPanels = leadershipPillars.map((item) => ({
  label: "Leadership Pillar",
  title: item.title,
  text: item.text
}));

const educationPanels = education.map((item) => ({
  label: item.school,
  title: item.degree,
  text: `${item.location} | ${item.dates}`
}));

const experiencePanels = professionalExperience.map((role) => ({
  label: role.organization,
  title: role.title,
  text: `${role.location} | ${role.dates}`,
  list: role.bullets
}));

export const immersiveRoutes: Record<string, ImmersiveRoute> = {
  "/": {
    path: "/",
    label: "Home",
    retro: {
      zoneLabel: "Member Home",
      hero: {
        eyebrow: "Welcome to Julie Stevens Online",
        title: "Employer portfolio portal",
        subtitle: "Member homepage // featured healthcare profile",
        lede:
          "This old-web portal presents Julie's bedside depth, advanced-practice transition, and employer-ready story in one fast, memorable member home experience.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Browse Clinical Experience", href: "/clinical-experience" },
        tags: ["Featured candidate", "You've got credentials", "Michigan healthcare profile"],
        aside: {
          label: "Member Spotlight",
          title: "A profile built for hiring teams",
          text:
            "Julie combines critical-care composure, pediatric specialty depth, and a prevention-focused family practice trajectory in a portfolio designed for fast employer review.",
          link: { label: "Visit LinkedIn profile", href: contactConfig.linkedinUrl, external: true }
        }
      },
      metrics: homeStats,
      sections: [
        {
          label: "Channels",
          title: "Favorite places to explore",
          panels: focusAreas.map((item) => ({
            label: "Featured Channel",
            title: item.title,
            text: item.text
          }))
        },
        {
          label: "Profile Center",
          title: "What makes this homepage worth bookmarking",
          panels: careArcPanels
        },
        {
          label: "What's New",
          title: "Scholarship, projects, and next steps",
          panels: homeResearchPanels
        }
      ]
    },
    starwars: {
      zoneLabel: "Command Bridge",
      hero: {
        eyebrow: "Opening Mission Briefing",
        title: "Julie Stevens enters the primary-care frontier",
        subtitle: `${siteMeta.role} // ${siteMeta.institution}`,
        lede:
          "A veteran bedside nurse is stepping onto a larger healthcare frontier, bringing critical-care judgment, family-centered communication, and an equity-focused practice arc into family nurse practitioner care.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "View Clinical Campaign", href: "/clinical-experience" },
        tags: homeSharedTags,
        aside: {
          label: "Hologram Briefing",
          title: "Clinical depth with a prevention-focused future",
          text:
            "Julie brings pediatric nephrology, PICU, cardiac intensive care, travel nursing, and community-based advanced practice training into a polished, employer-ready profile.",
          link: { label: "Transmit to LinkedIn", href: contactConfig.linkedinUrl, external: true }
        }
      },
      metrics: homeStats,
      sections: [
        {
          label: "Mission Priorities",
          title: "What this campaign is built to protect",
          panels: focusAreas.map((item) => ({
            label: "Priority Target",
            title: item.title,
            text: item.text
          }))
        },
        {
          label: "Operational History",
          title: "Systems already navigated",
          panels: careArcPanels
        },
        {
          label: "Research Transmission",
          title: "The next phase of the journey",
          panels: homeResearchPanels
        }
      ]
    },
    jurassic: {
      zoneLabel: "Visitor Center",
      hero: {
        eyebrow: "Arrival Briefing",
        title: "Julie Stevens enters the clinical preserve",
        subtitle: `${siteMeta.role} // ${siteMeta.institution}`,
        lede:
          "Years of high-acuity nursing practice now move into a new care habitat, pairing sharp clinical instincts with a prevention-focused family practice future.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Track Clinical Experience", href: "/clinical-experience" },
        tags: homeSharedTags,
        aside: {
          label: "Ranger Note",
          title: "A candidate built for both pressure and prevention",
          text:
            "Julie combines pediatric nephrology, PICU, cardiac intensive care, travel nursing, and community-based advanced practice training in a profile ready for employers who value adaptability and polish.",
          link: { label: "View LinkedIn profile", href: contactConfig.linkedinUrl, external: true }
        }
      },
      metrics: homeStats,
      sections: [
        {
          label: "Protected Habitats",
          title: "Practice environments shaping the preserve",
          panels: focusAreas.map((item) => ({
            label: "Trail Marker",
            title: item.title,
            text: item.text
          }))
        },
        {
          label: "Migration Path",
          title: "Where the expedition has already traveled",
          panels: careArcPanels
        },
        {
          label: "Research Outpost",
          title: "Projects guiding the next discovery",
          panels: homeResearchPanels
        }
      ]
    }
  },
  "/clinical-experience": {
    path: "/clinical-experience",
    label: "Clinical Experience",
    retro: {
      zoneLabel: "Yahoo Directory",
      hero: {
        eyebrow: "Top: Health > Nursing > Advanced Practice > Candidate Profiles",
        title: "Clinical experience directory",
        subtitle: "Indexed placements, settings, and credentials",
        lede:
          "This directory organizes Julie's rotations, nursing trajectory, and active credentials into the kind of scan-friendly category structure old portal sites did best.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Return to Home", href: "/" },
        tags: ["Directory listing", "Primary care transition", "Indexed credentials"],
        aside: {
          label: "Featured Listing",
          title: "Breadth that translates well to family practice",
          text:
            "The clinical record spans outpatient primary care, pediatrics, specialty nephrology, dialysis, ICU, and tertiary academic settings."
        }
      },
      metrics: clinicalMetrics,
      sections: [
        {
          label: "Top Categories",
          title: "Advanced practice rotations",
          panels: rotationPanels
        },
        {
          label: "Subdirectories",
          title: "Career arc and bedside history",
          panels: careArcPanels
        },
        {
          label: "Reference Index",
          title: "Licensure and certifications",
          panels: certificationPanels
        },
        {
          label: "Editor's Picks",
          title: "Best-fit employer categories",
          panels: [
            {
              label: "Sponsored Match",
              title: "Teams likely to see immediate alignment",
              list: bestFitOpportunities,
              link: { label: "Go to CV & Contact", href: "/cv-contact" }
            }
          ]
        }
      ]
    },
    starwars: {
      zoneLabel: "Campaign Archive",
      hero: {
        eyebrow: "Campaign Record",
        title: "Clinical preparation backed by high-acuity service history",
        subtitle: "Primary care transition // critical-care readiness",
        lede:
          "Julie's clinical record shows both range and intent: advanced practice placements, pediatric and adult critical care, specialty nephrology work, and a deliberate move into outpatient family medicine.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Return to Command Bridge", href: "/" },
        tags: ["Primary care placements", "Dialysis and ICU depth", "Family medicine trajectory"],
        aside: {
          label: "Sector Overview",
          title: "Settings already cleared",
          text: "Primary care, pediatrics, FQHC, sports medicine, allergy and asthma, dialysis, ICU, and interventional recovery environments all inform Julie's readiness."
        }
      },
      metrics: clinicalMetrics,
      sections: [
        {
          label: "Placement Logs",
          title: "Documented advanced practice rotations",
          panels: rotationPanels
        },
        {
          label: "Career Arc",
          title: "Roles that sharpened advanced-practice judgment",
          panels: careArcPanels
        },
        {
          label: "Clearance Codes",
          title: "Credentials currently active",
          panels: certificationPanels
        },
        {
          label: "Opportunity Matrix",
          title: "Roles aligned with the current trajectory",
          panels: [
            {
              label: "Best Fit",
              title: "Employers who will see immediate alignment",
              list: bestFitOpportunities,
              link: { label: "Review the full CV", href: "/cv-contact" }
            }
          ]
        }
      ]
    },
    jurassic: {
      zoneLabel: "Field Log",
      hero: {
        eyebrow: "Expedition Record",
        title: "Clinical training shaped in both high-acuity and outpatient terrain",
        subtitle: "Field placements // specialty habitats // future family practice",
        lede:
          "Julie’s preparation reflects the kind of range that matters in the wild: complex bedside care, specialized pediatric experience, and a clear path toward community-based primary care.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Return to Visitor Center", href: "/" },
        tags: ["Family medicine trail", "Pediatric critical care", "Dialysis and outpatient exposure"],
        aside: {
          label: "Habitat Scan",
          title: "Settings already traversed",
          text: "The record includes family medicine offices, FQHCs, pediatric clinics, sports and functional medicine, dialysis units, ICUs, and tertiary academic care."
        }
      },
      metrics: clinicalMetrics,
      sections: [
        {
          label: "Paddock Records",
          title: "Advanced practice placements documented in the field",
          panels: rotationPanels
        },
        {
          label: "Migration History",
          title: "How bedside roles shaped the expedition",
          panels: careArcPanels
        },
        {
          label: "Field Credentials",
          title: "Licensure and certifications still active",
          panels: certificationPanels
        },
        {
          label: "Best Viewing Zones",
          title: "Where Julie fits best next",
          panels: [
            {
              label: "Practice Match",
              title: "Employers likely to benefit first",
              list: bestFitOpportunities,
              link: { label: "Review CV and outreach options", href: "/cv-contact" }
            }
          ]
        }
      ]
    }
  },
  "/leadership-scholarship": {
    path: "/leadership-scholarship",
    label: "Leadership & Scholarship",
    retro: {
      zoneLabel: "Search Results",
      hero: {
        eyebrow: "Search results for leadership scholarship julie stevens",
        title: "Leadership and scholarship results",
        subtitle: "About 12 results in 0.18 seconds",
        lede:
          "This search-style page surfaces Julie's leadership philosophy, DNP project, and service orientation using a sparse early-web results layout built for quick scanning.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Browse Clinical Experience", href: "/clinical-experience" },
        tags: ["Search results", "Quality improvement", "Leadership principles"],
        aside: {
          label: "Top Result",
          title: "Leadership anchored in trust, respect, and equity",
          text:
            "Julie's philosophy of leadership emphasizes integrity, cultural humility, and accountable improvement for communities that need access-focused care."
        }
      },
      metrics: leadershipMetrics,
      sections: [
        {
          label: "Result 1",
          title: "Leadership principles",
          panels: leadershipPanels
        },
        {
          label: "Result 2",
          title: "Current scholarly project",
          panels: [
            {
              label: "Project Summary",
              title: scholarlyProject.title,
              text: scholarlyProject.introduction,
              meta: [
                { label: "Setting", value: scholarlyProject.setting },
                { label: "Timeline", value: scholarlyProject.timeline },
                { label: "Completion", value: scholarlyProject.completion }
              ]
            },
            {
              label: "Research Focus",
              title: "Question under study",
              text: scholarlyProject.question,
              meta: [{ label: "Importance", value: scholarlyProject.whyItMatters }]
            }
          ]
        },
        {
          label: "Result 3",
          title: "Service and community orientation",
          panels: [
            {
              label: "Community Service",
              title: "Volunteer work that informs the practice lens",
              text:
                "Volunteer work within underserved communities continues to reinforce Julie's commitment to equitable care and evidence-based improvement."
            }
          ]
        }
      ]
    },
    starwars: {
      zoneLabel: "Council Archive",
      hero: {
        eyebrow: "Knowledge Vault",
        title: "Leadership grounded in integrity, respect, and equitable care",
        subtitle: "Evidence, humility, and service as operating principles",
        lede:
          "Julie's leadership philosophy pairs clinical rigor with cultural humility, community service, and a sustained commitment to building access for underserved patients.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Review Clinical Campaign", href: "/clinical-experience" },
        tags: ["Equity-centered", "Service-driven", "Evidence-oriented"],
        aside: {
          label: "Council Brief",
          title: "A DNP perspective shaped by trust and accountability",
          text:
            "Julie strives to lead with integrity by fostering trust through ethical decision-making, transparency, and accountability in every professional role."
        }
      },
      metrics: leadershipMetrics,
      sections: [
        {
          label: "Guiding Principles",
          title: "Leadership pillars on record",
          panels: leadershipPanels
        },
        {
          label: "Scholarly Dossier",
          title: "Current quality-improvement transmission",
          panels: [
            {
              label: "Project Overview",
              title: scholarlyProject.title,
              text: scholarlyProject.introduction,
              meta: [
                { label: "Setting", value: scholarlyProject.setting },
                { label: "Timeline", value: scholarlyProject.timeline },
                { label: "Completion", value: scholarlyProject.completion }
              ]
            },
            {
              label: "Mission Aim",
              title: "Question under study",
              text: scholarlyProject.question,
              meta: [{ label: "Why it matters", value: scholarlyProject.whyItMatters }]
            }
          ]
        },
        {
          label: "Service Directive",
          title: "Community involvement shaping practice direction",
          panels: [
            {
              label: "Service Orientation",
              title: "Volunteerism reinforces the clinical mission",
              text:
                "Volunteering within local and underserved communities has strengthened Julie's commitment to service and reinforced a responsibility to address health disparities through evidence-based, equitable care."
            }
          ]
        }
      ]
    },
    jurassic: {
      zoneLabel: "Expedition Journal",
      hero: {
        eyebrow: "Research Camp",
        title: "Leadership rooted in respect, service, and measurable improvement",
        subtitle: "Field judgment // cultural humility // quality improvement",
        lede:
          "Julie’s leadership philosophy is shaped by the realities of caring for families in complex environments and by a steady commitment to improving access for communities that are too often underserved.",
        primaryAction: { label: "Open CV & Contact", href: "/cv-contact" },
        secondaryAction: { label: "Review Clinical Trail", href: "/clinical-experience" },
        tags: ["Integrity in the field", "Community service", "Quality improvement"],
        aside: {
          label: "Field Director Note",
          title: "Leadership means building trust where pressure is highest",
          text:
            "Julie values respect as a leadership foundation and demonstrates it through inclusive collaboration, cultural humility, and accountable care planning."
        }
      },
      metrics: leadershipMetrics,
      sections: [
        {
          label: "Core Principles",
          title: "The values guiding the expedition",
          panels: leadershipPanels
        },
        {
          label: "Research Enclosure",
          title: "Current DNP quality-improvement work",
          panels: [
            {
              label: "Project Site",
              title: scholarlyProject.title,
              text: scholarlyProject.introduction,
              meta: [
                { label: "Setting", value: scholarlyProject.setting },
                { label: "Timeline", value: scholarlyProject.timeline },
                { label: "Completion", value: scholarlyProject.completion }
              ]
            },
            {
              label: "Research Question",
              title: "What the team is trying to improve",
              text: scholarlyProject.question,
              meta: [{ label: "Importance", value: scholarlyProject.whyItMatters }]
            }
          ]
        },
        {
          label: "Community Preserve",
          title: "Service as part of practice identity",
          panels: [
            {
              label: "Community Commitment",
              title: "Volunteer work informs the direction of care",
              text:
                "Community involvement continues to sharpen Julie's commitment to equitable care, measurable improvement, and a practice identity shaped by learning alongside the populations she hopes to serve."
            }
          ]
        }
      ]
    }
  },
  "/cv-contact": {
    path: "/cv-contact",
    label: "CV & Contact",
    retro: {
      zoneLabel: "Buddy Profile",
      hero: {
        eyebrow: "Buddy Info and Contact Center",
        title: "Julie Stevens is available",
        subtitle: "Profile details // credentials // direct employer messaging",
        lede:
          "This profile page brings together Julie's qualifications, selected experience, and direct contact options in a nostalgic desktop-messenger style layout.",
        primaryAction: { label: "Print-Friendly CV", action: "print" },
        secondaryAction: contactConfig.cvPdfPath
          ? { label: "Download PDF CV", href: contactConfig.cvPdfPath }
          : { label: "Return to Home", href: "/" },
        tags: ["Buddy profile", "Direct outreach", "References on request"],
        aside: {
          label: "Away Message",
          title: "Interview-ready and easy to reach",
          text:
            "Hiring teams can review credentials, selected roles, and contact channels here, then move directly into scheduling or outreach."
        }
      },
      metrics: cvMetrics,
      sections: [
        {
          label: "Profile Highlights",
          title: "What employers can confirm quickly",
          panels: [
            {
              label: "Highlights",
              title: "Summary of qualifications",
              list: summaryHighlights
            }
          ]
        },
        {
          label: "Buddy Details",
          title: "Education and certifications",
          panels: [...educationPanels, ...certificationPanels]
        },
        {
          label: "History Window",
          title: "Selected nursing roles",
          panels: experiencePanels
        }
      ],
      contactCards,
      renderForm: true
    },
    starwars: {
      zoneLabel: "Communications Deck",
      hero: {
        eyebrow: "Transmission Console",
        title: "Professional record and direct employer contact channels",
        subtitle: "CV archive // hiring outreach // interview transmission",
        lede:
          "This deck translates Julie's full professional record into a mission-ready dossier, with direct channels for interviews, employer outreach, and document review.",
        primaryAction: { label: "Print-Friendly CV", action: "print" },
        secondaryAction: contactConfig.cvPdfPath
          ? { label: "Download PDF CV", href: contactConfig.cvPdfPath }
          : { label: "Return to Command Bridge", href: "/" },
        tags: ["Print-ready CV", "Direct outreach", "Employer inquiry form"],
        aside: {
          label: "Signal Summary",
          title: "What employers can confirm quickly",
          text:
            "Academic preparation, licensure, bedside depth, certifications, and direct contact pathways are all available from this deck."
        }
      },
      metrics: cvMetrics,
      sections: [
        {
          label: "Core Signals",
          title: "Summary of qualifications",
          panels: [
            {
              label: "Highlights",
              title: "What employers can expect",
              list: summaryHighlights
            }
          ]
        },
        {
          label: "Academic Archive",
          title: "Education and credentials",
          panels: [...educationPanels, ...certificationPanels]
        },
        {
          label: "Service Record",
          title: "Selected nursing roles",
          panels: experiencePanels
        }
      ],
      contactCards,
      renderForm: true
    },
    jurassic: {
      zoneLabel: "Park Communications",
      hero: {
        eyebrow: "Visitor Communications Hub",
        title: "Professional record, credentials, and outreach access in one place",
        subtitle: "Field dossier // employer contact // interview scheduling",
        lede:
          "This station collects Julie's full practice record for employers who want a clean view of her qualifications, professional history, and direct contact options.",
        primaryAction: { label: "Print-Friendly CV", action: "print" },
        secondaryAction: contactConfig.cvPdfPath
          ? { label: "Download PDF CV", href: contactConfig.cvPdfPath }
          : { label: "Return to Visitor Center", href: "/" },
        tags: ["Employer-ready dossier", "Direct contact", "References on request"],
        aside: {
          label: "Field Summary",
          title: "The essentials gathered in one enclosure",
          text:
            "Education, certifications, selected nursing roles, and employer contact pathways are organized here for fast review."
        }
      },
      metrics: cvMetrics,
      sections: [
        {
          label: "Trail Markers",
          title: "Summary of qualifications",
          panels: [
            {
              label: "Highlights",
              title: "Strengths employers can expect to see",
              list: summaryHighlights
            }
          ]
        },
        {
          label: "Archive House",
          title: "Education and current credentials",
          panels: [...educationPanels, ...certificationPanels]
        },
        {
          label: "Expedition Record",
          title: "Selected nursing roles",
          panels: experiencePanels
        }
      ],
      contactCards,
      renderForm: true
    }
  }
};
