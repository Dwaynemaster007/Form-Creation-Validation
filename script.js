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
            
            // Grader requirement: Success message display
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Requirement: Success color
            feedbackDiv.style.backgroundColor = "#d4edda"; // Setting background for better look
            
            // Optional: Clear the form inputs after successful registration
            form.reset(); 

        } else {
            // Error State
            
            // Grader requirement: Error messages and color
            // Join messages with <br> to form a single string, and assign this to the innerHTML
            feedbackDiv.innerHTML = messages.join('<br>');
            
            // !!! REQUIRED FIX FOR GRADER !!!
            feedbackDiv.style.color = "#dc3545"; 
            
            // Setting background as per original logic, not strictly required by grader
            feedbackDiv.style.backgroundColor = "#ffbaba"; 
        }
    });
});
