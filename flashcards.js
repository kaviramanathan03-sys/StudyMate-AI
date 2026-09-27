// ======================================
// FLASHCARDS
// ======================================

function showAnswer() {

    const answer = document.getElementById("flashAnswer");
    const button = document.querySelector(".flashcard button");

    if (answer.textContent === 'Click "Show Answer"') {

        answer.textContent =
            "Cloud Computing is the delivery of computing services such as servers, storage, databases, and software over the Internet.";

        button.textContent = "Hide Answer";

    } else {

        answer.textContent =
            'Click "Show Answer"';

        button.textContent = "Show Answer";
    }
}

// Make function available to HTML onclick
window.showAnswer = showAnswer;