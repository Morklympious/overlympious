const art = import.meta.glob("static/assets/art/graffiti/*.png");

const normalized = Object.keys(art).map((path) => path.replace("/static", ""));

export default normalized;
