document.addEventListener('DOMContentLoaded', (event) => {
    const navigationContainer = document.getElementById('navigation-container');

    fetch('navigation.html')
        .then(response => response.text())
        .then(html => {
            navigationContainer.innerHTML = html;

            // Financial Overview Dropdown
            const financialDropdowns = document.querySelectorAll('.financial-dropdown');
            financialDropdowns.forEach(dropdown => {
                const toggle = dropdown.querySelector('.financial-dropdown-toggle');
                const menu = dropdown.querySelector('.financial-dropdown-menu');

                toggle.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            });

            // Profile Dropdown
            const dropdownMenuButton = document.getElementById('dropdownMenuButton');
            const dropdownIcon = document.getElementById('dropdownIcon');
            const logoutLink = document.querySelector('.dropdown-menu a'); 
        
            [dropdownMenuButton, dropdownIcon].forEach(element => {
                element.addEventListener('click', () => {
                  console.log("Dropdown button clicked!");
                  console.log("Logout link visibility (before toggle):", logoutLink.classList.contains('hidden'));
                  logoutLink.classList.toggle('hidden');
                  console.log("Logout link visibility (after toggle):", logoutLink.classList.contains('hidden'));
                });
            });
            // Signup Form Logic 
            const signupForm = document.getElementById('signupForm');
            signupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Input Validation (You would perform validation here)

            // Simulating successful signup (replace with actual signup logic)
            console.log("Signup successful for user:", fullName);  

            // Redirect to the user account dashboard
            window.location.href = 'dashboard.html'; 
           });
        });
});
