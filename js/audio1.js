let myAudio = new Audio('https://song.sgp1.digitaloceanspaces.com/song/645/6792.mp3'); // Create an Audio object with the file 'Ceylon.mp3'

window.onload = function() {
    // Create a button element
    let playButton = document.createElement("button");
    playButton.textContent = "Click to play audio";

    // Append the button to the document body
    document.body.appendChild(playButton);

    // When the button is clicked, start playing the audio
    playButton.onclick = function() {
        myAudio.play(); // Start playing the audio
        // Once audio starts playing, remove the button
        playButton.style.display = "none";
    };

    // Start the game loop
    setInterval(GameLoop, 1000 / 10);
};

function GameLoop() {
    if (myAudio.paused) { // Check if the audio is paused
        myAudio.play(); // If paused, play the audio
    }
}
