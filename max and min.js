// Get user input
function getNumbers() {
  let num1 = parseFloat(prompt("Enter first number:"));
  let num2 = parseFloat(prompt("Enter second number:"));
  let num3 = parseFloat(prompt("Enter third number:"));

  // Find minimum and maximum
  let min = Math.min(num1, num2, num3);
  let max = Math.max(num1, num2, num3);

  // Display result
  displayResult(min, max);
}

// Display result in bold text
function displayResult(min, max) {
  let result = document.getElementById("result");
  if (!result) {
    result = document.createElement("h2");
    result.id = "result";
    document.body.appendChild(result);
  }
  result.innerHTML = <b>MINIMUM = ${min}, MAXIMUM = ${max}</b>;
}
// Call the function
getNumbers();