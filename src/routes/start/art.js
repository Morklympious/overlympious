const art = import.meta.glob("assets/art/graffiti/*.png");

const keys = Object.keys(art);

const normalized = keys.map((path) => path.replace("/static", ""));

export default normalized;
