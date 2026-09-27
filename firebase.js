import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDusIJsdSQn_56XETOFF1Huvf4nHALdhcM",
    authDomain: "study-mate-ai-f810d.firebaseapp.com",
    projectId: "study-mate-ai-f810d",
    storageBucket: "study-mate-ai-f810d.firebasestorage.app",
    messagingSenderId: "992984136617",
    appId: "1:992984136617:web:81b662c9e1c86fe0a4a2b8",
    measurementId: "G-8PQWL98GQS"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);