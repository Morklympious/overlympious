import echo from "soundbank-reverb";

/**
 * @param {HTMLVideoElement} video
 */
export default (video) => {
    const context = new AudioContext();
    const source = context.createMediaElementSource(video);

    const compressor = context.createDynamicsCompressor();

    compressor.threshold.setValueAtTime(-60, context.currentTime);
    compressor.knee.setValueAtTime(40, context.currentTime);
    compressor.ratio.setValueAtTime(4, context.currentTime);
    compressor.attack.setValueAtTime(0, context.currentTime);
    compressor.release.setValueAtTime(0.25, context.currentTime);

    const reverb = echo(context);

    reverb.time = 0.5;
    reverb.wet.value = 1;
    reverb.dry.value = 0.3;

    reverb.filterType = "lowpass";
    reverb.cutoff.value = 4000;

    const lowpass = context.createBiquadFilter();

    lowpass.type = "lowpass";
    lowpass.frequency.value = 240;
    
    source.connect(reverb);
    reverb.connect(lowpass);
    lowpass.connect(compressor);
    compressor.connect(context.destination);
};
