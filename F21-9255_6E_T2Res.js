function validateSignUp() {
  var email = document.getElementById("email").value;
  var signUpPassword = document.getElementById("password").value;
  var age = document.getElementById("Age").value;

  // check email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return false;
  }
  // check Password
  var passwordRegex = /^(?=.[!@#$%^&])(?=.*[0-9]).{6,}$/;
  if (!passwordRegex.test(signUpPassword)) {
    alert(
      "Password must contain at least one special character and one numeric character."
    );
    return false;
  }

  // check age
  var ageValue = parseInt(age);
  if (isNaN(ageValue) || ageValue < 15 || ageValue > 60) {
    signUpError.textContent = "Age must be a valid number between 18 and 100.";
    return false;
  }

  return true;
}
