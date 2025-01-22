document.getElementById('click').onclick = function () {
    let password = document.getElementById('password').value;

    if (password.length < 8) {
        document.getElementById('output').innerHTML += "Password must be at least 8 characters long";
    }

    // Regexp test for no special characaters
    if (/[^a-zA-Z0-9]/.test(password)) {
        document.getElementById('output').innerHTML += "Password must contain at least 1 special character";
    }

}

