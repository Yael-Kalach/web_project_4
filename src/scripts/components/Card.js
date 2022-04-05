export class Card {
  constructor({data}, templateCardSelector, handleCardClick){
    this._name = data.name
    this._link = data.link
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
    // template
    this._cardTemplate = document.querySelector(this._templateCardSelector).content;
    this._cardElement = this._cardTemplate.querySelector('.elements__card').cloneNode(true);
    // content
    this._cardName = this._cardElement.querySelector('.elements__text');
    this._cardLink = this._cardElement.querySelector('.elements__image');
    // buttons
    this._cardLikeButton = this._cardElement.querySelector('.elements__button_like');
    this._cardTrashButton = this._cardElement.querySelector('.elements__button_trash');
  }

  _handleLikeButton = () => this._cardLikeButton.classList.toggle("elements__button_like_active");

  _handleDeleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _addEventListeners = () => {
    // like button
    this._cardLikeButton.addEventListener('click', this._handleLikeButton);
    // trash button
    this._cardTrashButton.addEventListener('click', this._handleDeleteCard);
    // image
    this._cardLink.addEventListener('click', this._handleCardClick)
  }

  getCardElement = () => {
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._cardName.textContent = this._name;

    this._addEventListeners()
    return this._cardElement
  }

}
