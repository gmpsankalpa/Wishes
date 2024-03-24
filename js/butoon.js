// Function to change button text periodically
function changeButtonText() {
    var button = document.getElementById('redirectButton');
    var texts = ["Open Message!", "පණිවිඩය විවෘත කරන්න!", "செய்தியைத் திறக்கவும்!"];
    var currentIndex = 0;

    setInterval(function() {
        button.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
    }, 2500); // Change button text every 3 seconds (adjust as needed)
}

// Call the function to start changing button text
changeButtonText();
