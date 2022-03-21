export class Popup {
  constructor(popupSelector){
    this._popupElement = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  _handleEscClose(e){
      if(e.key === 'Escape'){
        this.close()
      }
  }

  open(){
    this._popupElement.classList.add('popup_visible');
    document.addEventListener('keyup', this._handleEscClose)
  }

  close(){
    this._popupElement.classList.remove('popup_visible');
    document.removeEventListener('keyup', this._handleEscClose)
  }

  setEventListeners(){
    this._popupElement.addEventListener('click', (event) => {
      if(event.target.classList.contains('popup__close-button') || !event.target.classList.contains('popup__container')) {
        this.close(this._popupElement)
      }
    })
  }
}
