console.log('#Tuts-50: Form Validation in Javascript');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failed').hide();

let btnSubmit = document.getElementById('btnSubmit');
btnSubmit.setAttribute('disabled', true);

name.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;

    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
        btnSubmit.removeAttribute('disabled', true);

    }
    else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        btnSubmit.setAttribute('disabled', true);

    }
});

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;

    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
        btnSubmit.removeAttribute('disabled', true);

    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;
        btnSubmit.setAttribute('disabled', true);

    }
});

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;

    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
        btnSubmit.removeAttribute('disabled', true);

    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;
        btnSubmit.setAttribute('disabled', true);

    }
});

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let success = document.getElementById('success');
    let failed = document.getElementById('failed');

    if (validUser && validEmail && validPhone) {
        success.classList.add('show');
        failed.classList.remove('show');
        $('#success').show();
        $('#failed').hide();
    }
    else {
        success.classList.remove('show');
        failed.classList.add('show');
        $('#success').hide();
        $('#failed').show();
    }
});