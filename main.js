function generatePassword(length) {
  // Create an array of characters to use for the password.
  var chars = null;
  const charsSymbols = "!@#$%^&*()-_=+{}[]:<>,.?";
  const charsNumber = "0123456789";
  const charsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charsLowercase = "abcdefghijklmnopqrstuvwxyz";
  //0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+{}[]:<>,.?

  if (document.getElementById("lowercase").checked) {
    chars += charsLowercase;
  }
  if (document.getElementById("symbols").checked) {
    chars += charsSymbols;
  }
  if (document.getElementById("numbers").checked) {
    chars += charsNumber;
  }
  if (document.getElementById("Uppercase").checked) {
    chars += charsUppercase;
  }
  if (chars == null || length == "") {
    if (chars == null && length == "") {
      alert("please enter length of password and letters in the password");
    } else if (chars == null) {
      alert("please enter letters in the password");
    } else if (length == "") {
      alert("please enter length of password");
    }
    return null;
  } else {
    // Generate a random password of the specified length.
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Return the password.
    return password;
  }
}

// Create a password input element.
const passwordInput = document.getElementById("password");
function generate() {
  // Generate a new password and set it to the password input element.
  passwordInput.value = generatePassword(
    document.getElementById("length").value
  );
  passwordInput.select();
  document.execCommand("copy");
}
/*
<!-- main -->
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1747522604463523"
            data-ad-slot="1390383306" data-ad-format="auto" data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
*/
