document.addEventListener("DOMContentLoaded", function() {
    // Show loader when the DOM content starts loading
    document.querySelector(".loader").style.display = "block";
  });
  
  window.addEventListener("load", function() {
    // Hide loader when the entire page finishes loading
    document.querySelector(".loader").style.display = "none";
  });
  