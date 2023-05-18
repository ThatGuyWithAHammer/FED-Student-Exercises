function generatePassword() {
  let passwordLength = 8;
  let password = "";
  let passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{8,}$/;

  while (!passwordPattern.test(password)) {
    password = generateRandomPassword(passwordLength);
  }

  document.getElementById("password").innerText = password;
  document.getElementById("error").innerText = "";
}

function generateRandomPassword(length) {
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
