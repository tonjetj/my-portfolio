import galactic_gamers from "../../assets/images/galactic-gamers.jpg";
import goodreads from "../../assets/images/goodreads.jpg";
import sildajazz from "../../assets/images/sildajazz.jpg";
import tind_bygg from "../../assets/images/tind-bygg.jpg";
import matoma from "../../assets/images/matoma.png";
import hm_eksamen from "../../assets/images/hm_eksamen.png";
import framer_portfolio_v2 from "../../assets/images/framer_portfolio_v2.png";
// import tind_bygg_1 from "../../assets/images/tind-bygg-1.jpg";

export type WorkData = {
  id: number;
  title: string;
  shortDescription: { en: string; no: string };
  description: { en: string; no: string };
  img?: string;
  demoUrl: string;
  githubUrl: string;
  figmaUrlDesktop: string;
  figmaUrlMobile: string;
  languages: string[];
  frameworks: string[];
  technologies: string[];
  altText: { en: string; no: string };
  pillText: string;
};

export const WorkList: WorkData[] = [
  {
    id: 1,
    title: "Goodreads",
    shortDescription: {
      en: "Redesign of Goodreads ",
      no: "Redesign av Goodreads ",
    },
    description: {
      en: "Redesign assignment on Goodreads for a UX-design course at Gokstad Akademiet.",
      no: "Redesignoppgave av Goodreads for et UX fag hos Gokstad Akademiet.",
    },
    img: goodreads,
    demoUrl: "",
    githubUrl: "",
    figmaUrlDesktop:
      "https://www.figma.com/proto/tYrqaW3Sx2vxOC3ivc5WBr/Redesign-Goodreads?node-id=685-7165&t=PprxBHtj7woF7Osl-1",
    figmaUrlMobile:
      "https://www.figma.com/proto/tYrqaW3Sx2vxOC3ivc5WBr/Redesign-Goodreads?node-id=273-28&t=PprxBHtj7woF7Osl-1&starting-point-node-id=273%3A28&show-proto-sidebar=1",
    languages: [],
    frameworks: [],
    technologies: ["Photoshop", "Adobe Illustrator", "Figma"],
    altText: {
      en: "Desktop homepage for redesign of Goodreads in Figma prototype",
      no: "Hjemmeside forslag av Goodreads i Figma prototype",
    },
    pillText: "",
  },
  {
    id: 2,
    title: "Galactic Gamers",
    shortDescription: {
      en: "Design solution for website created with HTML and CSS",
      no: "Designløsning for nettside laget med HTML og CSS",
    },
    description: {
      en: "Student assignment in HTML & CSS at Gokstad Akademiet. The assignment was to create a homepage for a fictive e-sports team called Galactic Gamers. They wanted a futuristic and responsive website, displaying their future tournaments for people to keep up. This website was carefully thought out, making sure semantics and DRY principle were followed.  ",
      no: "Studentoppgave i HTML & CSS hos Gokstad Akademiet. Oppgaven var å lage en hjemmeside for et fiktivt e-sportslag kalt Galactic Gamers. De ønsket en fremtidig og responsiv nettside, som viste deres fremtidige turneringer for å holde folk oppdatert. Denne nettsiden ble nøye tenkt gjennom, og det ble sikret at semantikk og DRY-prinsippet ble fulgt.  ",
    },
    img: galactic_gamers,
    demoUrl: "https://galactic-gamers.netlify.app",
    githubUrl: "https://github.com/tonjetj/galactic-gamers",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "CSS"],
    frameworks: [],
    technologies: ["VS Code", "Photoshop", "Netlify"],
    altText: {
      en: "Galactic Gamers homepage.",
      no: "Hjemmeside for Galactic Gamers.",
    },          
    pillText: "",
  },
  {
    id: 3,
    title: "Hakunamatoma",
    shortDescription: {
      en: "Redesign and prototype in Figma",
      no: "Redesign og prototype i Figma",
    },
    description:{
      en: "This was my student exam at Gokstad Akademiet for UX design. I had to create a prototype for desktop in Figma and redesign Matoma's homepage, www.hakunamatoma.com. Good user experience and UI were the two major focal points.  *All artwork and product photos in the design belongs to Matoma. ",
      no: "Dette var min studenteksamen hos Gokstad Akademiet for UX-design. Jeg måtte lage en prototype for desktop i Figma og redesigne Matomas hjemmeside, www.hakunamatoma.com. God brukeropplevelse og UI var de to viktige fokuspunktene.  *All kunstnerisk arbeid og produktfoto i designet tilhører Matoma. ",
    },
    img: matoma,
    demoUrl: "",
    githubUrl: "",
    figmaUrlDesktop:
      "https://www.figma.com/proto/SIetGABbZ0ajgx02T5PkTq/Eksamen---Design-og-brukergrensesnitt-1?node-id=94-318&t=OgZTxWOidBHEjEin-1",
    figmaUrlMobile: "",
    languages: [],
    frameworks: [],
    technologies: ["Figma", "Photoshop"],
    altText: {
      en: "Redesign for Hakunamatoma",
      no: "Redesign for Hakunamatoma",
    },
    pillText: "",
  },
  {
    id: 4,
    title: "Sildajazzen",
    shortDescription: {
      en: "Website created with HTML and CSS as part of an exam",
      no: "Nettside laget med HTML og CSS som en del av en eksamen",
    },
    description: {
      en: "This was my student exam at Gokstad Akademiet in HTML & CSS. The task was to code a website for a culture festival. I've made sure to give my code a semantical structure, follow the DRY principle, and making it more inclusive and user friendly with usage of necessary Aria attributes and media queries.",
      no: "Dette var min studenteksamen hos Gokstad Akademiet i HTML & CSS. Oppgaven var å kode en nettside for et kulturfestival. Jeg har sørget for at koden har en semantisk struktur, fulgt DRY-prinsippet, og gjort den mer inkluderende og brukervennlig med bruk av nødvendige Aria-attributter og media queries.",
    },
    img: sildajazz,
    demoUrl: "https://sildajazzen.netlify.app",
    githubUrl: "https://github.com/tonjetj/html-css-exam",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "CSS"],
    frameworks: [],
    technologies: ["Photoshop", "Netlify"],
    altText: {
      en: "A culture festival webpage called 'Sildajazzen'.",
      no: "En kulturfestival nettside kalt 'Sildajazzen'.",
    },
    pillText: "",
  },
  {
    id: 5,
    title: "Tind Bygg",
    shortDescription: {
      en: "Redesign and prototype with CMS usage in Framer",
      no: "Redesign og prototype med CMS-bruk i Framer",
    },
    description: {
      en: "This was my student exam at Gokstad Akademiet in Websites & Methodology. The task was to renew the website of the architect bureau Tind Bygg AS. I've made sure to modernize and give the site a stronger visual identity, but made sure to respect the hierarchal structure of their current site. New solutions to sort results has also been implemented. The site is made sure to follow user friendly solutions, respecting WCAG demands and add SEO description for each page.",
      no: "Dette var min studenteksamen hos Gokstad Akademiet i Websites & Methodology. Oppgaven var å fornye nettsiden til arkitektbureauet Tind Bygg AS. Jeg har sørget for å modernisere og gi nettstedet en sterkere visuell identitet, men har sørget for å respektere den hierarkiske strukturen til deres nåværende nettsted. Nye løsninger for å sortere resultater er også implementert. Nettstedet er sørget for å følge brukervennlige løsninger, respektere WCAG-krav og legge til SEO-beskrivelser for hver side.",
    },
    img: tind_bygg,
    demoUrl: "https://tindbygg.framer.website/",
    githubUrl: "",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: [],
    frameworks: ["Framer"],
    technologies: ["Photoshop"],
    altText: {
      en: "A new design solution for architect bureau called 'Tind Bygg'.",
      no: "En ny designløsning for arkitektbureauet kalt 'Tind Bygg'.",
    },
    pillText: "",
  },
  {
    id: 6,
    title: "H&M",
    shortDescription: {
      en: "Design solution to improve usability",
      no: "Designløsning for å forbedre brukervennlighet",
    },
    description: {
      en: "As a part of an exam in _ to find an existing website to user test and implement design changes where needed. H&M's website was my choice, due to having experiencing difficulties using it myself. I held a user test on 3 individual, all in different age groups and takes on their experience while using the page on a desktop.",
      no: "Som en del av en eksamen i _ å finne en eksisterende nettside for å teste brukere og implementere designendringer hvor det trengs. H&M's nettside var mitt valg, på grunn av å ha hatt problemer med å bruke den selv. Jeg holdt en brukertest på 3 individer, alle i forskjellige aldersgrupper og tok opp deres erfaring mens de brukte siden på en desktop.",
    },
    img: hm_eksamen,
    demoUrl: "",
    githubUrl: "",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: [],
    frameworks: ["Framer"],
    technologies: ["Photoshop"],
    altText: {
      en: "An improved design solution for better user experience on H&M's website.",
      no: "En forbedret designløsning for bedre brukeropplevelse på H&M's nettside.",
    },
    pillText: "",
  },
  {
    id: 7,
    title: "Portfolio",
    shortDescription: {en: "Personal portfolio in Framer", no: "Personlig portefølje i Framer", no: "Personlig portefølje i Framer"},
    description: {en: "Student assignment where I had to make a personal portfolio with Framer.", no: "Studentoppgave hvor jeg skulle lage en personlig portefølje med Framer."},
    img: framer_portfolio_v2,
    demoUrl: "https://tonjejenssen.framer.website/",
    githubUrl: "",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: [],
    frameworks: ["Framer"],
    technologies: ["Photoshop"],
    altText: {en: "A personal portfolio in Framer'.", no: "En personlig portefølje i Framer'."},
    pillText: "",
  },
];
