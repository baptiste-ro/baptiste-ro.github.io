/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CjVB3AqC.mjs';
import { c as $$Icon, i as identity, h as homePageContent, $ as $$Layout } from '../chunks/Layout_CGiImaoc.mjs';
import { a as getCollection } from '../chunks/_astro_content_C1DYyt_0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div> <p>${title}</p> </div> </a>`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/components/SocialLink.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { text, href, external, noAnchor } = Astro2.props;
  return renderTemplate`${!noAnchor ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")} class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></a>` : renderTemplate`<div class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></div>`}`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/components/Link.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  posts.sort((a, b) => {
    const dateA = new Date(a.data.pubDate).getTime();
    const dateB = new Date(b.data.pubDate).getTime();
    return dateB - dateA;
  });
  posts.splice(2);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": homePageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">${identity.name}</h1> <p class="opacity-60 mb-10">${homePageContent.role}</p> <div class="flex flex-col min-[520px]:flex-row gap-6 mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": identity.logo, "alt": identity.name, "width": 100, "height": 100, "class": "rounded-full" })} <div class="group flex flex-col justify-center gap-2 w-fit"> ${homePageContent.socialLinks.map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", $$SocialLink, { "title": link.title, "url": link.url, "icon": link.icon, "external": link.external })}`)} </div> </div> <p class="max-w-md mb-8"> ${homePageContent.description} </p> <div class="flex items-center gap-4 group w-fit"> ${homePageContent.links.map((link) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "text": link.title, "href": link.url, "external": link.external })}`)} </div> </section> <br> <br> <section class="mx-auto max-w-screen-sm p-5 space-y-24 pb-16"> <p>&bull; Etant étudiant en 2e année de BUT d'Informatique, avec une spécialisation en réalisation d'applications, je suis à la recherche d'une alternance en développement pour ma troisième année. C'est avec enthousiasme que je souhaite faire croître mon expérience dans le domaine professionnel, au sein d'une entreprise à laquelle je souhaiterais également être utile.</p> <p>&bull; Tout au long de mon parcours académique et personnel, j’ai développé de solides compétences en informatique, qui me permettent de m’adapter rapidement à de nouveaux défis, qu’il s’agisse de maîtriser de nouveaux langages, ou d’expérimenter des méthodes de travail innovantes. Durant ma formation, j’ai également eu l’opportunité de cultiver des qualités essentielles telles que le travail en équipe, la communication, la patience, la rigueur et l’empathie, notamment grâce à de nombreux projets collaboratifs. L’apprentissage de la méthode agile dans le cadre du développement d’un jeu au sein de mon BUT Informatique m’a permis de me préparer à intégrer et contribuer efficacement à une équipe en entreprise.</p> <p>&bull; Dans la continuité de mon choix de spécialisation en BUT, je souhaite effectuer mon alternance dans une entreprise spécialisée en développement informatique, conception logicielle et maintenance applicative, plutôt que dans le domaine des réseaux. Je suis également curieuse de découvrir de nouveaux domaines et prête à explorer des champs encore inexplorés dans ma formation.</p> </section> <section class="mt-20 max-w-2xl mx-auto px-6"> <h2 class="mb-8">Derniers Projets</h2> <div class="text-center"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/projets/${post.slug}`, "href")} class=" sm:flex sm:flex-row sm:justify-between sm:gap-6 post"> <div class="mt-4 sm:my-auto"> <p class="opacity-60 mb-2"> ${post.data.pubDate.toLocaleDateString()} </p> <h3 class="font-medium hover-underline">${post.data.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${post.data.description}</p> </div> </a>`)} </div> <a href="/projets" class="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity">Tout voir</a> </section> ` })}`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/index.astro", void 0);

const $$file = "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
