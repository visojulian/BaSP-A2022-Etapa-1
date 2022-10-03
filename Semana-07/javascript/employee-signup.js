window.onload = function () {
    // Validate first name
    var firstName = document.getElementById('first-name');
    var firstNameAlert = document.createElement('p');
    firstName.onblur = function () {
        names(firstName, firstNameAlert);
    }

    // Modify first name
    firstName.onfocus = function () {
        removes(firstName);
    }

    // Validate last name
    var lastName = document.getElementById('last-name');
    var lastNameAlert = document.createElement('p');
    lastName.onblur = function () {
        names(lastName, lastNameAlert);
    }

    // Modify last name
    lastName.onfocus = function () {
        removes(lastName);
    }

    // Validate DNI
    var dni = document.getElementById('dni');
    var dniAlert = document.createElement('p');
    dni.onblur = function () {
        if (NaN !== isNaN(dni.value) && dni.value !== '') {
            if (dni.value.length == 8 && dni.value > 999999) {
                dni.classList.add('input-valid');
            } else {
                dni.classList.add('input-alert');
                dniAlert.innerHTML = 'Please check your DNI number. Must be greather than 999.999.';
                dni.parentElement.appendChild(dniAlert);
            }
        } else if (dni.value == '') {
            dni.classList.add('input-alert');
            dniAlert.innerHTML = 'Required field.';
            dni.parentElement.insertBefore(dniAlert, dni.nextElementSibling);
        }
    }

    // Modify dni
    dni.onfocus = function () {
        removes(dni);
    }

    // Validate birthday
    var date = document.querySelector('input#date');
    var dateAlert = document.createElement('p');

    date.onblur = function () {
        if (date.value !== '') {
            var year = date.value.split('-')[0];
            if (year > 1922 && year < 2004) {
                date.classList.add('input-valid');
            } else {
                date.classList.add('input-alert');
                dateAlert.innerHTML = 'You must be +18 for register.';
                date.parentElement.appendChild(dateAlert);
            }
        } else if (date.value == '') {
            date.classList.add('input-alert');
            dateAlert.innerHTML = 'Required field.';
            date.parentElement.insertBefore(dateAlert, date.nextElementSibling);
        }
    }

    // Modify date
    date.onfocus = function () {
        removes(date);
    }

    // Validate phone
    var phone = document.getElementById('phone');
    var phoneAlert = document.createElement('p');
    phone.onblur = function () {
        if (phone.value !== '') {
            if (phone.value.length == 10) {
                phone.classList.add('input-valid');
            } else {
                phone.classList.add('input-alert');
                phoneAlert.innerHTML = 'Please input a valid phone. Only numbers.';
                phone.parentElement.appendChild(phoneAlert);
            }
        } else if (phone.value == '') {
            phone.classList.add('input-alert');
            phoneAlert.innerHTML = 'Required field.';
            phone.parentElement.insertBefore(phoneAlert, phone.nextElementSibling);
        }
    }

    // Modify phone
    phone.onfocus = function () {
        removes(phone);
    }

    // Validate address
    var address = document.querySelector('input#address');
    var addressAlert = document.createElement('p');
    address.onblur = function () {
        addressAndLocation(address, addressAlert);
    }

    // Modify address
    address.onfocus = function () {
        removes(address);
    }

    // Validate location
    var location = document.querySelector('input#location');
    var locationAlert = document.createElement('p');
    location.onblur = function () {
        addressAndLocation(location, locationAlert);
    }

    // Modify location
    location.onfocus = function () {
        removes(location);
    }

    // Validate postal code
    var postal = document.querySelector('input#postal');
    var postalAlert = document.createElement('p');
    postal.onblur = function () {
        if (postal.value != '') {
            if (postal.value.length > 3 && postal.value.length < 6
                && !isNaN(postal.value)) {
                postal.classList.add('input-valid');
            } else {
                postal.classList.add('input-alert');
                postalAlert.innerHTML = 'Invalid postal code.';
                postal.parentElement.appendChild(postalAlert);
            }
        } else if (postal.value == '') {
            postal.classList.add('input-alert');
            postalAlert.innerHTML = 'Required field.';
            postal.parentElement.insertBefore(postalAlert, postal.nextElementSibling);
        }
    }

    // Modify postal code
    postal.onfocus = function () {
        removes(postal);
    }


    // Validate emailInput
    var emailInput = document.getElementById('email');
    var emailAlert = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    emailInput.onblur = function () {
        if (emailInput.value !== '') {
            if (emailExpression.test(emailInput.value)) {
                emailInput.classList.add('input-valid');
            } else {
                emailInput.classList.add('input-alert');
                emailAlert.innerHTML = 'Invalid email input';
                emailInput.parentElement.insertBefore(emailAlert, emailInput.nextElementSibling);
            }
        } else if (emailInput.value == '') {
            emailInput.classList.add('input-alert');
            emailAlert.innerHTML = 'Required field.';
            emailInput.parentElement.insertBefore(emailAlert, emailInput.nextElementSibling);
        }
    }

    // Modify email
    emailInput.onfocus = function () {
        removes(emailInput);
    }

    // Validate password
    var passInput = document.getElementById('pass');
    var passAlert = document.createElement('p');
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
                passAlert.innerHTML = 'Invalid password';
                passInput.parentElement.insertBefore(passAlert, passInput.nextElementSibling);
            }
        } else if (passInput.value == '') {
            passInput.classList.add('input-alert');
            passAlert.innerHTML = 'Required field.';
            passInput.parentElement.insertBefore(passAlert, passInput.nextElementSibling);
        }
    }

    // Modify pass
    passInput.onfocus = function () {
        removes(passInput);
    }

    // Validate repeat password
    var repPass = document.getElementById('pass-repeat');
    var repPassAlert = document.createElement('p');
    repPass.onblur = function () {
        if (passInput.classList.contains('input-valid') &&
            repPass.value !== '') {
            if (repPass.value === passInput.value) {
                repPass.classList.add('input-valid');
            } else {
                repPass.classList.add('input-alert');
                repPassAlert.innerHTML = 'Please repeat the same password from previous field.';
                repPass.parentElement.insertBefore(repPassAlert, repPass.nextElementSibling);
            }
        } else if (repPass.value !== '') {
            repPass.classList.add('input-alert');
            repPassAlert.innerHTML = 'Invalid password. Refill password field.';
            repPass.parentElement.insertBefore(repPassAlert, repPass.nextElementSibling);
        } else if (repPass.value == '') {
            repPass.classList.add('input-alert');
            repPassAlert.innerHTML = 'Required field.';
            repPass.parentElement.insertBefore(repPassAlert, repPass.nextElementSibling);
        }
    }

    // Modify repeat password
    repPass.onfocus = function () {
        removes(repPass);
    }

    // Create button
    var btnCreate = document.querySelector('#btn-create');

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
    var inputs = [firstName, lastName, dni, date, phone, address, location, postal, emailInput, passInput, repPass];

    var names = function (input, inputAlert) {
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
            inputAlert.innerHTML = 'Please input at least 4 letters. Only first one capital.';
            input.parentElement.appendChild(inputAlert);
        } else if (input.value == '') {
            input.classList.add('input-alert');
            inputAlert.innerHTML = 'Required field.';
            input.parentElement.insertBefore(inputAlert, input.nextElementSibling);
        }

    }

    var addressAndLocation = function (input, inputAlert) {
        var char = '';
        var num = 0;
        var letter = 0;
        for (var i = 0; i < input.value.length; i++) {
            char = input.value.charAt(i)
            if (char.toLowerCase() === char.toUpperCase() && char !== ' ') {
                if (isNaN(char)) {
                    input.classList.add('input-alert');
                    inputAlert.innerHTML = 'Please input a valid char.';
                    input.parentElement.appendChild(inputAlert);
                }
            } else if (input.value.substring(0, 1) === ' ' || input.value.substring(input.value.length - 1) === ' ') {
                input.classList.add('input-alert');
                inputAlert.innerHTML = 'Can`t begin or end with whitespaces.';
                input.parentElement.appendChild(inputAlert);
            } else {
                if (isNaN(char)) {
                    letter++;
                } else {
                    num++;
                }
            }
        }
        if (input.value == '') {
            input.classList.add('input-alert');
            inputAlert.innerHTML = 'Required field.';
            input.parentElement.insertBefore(inputAlert, input.nextElementSibling);
        } else if (input == address) {
            if (letter > 2 && num > 0) {
                input.classList.add('input-valid');
            } else if (!input.classList.contains('input-alert')) {
                input.classList.add('input-alert');
                inputAlert.innerHTML = 'Please input at least 3 letters, 1 number and 1 whitespace.';
                input.parentElement.appendChild(inputAlert);
            }
        } else {
            if (letter > 2) {
                input.classList.add('input-valid');
            } else if (!input.classList.contains('input-alert')) {
                input.classList.add('input-alert');
                inputAlert.innerHTML = 'Please input at least 3 letters.';
                input.parentElement.appendChild(inputAlert);
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
        var query = 'name=' + firstName.value
            + '&lastName=' + lastName.value
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
                    saveData();
                    alert('Request successful:\n' + data.msg + '\n' + alertMsg());
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

    var saveData = function () {
        localStorage.setItem('name', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('dni', dni.value);
        localStorage.setItem('dob', date.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('city', location.value);
        localStorage.setItem('zip', postal.value);
        localStorage.setItem('email', emailInput.value);
        localStorage.setItem('password', passInput.value);
    }

    function loadData() {
        firstName.value = localStorage.getItem('name');
        lastName.value = localStorage.getItem('lastName');
        dni.value = localStorage.getItem('dni');
        date.value = localStorage.getItem('dob');
        phone.value = localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        location.value = localStorage.getItem('city');
        postal.value = localStorage.getItem('zip');
        emailInput.value = localStorage.getItem('email');
        passInput.value = localStorage.getItem('password');
        repPass.value = localStorage.getItem('password');

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value !== '') {
                inputs[i].classList.add('input-valid');
            }
        }
    }
    // Alert successful
    var alertMsg = function () {
        var successAlert = '';
        for (var i = 0; i < inputs.length; i++) {
            successAlert += inputs[i].previousElementSibling.innerHTML + ': ';
            successAlert += inputs[i].value + '\n';
        }
        return successAlert;
    }

    // Load data from local storage
    if (localStorage.length !== 0) {
        loadData();
    }
}
