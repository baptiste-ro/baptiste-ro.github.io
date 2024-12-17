import type {
  NavBarLink,
  SocialLink,
  Identity,
  ParcoursPageContent,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
  Socials,
} from "./types/config";

export const identity: Identity = {
  name: "Royer Baptiste",
  logo: "/photo.jpg",
  email: "baptisteroyer74@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Accueil",
    url: "/",
  },
  {
    title: "Projets",
    url: "/projets",
  },
  {
    title: "Parcours",
    url: "/parcours",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/baptiste-ro",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:baptisteroyer74@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Baptiste Royer",
    description:
      "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: "",
  },
  role: "Etudiant",
  description:
    "Je suis un étudiant agé de 19 ans en BUT d'Informatique à l'IUT de Villeneuve d'Ascq. Bienvenue sur mon portfolio !",
  socialLinks: socialLinks,
  links: [
    {
      title: "Mes Projets",
      url: "/projets",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "Contact | Baptiste Royer",
    description:
      "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: "",
  },
  subtitle: "Comment me contacter",
  parcoursSubtitle: "Formations",
  about: {
    description: `

`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Voici la liste de mes contacts, au cas où vous souhaiteriez me joindre.`, // Markdown is supported
    items: [
      {
        title: "Email",
        company: {
          name: "baptisteroyer74@gmail.com",
          image: "/Gmail.png",
          url: "mailto:baptisteroyer74@gmail.com",
        },
        date: "2021 - Present",
      },
      {
        title: "Github",
        company: {
          name: "baptiste-ro",
          image: "/Github.png",
          url: "https://github.com/baptiste-ro",
        },
        date: "2019 - 2021",
      },
      {
        title: "Linkedin",
        company: {
          name: "Baptiste Royer",
          image: "/Linkedin.png",
          url: "www.linkedin.com/in/baptiste-royer-2a98472a1",
        },
        date: "2019 - 2021",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projets | Baptiste Royer",
    description: "Voici la liste des projets sur lesquels j'ai travaillé.",
    image: identity.logo,
    url: "",
  },
  subtitle: "Voici la liste des projets sur lesquels j'ai travaillé.",
  projects: [
    {
      title: "Algorithme de classification de données",
      description: "Projet de création d'algorithme visant à classer, selon certaines caractéristiques, des données à l'aide d'un jeu de données.",
      image: "/Classification.jpg",
      year: "2024",
      url: "https://gitlab.univ-lille.fr/sae302/2024/J3_SAE3.3",
    },
    {
      title: "Recherche du plus court itinéraire",
      description: "Projet visant à trouver le chemin le plus court parmi un graphe de routes, ainsi qu'un jeu de données. Ce jeu de données contient les valeurs des routes.",
      image: "/Knn.png",
      year: "2024",
      url: "https://gitlab.univ-lille.fr/sae2.01-2.02/2024/D4",
    },
    {
      title: "Quizemon",
      description: "Jeu de duel au tour par tour sur des sujets scholaires.",
      image: "/Quizemon.png",
      year: "2023",
      url: "https://github.com/Wyverpom/Quizemon",
    },
    {
      title: "Installation d'une Machine Virtuelle",
      description: "Projet visant à aider à l'installation d'une machine virtuelle sur un environnement Linux.",
      image: "/VM.png",
      year: "2023",
      url: "https://gitlab.univ-lille.fr/baptiste.royer.etu/rapport-sae-reseau",
    },
  ],
};
// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
    url: "",
  },
  subtitle: "Thoughts, stories and ideas.",
};

// About (/about)
export const parcoursPageContent: ParcoursPageContent = {
  seo: {
    title: "Parcours | Baptiste Royer",
    description:
      "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: "",
  },
  about: {
    description: `

`, // Markdown is supported
    image_l: {
      url: "/Contact.png",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Voici toutes les formations suivies lors de mes études.`, // Markdown is supported
    items: [
      {
        title: "BUT Informatique",
        company: {
          name: "IUT A de Villeneuve d'Ascq",
          image: "/IUT.png",
        },
        date: "2023 - 2026",
      },
      {
        title: "Baccalauréat Général",
        company: {
          name: "Lycée Beaupré",
          image: "/Lycee.png",
        },
        date: "2022 - 2023",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "baptisteroyer74@gmail.com",
    HREF: "mailto:baptisteroyer74@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "florinelef",
    HREF: "https://github.com/florinelef"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Florine Lefebvre",
    HREF: "https://www.linkedin.com/in/florine-lefebvre-309317313/",
  },
]