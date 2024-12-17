import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BGF_x5kn.mjs';
import 'es-module-lexer';
import { j as decodeKey } from './chunks/astro/server_Deeqg--D.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/contact.CIg-Irjy.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/contact.CIg-Irjy.css"}],"routeData":{"route":"/parcours","isIndex":false,"type":"page","pattern":"^\\/parcours\\/?$","segments":[[{"content":"parcours","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/parcours.astro","pathname":"/parcours","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/contact.CIg-Irjy.css"}],"routeData":{"route":"/projets/[slug]","isIndex":false,"type":"page","pattern":"^\\/projets\\/([^/]+?)\\/?$","segments":[[{"content":"projets","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/projets/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/contact.CIg-Irjy.css"}],"routeData":{"route":"/projets","isIndex":false,"type":"page","pattern":"^\\/projets\\/?$","segments":[[{"content":"projets","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projets.astro","pathname":"/projets","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/contact.CIg-Irjy.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/projets/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projets/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/parcours.astro",{"propagation":"none","containsHead":true}],["/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/pages/projets.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/parcours@_@astro":"pages/parcours.astro.mjs","\u0000@astro-page:src/pages/projets/[slug]@_@astro":"pages/projets/_slug_.astro.mjs","\u0000@astro-page:src/pages/projets@_@astro":"pages/projets.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_usfu6ntF.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Classification.md?astroContentCollectionEntry=true":"chunks/Classification_qBVk6C-S.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Knn.md?astroContentCollectionEntry=true":"chunks/Knn_BfqTTUvY.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Quizemon.md?astroContentCollectionEntry=true":"chunks/Quizemon_Cw0uZOI8.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/VM.md?astroContentCollectionEntry=true":"chunks/VM_flbMvIQZ.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Classification.md?astroPropagatedAssets":"chunks/Classification_BkRTWzty.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Knn.md?astroPropagatedAssets":"chunks/Knn_CSJT07Hg.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Quizemon.md?astroPropagatedAssets":"chunks/Quizemon_BUfuL29v.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/VM.md?astroPropagatedAssets":"chunks/VM_DQfVHKDh.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Classification.md":"chunks/Classification_f3qV39NQ.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Knn.md":"chunks/Knn_cAjfFwL1.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Quizemon.md":"chunks/Quizemon_B_S4egRj.mjs","/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/VM.md":"chunks/VM_DxxJXdXg.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Byshf39-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/contact.CIg-Irjy.css","/Classification.jpg","/Contacts.png","/Github.png","/Gmail.png","/IUT.png","/Knn.png","/Linkedin.png","/Lycee.png","/Quizemon.png","/VM.png","/demo-1.jpg","/demo-2.jpg","/favicon.svg","/logo.webp","/photo.jpg","/fonts/InterVariable.woff2"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"9SgNhO9+klPVL4jSxSiGc5jWIABCTjQA8y9/B9IQxj4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
