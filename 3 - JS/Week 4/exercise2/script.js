// Get references to the input elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertBtn = document.getElementById("convertBtn");

// Add click event listener to the convert button
convertBtn.addEventListener("click", convertTemperature);

// Function to convert temperature
function convertTemperature() {
  if (celsiusInput.value !== "") {
    // Convert Celsius to Fahrenheit
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9) / 5 + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2); // Display result with 2 decimal places
  } else if (fahrenheitInput.value !== "") {
    // Convert Fahrenheit to Celsius
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = ((fahrenheit - 32) * 5) / 9;
    celsiusInput.value = celsius.toFixed(2); // Display result with 2 decimal places
  }
}
