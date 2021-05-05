const form = document.getElementById('form');

function sendUserData(event) {
    event.preventDefault();

    const name = event.target[0].value.trim();
    const lastName = event.target[1].value.trim();
    const monLastName = event.target[2].value.trim();
    const email = event.target[3].value.trim();
    const tel = event.target[4].value.trim();
    const address = event.target[5].value.trim();
    const regexNames = /[^a-zA-Z ]/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexPhone = /[^0-9]/;
    const regexAddress = /[^a-zA-Z0-9-.# ]/;
    const errorMessages = [];

    if (name.length === 0 || regexNames.test(name)) {
        errorMessages.push('Nombre incorrecto');
    }
    if (lastName.length === 0 || regexNames.test(lastName)) {
        errorMessages.push('Apellido Paterno incorrecto');
    }
    if (monLastName.length === 0 || regexNames.test(monLastName)) {
        errorMessages.push('Apellido Materno incorrecto');
    }
    if (email.length === 0 || !regexEmail.test(email)) {
        errorMessages.push('Email incorrecto');
    }
    if (tel.length === 0 || regexPhone.test(tel)) {
        errorMessages.push('Teléfono incorrecto');
    }
    if (address.length === 0 || regexAddress.test(address)) {
        errorMessages.push('Dirección incorrecta');
    }
    if (errorMessages.length > 0) {
        console.log(errorMessages);
    } else {
        const userData = { name, lastName, monLastName, email, tel, address };
        console.log(userData);
    }
}

form.onsubmit = sendUserData;