

/**
 * Server side rendering means idempotence, which means
 * if our ass wants a new video URL each time, we're shit out of luck
 * because if it's SSR, then it comes down the same every time and gets
 * hydrated by the client, meaning it has the same GOD DAMN URL, and that
 * WON'T CHANGE REGARDLESS OF HOW BAD I WANT IT TO.
 *
 * So this is disabled.
 */
export const ssr = false;

export const load = ({ params }) => ({ });


