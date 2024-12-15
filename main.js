// Get the calculator display element
const display = document.getElementById("calc-display");

// Function to append value to display
function appendValue(value) {
  display.value += value;
}

// Function to clear display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}