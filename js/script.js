document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    toggleButton.addEventListener('click', function () {
        if (hiddenMessage.style.display === 'none') {
            hiddenMessage.style.display = 'block';
            toggleButton.textContent = 'Hide Message';
            toggleButton.style.backgroundColor = '#dc3545'; /* Change button color */
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