function findLargestNumber() {
  var input = document.getElementById("numbers").value;

  // Split the input string into an array of numbers
  var numbersArray = input.split(",").map(Number);

  // Check if the input is valid
  if (!Array.isArray(numbersArray) || numbersArray.length === 0) {
    document.getElementById("result").textContent =
      "Invalid input. Please enter a valid array of numbers.";
    return;
  }

  // Find the largest number
  var largestNumber = Math.max.apply(null, numbersArray);

  // Display the result
  document.getElementById("result").textContent =
    "The largest number is: " + largestNumber;
}
