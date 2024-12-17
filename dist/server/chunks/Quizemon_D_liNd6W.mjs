import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_Deeqg--D.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Quizemon","pubDate":"2024-01-19T00:00:00.000Z","description":"Jeu de duel au tour par tour sur des sujets scholaires","author":"Baptiste Royer","image":{"url":"/photo.jpg","alt":"Test"},"url":"https://github/baptiste_ro/Quizemon","minutesRead":"0 min read"};
				const file = "/home/infoetu/baptiste.royer.etu/BUT2/Semestre 1/Communication/site/src/content/posts/Quizemon.md";
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
