import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DqHiYQv3.mjs';
import { manifest } from './manifest_usfu6ntF.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/parcours.astro.mjs');
const _page3 = () => import('./pages/projets/_slug_.astro.mjs');
const _page4 = () => import('./pages/projets.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/parcours.astro", _page2],
    ["src/pages/projets/[slug].astro", _page3],
    ["src/pages/projets.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/dist/client/",
    "server": "file:///mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/dist/server/",
    "host": true,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
