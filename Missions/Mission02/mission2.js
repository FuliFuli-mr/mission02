// Function to perform arithmetic operations and update the HTML content
function performCalculation() {
    // Retrieve and parse the input values using document.getElementById()
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    // Check for valid number inputs
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById('result').innerHTML = '<p>Please enter valid numbers in both fields.</p>';
      return;
    }
    
    // Perform arithmetic operations
    const sum = num1 + num2;
    const product = num1 * num2;
    const difference = num1 - num2;
    const quotient = num2 !== 0 ? num1 / num2 : 'undefined (division by zero)';
    
    // Comparative operators: Compare sum and product
    let comparison;
    if (sum > product) {
      comparison = 'greater than';
    } else if (sum < product) {
      comparison = 'less than';
    } else {
      comparison = 'equal to';
    }
    
    // Loop demonstration: Create a multiplication table for the sum using a for-loop
    let tableHTML = '<ul>';
    for (let i = 1; i <= 5; i++) {
      tableHTML += `<li>${sum} x ${i} = ${sum * i}</li>`;
    }
    tableHTML += '</ul>';
  
    // Additional loop: List even numbers between 1 and 10
    let evenNumbersHTML = '<ul>';
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        evenNumbersHTML += `<li>${i}</li>`;
      }
    }
    evenNumbersHTML += '</ul>';
    
    // Update the result div with the calculated values and loop-generated content
    document.getElementById('result').innerHTML = `
      <p>Sum: ${sum}</p>
      <p>Product: ${product}</p>
      <p>The sum is ${comparison} the product.</p>
      <p>Difference: ${difference}</p>
      <p>Quotient: ${typeof quotient === 'number' ? quotient.toFixed(2) : quotient}</p>
      <h3>Multiplication Table for Sum</h3>
      ${tableHTML}
      <h3>Even Numbers Between 1 and 10</h3>
      ${evenNumbersHTML}
    `;
  }
  
  // Attach click event to the button using addEventListener
  document.getElementById('calcButton').addEventListener('click', performCalculation);
  