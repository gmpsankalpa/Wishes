// Hide the loader when the page is fully loaded
// window.addEventListener('load', function() {
//   var loader = document.getElementById('loader');
//   loader.style.display = 'none';
// });

window.addEventListener('load', function() {
  var loader = document.getElementById('loader1');
  loader.style.display = 'none';
});

// window.addEventListener('load', function() {
//   var loader = document.getElementById('loadingOverlay1');
//   loader.style.display = 'none';
// });

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
function changeImage() {
  const loadingImage = document.getElementById("loadingImage");
  let currentIndex = 0;

  // Set an interval to change the image every 1 second (adjust as needed)
  setInterval(() => {
      currentIndex = (currentIndex + 1) % imagePaths.length;
      loadingImage.src = imagePaths[currentIndex];
  }, 1500); // Change image every 1 second
}

// Call the function when the page loads
window.onload = changeImage;