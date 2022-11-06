<script>
    /** TODO: Make me configurable, I guess? lol. */

    import random from "shared/utilities/random.js";

</script>

<div class="container">
    {#each { length : 100 } as nothing, index}
        <div 
            class="flake"
            style:--offset="{index}%"
            style:--delay="{random([ 0, 5 ], { floor : false })}s"
        />
    {/each}
    {#each { length : 100 } as nothing, index}
    <div 
        class="flake"
        style:--offset="{index}%"
        style:--delay="{random([ 0, 5 ], { floor : false })}s"
    />
{/each}
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        position: fixed;
    }

    .flake {
        position: absolute;
        left: var(--offset);
        top: -10vh;

        width: 1vw;
        border-radius: 0.5rem;
        height:  1rem;

        background: white;

        animation: drop 5s linear infinite;
        animation-delay: var(--delay);

        opacity: 0.4;
    }

    @keyframes drop {
        0% {
            transform: translateY(-10vh);
        }
        75% {
            transform: translateY(120vh);
        }
        100% {
            transform: translateY(120vh);
        }
    }

</style>