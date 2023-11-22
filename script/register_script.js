window.onload = function () {
  document
    .getElementById("registerForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      let confirmPassword = document.getElementById("confirmPass").value;
      let gender = document.querySelector(
        'input[name="genders"]:checked'
      ).value;

      function validateEmail(email) {
        var atSymbol = email.indexOf("@");
        var dotSymbol = email.lastIndexOf(".");
        var spaceSymbol = email.indexOf(" ");

        if (
          atSymbol != -1 &&
          atSymbol != 0 &&
          dotSymbol != -1 &&
          dotSymbol != 0 &&
          dotSymbol > atSymbol + 1 &&
          email.length > dotSymbol + 1 &&
          spaceSymbol == -1
        ) {
          return true;
        } else {
          return false;
        }
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      } else if (validateEmail !== true) {
        alert("Email address is not valid.");
        return;
      }

      let formData = {
        name: name,
        email: email,
        password: password,
        gender: gender,
      };

      console.log("Form data:", formData);
      // Add your server-side validation and submission logic here
    });
};
