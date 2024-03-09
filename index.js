// Helper function to add two numbers
function add(num1, num2) {
    return num1 + num2;
  }
  
  // Helper function to subtract two numbers
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  // Helper function to multiply two numbers
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Helper function to divide two numbers
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }
    return num1 / num2;
  }
  
  // Example usage of the helper functions
  console.log(add(5, 3)); // Output: 8
  console.log(subtract(10, 4)); // Output: 6
  console.log(multiply(2, 6)); // Output: 12
  console.log(divide(8, 2)); // Output: 4
  console.log(divide(10, 0)); // Output: "Cannot divide by zero"