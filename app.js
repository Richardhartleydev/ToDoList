// Defining variables
const button = document.getElementById("button");
let userInput = document.getElementById("userInput");
const ul = document.querySelector("ul");
const reset = document.getElementById("reset");

// Input string length
function inputLength() {
  return userInput.value.length;
}

// Append new Li element to ul
function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(userInput.value));
  ul.appendChild(li);
  userInput.value = "";
}

// Button click listener
button.addEventListener("click", () => {
  if (inputLength() > 0) {
    createListElement();
  }
});

// Enter press listener
userInput.addEventListener("keydown", event => {
  if (inputLength() > 0 && event.key === "Enter") {
    createListElement();
  }
});

// Reset ul
reset.addEventListener("click", () => {
  ul.innerHTML = "";
});

// Li onclick line-through
ul.addEventListener("click", e => {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.toggle("done");
  }
});
