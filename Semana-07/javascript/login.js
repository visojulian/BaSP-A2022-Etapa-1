window.onload = function () {

    // Global Variables
    var btnLogin = document.getElementById('btn-login');
    var emailInput = document.getElementById('email');
    var pEmail = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var passInput = document.getElementById('pass');
    var pPass = document.createElement('p');


    // Validate emailInput
    emailInput.onblur = function () {
        if (emailInput.value !== '') {
            if (emailExpression.test(emailInput.value)) {
                emailInput.classList.add('input-valid');
            } else {
                emailInput.classList.add('input-alert');
                pEmail.innerHTML = 'Invalid email input';
                emailInput.parentElement.insertBefore(pEmail, emailInput.nextElementSibling);
            }
        }
    }

    // Modify email
    emailInput.onfocus = function () {
        emailInput.classList.remove('input-valid', 'input-alert');
        if (emailInput.parentElement.contains(pEmail)) {
            emailInput.parentElement.removeChild(pEmail);
        }
    }

    // Validate password
    passInput.onblur = function () {
        // Criteria: length > 7
        if (passInput.value.length > 7) {
            var length = true;
        }

        // Critera: at least one upper case, one lower case, one number and no special characters
        var upperCase = 0;
        var lowerCase = 0;
        var number = 0;

        for (var index = 0; index < passInput.value.length; index++) {
            var char = passInput.value.charAt(index);
            if (char.toUpperCase() !== char.toLowerCase()) {
                if (char === char.toUpperCase()) {
                    upperCase++;
                } else {
                    lowerCase++;
                }
            } else {
                if (!isNaN(Number(char)) && char !== ' ') {
                    number++;
                } else {
                    length = false;
                }
            }
        }

        // Validation
        if (passInput.value != '') {
            if (length && lowerCase > 0 && upperCase > 0 && number > 0) {
                passInput.classList.add('input-valid');
            } else {
                passInput.classList.add('input-alert');
                pPass.innerHTML = 'Invalid password';
                passInput.parentElement.insertBefore(pPass, passInput.nextElementSibling);
            }
        }
    }

    // Modify pass
    passInput.onfocus = function () {
        passInput.classList.remove('input-valid', 'input-alert');
        if (passInput.parentElement.contains(pPass)) {
            passInput.parentElement.removeChild(pPass);
        }
    }

    // Login button
    btnLogin.onclick = function (e) {
        e.preventDefault();
        var alertMsg = '';
        if (emailInput.value == '' || passInput.value == '') {
            alertMsg = 'Please complete all fields to login';
            alert(alertMsg);
        } else {
            if (emailInput.parentElement.contains(pEmail)) {
                alertMsg = 'Login error:\n';
                alertMsg += pEmail.innerHTML + '\n';
            }
            if (passInput.parentElement.contains(pPass)) {
                alertMsg = 'Login error:\n';
                alertMsg += pPass.innerHTML;
            }
            if (alertMsg !== '') {
                alert(alertMsg);
            }
        }
        if (alertMsg == '') {
            runRequest(emailInput.value, passInput.value);
        }
    }


    var runRequest = function (email, pass) {
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + email + '&password=' + pass;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    alert('Request successful:\n' + data.msg);
                } else {
                    alert('Login error:\n' + data.msg);
                }
            })
            .catch(function (error) {
                alert('Error:\n' + error);
            })
    }
}