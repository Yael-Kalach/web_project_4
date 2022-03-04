class FormValidator {
  constructor(config, formElement){
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = formElement
  }

  _showInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = inputElement.validationMessage
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = ''
  }

  _checkInputValidity(inputElement) {
    if(inputElement.validity.valid) {
      this._hideInputError(inputElement)
    }
      else {
        this._showInputError(inputElement, inputElement.validationMessage)
      };
  };

  _toggleButtonState = () => {
    const hasInvalidInput = this._inputElements.some(inputElement => !inputElement.validity.valid)
    const submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
    if (hasInvalidInput) {
      submitButtonElement.classList.add(this._inactiveButtonClass);
      submitButtonElement.disabled = true;
    } else {
      submitButtonElement.classList.remove(this._inactiveButtonClass);
      submitButtonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputElements = [...this._formElement.querySelectorAll(this._inputSelector)];

    this._inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })

    this._toggleButtonState();

  }

  checkInitialFormValidity() {
    this._inputElements = [...this._formElement.querySelectorAll(this._inputSelector)];
    const submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);

    this._toggleButtonState(this._inputElements, submitButtonElement);
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    })

    this._setEventListeners()
  }
}

export default FormValidator
