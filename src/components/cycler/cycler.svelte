<script>
    import { onMount, tick } from "svelte";
    import random from "just-random";

    // Given a collection of items, choose one and expose it. and that's it.
    export let data = [];
    export let candidate = null;
    export let duration = 20;
    
    let animating = false;
    const cycle = async () => {
        candidate = await Promise.resolve(random(data));
        await tick();
        requestAnimationFrame(() => (animating = true));
    };

    onMount(cycle);

</script>

<div class="cycler">
    {#if candidate}
        <div
            style:--message-duration="{duration}s"
            class="message"
            data-animating={animating}
            on:animationend={() => {
                requestAnimationFrame(() => {
                    animating = false;
                    requestAnimationFrame(cycle);
                });
            }}
        >
            <slot {candidate} />
        </div>
    {/if}
</div>

<style>
.message {
    color: #fff;
}

.message[data-animating="true"] {
    animation: fader var(--message-duration) 1 forwards;
}

.message[data-animating="false"] {
    opacity: 0;
}

@keyframes fader {
    0%, 100% {
        opacity: 0;
    }
    
    15%, 85% {
        opacity: 1
    }
}
</style>
