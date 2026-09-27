// ======================================
// STUDYMATE AI - HOME PAGE
// ======================================

// Search box
const searchBox = document.querySelector(
    'input[placeholder="🔍 Search your notes..."]'
);


// ======================================
// SEARCH NOTES
// ======================================

searchBox.addEventListener("keyup", function () {

    const searchText =
        searchBox.value.toLowerCase().trim();

    const cards =
        document.querySelectorAll(".card");

    cards.forEach((card) => {

        const cardText =
            card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});


// ======================================
// ONLINE / OFFLINE STATUS
// ======================================

function updateConnectionStatus() {

    const onlineStatus =
        document.querySelector(".online");

    if (navigator.onLine) {

        onlineStatus.textContent = "🟢 Online";

    } else {

        onlineStatus.textContent = "🔴 Offline";

    }
}

window.addEventListener(
    "online",
    updateConnectionStatus
);

window.addEventListener(
    "offline",
    updateConnectionStatus
);

updateConnectionStatus();


// ======================================
// PROGRESS
// ======================================

const progressBar =
    document.querySelector(".progress-bar div");

if (progressBar) {

    progressBar.style.width = "60%";
}