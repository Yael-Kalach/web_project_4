class FormValidator {
  constructor(config, formElement){
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    this._formElement = formElement
    this._inputElements = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._submitButtonElement = this._formElement.querySelector(this._submitButtonSelector);
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
    if (hasInvalidInput) {
      this._submitButtonElement.classList.add(this._inactiveButtonClass);
      this._submitButtonElement.disabled = true;
    } else {
      this._submitButtonElement.classList.remove(this._inactiveButtonClass);
      this._submitButtonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      })
    })

    this._toggleButtonState();

  }

  resetValidation() {
    this._toggleButtonState();

    this._inputElements.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  checkInitialFormValidity() {
    this._toggleButtonState();
  }

  enableValidation() {
    this._formElement.addEventListener("submit", function (e) {
      e.preventDefault();
    })

    this._setEventListeners()
  }

}

export default FormValidator
