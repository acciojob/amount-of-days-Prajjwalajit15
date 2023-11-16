//your JS code here. If required.
function daysOfAYear(year) {
  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366; // Leap year
  } else {
    return 365; // Non-leap year
  }
}

// Prompt user for input
const inputYear = prompt("Enter a year (between 1 and 9999):");
const year = parseInt(inputYear);

// Check if the input is a valid integer
if (!isNaN(year) && year >= 1 && year <= 9999) {
  // Call the function and display the result
  alert(`${daysOfAYear(year)}`);
} else {
  // Display an error message for invalid input
  alert("Invalid input. Please enter a valid year between 1 and 9999.");
}
