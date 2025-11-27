
function addNumbers() {
  // Get input values
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);

  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Calculate sum
    let sum = num1 + num2;
    // Display result
    document.getElementById('result').innerText = Result: ${num1} + ${num2} = ${sum};
  } else {
    document.getElementById('result').innerText = 'Please enter valid numbers';
  }
}