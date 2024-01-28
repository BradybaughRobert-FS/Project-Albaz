document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Retrieve input values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const regEmail = document.getElementById('regEmail').value;
        const regPassword = document.getElementById('regPassword').value;

        // Store user information in local storage
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: regEmail,
            password: regPassword, // Please use secure practices for passwords
        };

        localStorage.setItem("user", JSON.stringify(user));
        console.log("Registration successful!");

        // Redirect to the login page
        window.location.href = "login.html";
    });
});
