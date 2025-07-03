<script>
     import { waapi } from "animejs";
    import BadgeRibbon from "components/badge-ribbon/badge-ribbon.svelte";	

    const { data } = $props();

    const start = () => {
        waapi.animate(".audio", {
            translateX: "10vw",
            duration : 10000,
            onComplete : () => {}
        });
        waapi.animate(".ribbon", {
            scaleX : 50,
            duration : 1000,
            onComplete : () => {}
        });
    };

    const finished = start;
</script>

<style>
    @keyframes breathe {
        0%, 100% {
            color: inherit;
        }

        50% {
            color: var(--color-mork-secondary);
        }
    }

    .page {
        font-family: "Quantify";
        display: flex;

        justify-content: center;
        align-items: center;

        height: 100vh;
        width: 100vw;

        /** Remove when you ship, you fuck. */
        background-color: var(--color-dark, #000);

        color: var(--color-light);
    }

    .container {
        aspect-ratio: 1 / 1;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .medal {
        font-size: var(--size-relative-1)
    }

    .ribbon-container {
        width: 100%;
        height: 100%;
    }
    
    .ribbon {
        width: 1rem;
        
        background-color: aquamarine;
        position: absolute;
        transform-origin: left;
    }
</style>

{#snippet front()}
    <div class="container medal"> DIVORCED DAD ROCK </div>
{/snippet}

{#snippet back()}
    <!-- TODO: Animate better you fuck -->
    <div class="ribbon-container">
        <div class="container audio"></div>
        <div class="ribbon"></div>
    </div>
{/snippet}

<!-- <h1 class="title animation-breathe">BROTHERGRAM</h1> -->
<div class="page">
    <BadgeRibbon {front} {back} {finished}/>
</div>