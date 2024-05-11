const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JS",
    d: "C++",
    correct: "a",
  },
  {
    que: "Which of the following is a markup language?",
    a: "CSS",
    b: "HTML",
    c: "C++",
    d: "JS",
    correct: "b",
  },
  {
    que: "Which of the following is a markup language?",
    a: "C++",
    b: "JS",
    c: "CSS",
    d: "HTML",
    correct: "d",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () => {
  if (index == total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1} )  ${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
  console.log(data);
};

let submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  // endQuiz();
  return;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};

const endQuiz = () => {
  document.getElementById("box").innerHTML = `<div style="text-align:center">
  <h3>Thank You For playing</h3>
  <h2>${right}/${total} are coreect </h2>
  </div>`;
};
//inital call
loadQuestion();
