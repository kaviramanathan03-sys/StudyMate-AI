// ======================================
// STUDY PLAN
// ======================================

const planItems = document.querySelectorAll(".plan > div");

// ======================================
// CLICK ON A STUDY PLAN
// ======================================

planItems.forEach((item) => {

    item.addEventListener("click", () => {

        // Remove selection from other days
        planItems.forEach((day) => {
            day.classList.remove("selected");
        });

        // Select clicked day
        item.classList.add("selected");

        const subject = item.querySelector("p").textContent;

        alert("You selected: " + subject);
    });

});