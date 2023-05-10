function toTitleCase(str) {
  // Split the string into an array of words
  let words = str.toLowerCase().split(" ");

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  // Join the words back into a string with spaces
  return words.join(" ");
}

// Get elements from the DOM
const inputEl = document.getElementById("input");
const outputEl = document.getElementById("output");
const convertBtn = document.getElementById("convert-btn");

// Add event listener to the convert button
convertBtn.addEventListener("click", () => {
  // Get the value of the input textarea
  const input = inputEl.value.trim();

  // Convert the input to title case
  const output = toTitleCase(input);

  // Set the value of the output textarea
  outputEl.value = output;
});
