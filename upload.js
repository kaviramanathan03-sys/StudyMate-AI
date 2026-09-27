import {
    getStorage,
    ref,
    uploadBytes
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDusIJsdSQn_56XETOFF1Huvf4nHALdhcM",
    authDomain: "study-mate-ai-f810d.firebaseapp.com",
    projectId: "study-mate-ai-f810d",
    storageBucket: "study-mate-ai-f810d.firebasestorage.app",
    messagingSenderId: "992984136617",
    appId: "1:992984136617:web:81b662c9e1c86fe0a4a2b8"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileName.textContent =
            "Selected: " + fileInput.files[0].name;
    }
});

async function uploadFile() {

    if (fileInput.files.length === 0) {
        alert("Please select a file first.");
        return;
    }

    const file = fileInput.files[0];

    try {

        const fileRef = ref(storage, "notes/" + file.name);

        await uploadBytes(fileRef, file);

        alert("File uploaded successfully! ✅");

    } catch (error) {

        console.error(error);
        alert("Upload failed: " + error.message);
    }
}

window.uploadFile = uploadFile;