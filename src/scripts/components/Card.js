export class Card {
  constructor({data}, templateCardSelector, handleCardClick){
    this._title = data.title
    this._image = data.image
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
    // template
    this._cardTemplate = document.querySelector(this._templateCardSelector).content;
    this._cardElement = this._cardTemplate.querySelector('.elements__card').cloneNode(true);
    // content
    this._cardTitle = this._cardElement.querySelector('.elements__text');
    this._cardImage = this._cardElement.querySelector('.elements__image');
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
    this._cardImage.addEventListener('click', this._handleCardClick)
  }

  getCardElement = () => {
    this._cardImage.src = this._image;
    this._cardImage.alt = this._title;
    this._cardTitle.textContent = this._title;

    this._addEventListeners()
    return this._cardElement
  }

}
