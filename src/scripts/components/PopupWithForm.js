import {Popup} from "./Popup.js"

export class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler){
    super(popupSelector)
    this._submitHandler = submitHandler
    this._form = this._popupElement.querySelector('.form')
  }

  _getInputValues(){
    const inputs = [...this._form.querySelectorAll('.form__input')]
    const inputValues = {}

    inputs.forEach((input) => {
      inputValues[input.name] = input.value
    })

    return inputValues
  }

  setEventListeners(){
    super.setEventListeners
    this._form.addEventListener('submit', () => this._submitHandler(this._getInputValues()))
  }

  close(){
    this._form.reset()
    super.close()
  }
}
