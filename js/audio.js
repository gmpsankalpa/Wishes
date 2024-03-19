var audio = document.getElementById("autoplay loop");

// Check if there's a playback state stored in local storage
var playbackState = localStorage.getItem("audioPlaybackState");

// If there's a playback state, resume playback
if (playbackState === "playing") {
    audio.play();
}

// Add event listener for when audio playback starts or pauses
audio.addEventListener("play", function() {
    // Store the playback state as "playing" when audio starts playing
    localStorage.setItem("audioPlaybackState", "playing");
});

audio.addEventListener("pause", function() {
    // Store the playback state as "paused" when audio is paused
    localStorage.setItem("audioPlaybackState", "paused");
});

// Additionally, you might want to handle cases where the user manually stops the audio
audio.addEventListener("ended", function() {
    // Clear the playback state when audio playback ends
    localStorage.removeItem("audioPlaybackState");
});
