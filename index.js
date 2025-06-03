/*
//for an id (used once)
const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const countElement = document.getElementById("count");

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
});
//for class (multiple times used)
const plusButtons = document.querySelectorAll(".plusButton");
const minusButtons = document.querySelectorAll(".minusButton");
const countElements = document.querySelectorAll(".count");

const counts = Array.from({ length: countElements.length }, () => 0);

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
});*/