<script>
    import BrickWall from "components/backdrops/brick-wall.svelte";
    import NeonSign from "components/neon-sign/neon-sign.svelte";
</script>
<div class="outer-container">
    

    <main class="container">
        <BrickWall>
            <header class="neon-sign">
                <NeonSign text="MORKLYMPIOUS"/>
            </header>
        </BrickWall>
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


        font-family: "FjallaOne";

        height: 100%;
        width: 100%;
        color: white;

        /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */

        transform-style: preserve-3d;
        transform: rotate3d(0, 1, 0, 20deg);

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .neon-sign {
    
        grid-area: header;
        font-size: 4.5vw;

        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-end;
    }
</style>