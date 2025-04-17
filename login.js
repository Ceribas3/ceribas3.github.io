// login.js

document.addEventListener("DOMContentLoaded", () => {
    // Dynamically create the login HTML
    const loginHTML = `
        <h1>Login</h1>
        <form id="loginForm">
            <label for="email">Email: </label>
            <input type="email" id="email" required><br><br>
            <label for="password">Password: </label>
            <input type="password" id="password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `;

    // Insert the login form into the body
    document.body.innerHTML = loginHTML;

    // Now add the Firebase Authentication logic after injecting the HTML
    const { initializeApp } = require('https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js');
    const { getAuth, signInWithEmailAndPassword } = require('https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js');

    // Your Firebase config
    const firebaseConfig = {
        apiKey: "AIzaSyD5L93RbgyI2voaite89sy87Mp3KwHqBEQ",
        authDomain: "ceribas3-saite.firebaseapp.com",
        projectId: "ceribas3-saite",
        storageBucket: "ceribas3-saite.firebasestorage.app",
        messagingSenderId: "728919586798",
        appId: "1:728919586798:web:92265e806f32b885f780ff",
        measurementId: "G-2204JGLHCM"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Get the login form
    const loginForm = document.getElementById("loginForm");

    // Handle login form submission
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Get email and password from form
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Attempt to sign in the user
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully signed in
                const user = userCredential.user;
                console.log("User signed in:", user);
                alert("Login successful!");
                window.location.href = "/home";  // Redirect to homepage after successful login
            })
            .catch((error) => {
                // Handle errors
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Login error:", errorCode, errorMessage);
                alert("Login failed: " + errorMessage);
            });
    });
});
