document.getElementById('click').onclick = function () {
    let password = document.getElementById('password').value;
    let fail = false;
    let show = "";

    if (password.length < 8) {
        fail = true;
        show += "Password must be at least 8 characters long";
    }

    // Regexp test for special characaters
    if (!/[^a-zA-Z0-9]/.test(password)) {
        fail = true;
        show += "Password must contain at least 1 special character";
    }

    // Regexp test for spaces
    if (/\s/g.test(password)) {
        fail = true;
        show += "Password must not contain spaces";
    }

    // Regexp test for capital letters
    if (!/[A-Z]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one capital letter";
    }

    // Regexp test for lowercase letters
    if (!/[a-z]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one lowercase letter";
    }

    // Regexp test for digits
    if (!/[0-9]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one digit";
    }

    if (fail) {
        //Display failed tests
        document.getElementById('output').innerHTML = "Password is invalid: " + show;
    }
    else {
        document.getElementById('output').innerHTML = "Password is valid!";
    }
}

