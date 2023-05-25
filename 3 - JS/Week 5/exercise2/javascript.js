function removeVowels() {
  var input = document.getElementById("input").value;
  var output = document.getElementById("output");
  var result = input.replace(/[aeiou]/gi, ""); // Regular expression to remove all vowels

  output.value = result;
}
