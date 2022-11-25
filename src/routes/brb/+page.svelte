<script>
    import { onMount } from "svelte";
  
    import NeonSign from "components/neon-sign/neon-sign.svelte";
    import BrickWall from "components/backdrops/brick-wall.svelte";
    import TelevisionFrame from "components/television-frame/television-frame.svelte";

    import statuses from "./statuses.js";
    import { anything } from "./videos.js";
    import random from "just-random";

    import transform from "shared/utilities/transform-audio";


    let video;
    let vidsrc = anything();
    let context;

    const gogogo = () => {
        if(!video) {
          return;
        }

        vidsrc = anything();

        if(window.obsstudio) {
          transform(video);
        }

        video.play();
    };


    // TODO: put this in its own thing probably lol.
    onMount(gogogo);
</script>

<BrickWall>
    <div class="inner">
        <div class="neon-sign">
            <NeonSign text="{random(statuses)}" />
        </div>

        <div class="frames">
            {#if vidsrc}
            <div class="television">
              <TelevisionFrame>
                <div class="video crt">
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video
                    bind:this={video}
                    class="video"
                    controls
                    src="{vidsrc}"
                    width="640px"
                    on:ended={() => (gogogo())}
                  />
                </div>

              </TelevisionFrame>
              <h1 class="note"> MORKLYMPIOUS ENTERTAINMENT NETWORK </h1>
            </div>
            {/if}
        </div>

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
        "neon neon neon . " 1fr
        "frames frames frames frames" 1fr
        "frames frames frames frames" 1fr
        "corner . . ." 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;

    color: #F7F4EA;
}

.neon-sign {
    font-size: 3vw;
    grid-area: neon;
}

.frames {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: frames;
}

.video {
  position: relative;
}

.television {
  position: absolute;
}
.note {
  text-align: center;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1.1rem;
}

.crt::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  z-index: 2;
  background-size: 100% 3px, 3px 100%;
  pointer-events: none;
}
@keyframes flicker {
  0% {
  opacity: 0.27861;
  }
  5% {
  opacity: 0.34769;
  }
  10% {
  opacity: 0.23604;
  }
  15% {
  opacity: 0.90626;
  }
  20% {
  opacity: 0.18128;
  }
  25% {
  opacity: 0.83891;
  }
  30% {
  opacity: 0.65583;
  }
  35% {
  opacity: 0.67807;
  }
  40% {
  opacity: 0.26559;
  }
  45% {
  opacity: 0.84693;
  }
  50% {
  opacity: 0.96019;
  }
  55% {
  opacity: 0.08594;
  }
  60% {
  opacity: 0.20313;
  }
  65% {
  opacity: 0.71988;
  }
  70% {
  opacity: 0.53455;
  }
  75% {
  opacity: 0.37288;
  }
  80% {
  opacity: 0.71428;
  }
  85% {
  opacity: 0.70419;
  }
  90% {
  opacity: 0.7003;
  }
  95% {
  opacity: 0.36108;
  }
  100% {
  opacity: 0.24387;
  }
}

.crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}


.crt {
  overflow: hidden;

  width: 100%;
    
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: #222;
}
</style>
