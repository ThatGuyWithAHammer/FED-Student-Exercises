function checkPrime() {
  var number = document.getElementById("number").value;
  var isPrime = true;

  if (number === 1) {
    isPrime = false;
  } else if (number > 1) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  } else {
    isPrime = false;
  }

  var resultElement = document.getElementById("result");
  if (isPrime) {
    resultElement.innerText = number + " is a prime number.";
  } else {
    resultElement.innerText = number + " is not a prime number.";
  }
}
