import wrr from "wrr";

/** Hey kid, ya wanna use variables in globs? https://www.npmjs.com/package/vite-plugin-dynamic-import */
 /** Candidates we care about */
 const candidates = import.meta.glob("$lib/brothergram/*.mp4");
 

/** NOTE: This is useful if you want rarity somehow */
const weighted = Object.keys(candidates).map((value) => ({
    item   : value,
    weight : 1,
}));

const random = wrr(weighted);

export { random };
export default candidates;
