document.addEventListener('DOMContentLoaded', function() {
    var titlebar = document.getElementById('titlebar');
    var initialOffset = titlebar.offsetTop;
  
    window.addEventListener('scroll', function() {
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > initialOffset + 20) {
        titlebar.style.position = 'fixed';
        titlebar.style.top = '20px';
        titlebar.style.left = '50%';
        titlebar.style.transform = 'translateX(-50%)';
        titlebar.style.zIndex = '999'; // Set a higher z-index to keep it on top
      } else {
        titlebar.style.position = 'absolute';
        titlebar.style.top = initialOffset + 'px';
        titlebar.style.left = '50%';
        titlebar.style.transform = 'translateX(-50%)';
        titlebar.style.zIndex = '0'; // Reset the z-index
      }
    });
  
    // Function to show the popup and disable scrolling
    function showPopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'block';
  
      // Disable scrolling
      document.body.style.overflow = 'hidden';
    }
  
    // Function to hide the popup and enable scrolling
    function hidePopup() {
      var popup = document.getElementById('popup');
      popup.style.display = 'none';
  
      // Enable scrolling
      document.body.style.overflow = 'auto';
    }
  
    // Function to check screen width and show/hide the popup
    function checkScreenWidth() {
      var popup = document.getElementById('popup');
      if (window.innerWidth >= 1024) {
        showPopup();
      } else {
        hidePopup();
      }
    }
  
    // Initial check on page load
    checkScreenWidth();
  
    // Listen for screen resize events
    window.addEventListener('resize', checkScreenWidth);
  
    // Close button click event
    var closeButton = document.getElementById('close-button');
    closeButton.addEventListener('click', hidePopup);
  });
  