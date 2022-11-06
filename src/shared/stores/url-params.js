import { readable } from "svelte/store";
import { browser } from "$app/environment";

const configuration = readable(new Map(), (set) => {
    if(!browser) {
        set(new Map());
        
        return;
    }

    const { search } = window.location ? window.location : false;

    const usp = new URLSearchParams(search);

    set(usp);
});


export default configuration;
