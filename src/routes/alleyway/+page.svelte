<div class="outer-container">
    <main class="container">
        WELCOME TO THE CUM ZONE
    </main>
    
</div>

<style>
    .outer-container {
        width: 100vw;
        height: 100vh;

        display:flex;
        justify-content: center;
        align-items: center;

        perspective: 25rem;
        perspective-origin: top;
    }
    .container {
        background-color: var(--color-background);

        padding: 1rem;

        font-family: "FjallaOne";

        height: 100%;
        width: 100%;
        color: white;

        background-color: #851400;
        background-image: url(assets/brick.png);
        /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

        transform-style: preserve-3d;
        transform: rotate3d(0, 1, 0, 10deg);

        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>