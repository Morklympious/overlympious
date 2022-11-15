<script>
    import random from "shared/utilities/random";

    export let text = "";

    $: split = text.split("");

    const flag = "";

    const flags = {
        trans       : [ "#55CDFC", "#F7A8B8", "#FFFFFF", "#F7A8B8", "#55CDFC"  ],
        asexual     : [ "#000000", "#A4A4A4", "#FFFFFF", "#810081" ],
        pansexual   : [ "#FF1B8D", "#FFDA00", "#1BB3FF" ],
        bisexual    : [ "#D60270", "#9B4F96", "#0038A8" ],
        nonbinary   : [ "#FFF430", "#FFFFFF", "#9C59D1", "#000000" ],
        lesbian     : [ "#D52D00", "#EF7627", "#FF9A56", "#FFFFFF", "#D162A4", "#B55690", "#A30262" ],
        lgbt        : [ "#FF0018", "#FFA52C", "#FFFF41", "#008018", "#0000F9", "#86007D" ],
        aromantic   : [ "#3AA63F", "#A8D47A", "#FFFFFF", "#AAAAAA", "#000000" ],
        genderqueer : [ "#B77FDD", "#FFFFFF", "#48821E" ],
        genderfluid : [ "#FF76A4", "#FFFFFF", "#C011D7", "#000000", "#2F3CBE" ],
        agender     : [ "#010204", "#BCC4C6", "#E9EDEE", "#B8F483", "#E9EDEE", "#BCC4C6", "#010204" ],
    };
</script>

<h1 class="neon" data-flag={flag}>
    {#each split as character, index}
    {@const colors = flags[flag]}
        <span 
            class="letter flicker"
            data-flickering="{random([ 0, 10 ], { floor : false }) > 6}"
            style:--duration="{random([ 0, 20 ], { floor : false })}s"
            style:--delay="{random([ 0, 3 ])}s"
            style:--color="{colors ? colors[index % colors.length] : null}">{character}</span>
    {/each}
    </h1>
<style>

    .letter {
        --color-text: #fff;
        --color-primary: #87c6c4;
        --color-secondary : #e5f0ef;
        /* --color-primary: red;
        --color-secondary: pink; */

        color: var(--color);

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