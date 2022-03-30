// Imports
//utils
import {
  settings,
  initialCards,
  openEditFormButton,
  openAddFormButton,
  editForm,
  addCardForm
} from "../scripts/utils/utils.js"
import {PopupWithImage} from "../scripts/components/PopupWithImage.js"
import {PopupWithForm} from "../scripts/components/PopupWithForm.js"
//Form validator
import FormValidator from "../scripts/components/FormValidator.js"
// user info
import {UserInfo} from "../scripts/components/UserInfo.js"
//section
import {Section} from "../scripts/components/Section.js"
//Card
import {Card} from "../scripts/components/Card.js"
//misc
// import { data } from "autoprefixer"
import "../pages/index.css"

// form validators
const editFormValidator = new FormValidator(settings, editForm)
const addCardFormValidator = new FormValidator(settings, addCardForm)
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

// card template
const cardTemplateSelector = ('#card-template')

// user info
const userInfo = new UserInfo({titleSelector: '.profile__title', aboutSelector: '.profile__about'})

// popups
const imagePopup = new PopupWithImage('.image-popup');
const editPopup = new PopupWithForm('.edit-popup', (data) => {
  userInfo.setUserInfo(data);
  editPopup.close()
});
const addPopup = new PopupWithForm('.add-popup', (data) => {
  cardList.addItem(renderCard(data));
  addPopup.close()
});

// Event Listeners
imagePopup.setEventListeners()

editPopup.setEventListeners()

addPopup.setEventListeners()

// buttons
openEditFormButton.addEventListener('click', () => {
  editPopup.open()
})

openAddFormButton.addEventListener('click', () => {
  addPopup.open()
})

// Section rendering
function renderCard (data) {
  const cardElement = new Card({data}, cardTemplateSelector, () => {
    imagePopup.open(data.image, data.title)
  });
  return cardElement.getCardElement()
}

const cardList = new Section ({
  items: initialCards,
  renderer: (item) => {
    const cardPropsObject = {
      title: item.title,
      image: item.image,
    };
    cardList.addItem(renderCard(cardPropsObject));
    }
  }, '.elements'
);
cardList.renderItems()
