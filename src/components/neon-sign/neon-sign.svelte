<script>
    import random from "shared/utilities/random";

    export let text = "";

    $: split = text.split("");
</script>

<h1 class="neon">
    {#each split as character}
        <span 
            class="letter flicker"
            data-flickering="{random([ 0, 10 ], { floor : false }) > 6}"
            style:--duration="{random([ 0, 20 ], { floor : false })}s"
            style:--delay="{random([ 0, 3 ])}s"
        >{character}</span>
    {/each}
    </h1>
<style>

    .letter {
        --color-text: #fff;
        --color-primary: #87c6c4;
        --color-secondary : #e5f0ef;
        /* --color-primary: red;
        --color-secondary: pink; */

        color: var(--color-text);

        text-shadow: 
            0rem 0.4rem 0.01rem var(--color-primary),
            0.1rem 0rem 1.5rem var(--color-primary),
            0.2rem 0rem 4.5rem var(--color-primary),
            0.3rem 0.1rem 12rem var(--color-primary),
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