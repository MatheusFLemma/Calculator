// Getting the result display area
let result = document.getElementById('result');

// Insert the value when the button is pressed
function insertValues(num) {
  result.value += num;
}

// Calculate or, if necessary, give an error on the display
function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = 'Invalid';
  }
}

// Clear button functionality
function clearResult() {
  result.value = '';
}

// Signal inversion button functionality
function invertValue() {
  calculate();

  const result = document.getElementById('result').value;
  
  document.getElementById('result').value = result * -1;
}