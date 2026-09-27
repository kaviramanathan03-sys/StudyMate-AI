// =====================================
// STUDYMATE AI - QUIZ
// =====================================

const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },

    {
        question: "Which language is mainly used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "Java"
        ],
        answer: 1
    },

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        answer: 0
    },

    {
        question: "Which one is a programming language?",
        options: [
            "HTML",
            "CSS",
            "Python",
            "HTTP"
        ],
        answer: 2
    },

    {
        question: "What is DBMS used for?",
        options: [
            "Managing databases",
            "Editing images",
            "Creating animations",
            "Browsing websites"
        ],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;


// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {

    const questionElement =
        document.getElementById("question");

    const optionsElement =
        document.getElementById("options");

    if (!questionElement || !optionsElement) {
        console.error(
            "question or options element not found."
        );
        return;
    }

    const question = questions[currentQuestion];

    questionElement.textContent =
        question.question;

    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        button.addEventListener("click", () => {

            checkAnswer(index);

        });

        optionsElement.appendChild(button);
    });

    updateProgress();
}


// =====================================
// CHECK ANSWER
// =====================================

function checkAnswer(selectedAnswer) {

    const correctAnswer =
        questions[currentQuestion].answer;

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons.forEach((button) => {
        button.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {

        score++;

        optionButtons[selectedAnswer]
            .classList.add("correct");

    } else {

        optionButtons[selectedAnswer]
            .classList.add("wrong");

        optionButtons[correctAnswer]
            .classList.add("correct");
    }

    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < questions.length) {

            loadQuestion();

        } else {

            showResult();

        }

    }, 800);
}


// =====================================
// UPDATE PROGRESS
// =====================================

function updateProgress() {

    const progress =
        document.getElementById("progress");

    if (progress) {

        progress.textContent =
            `Question ${currentQuestion + 1} of ${questions.length}`;

    }
}


// =====================================
// SHOW RESULT
// =====================================

function showResult() {

    const quiz =
        document.getElementById("quiz");

    if (!quiz) {
        return;
    }

    quiz.innerHTML = `
        <div class="result">
            <h2>🎉 Quiz Completed!</h2>

            <p>Your Score</p>

            <h1>
                ${score} / ${questions.length}
            </h1>

            <button id="restartBtn">
                Restart Quiz
            </button>
        </div>
    `;

    document
        .getElementById("restartBtn")
        .addEventListener("click", restartQuiz);
}


// =====================================
// RESTART QUIZ
// =====================================

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    location.reload();
}


// =====================================
// START QUIZ
// =====================================

loadQuestion();