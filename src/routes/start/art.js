const art = import.meta.glob("$lib/images/*.png");

const keys = Object.keys(art);

const normalized = keys.map((path) => path.replace("/static", ""));

export default normalized;
