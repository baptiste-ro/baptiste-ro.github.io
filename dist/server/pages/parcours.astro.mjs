/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as createAstro } from '../chunks/astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import { p as parcoursPageContent, $ as $$Layout } from '../chunks/Layout_B00_tB81.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_CVYUXSGw.mjs';
import { M as Markdown } from '../chunks/component_CgdfdVUf.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Item = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Item;
  const { title, company, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="py-3 flex items-center justify-between border rounded-xl p-3"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover" })} <div> <h3 class="font-medium">${title}</h3> <p class="text-sm opacity-60">${company.name}</p> </div> </div> <p class="text-sm opacity-60">${date}</p> <div></div></div>`;
}, "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/components/Item.astro", void 0);

const $$Parcours = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": parcoursPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Parcours</h1> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Formations</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Markdown", Markdown, { "of": parcoursPageContent.work.description })} </div> <div class="grid grid-cols-1 group"> ${parcoursPageContent.work.items.map((item) => renderTemplate`${renderComponent($$result2, "Item", $$Item, { ...item })}`)} </div> </div> </section> ` })}`;
}, "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/parcours.astro", void 0);

const $$file = "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/parcours.astro";
const $$url = "/parcours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Parcours,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
