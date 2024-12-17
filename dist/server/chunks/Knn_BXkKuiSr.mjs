import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Recherche du plus court itinéraire","pubDate":"2024-06-19T00:00:00.000Z","description":"Projet visant à trouver le chemin le plus court parmi un graphe de routes, ainsi qu'un jeu de données. Ce jeu de données contient les valeurs des routes.","author":"Baptiste Royer","image":{"url":"/Knn.png","alt":"VM"},"url":"https://gitlab.univ-lille.fr/sae2.01-2.02/2024/D4","minutesRead":"0 min read"};
				const file = "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/content/posts/Knn.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
