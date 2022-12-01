<script>
    import { onMount } from "svelte";
    import random from "just-random";
    import { fade } from "svelte/transition";
  
    import BrickWall from "components/backdrops/brick-wall.svelte";
    import TelevisionFrame from "components/television-frame/television-frame.svelte";

    import statuses from "./statuses.js";
    import { anything } from "./videos.js";

    import art from "./art.js";

    import transform from "shared/utilities/transform-audio";


    let video;
    let vidsrc = "";

    const gogogo = () => {
        if(!video) {
          return;
        }

        vidsrc = anything();

        if(window.obsstudio) {
          transform(video);
        }

        video.play();
        
        video.setAttribute("autoplay", true);
    };

    const toggle = () => (video.paused ? video.play() : video.pause());

    // TODO: put this in its own thing probably lol.
    onMount(gogogo);


</script>

<BrickWall>
    <div class="inner">
        <div class="heading">
            <h1> {random(statuses)} </h1>
        </div>

        <div class="frames">
            <div class="television" data-video-exists={Boolean(vidsrc)}>
              <TelevisionFrame>
                <div class="video crt video-container" data-video-exists={Boolean(vidsrc)}>
                  <!-- svelte-ignore a11y-media-has-caption -->
                  <video
                    bind:this={video}
                    class="video"
                    src={vidsrc}
                    on:ended={() => {
                      vidsrc = "";

                      setTimeout(gogogo, 2000);
                    }}
                    on:click={toggle}
                  />
                </div>

              </TelevisionFrame>
              <h1 class="note"> <span class="blink">🔴</span> MORKLYMPIOUS ENTERTAINMENT NETWORK </h1>
            </div>
        </div>

        <div class="posters">
          <div style:background-image={`url(${random(art)})`} class="frame" transition:fade />
        </div>
    </div>
</BrickWall>

<style>
.heading {
  font-size: 7rem;
  opacity: 0.5;
  font-size: 3vw;
  grid-area: neon;
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
        "neon neon neon neon " 0.5fr
        "frames frames p ." 1fr
        "frames frames p ." 1fr
        "lt lt lt lt" 12vh / 1fr 1fr 1fr 1fr;

    position: relative;

    z-index: 1;

    padding: 1rem;

    color: #F7F4EA;
}

.posters {
  grid-area: p;
  
  display: flex;
  flex-flow: column nowrap;
  transform: translate(-50%, 0)
  
}

.frame{
  filter: brightness(0.3);

  width: 100%;
  flex: 1;

  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
  border: 1rem solid white;

  transform: rotate(8deg) translate(50%, 0);

  background-color: #DDD;
}


.frames {
    display: flex;
    grid-area: frames;

    justify-content: center;
    align-items: center;

    animation: swing 12s infinite ease-in-out;
    transform-origin: 50% -200%;
    z-index: 2;
}

.frames::before {
  content: " ";
  width: 1rem;
  height: 40rem;
  background: #222;
  position: absolute;

  border: 0.2rem solid #444;
  top: -20rem;
  left: 50%;
  z-index: 0;

  border: 4px solid #000;
}

.video-container[data-video-exists="false"] {
  background: url("/assets/tv-static.gif");

  background-size: contain;
  background-position: center;
}

.video {
  position: relative;
  opacity: 0.8;
  width: 50rem;
  aspect-ratio: 16 / 9;
}

@keyframes swing {
  0%, 100% {
    transform: rotate(1deg)
  }

  50% {
    transform: rotate(-1deg)
  }
}

.television {
  position: absolute;
  z-index: 5;
}

.blink {
  animation: blink 4s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}

.note {
  position: relative;
  text-align: center;
  
  position: absolute;
  bottom: 1rem;
  left: 0;
  padding: 1.1rem;
  font-size: 2em;
  z-index: 1;
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
