<script>
    /** TODO: Make me configurable, I guess? lol. */

    import random from "utilities/random";

</script>

<div class="container">
    {#each { length : 100 } as nothing, index}
        <div 
            class="drop"
            style:--offset="{index}%"
            style:--delay="{random([0, 0.5])}s"
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