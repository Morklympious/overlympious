import random from "just-random";

const vidya = import.meta.glob("assets/**/*.mp4");

console.log(Object.keys(vidya));

const anything = () => random(Object.keys(vidya)).replace("/static/", "");

export { anything };
export default vidya;
