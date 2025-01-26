document.getElementById('click').onclick = function () {
    let password = document.getElementById('password').value;
    let fail = false;
    let show = "";

    if (password.length < 8) {
        fail = true;
        show += "Password must be at least 8 characters long<br>";
    }

    // Regexp test for special characaters
    if (!/[^a-zA-Z0-9]/.test(password)) {
        fail = true;
        show += "Password must contain at least 1 special character<br>";
    }

    // Regexp test for spaces
    if (/\s/g.test(password)) {
        fail = true;
        show += "Password must not contain spaces<br>";
    }

    // Regexp test for capital letters
    if (!/[A-Z]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one capital letter<br>";
    }

    // Regexp test for lowercase letters
    if (!/[a-z]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one lowercase letter<br>";
    }

    // Regexp test for digits
    if (!/[0-9]/g.test(password)) {
        fail = true;
        show += "Password must contain at least one digit<br>";
    }

    if (fail) {
        //Display failed tests
        document.getElementById('output').innerHTML = "Password is invalid:<br> " + show;
    }
    else {
        document.getElementById('output').innerHTML = "Password is valid!";
    }
}

