// Function to handle page transitions
function navigateTo(url) {
    // Fade out the current page
    document.body.style.opacity = 0;
    setTimeout(() => {
      window.location.href = url; // Navigate to the new page
    }, 300); // Match this delay with the CSS transition duration
  }
  
  // Add event listeners to all navigation links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      const href = link.getAttribute('href'); // Get the target URL
      navigateTo(href); // Call the transition function
    });
  });