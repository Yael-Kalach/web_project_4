import {imagePopup, openPopup, fullSizeImage, imageCaption} from "./utils.js"

export class Card {
  constructor({name, link}, templateCardSelector){
    this._name = name
    this._link = link
    this._templateCardSelector = templateCardSelector
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

  _handleDeleteCard = () => this._cardElement.remove();

  _handleImagePopup = () => {
    fullSizeImage.src = this._link.src;
    fullSizeImage.alt = `${this._name}`;
    imageCaption.textContent = this._name;
    openPopup(imagePopup)
  }

  _addEventListeners = () => {
    // like button
    this._cardLikeButton.addEventListener('click', this._handleLikeButton);
    // trash button
    this._cardTrashButton.addEventListener('click', this._handleDeleteCard);
    // image
    this._cardImage.addEventListener('click', this._handleImagePopup)
  }

  getCardElement = () => {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._addEventListeners()
    return this._cardElement
  }

}
