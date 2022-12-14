window.onload = function () {

    // Global Variables
    var btnLogin = document.getElementById('btn-login');
    var emailInput = document.getElementById('email');
    var emailAlert = document.createElement('p');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var passInput = document.getElementById('pass');
    var passAlert = document.createElement('p');


    // Validate emailInput
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
        emailInput.classList.remove('input-valid', 'input-alert');
        if (emailInput.parentElement.contains(emailAlert)) {
            emailInput.parentElement.removeChild(emailAlert);
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
        passInput.classList.remove('input-valid', 'input-alert');
        if (passInput.parentElement.contains(passAlert)) {
            passInput.parentElement.removeChild(passAlert);
        }
    }

    // Login button
    btnLogin.onclick = function (e) {
        e.preventDefault();
        var alertMsg = '';
        if (emailInput.value == '' || passInput.value == '') {
            alertMsg = 'Please complete all fields to login';
            openModal('Can??t login:', alertMsg);
        } else {
            if (emailInput.parentElement.contains(emailAlert)) {
                alertMsg = 'Login error:\n';
                alertMsg += emailAlert.innerHTML + '\n';
            }
            if (passInput.parentElement.contains(passAlert)) {
                alertMsg = 'Login error:\n';
                alertMsg += passAlert.innerHTML;
            }
            if (alertMsg !== '') {
                openModal('Can??t login:', alertMsg);
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
                    openModal('Request successful:' + data.msg + '\n' + alertMsg());
                } else {
                    throw new Error(data.msg);
                }
            })
            .catch(function (error) {
                openModal('There are some input errors:', error);
            })
    }

    // Alert successful
    var alertMsg = function () {
        var inputs = [emailInput, passInput]
        var successAlert = '';
        for (var i = 0; i < inputs.length; i++) {
            successAlert += inputs[i].previousElementSibling.innerHTML + ': ';
            successAlert += inputs[i].value + '\n';
        }
        return successAlert;
    }

    // Create modal
    var openModal = function (title, modalData) {
        var modal = document.createElement('div');
        var modalTitle = document.createElement('p');
        var modalInfo = document.createElement('p');
        var content = document.createElement('div');
        var closeBtn = document.createElement('span');

        modal.classList.add('modal');
        modalTitle.classList.add('aside-title');
        content.classList.add('modal-content');
        closeBtn.classList.add('close');

        closeBtn.innerHTML = '&times;';
        modalTitle.innerHTML = title;
        modalInfo.innerText = modalData;

        content.appendChild(closeBtn);
        content.appendChild(modalTitle);
        content.appendChild(modalInfo);
        modal.appendChild(content);

        closeBtn.onclick = function () {
            modal.classList.remove('modal');
            modal.classList.add('display-none');
        }

        document.body.appendChild(modal);
    }
}