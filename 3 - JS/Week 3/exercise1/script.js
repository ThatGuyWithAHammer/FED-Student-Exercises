function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Compare first and last characters, second and second to last, etc.
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello world")); // false
