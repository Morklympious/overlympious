<script>
    import { onMount, tick } from "svelte";
    import Loader from "components/loader/loader.svelte";
    import Logo from "components/logo/logo.svelte";

    import statuses from "./statuses.js";

    const sample = (collection) => collection[Math.floor(Math.random() * (collection.length))]

    let message = null;
    let animating = false;

    const MESSAGE_DURATION_SECONDS = 20;

    const go = async () => {
		message = await Promise.resolve(sample(statuses));
		await tick();
		requestAnimationFrame(() => (animating = true));
 	}

    onMount(go)
</script>

<main class="container">
    <div class="inner">
        <header class="header">
            <h1>STARTING SOON</h1>
        </header>
        <footer class="footer">
            <div class="loader">
                <Loader />
            </div>
            <div class="starting" > 
                <span
                    class="message"
                    data-animating={animating}
                    style:--message-duration="{MESSAGE_DURATION_SECONDS}s"
                    on:animationend={async () => {
                        await tick();
                        requestAnimationFrame(() => {
                            animating = false;
                            requestAnimationFrame(go);
                        })
                    }}
                > 
                    {message}
                </span> 
            </div>
        </footer>
    </div>
    
    <div class="logo">
        <Logo />
    </div>
</main>

<style>
.container {
    background-color: var(--color-background);

    padding: 1rem;

    font-family: "FjallaOne";

    height: 100%;
    color: white;
}

.inner {
    border: 0.5rem solid white;
    height: 100%;

    height: 100%;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    flex-flow: column nowrap;

    display: grid;
    grid-template:
        "header header header header" 1fr
        "none none none none" 1fr
        "none none none none" 1fr
        "footer footer footer footer" 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;
}

.header {
    font-size: 3rem;
    grid-area: header;
}

.footer {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    grid-area: footer;
}

.starting {
    font-size: 2em;
    text-align: center;
}

.message[data-animating="true"] {
    animation: fader var(--message-duration) 1 forwards;
}

.message[data-animating="false"] {
    opacity: 0;
}


.loader {
    margin-right: 1rem;
}

.logo {
    position: absolute;
    opacity: 0.05;
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