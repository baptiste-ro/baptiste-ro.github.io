import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Installation d'une Machine Virtuelle","pubDate":"2024-06-19T00:00:00.000Z","description":"Projet visant à aider à l'installation d'une machine virtuelle sur un environnement Linux.","author":"Baptiste Royer","image":{"url":"/VM.png","alt":"VM"},"url":"https://gitlab.univ-lille.fr/baptiste.royer.etu/rapport-sae-reseau","minutesRead":"0 min read"};
				const file = "/mnt/c/Users/Utilisateur/Desktop/Cours/BUT2/Communication/astro-minimal-portfolio-template-main/src/content/posts/VM.md";
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
