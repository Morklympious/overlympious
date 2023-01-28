<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import random from "shared/utilities/random";
    import { command } from "shared/stores/tmi.js";

    import flags from "./internal/flag-hex.js";
    

    export let text = "";

    $: split = text.split("");

    let flag = "";
    let showing = false;
    
    const flaggify = (type) => (flag = type);

    /** TODO: Make namespaced stores that look for a single command!! */
    $: if($command.namespace === "neon") {
        flaggify(...$command.parameters);
        console.log($command.parameters);
    }

    onMount(() => requestAnimationFrame(() => ((showing = true))));
</script>

{#if showing}
    <h1 class="neon" data-flag={flag} in:fade>
        {#each split as character, index}
        {@const colors = flags[flag]}
            <span
                style:--duration="{random([ 0, 20 ], { floor : false })}s"
                style:--delay="{random([ 0, 3 ])}s"
                style:--color="{colors ? colors[index % colors.length] : null}"
                style:--color-primary="{flag ? null : `#87c6c4`}"
                class="letter flicker"
                data-flickering="{random([ 0, 10 ], { floor : false }) > 6}">{character}</span>
        {/each}
    </h1>
{/if}
<style>

    .neon:not(.neon[data-flag=""]) {
        --color-text-shadow: white;
    }
    .letter {
        --color-text: #fff;
        --color-secondary : #e5f0ef;
        --color-text-shadow: var(var(--color-text-shadow), --color-primary);

        color: var(--color);

        text-shadow:
            0rem 0.4rem 0.01rem var(--color-primary),
            0.1rem 0rem 1.5rem var(--color-primary),
            0.2rem 0rem 1rem var(--color-secondary),
            0.2rem 0.3rem 10rem var(--color-secondary)
    }

    .flicker[data-flickering="true"] {
        animation: flicker var(--duration) ease infinite;
        animation-delay: var(--delay);
    }

    @keyframes blink {
        78% {
            color: inherit;
            text-shadow: inherit;
        }
        79%{
            color: #333;
        }
        80% {
            
            text-shadow: none;
        }
        81% {
            color: inherit;
            text-shadow: inherit;
        }
        82% {
            color: #333;
            text-shadow: none;
        }
        83% {
            color: inherit;
            text-shadow: inherit;
        }
        92% {
            color: #333;
            text-shadow: none;
        }
        92.5% {
            color: inherit;
            text-shadow: inherit;
        }
    }

    @keyframes flicker {
        0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
            opacity: .99;
        }

        20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
            opacity: 0.4;
        }
    }


</style>
