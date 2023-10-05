
    // Get the form element
    var form = document.querySelector('form');

    // Add an event listener for form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Perform form validation
        if (validateForm()) {
            // If the form is valid, submit it
            showPopupMessage('Form submitted successfully!');
        }
    });

    // Function to validate the form
    function validateForm() {
        // Get the input values
        var nameInput = document.querySelector('input[name="name"]');
        var emailInput = document.querySelector('input[name="email"]');
        var messageInput = document.querySelector('textarea[name="message"]');

        // Validate the name field
        if (nameInput.value.trim() === '') {
            alert('Please enter your name');
            return false;
        }

        // Validate the email field
        if (emailInput.value.trim() === '') {
            alert('Please enter your email');
            return false;
        }

        // Validate the message field
        if (messageInput.value.trim() === '') {
            alert('Please enter a message');
            return false;
        }

        return true;
    }

    // Function to show a popup message
    function showPopupMessage(message) {
        alert(message);
        form.submit();
    }

