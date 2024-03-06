document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value
    };

    // Send form data to server
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert('Email sent successfully!');
            document.getElementById('contactForm').reset();
        } else {
            throw new Error('Failed to send email');
        }
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
    });
});