document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");

    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Retrieve input values
            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            // Retrieve user information from local storage
            const storedUser = JSON.parse(localStorage.getItem("user"));

            // Check if the entered credentials match the stored user
            if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
                console.log("Login successful!");
                // Redirect or provide feedback to the user
            } else {
                console.error("Login failed. Invalid credentials.");
                // Provide feedback to the user (e.g., display an error message)
            }
        });
    } else {
        console.error("Login form not found in the DOM.");
    }
});
