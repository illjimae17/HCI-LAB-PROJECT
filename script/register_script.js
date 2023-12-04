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
      let isValid = false;
      let isValid2 = false;
      let isValid3 = false;
      let isValid4 = false;

      // Email Validation
      function validateEmail(email) {
        let emailParts = email.split("@");

        if (emailParts.length !== 2) {
          return false;
        }

        let domainParts = emailParts[1].split(".");

        if (domainParts.length < 2) {
          return false;
        }

        return true;
      }

      if (!validateEmail(email)) {
        alert("Invalid Email Address");
        isValid = false;
      } else {
        isValid = true;
      }
      // end of Email Validation

      // Password validation
      if (password.length < 8) {
        alert("Password must be 8 characters or above");
        isValid4 = false;
      } else {
        isValid4 = true;
      }
      // end of Password validation

      // Password confirmation validation
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        isValid2 = false;
        return;
      } else {
        isValid2 = true;
      }
      // end of Password validation

      // Terms and condition validation
      if (!document.getElementById("terms_btn").checked) {
        alert("Terms and condition agreement must be checked");
        isValid3 = false;
      } else {
        isValid3 = true;
      }
      // end of Terms and condition validation

      //creds validation
      if (
        isValid !== false &&
        isValid2 !== false &&
        isValid3 !== false &&
        isValid4 !== false
      ) {
        console.log("registration success");
        alert("registration success");
        window.location.href = "../html/homePage.html";
      }
      //end of creds validation

      let formData = {
        name: name,
        email: email,
        password: password,
        gender: gender,
      };

      console.log("Form data:", formData);
    });
};
