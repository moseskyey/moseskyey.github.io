(function() {
    emailjs.init("your-user-id"); // Replace with your user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // These IDs from the previous steps
    emailjs.sendForm('service_yqw65cc', 'service_yqw65cc', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});
