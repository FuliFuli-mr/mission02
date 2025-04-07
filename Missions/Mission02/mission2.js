// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to perform arithmetic operations and update the HTML content
function performCalculation() {
  // Retrieve and parse the input values using document.getElementById()
  const num1 = parseFloat(document.getElementById("number1").value);
  const num2 = parseFloat(document.getElementById("number2").value);

  // Check for valid number inputs
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").innerHTML =
      "<p>Please enter valid numbers in both fields.</p>";
    return;
  }

  // Perform arithmetic operations
  const sum = num1 + num2;
  const product = num1 * num2;
  const difference = num1 - num2;
  const quotient = num2 !== 0 ? num1 / num2 : "undefined (division by zero)";

  // Comparative operators: Compare sum and product
  let comparison;
  if (sum > product) {
    comparison = "greater than";
  } else if (sum < product) {
    comparison = "less than";
  } else {
    comparison = "equal to";
  }

  // Loop demonstration: Create a multiplication table for the sum using a for-loop
  let tableHTML = "<ul>";
  for (let i = 1; i <= 5; i++) {
    tableHTML += `<li>${sum} x ${i} = ${sum * i}</li>`;
  }
  tableHTML += "</ul>";

  // Find the last 5 prime numbers equal and less than the sum
  let primeNumbersHTML = "<ul>";
  let count = 0;
  let candidate = sum; // start checking numbers below the sum
  while (count < 5 && candidate > 1) {
    if (isPrime(candidate)) {
      primeNumbersHTML += `<li>${candidate}</li>`;
      count++;
    }
    candidate--;
  }
  primeNumbersHTML += "</ul>";

  // Update the result div with the calculated values and loop-generated content
  // Update the result div (if still using it) and slide menu content
  const resultHTML = `
      <p>Sum: ${sum}</p>
      <p>Product: ${product}</p>
      <p>The sum is ${comparison} the product.</p>
      <p>Difference: ${difference}</p>
      <p>Quotient: ${
        typeof quotient === "number" ? quotient.toFixed(2) : quotient
      }</p>
      <h3>Multiplication Table for Sum</h3>
      ${tableHTML}
      <h3>Prime Numbers - last 5 for sum</h3>
      ${primeNumbersHTML}
  `;
  document.getElementById("result").innerHTML = resultHTML;

  // Update the slide menu content and slide it in
  document.getElementById("slideMenuContent").innerHTML = resultHTML;
  document.getElementById("slideMenu").classList.add("open");
  // Add the "show" class to the backdrop to display it
  document.querySelector(".backdrop").classList.add("show");
}

// New function to toggle text and background using document.querySelector()
function toggleTextAndBackground() {
  // Select the div using querySelector
  const bodyElement = document.querySelector("body");
  const changeDiv = document.querySelector("#changeTextDiv");
  const containerElement = document.querySelector(".container");

  // Define default and toggled values
  const defaultText = "This text will change when the button is pressed.";
  const toggledText = "The text has been changed!";

  // Check current state and toggle both the body background and the div text
  if (
    bodyElement.style.backgroundColor === "lightblue" &&
    containerElement.style.backgroundColor === "blanchedalmond" &&
    changeDiv.textContent === toggledText &&
    changeDiv.style.color === "white" &&
    changeDiv.style.backgroundColor === "black"
  ) {
    // Revert to default state
    bodyElement.style.backgroundColor = "";
    containerElement.style.backgroundColor = "";
    changeDiv.textContent = defaultText;
    changeDiv.style.color = "";
    changeDiv.style.backgroundColor = "";
  } else {
    // Apply toggled state
    bodyElement.style.backgroundColor = "lightblue";
    containerElement.style.backgroundColor = "blanchedalmond";
    changeDiv.textContent = toggledText;
    changeDiv.style.color = "white";
    changeDiv.style.backgroundColor = "black";
  }
}

function clearResults() {
  document.getElementById("result").innerHTML = "";
  // Clear the input fields
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  return;
}

// Attach event listeners to buttons
document
  .getElementById("calcButton")
  .addEventListener("click", performCalculation);
document.getElementById("clearButton").addEventListener("click", clearResults);
document
  .getElementById("changeTextButton")
  .addEventListener("click", toggleTextAndBackground);
// Close the slide menu when the close button is clicked
document
  .getElementById("closeSlideMenu")
  .addEventListener("click", function () {
    document.getElementById("slideMenu").classList.remove("open");
    document.querySelector(".backdrop").classList.remove("show");
  });
