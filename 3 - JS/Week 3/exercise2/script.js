function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

function calculateSum() {
  const numbersInput = document.getElementById("numbers");
  const numbersArray = numbersInput.value.split(",").map(Number);
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "Sum of even numbers: " + sumEvenNumbers(numbersArray);
}
