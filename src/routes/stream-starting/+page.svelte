<script>    
    import statuses from "./statuses.js";
    
    import Logo from "components/logo/logo.svelte";
    import NeonSign from "components/neon-sign/neon-sign.svelte";
    import Rain from "components/weather/rain/rain.svelte";
    import BrickWall from "components/backdrops/brick-wall.svelte";
    import Cycler from "components/cycler/cycler.svelte";

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
                <Cycler data="{statuses}" let:candidate={yo}>
                  {yo}
                </Cycler>
            </div>
        </div>

        <div class="corner">
            <div class="graffiti">☠ KROM WUZ HERE</div>
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
        ". header header ." 1fr
        "flavor flavor flavor flavor" 1fr
        "corner . . ." 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;

    color: #F7F4EA;
}

.corner {
    grid-area: corner;
    
}

.graffiti {
    font-family: 'Gochi Hand', cursive;
    font-size: 2.7rem;
    transform: rotate(-6deg) translate(20%, 0px);
    opacity: 0.2;
    color: #1fe707;
}

.neon-sign {
    
    grid-area: header;
    font-size: 4.5vw;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
}

.flavor {
    grid-area: flavor;
}

.starting {
    font-size: 2.2vw;
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