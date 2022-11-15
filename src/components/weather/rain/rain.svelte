<script>
    /** TODO: Make me configurable, I guess? lol. */

    import random from "shared/utilities/random.js";

    const drops = Array.from(Array(100), (nothing, index) => ({
        index,
        delay : random([ 0, 0.75 ], { floor : false }),
    }));

</script>

<div class="container">
    {#each drops as { index, delay }}
        <div 
            class="drop"
            style:--offset="{index}%"
            style:--delay="{delay}s"
        />
    {/each}
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
    }

    .drop {
        position: absolute;
        left: var(--offset);
        top: -10vh;

        width: 1px;
        height: 10vh;

        background: white;

        animation: drop 1s linear infinite;
        animation-delay: var(--delay);

        opacity: 0.4;
    }

    @keyframes drop {
        0% {
            transform: translateY(-10vh);
        }
        75% {
            transform: translateY(100vh);
        }
        100% {
            transform: translateY(120vh);
        }
    }

</style>