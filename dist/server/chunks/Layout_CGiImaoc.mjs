import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, b as renderComponent, d as createAstro, u as unescapeHTML, F as Fragment, i as renderHead, e as renderSlot } from './astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_CjVB3AqC.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
/* empty css                           */


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$1 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/node_modules/astro-icon/components/Icon.astro", void 0);

const identity = {
  name: "Royer Baptiste",
  logo: "/photo.jpg",
  email: "baptisteroyer74@gmail.com"
};
const navBarLinks = [
  {
    title: "Accueil",
    url: "/"
  },
  {
    title: "Projets",
    url: "/projets"
  },
  {
    title: "Parcours",
    url: "/parcours"
  },
  {
    title: "Contact",
    url: "/contact"
  }
];
const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/baptiste-ro",
    icon: "mdi:github",
    external: true
  },
  {
    title: "Mail",
    url: "mailto:baptisteroyer74@gmail.com",
    icon: "mdi:email"
  }
];
const homePageContent = {
  seo: {
    title: "Baptiste Royer",
    description: "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: ""
  },
  role: "Etudiant",
  description: "Je suis un étudiant agé de 19 ans en BUT d'Informatique à l'IUT de Villeneuve d'Ascq. Bienvenue sur mon portfolio !",
  socialLinks,
  links: [
    {
      title: "Mes Projets",
      url: "/projets"
    },
    {
      title: "Contact",
      url: "/contact"
    }
  ]
};
const aboutPageContent = {
  seo: {
    title: "Contact | Baptiste Royer",
    description: "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: ""
  },
  subtitle: "Comment me contacter",
  parcoursSubtitle: "Formations",
  about: {
    description: `

`,
    // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture"
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture"
    }
  },
  work: {
    description: `Voici la liste de mes contacts, au cas où vous souhaiteriez me joindre.`,
    // Markdown is supported
    items: [
      {
        title: "Email",
        company: {
          name: "baptisteroyer74@gmail.com",
          image: "/Gmail.png",
          url: "mailto:baptisteroyer74@gmail.com"
        },
        date: "2021 - Present"
      },
      {
        title: "Github",
        company: {
          name: "baptiste-ro",
          image: "/Github.png",
          url: "https://github.com/baptiste-ro"
        },
        date: "2019 - 2021"
      },
      {
        title: "Linkedin",
        company: {
          name: "Baptiste Royer",
          image: "/Linkedin.png",
          url: "www.linkedin.com/in/baptiste-royer-2a98472a1"
        },
        date: "2019 - 2021"
      }
    ]
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    // Markdown is supported
    links: socialLinks
  }
};
const projectsPageContent = {
  seo: {
    title: "Projets | Baptiste Royer",
    description: "Voici la liste des projets sur lesquels j'ai travaillé.",
    image: identity.logo,
    url: ""
  },
  subtitle: "Voici la liste des projets sur lesquels j'ai travaillé.",
  projects: [
    {
      title: "Algorithme de classification de données",
      description: "Projet de création d'algorithme visant à classer, selon certaines caractéristiques, des données à l'aide d'un jeu de données.",
      image: "/Classification.jpg",
      year: "2024",
      url: "https://gitlab.univ-lille.fr/sae302/2024/J3_SAE3.3"
    },
    {
      title: "Recherche du plus court itinéraire",
      description: "Projet visant à trouver le chemin le plus court parmi un graphe de routes, ainsi qu'un jeu de données. Ce jeu de données contient les valeurs des routes.",
      image: "/Knn.png",
      year: "2024",
      url: "https://gitlab.univ-lille.fr/sae2.01-2.02/2024/D4"
    },
    {
      title: "Quizemon",
      description: "Jeu de duel au tour par tour sur des sujets scholaires.",
      image: "/Quizemon.png",
      year: "2023",
      url: "https://github.com/Wyverpom/Quizemon"
    },
    {
      title: "Installation d'une Machine Virtuelle",
      description: "Projet visant à aider à l'installation d'une machine virtuelle sur un environnement Linux.",
      image: "/VM.png",
      year: "2023",
      url: "https://gitlab.univ-lille.fr/baptiste.royer.etu/rapport-sae-reseau"
    }
  ]
};
const parcoursPageContent = {
  seo: {
    title: "Parcours | Baptiste Royer",
    description: "Étudiant en informatique à Villeneuve d'Ascq qui aime coder un peu de tout.",
    image: identity.logo,
    url: ""
  },
  about: {
    description: `

`,
    // Markdown is supported
    image_l: {
      url: "/Contact.png",
      alt: "Left Picture"
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture"
    }
  },
  work: {
    description: `Voici toutes les formations suivies lors de mes études.`,
    // Markdown is supported
    items: [
      {
        title: "BUT Informatique",
        company: {
          name: "IUT A de Villeneuve d'Ascq",
          image: "/IUT.png"
        },
        date: "2023 - 2026"
      },
      {
        title: "Baccalauréat Général",
        company: {
          name: "Lycée Beaupré",
          image: "/Lycee.png"
        },
        date: "2022 - 2023"
      }
    ]
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`,
    // Markdown is supported
    links: socialLinks
  }
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo } = Astro2.props;
  return renderTemplate` <html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${seo.title}</title><meta name="description"${addAttribute(seo.description, "content")}><meta property="og:title"${addAttribute(seo.title, "content")}><meta property="og:description"${addAttribute(seo.description, "content")}><meta property="og:image"${addAttribute(seo.image, "content")}>${renderHead()}</head> <body> <header> <div class="px-6 py-6 max-w-2xl mx-auto flex items-center justify-between"> <a href="/"> ${renderComponent($$result, "Image", $$Image, { "src": identity.logo, "alt": "Logo", "width": 50, "height": 100, "class": "w-[50px] h-[50px] object-cover" })} </a> <nav class="ml-auto mr-6 sm:m-0"> <ul class="hidden sm:flex sm:items-center sm:gap-2"> ${navBarLinks.map((link) => renderTemplate`<li> <a class="group px-4 py-2 rounded-lg hover:bg-gray-bg opacity-60 hover:opacity-100 transition-all"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`)} </ul> <div class="relative sm:hidden"> <button id="link-menu-button" class="relative font-medium opacity-60 p-4">Menu <span id="open-indicator">+</span></button> <div id="link-menu" class="absolute p-2 right-0 bg-gray-bg rounded-lg w-44 transition-opacity ease-in-out duration-300 opacity-0 z-40"> <ul> ${navBarLinks.map((link) => renderTemplate`<li> <a class="block pl-4 py-3"${addAttribute(link.url, "href")}${addAttribute(link.external ? "_blank" : "_self", "target")}> ${link.title} </a> </li>`)} </ul> </div> </div> </nav> <div> <a${addAttribute(`mailto:${identity.email}`, "href")} class="block p-2 opacity-60 hover:opacity-100 transition-opacity" aria-label="Email"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:email", "width": 20, "height": 20 })} </a> </div> </div> </header> <main class="mb-32"> ${renderSlot($$result, $$slots["default"])} </main> <footer></footer> </body></html>`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $, aboutPageContent as a, projectsPageContent as b, $$Icon as c, homePageContent as h, identity as i, parcoursPageContent as p };