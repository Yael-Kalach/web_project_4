function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.classList.remove(settings.errorClass);
  errorElement.textContent = ''
}

function showInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);
  errorElement.classList.add(settings.errorClass);
  errorElement.textContent = inputElement.validationMessage
}

function checkInputValidity(formElement, inputElement, settings) {
  if(inputElement.validity.valid) {
    hideInputError(formElement, inputElement, settings)
  }
  else{
    showInputError(formElement, inputElement, settings)
  }
}

const toggleButtonState = (inputElements, submitButtonElement, settings) => {
  const hasInvalidInput = inputElements.some(inputElement => !inputElement.validity.valid)
  if (hasInvalidInput) {
    submitButtonElement.classList.add(settings.inactiveButtonClass);
  } else {
    submitButtonElement.classList.remove(settings.inactiveButtonClass);
  }
};

function setEventListeners(formElement, settings) {
  const inputElements = [...formElement.querySelectorAll(settings.inputSelector)];
  const submitButtonElement = formElement.querySelector(settings.submitButtonSelector);

  inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputElements, submitButtonElement, settings);
    })
  })

  toggleButtonState(inputElements, submitButtonElement, settings);

}

function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);

  forms.forEach(formElement => {
    formElement.addEventListener("submit", function (e) {
      e.preventDefault();
  })
  setEventListeners(formElement, settings)
});
};


enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
});
