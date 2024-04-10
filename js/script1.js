// Function to handle button click event and redirection
document.getElementById('redirectButton').addEventListener('click', redirectToPage);

function redirectToPage() {
    // Add the 'openAnimation' class to trigger the animation
    document.getElementById('envelope').classList.add('openAnimation');
    // Replace 'https://example.com' with the URL you want to redirect to
    setTimeout(() => { window.location.href = './wish.html'; }, 2000); // Delaying the redirection for the duration of the animation
}

document.getElementById("redirectButton").addEventListener("click", function() {
    document.getElementById("loadingOverlay").style.display = "flex"; // Show loading overlay
    // Simulate some loading time, you would replace this with your actual loading process
    setTimeout(function() {
        document.getElementById("loadingOverlay").style.display = "none"; // Hide loading overlay
        // Add your code to redirect or open the message here
    }, 2500); // Adjust the time as needed
});