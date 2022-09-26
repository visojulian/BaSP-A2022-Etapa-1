window.onload = function () {

    // Validate first name
    var fName = document.getElementById('first-name');
    var pFName = document.createElement('p');
    fName.onblur = function () {
        names(fName, pFName);
    }

    // Modify first name
    fName.onfocus = function () {
        removes(fName);
    }

    // Validate last name
    var lName = document.getElementById('last-name');
    var pLName = document.createElement('p');
    lName.onblur = function () {
        names(lName, pLName);
    }

    // Modify last name
    lName.onfocus = function () {
        removes(lName);
    }

    // Validate emailInput
    var emailInput = document.getElementById('email');
    var pEmail = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
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
        removes(emailInput)
    }

    // Validate password
    var passInput = document.getElementById('pass');
    var pPass = document.createElement('p');
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
        removes(passInput);
    }

    // Validate repeat password
    var repPassInput = document.getElementById('pass-repeat');
    var pRepPass = document.createElement('p');
    repPassInput.onblur = function () {
        if (passInput.classList.contains('input-valid') &&
            repPassInput.value !== '') {
            if (repPassInput.value === passInput.value) {
                repPassInput.classList.add('input-valid');
            } else {
                repPassInput.classList.add('input-alert');
                pRepPass.innerHTML = 'Please repeat the same password from previous field.';
                repPassInput.parentElement.insertBefore(pRepPass, repPassInput.nextElementSibling);
            }
        } else if (repPassInput.value !== '') {
            repPassInput.classList.add('input-alert');
            pRepPass.innerHTML = 'Invalid password. Refill password field.';
            repPassInput.parentElement.insertBefore(pRepPass, repPassInput.nextElementSibling);
        }
    }

    // Modify repeat password
    repPassInput.onfocus = function () {
        removes(repPassInput);
    }


    // Global functions
    var names = function (input, pInput) {
        var invalid = false;
        if (input.value !== '') {
            for (var i = 0; i < input.value.length; i++) {
                if (input.value.toLowerCase().charAt(i) ===
                    input.value.toUpperCase().charAt(i)) {
                    invalid = true;
                }
            }
            if (input.value !==
                input.value.substring(0, 1).toUpperCase() + input.value.substring(1).toLowerCase()) {
                invalid = true;
            }
        }
        if (!invalid && input.value.length > 3) {
            input.classList.add('input-valid');
        } else if (input.value !== '') {
            input.classList.add('input-alert');
            pInput.innerHTML = 'Please input at least 4 letters. Only first one capital.';
            input.parentElement.appendChild(pInput);
        }

    }

    var removes = function (elem) {
        elem.classList.remove('input-valid', 'input-alert');
        if (elem.nextElementSibling) {
            elem.parentElement.removeChild(elem.nextElementSibling);
        }
    }
}