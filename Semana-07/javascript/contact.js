window.onload = function () {
    var name = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var area = document.getElementById('select-area');
    var message = document.getElementById('message');

    // Validate name
    var nameAlert = document.createElement('p');
    name.onblur = function () {
        var invalid = false;
        var spaces = 0;
        if (name.value !== '') {
            for (var i = 0; i < name.value.length; i++) {
                if (name.value.toLowerCase().charAt(i) ===
                    name.value.toUpperCase().charAt(i)) {
                    if (name.value.charAt(i) !== ' ') {
                        invalid = true;
                    } else {
                        spaces++;
                    }
                }
            }
        } else if (name.value == '') {
            name.classList.add('input-alert');
            nameAlert.innerHTML = 'Required field.';
            name.parentElement.insertBefore(nameAlert, name.nextElementSibling);
        }
        if (!invalid && name.value.length - spaces > 3) {
            name.classList.add('input-valid');
        } else if (name.value !== '') {
            name.classList.add('input-alert');
            nameAlert.classList.add('para-alert');
            nameAlert.innerHTML = 'Name must have 4 letters at least. No special chars.';
            name.parentElement.insertBefore(nameAlert, name.nextElementSibling);
        }

    }

    // Validate email
    var emailAlert = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    emailInput.onblur = function () {
        if (emailInput.value !== '') {
            if (emailExpression.test(emailInput.value)) {
                emailInput.classList.add('input-valid');
            } else {
                emailInput.classList.add('input-alert');
                emailAlert.classList.add('para-alert');
                emailAlert.innerHTML = 'Invalid email input';
                emailInput.parentElement.insertBefore(emailAlert, emailInput.nextElementSibling);
            }
        } else if (emailInput.value == '') {
            emailInput.classList.add('input-alert');
            emailAlert.innerHTML = 'Required field.';
            emailInput.parentElement.insertBefore(emailAlert, emailInput.nextElementSibling);
        }
    }

    // Validate message
    var messageAlert = document.createElement('p');
    message.onblur = function () {
        var char = '';
        var num = 0;
        var letter = 0;
        for (var i = 0; i < message.value.length; i++) {
            char = message.value.charAt(i)
            if (message.value.substring(0, 1) === ' ' || message.value.substring(message.value.length - 1) === ' ') {
                message.classList.add('input-alert');
                messageAlert.classList.add('para-alert');
                messageAlert.innerHTML = 'Can`t begin or end with whitespaces.';
                message.parentElement.appendChild(messageAlert);
            } else {
                if (isNaN(char)) {
                    letter++;
                } else {
                    num++;
                }
            }
        }

        if (letter + num > 2) {
            message.classList.add('input-valid');
        } else if (!message.classList.contains('input-alert') && message.value !== '') {
            message.classList.add('input-alert');
            messageAlert.classList.add('para-alert');
            messageAlert.innerHTML = 'Please input at least 3 chars';
            message.parentElement.appendChild(messageAlert);
        } else if (message.value == '') {
            message.classList.add('input-alert');
            messageAlert.innerHTML = 'Required field.';
            message.parentElement.insertBefore(messageAlert, message.nextElementSibling);
        }

    }

    // Modify message
    message.onfocus = function () {
        removes(message);
    }

    // Modify email
    emailInput.onfocus = function () {
        removes(emailInput);
    }

    // Modify name
    name.onfocus = function () {
        removes(name);
    }
    var removes = function (elem) {
        elem.classList.remove('input-valid', 'input-alert');
        if (elem.nextElementSibling) {
            elem.parentElement.removeChild(elem.nextElementSibling);
        }
    }
    //Submit button
    var btn = document.querySelector('input#submit');

    btn.onclick = function (e) {
        e.preventDefault();
        var alertMsg = '';
        if (emailInput.value == '' || name.value == '' || message.value == '') {
            alertMsg = 'Please complete all fields to login';
        } else if (area.value == '') {
            alertMsg += 'Select an area please.';
        } else {
            if (emailInput.parentElement.contains(emailAlert)) {
                alertMsg += 'Email:\n';
                alertMsg += emailAlert.innerHTML + '\n';
            }
            if (name.parentElement.contains(nameAlert)) {
                alertMsg += 'Name:\n';
                alertMsg += nameAlert.innerHTML;
            }
            if (message.parentElement.contains(messageAlert)) {
                alertMsg += '\nMessage:\n';
                alertMsg += messageAlert.innerHTML;
            }
        }
        if (alertMsg == '') {
            alertMsg = 'Message sent succesfully.\nThank you!\n' +
                name.value + '\n' + emailInput.value + '\n' + area[area.selectedIndex].innerHTML + '\n' + message.value;
        }
        alert(alertMsg);
    }


}