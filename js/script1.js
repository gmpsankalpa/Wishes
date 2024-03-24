// Function to handle button click event and redirection
document.getElementById('redirectButton').addEventListener('click', redirectToPage);

function redirectToPage() {
    // Add the 'openAnimation' class to trigger the animation
    document.getElementById('envelope').classList.add('openAnimation');
    // Replace 'https://example.com' with the URL you want to redirect to
    setTimeout(() => { window.location.href = './wish.html'; }, 500); // Delaying the redirection for the duration of the animation
}
