const question = [
  {
    question: "which language runs in web browser?",
    answers: [
      { text: "java", correct: false },
      { text: "c", correct: false },
      { text: "python", correct: false },
      { text: "javascript", correct: true },
    ],
  },
  {
    question: "What does css stand for?",
    answers: [
      { text: "Central Style Sheet", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Computer Style Sheet", correct: false },
    ],
  },

  {
    question: "What does html stand for?",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hypertext Markdown Language", correct: false },
      { text: "Hyper Machine Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },
  {
    question: "When was javascript launched ?",
    answers: [
      { text: "1992", correct: false },
      { text: "1998", correct: false },
      { text: "1995", correct: true },
      { text: "1990", correct: false },
    ],
  },
];

const timmerDisplay = document.getElementById("timer");
const questionElement = document.getElementById("questions");
const ansBtn = document.getElementById("answer-button");
const nextbtn = document.getElementById("next-btn");
const prograssbar = document.getElementById("prograss-bar");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timerLeft = 30;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;
  nextbtn.innerHTML = "Next";
  showquestion();
};

function showquestion() {
  resetState()
  updatePrograss();
  setTimer();
  let currentQuestion = question[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    if(answer.correct) button.dataset.correct = true;
    button.addEventListener("click", selectAnswer)
    ansBtn.appendChild(button);
  })
}

function resetState(){
  timerLeft = 30;
  timmerDisplay.textContent = `Timer Left: ${timerLeft} `;
  nextbtn.style.display = "none";
  ansBtn.innerHTML = "";
}

const setTimer = () =>{

  timer = setInterval(() => {
    timerLeft--;
    timmerDisplay.textContent = `Timer Left: ${timerLeft}s`
    if(timerLeft < 0){
      clearInterval(timer);
      autoSelct();
    }
  },1000)
}

const autoSelct = () => {
  const button = Array.from(ansBtn.children);
  button.forEach(btn => {
    if(btn.dataset.correct === 'true'){
      btn.classList.add("correct")
    }
    btn.disabled = true;
  });
  nextbtn.style.display = "block"
}

const selectAnswer = (e) => {
  clearInterval(timer);
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if(isCorrect) {
    selectBtn.classList.add('correct');
    score++;
  }else{
    selectBtn.classList.add('wrong')
  }

  Array.from(ansBtn.children).forEach(btn => {
    if(btn.correct === "true") btn.classList.add("Correct");
    btn.disabled  = true;
  })
   nextbtn.style.display = "block";
}

function showScore() {
  clearInterval(timer);
  const high = localStorage.getItem('highscore') || 0 ;  
  if(score > high){
    localStorage.setItem("highscore", score)
  }
  questionElement.innerHTML = `
  🎉 You scored ${score}/${question.length}
  🏆 High Score: ${localStorage.getItem("highscore")} 
  `;
  timmerDisplay.textContent = "";
  ansBtn.innerHTML = "";
  nextbtn.innerText = "Play Again";
  nextbtn.style.display = "block";
}

const handleNextButton = () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length){
    showquestion();
  }else{
    showScore();
  }
}

nextbtn.addEventListener("click", ()=> {
  if(currentQuestionIndex <question.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})


function updatePrograss() {
  const prograss =((currentQuestionIndex) / question.length)  * 100;
  prograssbar.style.width = `${prograss}`
}
function toggleTheme(){
  document.body.classList.toggle('dark-mode')
}
startQuiz();