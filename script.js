document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload on form submit
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
    } else {
        alert(`Thank you, ${name}. Your message has been sent!`);
        // Here you could add AJAX code to actually send the form data
    }
});
