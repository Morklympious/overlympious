<script>
    import Postcard from "components/postcard/postcard.svelte";
    const { data } = $props();
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

    .animation-breathe {
        animation-name: breathe;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    .path {
        font-size: var(--size-relative-1)
    }

    .video {
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
</style>

{#snippet front()}
    <h1 class="animation-breathe"> BROTHERGRAM </h1>
{/snippet}

{#snippet back()}
    <video class="video" src="{data.postcard}" controls volume=0.3>
        <track kind="captions" />
    </video>
{/snippet}

<!-- <h1 class="title animation-breathe">BROTHERGRAM</h1> -->
<div class="page">
    <Postcard {front} {back}/>
</div>