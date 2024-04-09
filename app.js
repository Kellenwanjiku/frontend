document.addEventListener("DOMContentLoaded", (event) => {
  /*const isLoggedIn = false; // Set to true if the user is logged in, false otherwise

  // Redirect the user based on their login status
  if (isLoggedIn) {
    window.location.href = "dashboard.html"; // Redirect to the dashboard if logged in
  } else {
    // window.location.href = "landingPage.html";
    // Redirect to the landing page if not logged in
  }*/

  const mainContent = document.getElementById('main-content');
  console.log("mainContent:", mainContent); // Check if element is found

  const navigationLinks = document.querySelectorAll('#left-navigation ul li > a'); 
  if (navigationLinks) {
    navigationLinks.forEach(link => {
      console.log("Link:", link); // See if links are selected correctly
      link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default navigation behavior

            const sectionToLoad = link.getAttribute('href').split('.')[0];  
            fetchContentAndLoad(sectionToLoad);
        });
    });
  }

  function fetchContentAndLoad(section) {
    console.log(section,"Section Selected")
    const url = `./${section}.html?t=${Date.now()}`; // Add timestamp for cache-busting
    console.log("Fetching content from URL:", url);

    fetch(url) // Assuming content is in a 'content' folder
        .then((response) => response.text())
        .then((htmlContent) => {
          if (htmlContent) { // Check if content is not empty
            mainContent.innerHTML = htmlContent;
        } else {
            console.error("Error: Empty content received");
            // Handle empty content scenario (display error message)
        }
        })
        .catch((error) => {
            console.error("Error fetching content:", error);
            // Display an error message to the user here
        });
  }
  
  // fetchContentAndLoad('financialdashboard.html');
  // console.log("Fetching content:", 'financialdashboard.html');

 /*
  // Select all the navigation links
    const navLinks = document.querySelectorAll('#left-navigation -a');

// Add a click event listener to each navigation link
    navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the URL of the HTML page to load
    const url = event.target.getAttribute('href');

    fetch(url)
    .then(response => {
      // Check if the request was successful
      if (response.ok) {
        // Get the HTML content of the page
        return response.text();
      } else {
        // Handle the error
        throw new Error(`Error loading ${url}: ${response.statusText}`);
      }
    })

    .then(htmlContent => {
      // Insert the HTML content into the #main-content div
      const mainContentDiv = document.querySelector('#main-content');
      mainContentDiv.innerHTML = htmlContent;
    })
    .catch(error => {
      // Handle the error
      console.error(error);
    });
    });
    });
*/
      // Financial Overview Dropdown (Keep this!)
      const financialDropdowns = document.querySelectorAll(".financial-dropdown");
      financialDropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector(".financial-dropdown-toggle");
        const menu = dropdown.querySelector(".financial-dropdown-menu");

        toggle.addEventListener("click", () => {
          menu.classList.toggle("hidden");
        });
      });

  

});
