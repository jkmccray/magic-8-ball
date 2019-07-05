const questionInput = document.getElementById("question");
const answerOutput = document.getElementById("answer");
const btn = document.getElementById("btn");

//function that will give an answer to the question/tell a fortune
function newFortune() {
  if (readyForFortune()) {
    let newFort = randomAnswer(fortunes);
    injectHTML(newFort, "answer");
  }
}

function readyForFortune() {
  if (fortuneNotYetProvided() && !inputIsEmpty()) {
    btn.innerHTML = "Ask Again";
    return true; // get a response from app
  } else {
    btn.innerHTML = "My Answer";
    clearText();
    return false; // don't get a response from app
  }
}

function fortuneNotYetProvided() {
  return btn.textContent === "My Answer"; // returns true or false
}

function inputIsEmpty() {
  if (questionInput.value === '') {
    alert("Please ask a question");
    return true;
  } else {
    return false;
  }
}

function clearText() {
  questionInput.value = "";
  answerOutput.textContent = "";
}

//function to product random number from 0 to the length of the array (minus 1 bc of Math.floor)
function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

//function to select answer from database.js
function randomAnswer(wordArray) {
  const randIdx = randomIndex(wordArray.length);
  return wordArray[randIdx];
}

//function to overwrite the answer
function injectHTML(word, boxID) {
  let box = document.getElementById(boxID);
  box.textContent = word;
}