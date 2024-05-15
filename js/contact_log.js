document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.createElement("form");
    contactForm.classList.add("form-container");
    contactForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <div class="btn-container">
            <button class="submitbtn" type="submit">Send</button>
            <button class="resetbtn" type="reset">Reset</button>
        </div>
        <div id="msg" class="msg"></div>
    `;
    
    var contactLogTableBody = document.querySelector("#contactLogTable tbody");
    var submitButton = contactForm.querySelector(".submitbtn");
    var resetButton = contactForm.querySelector(".resetbtn");
    var messageContainer = contactForm.querySelector("#msg");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Simulated sending email
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Display simulated email sent message
        messageContainer.innerHTML = "Simulated email sent!";

        // Add contact log entry
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${message}</td>
        `;
        contactLogTableBody.appendChild(newRow);

        // Clear form fields after submission
        contactForm.reset();
    });

    resetButton.addEventListener("click", function() {
        messageContainer.innerHTML = ""; // Clear any existing messages
    });

    // Append contact form to the DOM
    var contactLogSection = document.querySelector(".contact-log .container");
    contactLogSection.appendChild(contactForm);
});
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.createElement("form");
    contactForm.classList.add("form-container");
    contactForm.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <div class="btn-container">
            <button class="submitbtn" type="submit">Send</button>
            <button class="resetbtn" type="reset">Reset</button>
        </div>
        <div id="msg" class="msg"></div>
    `;
    
    var contactLogTableBody = document.querySelector("#contactLogTable tbody");
    var submitButton = contactForm.querySelector(".submitbtn");
    var resetButton = contactForm.querySelector(".resetbtn");
    var messageContainer = contactForm.querySelector("#msg");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Simulated sending email
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Display simulated email sent message
        messageContainer.innerHTML = "Simulated email sent!";

        // Add contact log entry
        var newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${email}</td>
            <td>${message}</td>
        `;
        contactLogTableBody.appendChild(newRow);

        // Clear form fields after submission
        contactForm.reset();
    });

    resetButton.addEventListener("click", function() {
        messageContainer.innerHTML = ""; // Clear any existing messages
    });

    // Append contact form to the DOM
    var contactLogSection = document.querySelector(".contact-log .container");
    contactLogSection.appendChild(contactForm);
});
