// ======================================
// FIREBASE IMPORT
// ======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


// ======================================
// FIREBASE CONFIG
// ======================================

const firebaseConfig = {
    apiKey: "AIzaSyDusIJsdSQn_56XETOFF1Huvf4nHALdhcM",
    authDomain: "study-mate-ai-f810d.firebaseapp.com",
    projectId: "study-mate-ai-f810d",
    storageBucket: "study-mate-ai-f810d.firebasestorage.app",
    messagingSenderId: "992984136617",
    appId: "1:992984136617:web:81b662c9e1c86fe0a4a2b8",
    measurementId: "G-8PQWL98GQS"
};


// ======================================
// INITIALIZE FIREBASE
// ======================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// ======================================
// GET HTML ELEMENTS
// ======================================

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const showPassword = document.getElementById("showPassword");

const loginBtn = document.getElementById("loginBtn");

const message = document.getElementById("message");


// ======================================
// SHOW / HIDE PASSWORD
// ======================================

showPassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        showPassword.textContent = "👁️";

    } else {

        passwordInput.type = "password";

        showPassword.textContent = "🙈";

    }

});


// ======================================
// LOGIN
// ======================================

loginBtn.addEventListener("click", async () => {

    const email = emailInput.value.trim();

    const password = passwordInput.value;


    // Check empty fields

    if (email === "" || password === "") {

        message.textContent =
            "Please enter email and password.";

        message.style.color = "red";

        return;
    }


    // Firebase login

    try {

        const userCredential =
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            );


        const user = userCredential.user;


        // Login successful

        message.textContent =
            "Login successful!";

        message.style.color = "green";


        console.log("Logged in user:", user);


        // Redirect to home page

        setTimeout(() => {

            window.location.href = "index.html";

        }, 1000);


    } catch (error) {

        console.error("Login Error:", error);

        console.error("Error Code:", error.code);


        if (error.code === "auth/invalid-credential") {

            message.textContent =
                "Invalid email or password.";

        }

        else if (error.code === "auth/user-not-found") {

            message.textContent =
                "No account found with this email.";

        }

        else if (error.code === "auth/wrong-password") {

            message.textContent =
                "Incorrect password.";

        }

        else if (error.code === "auth/invalid-email") {

            message.textContent =
                "Please enter a valid email.";

        }

        else if (error.code === "auth/operation-not-allowed") {

            message.textContent =
                "Email/Password login is not enabled in Firebase.";

        }

        else {

            message.textContent =
                "Login failed: " + error.message;

        }


        message.style.color = "red";

    }

});