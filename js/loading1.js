// Get reference to loading overlay element
var loadingOverlay = document.getElementById("loadingOverlay");

// Function to show loading overlay
function showLoadingOverlay() {
  loadingOverlay.style.display = "flex"; // or "block" depending on your layout needs
}

// Function to hide loading overlay
function hideLoadingOverlay() {
  loadingOverlay.style.display = "none";
}

// Show loading overlay when the DOM content is loading
document.addEventListener("DOMContentLoaded", function() {
  showLoadingOverlay();
});

// Hide loading overlay when the webpage has fully loaded
window.addEventListener("load", function() {
  hideLoadingOverlay();
});
