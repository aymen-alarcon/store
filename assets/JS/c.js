let incrementButtons = document.querySelectorAll('.increment-button');
let quantityInputs = document.querySelectorAll('.quantity-input');

incrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    let currentValue = parseInt(quantityInputs[index].value);
    currentValue += 1;
    quantityInputs[index].value = currentValue;
  });
});
