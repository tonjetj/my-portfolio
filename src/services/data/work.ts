import galactic_gamers from "../../assets/images/galactic-gamers.png";

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
};

export const WorkList: WorkData[] = [
  {
    id: 0,
    title: "Findings",
    description:
      "Findings is a website for an online NFT auction, where you can purchase and sell unique NFTs. The site is minimalistic with a dark yet vibrant color palette.",
    img: "",
    demoUrl: "",
    githubUrl: "",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "JavaScript"],
    frameworks: ["SASS", "Bootstrap v5.2"],
    technologies: ["VS Code", "Netlify"],
  },
  {
    id: 1,
    title: "Goodreads Redesign",
    description:
      "Redesign assignment on Goodreads for a UX-design course at Gokstad Akademiet.",
    img: "",
    demoUrl: "",
    githubUrl: "",
    figmaUrlDesktop:
      "https://www.figma.com/proto/tYrqaW3Sx2vxOC3ivc5WBr/Redesign-Goodreads?node-id=685-7165&t=PprxBHtj7woF7Osl-1",
    figmaUrlMobile:
      "https://www.figma.com/proto/tYrqaW3Sx2vxOC3ivc5WBr/Redesign-Goodreads?node-id=273-28&t=PprxBHtj7woF7Osl-1&starting-point-node-id=273%3A28&show-proto-sidebar=1",
    languages: [],
    frameworks: [],
    technologies: ["Photoshop", "Adobe Illustrator", "Figma"],
  },
  {
    id: 2,
    title: "Galactic Gamers",
    description:
      "Student assignment for a course on Gokstad Akademiet. Site is developed with HTML and CSS.",
    img: galactic_gamers,
    demoUrl: "https://galactic-gamers.netlify.app",
    githubUrl: "https://github.com/tonjetj/galactic-gamers",
    figmaUrlDesktop: "",
    figmaUrlMobile: "",
    languages: ["HTML", "CSS"],
    frameworks: [],
    technologies: ["VS Code", "Photoshop", "Netlify"],
  },
];
