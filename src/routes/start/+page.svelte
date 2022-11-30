<script>
    import range from "just-random-integer";
    import random from "just-random";
    import { fade } from "svelte/transition";

    import Logo from "components/logo/logo.svelte";
    import NeonSign from "components/neon-sign/neon-sign.svelte";
    import Rain from "components/weather/rain/rain.svelte";
    import BrickWall from "components/backdrops/brick-wall.svelte";
    import Cycler from "components/cycler/cycler.svelte";
    
    import art from "./art.js";
    import statuses from "./statuses.js";

    const place = (start, end) => ({
        x : range(start, end),
        y : range(-300, 0),
    });

    const NEON_SIGN_TEXT = "MORKLYMPIOUS";

</script>

<BrickWall>
    <Rain />
    <div class="inner">
        <header class="neon-sign">
            <NeonSign text="{NEON_SIGN_TEXT}"/>
        </header>
        <div class="flavor">
            <div class="starting" >
                <Cycler data="{statuses}" let:candidate>
                  {candidate}
                </Cycler>
            </div>
        </div>

        <div class="lower-third">
            {#each [[ 0, 400 ], [ 400, 700 ], [ 800, 1100 ], [ 1200, 1500 ], [ 1600, 1920 ]] as [ start, end ], index}
            {@const dimensions = place(start, end)}
            
            <img
                style:--x="{dimensions.x}px"
                style:--y="{dimensions.y}px"
                style:--scale="{range(1, 2)}"
                style:--rotate="{range(-45, 45)}deg"
                class="art"
                alt="thanks, svelte"
                src="{random(art)}"
                transition:fade
            />
            {/each}
        </div>
    </div>
    
    <div class="logo">
        <Logo />
    </div>
</BrickWall>

<style>
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
        "header header header header" 1fr
        "flavor flavor flavor flavor" 1fr
        ". . . ." 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;

    color: #F7F4EA;
}

.lower-third {
    grid-area: g;
    display: flex;
    
}

.neon-sign {
    
    grid-area: header;
    font-size: 4.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    /** Neon sign: SUPER PROMINENT */
    z-index: 5;
}

.art {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 10rem;

    transform: translate(var(--x), var(--y)) scale(var(--scale)) rotate(var(--rotate, 0deg));
    opacity: 0.3;
}

.flavor {
    grid-area: flavor;
    
    z-index: 1;
}

.starting {
    font-size: 2.2vw;
    text-align: center;
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
