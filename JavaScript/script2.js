const plusOneButton = document.getElementById("plusOneButton*");
const countElement = document.getElementById("count");

let count = 0;

plusOneButton.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});