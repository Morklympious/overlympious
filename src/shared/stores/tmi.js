import tmi from "tmi.js";
import { readable, derived, writable } from "svelte/store";


const commandables = new Set([ "!neon" ]);

const client = new tmi.Client({
	channels : [ "morklympious" ],
});

client.connect();

/** A store for every chat message in a stream instance */
const chat = readable([], (set) => {
     const everything = [];

     client.on("message", (channel, tags, message, self) => {
         everything.unshift({ tags, message, self });

         set(everything);
     });
});

/** A derived store for the most recent chat object */
const recent = derived(chat, ([ _recent ]) => (_recent ? _recent : { tags : {}, message : "", self : false }));

/** A derived store for the most recent command given */
const command = derived(recent, ($recent, set) => {
     const { message } = $recent;

     const [ command, ...rest ] = message.split(" ");

     if(!$recent || !commandables.has(command)) {
          return;
     }

     console.log({
          namespace  : command.replace("!", ""),
          parameters : rest,
     });

     set({
          namespace  : command.replace("!", ""),
          parameters : rest,
     });
}, { namespace : null, parameters : [] });

export { command, recent, chat };
