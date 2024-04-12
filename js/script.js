document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    toggleButton.addEventListener('click', function () {
        if (hiddenMessage.style.display === 'none') {
            hiddenMessage.style.display = 'block';
            toggleButton.textContent = 'Hide Message';
            toggleButton.style.backgroundColor = '#dc3545'; /* Change button color */

            window.onload = function() {
                var images = document.querySelectorAll('.hidden-image');
                var index = 0;
            
                function showNextImage() {
                    // Hide all images
                    images.forEach(function(image) {
                        image.style.display = 'none';
                    });
            
                    // Show the next image
                    images[index].style.display = 'block';
            
                    // Increment index for the next iteration
                    index = (index + 1) % images.length;
            
                    // Repeat the process after a delay (e.g., 2 seconds)
                    setTimeout(showNextImage, 2000); // Adjust the delay as needed
                }
            
                // Start the loop
                showNextImage();
            }
            
        } else {
            hiddenMessage.style.display = 'none';
            toggleButton.textContent = 'Click me';
            toggleButton.style.backgroundColor = '#28a745'; /* Restore button color */
        }
    });
});

function showConfetti() {
    confetti(
        {
            particleCount: 150,
            spread: 60
        }
    );
}
