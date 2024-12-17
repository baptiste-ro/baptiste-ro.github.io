/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from '../chunks/astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import { a as aboutPageContent, $ as $$Layout } from '../chunks/Layout_CGiImaoc.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CjVB3AqC.mjs';
import { M as Markdown } from '../chunks/component_CgdfdVUf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ResumeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResumeItem;
  const { title, company, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(company.url, "href")} class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity border rounded-xl p-3"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover" })} <div> <h3 class="font-medium">${title}</h3> <p class="text-sm opacity-60">${company.name}</p> </div> </div> <p class="text-sm opacity-60">${date}</p> </a> <br>`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/components/ResumeItem.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Contact</h1> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <div> <div class="mb-6"> ${renderComponent($$result2, "Markdown", Markdown, { "of": aboutPageContent.work.description })} </div> <div class="grid grid-cols-1 group"> ${aboutPageContent.work.items.map((item) => renderTemplate`${renderComponent($$result2, "Item", $$ResumeItem, { ...item })}`)} </div> </div> </section> ` })}`;
}, "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/contact.astro", void 0);

const $$file = "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
