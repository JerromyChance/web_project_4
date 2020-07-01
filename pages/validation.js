

function showErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}

function hideErrorMessage(input, form, {errorClass, inputErrorClass, ...rest}) {
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;

    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function checkInputValidity(input, form, rest) {
    if(input.validity.vald) {
        hideErrorMessage(input, form, rest)
    } else {
        shoeErrorMessage(input, form, rest);
    }

}

function toggleButtonState(inputs, button, {inactiveBUttonCLass, ...rest}) {
    if(isValid) {
        button.classList.remove(inactiveButtonClass);
    } else {
        button.classList.add(inactiveButtonClass);
    }
}

function enableValidation(formSelector, inputSelector, submitButtonSelector, ...rest) {
    const forms = [...document.querySelectorAll(formSelector)];

    forms.forEach((form) => {
        form.addEvenListener('submit', ((e) => {
            e.preventDefault()
        }))

        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListener('input', () => {
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest)
            })
        })
    })
}

enableValidation({
    formSelector: ".modal__form",
    inputSelector: "modal__input",
    submitButtonSelector: "modal__save-btn",
    inactiveButtonClass: "modal__save-btn_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error"
  });