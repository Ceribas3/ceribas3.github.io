<script type="module">
  // Import Firebase App and Authentication SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

  // Your web app's Firebase configuration
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

  // Example: Create new user
  function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully signed up
        const user = userCredential.user;
        console.log("User created:", user);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error creating user:", error);
      });
  }

  // Example: Sign in with email and password
  function signInUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User successfully signed in
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error signing in:", error);
      });
  }
</script>
