<script>
    import { onMount, tick } from "svelte";
    import Logo from "components/logo/logo.svelte";
    import NeonSign from "components/neon-sign/neon-sign.svelte";
    import Rain from "components/weather/rain/rain.svelte";

    import statuses from "./statuses.js";
    import random from "utilities/random.js";

    const sample = (collection) => collection[random([0, collection.length - 1])]

    let message = null;
    let animating = false;

    const MESSAGE_DURATION_SECONDS = 20;

    const go = async () => {
		message = await Promise.resolve(sample(statuses));
		await tick();
		requestAnimationFrame(() => (animating = true));
 	}

    const ungo = async () => {
        await tick();
        requestAnimationFrame(() => {
            animating = false;
            requestAnimationFrame(go);
        })
    }

    onMount(go)
</script>

<main 
    class="container"
    style:background-image="url(assets/brick.jpg)"
>
    <Rain />
    <div class="inner">
        <header class="header">
            <NeonSign text="BLEEDECEMBER"/>
        </header>
        <div class="flavor">
            <div class="starting" > 
                <span
                    class="message"
                    data-animating={animating}
                    style:--message-duration="{MESSAGE_DURATION_SECONDS}s"
                    on:animationend={ungo}
                > 
                    {message}
                </span> 
            </div>
        </div>
    </div>
    
    <div class="logo">
        <Logo />
    </div>
</main>

<style>
.container {
    background-color: var(--color-background);

    font-family: "FjallaOne";

    height: 100%;
    color: white;

    background-size: cover;
    background-repeat: no-repeat;
}

.inner {
    height: 100%;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;

    display: grid;
    grid-template:
        ". . . . " 1fr
        ". header header ." 1fr
        "flavor flavor flavor flavor" 1fr
        ". . . ." 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;
}

.header {
    font-size: 6rem;
    grid-area: header;

    display: flex;
    justify-content: center;
    align-items: center;
}

.flavor {
    grid-area: flavor;
}

.starting {
    font-size: 2.5em;
    text-align: center;
}

.message[data-animating="true"] {
    animation: fader var(--message-duration) 1 forwards;
}

.message[data-animating="false"] {
    opacity: 0;
}

.logo {
    position: absolute;
    opacity: 0.1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
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