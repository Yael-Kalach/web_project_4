class FormValidator {
  constructor(settings, formElement){
    this._settings = settings
    this._formElement = formElement
  }

  _hideInputError(inputElement) {
    const {inputErrorClass, errorClass} = this._settings
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = ''
  }

  _showInputError(inputElement) {
    const {inputErrorClass, errorClass} = this._settings
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = inputElement.validationMessage
  }

  _checkInputValidity(inputElement) {
    if(inputElement.validity.valid) {
      this._hideInputError(inputElement, inputElement.validationMessage)
    }
      else {
        this._showInputError(inputElement)
      };
  };

  _hasInvalidInput = () => this.inputElements.some(inputElement => !inputElement.validity.valid)

  _toggleButtonState = () => {
    const {inactiveButtonClass, submitButtonSelector} = this._settings
    const submitButtonElement = this._formElement.querySelector(submitButtonSelector);
    if (this._hasInvalidInput) {
      submitButtonElement.classList.add(inactiveButtonClass);
      submitButtonElement.disabled = true;
    } else {
      submitButtonElement.classList.remove(inactiveButtonClass);
      submitButtonElement.disabled = false;
    }
  };

  _setEventListeners() {
    const {inputSelector} = this._settings
    this.inputElements = [...this._formElement.querySelectorAll(inputSelector)];

    this.inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })

    this._toggleButtonState();

  }

  checkInitialFormValidity() {
    const {inputSelector, submitButtonSelector} = this._settings

    const inputElements = [...formElement.querySelectorAll(inputSelector)];
    const submitButtonElement = formElement.querySelector(submitButtonSelector);

    this._toggleButtonState(inputElements, submitButtonElement);
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    })

    this._setEventListeners()
  }
}

export default FormValidator
