<script>
    import { waapi } from "animejs";

    let { front, back } = $props();

    /** @type {HTMLElement | Undefined} */
    let root = $state.raw();
    const start = () => waapi.animate(".flipper", {
        translateY: "100vh",
        duration : 0 
    });
    
    const jump = () => waapi.animate(".flipper", {
        translateY: "0",
        duration : 2000,
    });

    const flip = () => waapi.animate(".flipper", {
        rotateX: "180deg",
        duration : 800,
        delay: 600
    });
    
    $effect(() => {
        start().then(jump().then(flip))
    })
</script>

<style>
    @keyframes jump {
        from {
            transform: translateY(100%);
        }

        to {
            transform: translateY(0);
        }
    }

    @keyframes flip {
        to {
            transform: rotateX(180deg);
        }
    }

    :global(.flex-center) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container {
        display: flex;

        justify-content: center;
        align-items: center;
        aspect-ratio: 16 / 9;
        width: 80vw;
        background-color: var(--color-light);

        border: 1rem solid var(--color-mork-secondary);

        font-size: var(--size-11);
        color: var(--color-dark);

    }

    .flipper {
        position: relative;
        transform-style: preserve-3d;
        perspective: 1000;

        transform: translateY(100vh);
    }

    .front, .back {
        position: absolute;
        inset: 0;
        backface-visibility: hidden;
    }

    .front {
        transform: rotateX(0deg);
    }

    .back {
        transform: rotateX(180deg);
    }
</style>

<div class="container flipper" bind:this={root}>
    <div class="front flex-center">
        {@render front?.()}
    </div>
    <div class="back flex-center">
        {@render back?.()}
    </div>   
</div>