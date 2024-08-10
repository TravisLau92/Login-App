function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const result = document.getElementById("result");

  const isCorrectUserName = usernameInput.value === 'haris@sigmaschool.co'
  const isCorrectPassword = passwordInput.value === 'password'

  if (isCorrectUserName && isCorrectPassword) {
    result.innerHTML = `Welcome Haris!`;
  } else if (isCorrectUserName) {
    result.innerHTML = `Wrong password`;
  } else {
    result.innerHTML = `Wrong password/username`;
  }
}