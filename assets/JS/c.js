// Get all the increment buttons and quantity input fields
const incrementButtons = document.querySelectorAll('.increment-button');
const quantityInputs = document.querySelectorAll('.quantity-input');

// Add click event listener to each increment button
incrementButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Get the current quantity value
    let currentValue = parseInt(quantityInputs[index].value);
    
    // Increment the quantity value by 1
    currentValue += 1;

    // Update the quantity input field with the new value
    quantityInputs[index].value = currentValue;
  });
});
