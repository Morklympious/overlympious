<script>
    export let text = "";
    
    $: split = text.split("");
</script>

<h1 class="neon">
    {#each split as character}
        <span 
            class="letter flicker"
            data-flickering="{Math.floor(Math.random() * 10) > 6}"
            style:--duration="{Math.floor(Math.random() * 20)}s"
            style:--delay="{Math.floor(Math.random() * 3)}s"
        >{character}</span>
    {/each}
    </h1>
<style>

    .letter {
        /* --color-primary: #87c6c4;
        --color-secondary : #e5f0ef; */
        --color-primary: red;
        --color-secondary: pink;

        text-shadow: 
            0rem 0.4rem 0.01rem var(--color-primary),
            0.1rem 0rem 0.5rem var(--color-primary),
            0.2rem 0rem 2.5rem var(--color-primary),
            0.3rem 0.1rem 5.5rem var(--color-primary),
            0.2rem 0rem 1rem var(--color-secondary),
            0.2rem 0.3rem 10rem var(--color-secondary)
        /* text-shadow: 
            1px 0px 4px #FFD5FF, 
            2px 0px 4px #FFD5FF, 
            3px 0px 4px #FFD5FF, 
            2px 0px 3px #D42CCA, 
            2px 3px 15px #D42CCA, 
            2px 0px 15px, 
            5px 0px 125px, 
            20px 0vw 200px #D42CCA,
            40px 0vw 200px #D42CCA */
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