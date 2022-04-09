export class Card {
  constructor({data, handleCardClick, handleDeleteCard, handleLikeButton}, templateCardSelector, userId){
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this._ownerId = data.owner._id
    this._id = data._id
    this._templateCardSelector = templateCardSelector
    this._handleCardClick = handleCardClick
    this._handleLikeButton = handleLikeButton
    this._handleDeleteCard = handleDeleteCard
    this._userId = userId
    // template
    this._cardTemplate = document.querySelector(this._templateCardSelector).content;
    this._cardElement = this._cardTemplate.querySelector('.elements__card').cloneNode(true);
    // content
    this._cardName = this._cardElement.querySelector('.elements__text');
    this._cardLink = this._cardElement.querySelector('.elements__image');
    // buttons
    this._cardLikeButton = this._cardElement.querySelector('.elements__button_like');
    this._cardTrashButton = this._cardElement.querySelector('.elements__button_trash');
    //like counter
    this._likeCounter = this._cardElement.querySelector('.elements__counter');
  }

  _addEventListeners = () => {
    // like button
    this._cardLikeButton.addEventListener('click', () => this._handleLikeButton(this._id));
    // trash button
    if (this._userId === this._ownerId) {
      this._cardTrashButton.addEventListener('click', () => this._handleDeleteCard(this._id));
    };
    // image
    this._cardLink.addEventListener('click', () => this._handleCardClick())
  }

  isLiked(){
    return this._likes.some((person) => person._id === this._userId)
  }

  addLikeCard(newLikes){
    this._likes = newLikes
    this._likeCounter.textContent = this._likes.length
    this._cardLikeButton.classList.add("elements__button_like_active");
  }

  rmoveLikeCard(newLikes){
    this._likes = newLikes
    this._likeCounter.textContent = this._likes.length
    this._cardLikeButton.classList.remove("elements__button_like_active");
  }

  removeCard(){
    this._cardElement.remove();
    this._cardElement = null;
  }

  getCardElement = () => {
    this._cardLink.src = this._link;
    this._cardLink.alt = this._name;
    this._cardName.textContent = this._name;

    this._likeCounter.textContent = this._likes.length

    if(this.isLiked()){
      this.addLikeCard(this._likes)
    }

    if(this._ownerId !== this._userId){
      this._cardTrashButton.style.display = 'none'
    }

    this._addEventListeners()
    return this._cardElement
  }

}
