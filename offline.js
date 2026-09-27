// ======================================
// OFFLINE MODE
// ======================================

function enableOffline() {

    const status = document.getElementById("offlineStatus");

    // Check browser support
    if ("serviceWorker" in navigator) {

        status.textContent = "Offline Mode Enabled!";
        status.style.color = "green";

        // Save offline mode status
        localStorage.setItem("offlineMode", "enabled");

        console.log("Offline Mode Enabled");

    } else {

        status.textContent =
            "Offline Mode is not supported in this browser.";

        status.style.color = "red";
    }
}


// ======================================
// CHECK OFFLINE STATUS
// ======================================

window.addEventListener("load", () => {

    const status = document.getElementById("offlineStatus");

    const offlineMode =
        localStorage.getItem("offlineMode");

    if (offlineMode === "enabled") {

        status.textContent =
            "Offline Mode is already enabled.";

        status.style.color = "green";
    }

});