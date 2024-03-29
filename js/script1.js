// Function to handle button click event, redirection, and loading overlay
document.getElementById('redirectButton').addEventListener('click', function() {
    // Show loading overlay
    document.getElementById('loadingOverlay').style.display = 'flex';

    // Add the 'openAnimation' class to trigger the animation
    document.getElementById('envelope').classList.add('openAnimation');

    // Replace 'https://example.com' with the URL you want to redirect to
    setTimeout(() => { 
        // Simulate some loading time, you would replace this with your actual loading process
        setTimeout(() => {
            // Hide loading overlay
            document.getElementById('loadingOverlay').style.display = 'none';
            // Redirect to the desired page
            window.location.href = './wish.html';
        }, 2500); // Adjust the time as needed for loading animation
    }, 2000); // Delaying the redirection for the duration of the animation
});
