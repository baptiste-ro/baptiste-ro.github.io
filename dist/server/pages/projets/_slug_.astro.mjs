/* empty css                                      */
import { c as createComponent, r as renderTemplate, b as renderComponent, d as createAstro, m as maybeRenderHead, a as addAttribute } from '../../chunks/astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import { $ as $$Layout, i as identity } from '../../chunks/Layout_B00_tB81.mjs';
import { g as getEntry } from '../../chunks/_astro_content_CnuUvwsO.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../../chunks/_astro_assets_CVYUXSGw.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("posts", slug);
  if (!entry) {
    return Astro2.redirect("/projets");
  }
  const { Content, headings, remarkPluginFrontmatter } = await entry.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title: entry.data.title,
    description: entry.data.description,
    image: entry.data.image.url,
    url: entry.data.url
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-4">${entry.data.title}</h1> <p class="opacity-60 mb-6"> ${entry.data.description} </p> <div class="flex gap-4 mb-6"> <div> <p class="font-medium">${identity.name}</p> <p class="opacity-60"> ${entry.data.pubDate.toLocaleDateString()} · ${remarkPluginFrontmatter.minutesRead} </p> </div> </div> <a${addAttribute(entry.data.url, "href")} class="">${entry.data.url}</a> <article class="prose prose-invert prose-a:text-blue-300 prose-a:underline-offset-4 prose-headings:mb-2 prose-p:text-[#b3b3b3]"> <br> ${renderComponent($$result2, "Image", $$Image, { "src": entry.data.image.url, "alt": entry.data.image.url, "width": 800, "height": 500, "class": "rounded-lg w-[800px] h-[500px] object-cover" })} ${renderComponent($$result2, "Content", Content, {})} </article> </section> ` })}`;
}, "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/projets/[slug].astro", void 0);

const $$file = "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/pages/projets/[slug].astro";
const $$url = "/projets/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
