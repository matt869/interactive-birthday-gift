// audio.js

document.addEventListener('DOMContentLoaded', () => {
    const flowerMusic = document.getElementById('flower-audio');
    const nextBtn = document.getElementById('nextFlowerBtn');
    const backBtn = document.getElementById('backFromFlower');

    // Make sure it starts at zero volume
    flowerMusic.volume = 0;

    // --- FADE IN FUNCTION ---
    function fadeIn(audioElement, targetVolume, durationMs) {
        audioElement.play().catch(err => console.log("Audio waiting for interaction"));
        let step = 0.05;
        let intervalTime = durationMs / (targetVolume / step);
        
        let fadeInterval = setInterval(() => {
            if (audioElement.volume < targetVolume - step) {
                audioElement.volume += step;
            } else {
                audioElement.volume = targetVolume;
                clearInterval(fadeInterval);
            }
        }, intervalTime);
    }

    // --- TRIGGER ON "NEXT" BUTTON ---
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Fades up to 60% volume over 2 seconds (2000ms)
            fadeIn(flowerMusic, 0.6, 2000); 
        });
    }

    // --- STOP ON "BACK" BUTTON ---
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            flowerMusic.pause();
            flowerMusic.currentTime = 0; // Reset to the start
            flowerMusic.volume = 0;      // Reset volume for next time
        });
    }
});
