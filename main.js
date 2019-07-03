//function that will give an answer to the question/tell a fortune
function newFortune() {
  let newFort = randomAnswer(fortunes);
  let btn = document.getElementById("btn");
  let btnText = btn.textContent;
  injectHTML(newFort, "answer");
  btnText === "My Answer" ? btnText = "Ask Again" : btnText = "My Answer";
  console.log(btnText);
  document.getElementById("question").value = "";
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