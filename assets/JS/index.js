/*
//for an id (used once)
let plusButton = document.getElementById("plusButton");
let minusButton = document.getElementById("minusButton");
let countElement = document.getElementById("count");

let count = 0;

plusButton.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

minusButton.addEventListener("click", () => {
    if (count > 0) {
        count--;
    }
  countElement.textContent = count;
});*/

//for class (multiple times used)
let plusButtons = document.querySelectorAll(".plusButton");
let minusButtons = document.querySelectorAll(".minusButton");
let countElements = document.querySelectorAll(".count");

let counts = Array.from({ length: countElements.length }, () => 0);

function updateCount(index) {
  countElements[index].textContent = counts[index];
}

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    counts[index]++;
    updateCount(index);
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (counts[index] > 0) {
      counts[index]--;
      updateCount(index);
    }
    });
});
