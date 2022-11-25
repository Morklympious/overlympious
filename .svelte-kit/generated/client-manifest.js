export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')];

			export const server_loads = [];

			export const dictionary = {
	"/": [2],
	"/alleyway": [3],
	"/brb": [4],
	"/debug": [5],
	"/start": [6]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};