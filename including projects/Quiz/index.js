const questions = [
  {
    question: "What does the phrase 'break a leg' mean?",
    answers: [
      { text: "Good luck", correct: true },
      { text: "Bad luck", correct: false },
      { text: "Take a risk", correct: false },
      { text: "Give up", correct: false },
    ],
  },
  {
    question: "If I _____ (to know) the answer, I would tell you.",
    answers: [
      { text: "knew", correct: true },
      { text: "know", correct: false },
      { text: "would know", correct: false },
      { text: "have known", correct: false },
    ],
  },
  {
    question: "What does the word 'skeptical' mean?",
    answers: [
      { text: "Doubtful or uncertain", correct: true },
      { text: "Enthusiastic or excited", correct: false },
      { text: "Angry or frustrated", correct: false },
      { text: "Happy or content", correct: false },
    ],
  },
  {
    question:
      "In William Shakespeare's Romeo and Juliet, what is the name of Juliet's family?",
    answers: [
      { text: "Montague", correct: false },
      { text: "Capulet", correct: true },
      { text: "Verona", correct: false },
      { text: "Prince", correct: false },
    ],
  },
  {
    question: "Which sentence is in the passive voice?",
    answers: [
      { text: "The dog bites the man.", correct: false },
      { text: "The man was bitten by the dog.", correct: true },
      { text: "The dog is biting the man.", correct: false },
      { text: "The man bites the dog.", correct: false },
    ],
  },
  {
    question:
      "What poetic device is used in the line 'The sun sets slow and paints the sky'?",
    answers: [
      { text: "Metaphor", correct: false },
      { text: "Simile", correct: false },
      { text: "Personification", correct: false },
      { text: "Imagery", correct: true },
    ],
  },
  {
    question: "What does the idiom 'bend over backwards' mean?",
    answers: [
      { text: "To be lazy", correct: false },
      { text: "To go out of one's way", correct: true },
      { text: "To give up", correct: false },
      { text: "To be angry", correct: false },
    ],
  },
  {
    question: "Flower : Garden :: Book : ______",
    answers: [
      { text: "Library", correct: true },
      { text: "Author", correct: false },
      { text: "Reader", correct: false },
      { text: "Shelf", correct: false },
    ],
  },
  {
    question: "The new policy aims to _____ the company's carbon footprint.",
    answers: [
      { text: "Increase", correct: false },
      { text: "Reduce", correct: true },
      { text: "Maintain", correct: false },
      { text: "Eliminate", correct: false },
    ],
  },
  {
    question:
      "What literary device is used in the sentence 'He was a shining light in a dark room'?",
    answers: [
      { text: "Hyperbole", correct: false },
      { text: "Alliteration", correct: false },
      { text: "Metaphor", correct: true },
      { text: "Simile", correct: false },
    ],
  },
  {
    question: "Which of the following is in the passive voice?",
    answers: [
      { text: "The dog bites the man.", correct: false },
      { text: "The man is bitten by the dog.", correct: true },
      { text: "The dog is biting the man.", correct: false },
      { text: "The man bites the dog.", correct: false },
    ],
  },
  {
    question:
      "Identify the correct form of the possessive adjective in 'That is _____ book.'",
    answers: [
      { text: "my", correct: true },
      { text: "mine", correct: false },
      { text: "mys", correct: false },
      { text: "mine's", correct: false },
    ],
  },
  {
    question: "Which of the following sentences is in the past perfect tense?",
    answers: [
      { text: "I went to the store.", correct: false },
      { text: "I had gone to the store.", correct: true },
      { text: "I go to the store.", correct: false },
      { text: "I will go to the store.", correct: false },
    ],
  },
  {
    question:
      "Identify the correct form of the verb in 'By the time I _____ (finish) my homework, it was midnight.'",
    answers: [
      { text: "had finished", correct: true },
      { text: "finish", correct: false },
      { text: "was finishing", correct: false },
      { text: "have finished", correct: false },
    ],
  },
  {
    question: "Which of the following sentences is in the subjunctive mood?",
    answers: [
      { text: "I suggest that he takes a break.", correct: false },
      { text: "I suggest that he take a break.", correct: true },
      { text: "I suggested that he takes a break.", correct: false },
      { text: "I suggested that he take a break.", correct: false },
    ],
  },
  {
    question:
      "Identify the correct form of the pronoun in 'Each of the students _____ a certificate.'",
    answers: [
      { text: "receives", correct: true },
      { text: "receive", correct: false },
      { text: "has received", correct: false },
      { text: "have received", correct: false },
    ],
  },
  {
    question: "Which of the following sentences is in the imperative mood?",
    answers: [
      { text: "You should do your homework.", correct: false },
      { text: "Do your homework!", correct: true },
      { text: "I did my homework.", correct: false },
      { text: "He does his homework.", correct: false },
    ],
  },
  {
    question:
      "Identify the correct form of the verb in 'If I _____ (win) the lottery, I would buy a house.'",
    answers: [
      { text: "won", correct: true },
      { text: "win", correct: false },
      { text: "was winning", correct: false },
      { text: "have won", correct: false },
    ],
  },
  {
    question: "Which of the following sentences is in the active voice?",
    answers: [
      { text: "The ball was thrown by John.", correct: false },
      { text: "John threw the ball.", correct: true },
      { text: "The ball is thrown by John.", correct: false },
      { text: "John is throwing the ball.", correct: false },
    ],
  },
  {
    question:
      "Identify the correct form of the verb in 'By next year, I _____ (study) English for five years.'",
    answers: [
      { text: "will have studied", correct: true },
      { text: "study", correct: false },
      { text: "have studied", correct: false },
      { text: "am studying", correct: false },
    ],
  },
];

const questionElement = document.querySelector(".question");
const answerButtons = document.querySelector(".answer-btns");
const nextBtn = document.querySelector(".next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  nextBtn.innerHTML = "NEXT";
  showQuestion();
}

function showQuestion() {
  resetState();
  answerButtons.innerHTML = "";
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + "." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerHTML = answer.text;
    answerButtons.appendChild(button);
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (nextBtn.innerHTML === "Play Again") {
    startQuiz();
  } else {
    handleNextQuestion();
  }
});

startQuiz();
