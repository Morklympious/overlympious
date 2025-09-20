import wrr from "wrr";

/** Hey kid, ya wanna use variables in globs? https://www.npmjs.com/package/vite-plugin-dynamic-import */
 /** Candidates we care about */
 const candidates = import.meta.glob("static/assets/video/sunny/*.mp4");

/** NOTE: This is useful if you want rarity somehow */
const weighted = Object.keys(candidates).map((filename) => ({
    item   : filename.replace("static/", ""),
    weight : 1,
}));

const random = wrr(weighted);

export { random };

export default candidates;
