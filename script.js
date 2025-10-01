// Wrap the entire script in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // 1. Form and Feedback Division Selection
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // 2. Form Submission Event Listener
    form.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // 3. Input Retrieval and Trimming
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Validation Logic
        let isValid = true;
        const messages = [];

        // Username Validation: length is at least 3
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation: must include '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        // Password Validation: length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 5. Displaying Feedback
        feedbackDiv.style.display = "block";
        feedbackDiv.innerHTML = ''; // Clear previous messages
        
        if (isValid) {
            // Success State
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.className = 'success'; // Apply success CSS class
            
            // Optional: Clear the form inputs after successful registration
            form.reset(); 

            // Optional: Persist data (Placeholder for future task/requirement)
            localStorage.setItem('registeredUser', JSON.stringify({ username, email }));

        } else {
            // Error State
            // Join messages with <br> for line breaks
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.className = 'error'; // Apply error CSS class
        }
    });
});
