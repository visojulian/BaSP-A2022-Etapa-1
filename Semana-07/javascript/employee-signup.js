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

    // Validate DNI
    var dni = document.getElementById('dni');
    var pDni = document.createElement('p');
    dni.onblur = function () {
        if (NaN !== isNaN(dni.value) && dni.value !== '') {
            if (dni.value.length == 8 && dni.value > 999999) {
                dni.classList.add('input-valid');
            } else {
                dni.classList.add('input-alert');
                pDni.innerHTML = 'Please check your DNI number. Must be greather than 999.999.';
                dni.parentElement.appendChild(pDni);
            }
        }
    }

    // Modify dni
    dni.onfocus = function () {
        removes(dni);
    }

    // Validate birthday
    var date = document.querySelector('input#date');
    var pDate = document.createElement('p');

    date.onblur = function () {
        if (date.value !== '') {
            var year = date.value.split('-')[0];
            if (year > 1922 && year < 2004) {
                date.classList.add('input-valid');
            } else {
                date.classList.add('input-alert');
                pDate.innerHTML = 'You must be +18 for register.';
                date.parentElement.appendChild(pDate);
            }
        }
    }

    // Modify date
    date.onfocus = function () {
        removes(date);
    }

    // Validate phone
    var phone = document.getElementById('phone');
    var pPhone = document.createElement('p');
    phone.onblur = function () {
        if (phone.value !== '') {
            if (phone.value.length == 10) {
                phone.classList.add('input-valid');
            } else {
                phone.classList.add('input-alert');
                pPhone.innerHTML = 'Please input a valid phone. Only numbers.';
                phone.parentElement.appendChild(pPhone);
            }
        }
    }

    // Modify phone
    phone.onfocus = function () {
        removes(phone);
    }

    // Validate address
    var address = document.querySelector('input#address');
    var pAddress = document.createElement('p');
    address.onblur = function () {
        addressAndLocation(address, pAddress);
    }

    // Modify address
    address.onfocus = function () {
        removes(address);
    }

    // Validate location
    var location = document.querySelector('input#location');
    var pLocation = document.createElement('p');
    location.onblur = function () {
        addressAndLocation(location, pLocation);
    }

    // Modify location
    location.onfocus = function () {
        removes(location);
    }

    // Validate postal code
    var postal = document.querySelector('input#postal');
    var pPostal = document.createElement('p');
    postal.onblur = function () {
        if (postal.value != '') {
            if (postal.value.length > 3 && postal.value.length < 6
                && !isNaN(postal.value)) {
                postal.classList.add('input-valid');
            } else {
                postal.classList.add('input-alert');
                pPostal.innerHTML = 'Invalid postal code.';
                postal.parentElement.appendChild(pPostal);
            }
        }
    }

    // Modify postal code
    postal.onfocus = function () {
        removes(postal);
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
        removes(emailInput);
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
        var char = '';
        for (var index = 0; index < passInput.value.length; index++) {
            char = passInput.value.charAt(index);
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
    var repPass = document.getElementById('pass-repeat');
    var pRepPass = document.createElement('p');
    repPass.onblur = function () {
        if (passInput.classList.contains('input-valid') &&
            repPass.value !== '') {
            if (repPass.value === passInput.value) {
                repPass.classList.add('input-valid');
            } else {
                repPass.classList.add('input-alert');
                pRepPass.innerHTML = 'Please repeat the same password from previous field.';
                repPass.parentElement.insertBefore(pRepPass, repPass.nextElementSibling);
            }
        } else if (repPass.value !== '') {
            repPass.classList.add('input-alert');
            pRepPass.innerHTML = 'Invalid password. Refill password field.';
            repPass.parentElement.insertBefore(pRepPass, repPass.nextElementSibling);
        }
    }

    // Modify repeat password
    repPass.onfocus = function () {
        removes(repPass);
    }

    // Create button
    var btnCreate = document.querySelector('#btn-create');
    var inputs = [fName, lName, dni, date, phone, address, location, postal, emailInput, passInput, repPass];
    btnCreate.onclick = function (e) {
        e.preventDefault();
        var valids = 0;
        var errors = [];
        var alertMsg = '';
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].classList.contains('input-valid')) {
                valids++;
            } else if (inputs[i].classList.contains('input-alert')) {
                errors.push(inputs[i].nextElementSibling);
            }
        }
        if (valids == inputs.length) {
            runRequest();

        } else if (errors.length == 0) {
            alertMsg = 'Please check the form. All fields are required.';
            alert(alertMsg);
        } else {
            alertMsg = 'There are some inputs errors:\n';
            if (errors.length + valids !== inputs.length) {
                alertMsg += 'Remember complete all fields.\n'
            }
            for (var i = 0; i < errors.length; i++) {
                alertMsg += inputs[i].previousElementSibling.innerHTML + ': ';
                alertMsg += errors[i].innerHTML + '\n';
            }
            alert(alertMsg);
        }

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

    var addressAndLocation = function (input, pInput) {
        var char = '';
        var num = 0;
        var letter = 0;
        for (var i = 0; i < input.value.length; i++) {
            char = input.value.charAt(i)
            if (char.toLowerCase() === char.toUpperCase() && char !== ' ') {
                if (isNaN(char)) {
                    input.classList.add('input-alert');
                    pInput.innerHTML = 'Please input a valid char.';
                    input.parentElement.appendChild(pInput);
                }
            } else if (input.value.substring(0, 1) === ' ' || input.value.substring(input.value.length - 1) === ' ') {
                input.classList.add('input-alert');
                pInput.innerHTML = 'Can`t begin or end with whitespaces.';
                input.parentElement.appendChild(pInput);
            } else {
                if (isNaN(char)) {
                    letter++;
                } else {
                    num++;
                }
            }
        }
        if (input == address) {
            if (letter > 2 && num > 0) {
                input.classList.add('input-valid');
            } else if (!input.classList.contains('input-alert')) {
                input.classList.add('input-alert');
                pInput.innerHTML = 'Please input at least 3 letters, 1 number and 1 whitespace.';
                input.parentElement.appendChild(pInput);
            }
        } else {
            if (letter > 2) {
                input.classList.add('input-valid');
            } else if (!input.classList.contains('input-alert')) {
                input.classList.add('input-alert');
                pInput.innerHTML = 'Please input at least 3 letters.';
                input.parentElement.appendChild(pInput);
            }
        }
    }

    var removes = function (elem) {
        elem.classList.remove('input-valid', 'input-alert');
        if (elem.nextElementSibling) {
            elem.parentElement.removeChild(elem.nextElementSibling);
        }
    }

    // Change date format
    var formatDate = function (date) {
        var array = date.split('-');
        return array[1] + '/' + array[2] + '/' + array[0];
    }

    // Fetch server
    var runRequest = function () {
        var query = 'name=' + fName.value
            + '&lastName=' + lName.value
            + '&dni=' + dni.value
            + '&dob=' + formatDate(date.value)
            + '&phone=' + phone.value
            + '&address=' + address.value
            + '&city=' + location.value
            + '&zip=' + postal.value
            + '&email=' + emailInput.value
            + '&password=' + passInput.value;
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?' + query;
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    alert('Request successful:\n' + data.msg);
                } else {
                    var alertErrors = '';
                    for (var i = 0; i < data.errors.length; i++) {
                        alertErrors += data.errors[i].msg + '\n';
                    }
                    alert('Signup error:\n' + alertErrors);
                }
            })
            .catch(function (error) {
                alert('Error:\n' + error);
            })
    }


}