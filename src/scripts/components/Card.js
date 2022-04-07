export class Card {
  constructor({data, handleCardClick, handleDeleteCard}, templateCardSelector, userId){
    this._name = data.name
    this._link = data.link
    this._ownerId = data.owner._id
    this._id = data._id
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
    this._handleDeleteCard = handleDeleteCard
    this._userId = userId
    console.log('this._ownerId', this._ownerId)
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

  _addEventListeners = () => {
    // like button
    this._cardLikeButton.addEventListener('click', () => this._handleLikeButton);
    // trash button
    this._cardTrashButton.addEventListener('click', () => this._handleDeleteCard(this._id));
    // image
    this._cardLink.addEventListener('click', () => this._handleCardClick())
  }

  removeCard(){
    this._cardElement.remove();
    this._cardElement = null;
  }

  getCardElement = () => {
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._cardName.textContent = this._name;

    if(this._ownerId !== this._userId){
      this._cardTrashButton.style.display = 'none'
    }

    this._addEventListeners()
    return this._cardElement
  }

}
