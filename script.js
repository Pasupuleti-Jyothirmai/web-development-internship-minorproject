// Selecting display input
let display = document.getElementById("display");

// Function to append values
function appendValue(value) {
  display.value += value;
}

// Function to clear display
function clearDisplay() {
  display.value = "";
}

// Function to calculate result
function calculate() {

  try {

    // Evaluate expression
    display.value = eval(display.value);

  } catch (error) {

    display.value = "Error";
  }
}

// Function to calculate square
function squareNumber() {

  try {

    let value = eval(display.value);

    display.value = value * value;

  } catch (error) {

    display.value = "Error";
  }
}