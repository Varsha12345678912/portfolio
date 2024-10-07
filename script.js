// contact
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  // Display alert
  alert(`Thank you for contacting us, ${name}! We will get back to you soon.`);
  
  // Optionally, you can clear the form
  this.reset();
});
