import tmi from "tmi.js";
import { readable, derived, writable } from "svelte/store";

const TRIGGER_COMMAND = "!mork-";

const commandables = new Set([ "flag" ]);

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

     if(!$recent || !message.startsWith(TRIGGER_COMMAND)) {
          return;
     }

     const [ trigger, inputs ] = message.split(TRIGGER_COMMAND);
     const [ namespace, ...rest ] = inputs.split("-");

     set({
          namespace,
          parameters : rest,
     });
}, { namespace : null, parameters : [] });

export { command, recent, chat };
