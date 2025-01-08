import galactic_gamers from "../../assets/images/galactic-gamers.jpg";
import goodreads from "../../assets/images/goodreads.jpg";
import findings from "../../assets/images/findings.png";
import conscious from "../../assets/images/conscious.png";
// import sildajazz from "../../assets/images/sildajazz.jpg";

export type WorkData = {
  id: number;
  title: string;
  description: string;
  img?: string;
  demoUrl: string;
  githubUrl: string;
  figmaUrlDesktop: string;
  figmaUrlMobile: string;
  languages: string[];
  frameworks: string[];
  technologies: string[];
  altText: string;
};

export const WorkList: WorkData[] = [
  {
    id: 0,
    title: "Conscious Coffee",
    description:
      "This was a student assignment for a HTML & CSS course at Noroff. Conscious Coffee is a website selling ecologically produced coffee. ",
    img: conscious,
    demoUrl: "https://consciousisthecoffee.netlify.app",
    githubUrl: "https://github.com/tonjetj/conscious-coffee",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "CSS", "JavaScript"],
    frameworks: [],
    technologies: ["VS Code", "Netlify"],
    altText: "Homepage of Conscious Coffee.",
  },
  {
    id: 1,
    title: "Findings",
    description:
      "Findings is a website for an online NFT auction, where you can purchase and sell unique NFTs. The site is minimalistic with a dark yet vibrant color palette.",
    img: findings,
    demoUrl: "",
    githubUrl: "https://github.com/tonjetj/2022-semester-project",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "JavaScript"],
    frameworks: ["SASS", "Bootstrap v5.2"],
    technologies: ["VS Code", "Netlify"],
    altText: "Homepage of Findings.",
  },
  {
    id: 2,
    title: "Goodreads Redesign",
    description:
      "Redesign assignment on Goodreads for a UX-design course at Gokstad Akademiet.",
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
    altText: "Desktop homepage for redesign of Goodreads in Figma prototype",
  },
  {
    id: 3,
    title: "Galactic Gamers",
    description:
      "Student assignment in HTML & CSS at Gokstad Akademiet. The assignment was to create a homepage for a fictive e-sports team called Galactic Gamers. They wanted a futuristic and responsive website, displaying their future tournaments for people to keep up. This website was carefully thought out, making sure semantics and DRY principle were followed.  ",
    img: galactic_gamers,
    demoUrl: "https://galactic-gamers.netlify.app",
    githubUrl: "https://github.com/tonjetj/galactic-gamers",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "CSS"],
    frameworks: [],
    technologies: ["VS Code", "Photoshop", "Netlify"],
    altText: "Galactic Gamers homepage.",
  },
  // {
  //   id: 4,
  //   title: "Design & user interface exam",
  //   description:
  //     "This was my student exam at Gokstad Akademiet for UX design. I had to create a prototype for desktop in Figma and redesign Matoma's homepage, www.hakunamatoma.com. Good user experience and UI were the two major focal points.  *All artwork and product photos in the design belongs to Matoma. ",
  //   img: "",
  //   demoUrl: "",
  //   githubUrl: "",
  //   figmaUrlDesktop:
  //     "",
  //   figmaUrlMobile: "",
  //   languages: [],
  //   frameworks: [],
  //   technologies: ["Figma", "Photoshop"],
  //   altText: "Redesign for Hakunamatoma",
  // },
  // {
  //   id: 5,
  //   title: "Exam in HTML & CSS",
  //   description:
  //     "This was my student exam at Gokstad Akademiet in HTML & CSS. The task was to code a website for a culture festival. I've made sure to give my code a semantical structure, follow the DRY principle, and making it more inclusive and user friendly with usage of necessary Aria attributes and media queries.",
  //   img: sildajazz,
  //   demoUrl: "",
  //   githubUrl: "",
  //   figmaUrlDesktop: "",
  //   figmaUrlMobile: "",
  //   languages: ["HTML", "CSS"],
  //   frameworks: [],
  //   technologies: ["Photoshop", "Netlify"],
  //   altText: "A culture festival webpage called 'Sildajazzen'.",
  // },
];
