// ======================================
// MY NOTES - STUDY MATE AI
// ======================================

// Store the selected subject
let selectedSubject = "";


// ======================================
// ASK AI BUTTON
// ======================================

function askAI(subject) {

    selectedSubject = subject;

    const questionBox =
        document.getElementById("question");

    questionBox.value =
        "Ask me something about " + subject + "...";

    questionBox.focus();

}


// ======================================
// ANSWER QUESTION
// ======================================

function answerQuestion() {

    const question =
        document.getElementById("question").value.trim();

    const answer =
        document.getElementById("answer");


    // Check if question is empty
    if (question === "") {

        answer.textContent =
            "Please enter a question first.";

        answer.style.color = "red";

        return;
    }


    // Basic demo AI response
    answer.style.color = "green";

    answer.innerHTML = `
        <h3>🤖 AI Answer</h3>
        <p>
            You asked: <strong>${question}</strong>
        </p>
        <p>
            This is a demo answer from Study Mate AI.
            Your selected topic is
            <strong>${selectedSubject || "your notes"}</strong>.
        </p>
    `;

}