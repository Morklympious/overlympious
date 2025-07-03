<script>
    import { waapi } from "animejs";

    let { front, back, finished } = $props();

    /** @type {HTMLElement | Undefined} */
    let root = $state.raw();
    const start = () => waapi.animate(".flipper", {
        translateY: "100vh",
        duration : 0,
        onComplete : jump
    });
    
    const jump = () => waapi.animate(".flipper", {
        translateY: "0",
        duration : 2000,
        onComplete : flip
    });

    const flip = () => waapi.animate(".flipper", {
        rotateX: "180deg",
        duration : 800,
        delay: 600,
        onComplete : finished
    });

 
    $effect(() => {
        start();
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

    .container {
        --medal-size: 30vw;

        display: flex;

        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
        width: var(--medal-size, 20vw);
        background-color: var(--color-light);

        border: 1rem solid var(--color-mork-secondary);
        border-radius: var(--medal-size, 20vw);
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
    <div class="front">
        {@render front?.()}
    </div>
    <div class="back">
        {@render back?.()}
    </div>   
</div>