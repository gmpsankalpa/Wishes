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
};