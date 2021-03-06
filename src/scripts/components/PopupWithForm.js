import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler){
    super(popupSelector)
    this._submitHandler = submitHandler
    this._form = this._popupElement.querySelector('.form')
    this._submitBtn = this._form.querySelector('.form__button');
    this._submitBtnText = this._submitBtn.textContent
    this._inputs = this._form.querySelectorAll('.form__input')
    this._inputsValues = {}
  }

  open(){
    super.open()
    this.renderLoading(false)
  }

  renderLoading(isLoading, loadingText='Saving...') {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  _getInputValues(){
    this._inputs.forEach((input) => {
      this._inputsValues[input.name] = input.value
    })
    return this._inputsValues
  }

  setInputValues(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    });
  }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this.renderLoading(true)
      this._submitHandler(this._getInputValues())
    })
  }

  close(){
    super.close()
    this._form.reset()
  }
}
