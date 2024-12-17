import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Algorithme de classification de données","pubDate":"2024-01-19T00:00:00.000Z","description":"Projet de création d'algorithme visant à classer, selon certaines caractéristiques, des données à l'aide d'un jeu de données.","author":"Baptiste Royer","image":{"url":"/Classification.jpg","alt":"Test"},"url":"https://gitlab.univ-lille.fr/sae302/2024/J3_SAE3.3","minutesRead":"0 min read"};
				const file = "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/Classification.md";
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
