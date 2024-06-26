// Hide the loader when the page is fully loaded
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
});

window.addEventListener('load', function() {
  var loader = document.getElementById('loader1');
  loader.style.display = 'none';
});

// window.addEventListener('load', function() {
//   var loader = document.getElementById('loadingOverlay1');
//   loader.style.display = 'none';
// });

function hideLoadingOverlay() {
  var loader = document.getElementById('loadingOverlay1');
  loader.style.display = 'none';
}

// Listens for the load event
window.addEventListener('load', function() {
  // Hides the loading overlay after 5 seconds
  setTimeout(hideLoadingOverlay, 5000);
});

// List of image paths
const imagePaths = [
  "/src/loading/loading_6.webp",
  "/src/loading/loading_3.webp",
  "/src/loading/loading_2.webp",
  "/src/loading/loading_1.webp",
  "/src/loading/loading_5.webp",
  "/src/loading/loading_7.webp",
  "/src/loading/loading_4.webp",
  // Add more image paths here as needed
];

// Function to change the image source
function changeLoadingImage() {
  const loadingImage = document.getElementById('loadingImage');
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    loadingImage.src = imagePaths[currentIndex];
  }, 1000); // Change image every 1 second (adjust as needed)
}

document.addEventListener('DOMContentLoaded', changeLoadingImage);