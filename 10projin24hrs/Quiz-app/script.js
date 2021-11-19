const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Goa",
    correct: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "Washington Dc",
    b: "New York",
    c: "Los Angeles",
    d: "Miami",
    correct: "a",
  },
  {
    question: "What is the capital of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Canberra",
    d: "Perth",
    correct: "c",
  },
  {
    question: "What is the capital of Canada?",
    a: "Ottawa",
    b: "Toronto",
    c: "Vancouver",
    d: "Montreal",
    correct: "b",
  },
  {
    question: "What is the capital of Germany?",
    a: "Berlin",
    b: "Hamburg",
    c: "Munich",
    d: "Frankfurt",
    correct: "a",
  },
];
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const nextBtn = document.getElementById("next");
const selected = document.getElementById("input[radio]:checked");
const quiz = document.getElementById("quiz");
let currentQuestion = 0;
let score = 0;
let answersEls = document.querySelectorAll(".answer");
loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}


function selectedAnswer() {
  let answer = undefined;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = selectedAnswer();
  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++;
      console.log("correct");
    }
    currentQuestion++;
    deselectAnswers();
  }
  if (currentQuestion < quizData.length - 1) {
    loadQuiz();
  } else {
      quiz.innerHTML = `<h2>You scored ${score} out of ${quizData.length}</h2>
      <button onClick="location.reload()">Again?</button>`;
  }
});
function deselectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
