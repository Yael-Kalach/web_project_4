// Imports
//utils
import {
  settings,
  openEditFormButton,
  openAddFormButton,
  editForm,
  addCardForm,
} from "../scripts/utils/utils.js"
import {PopupWithImage} from "../scripts/components/PopupWithImage.js"
import {PopupWithForm} from "../scripts/components/PopupWithForm.js"
import {PopupWithSubmit} from "../scripts/components/PopupWithSubmit.js"
import {api} from "../scripts/components/Api.js"
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

// API
let userId

Promise.all([api.getInitialCards(), api.getUserInformation()])
  .then(([cardData, userData]) => {
    console.log('cardData', cardData)
    userId = userData._id
    cardList.renderItems(cardData)
    userInfo.setUserInfo({name: userData.name, about: userData.about});
  })

// form validators
const editFormValidator = new FormValidator(settings, editForm)
const addCardFormValidator = new FormValidator(settings, addCardForm)
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

// card template
const cardTemplateSelector = ('#card-template')

// user info
const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'})

// popups
const imagePopup = new PopupWithImage('.image-popup');

const editPopup = new PopupWithForm('.edit-popup', (data) => {
  userInfo.setUserInfo(data);
  editPopup.close()
});

const addPopup = new PopupWithForm('.add-popup', (data) => {
  api.createCard(data)
    .then(res => {
      cardList.addItem(renderCard(res));
    })
  addPopup.close()
});

const confirmPopup = new PopupWithSubmit('.delete-card-popup');

// Event Listeners
imagePopup.setEventListeners()

editPopup.setEventListeners()

addPopup.setEventListeners()

confirmPopup.setEventListeners()

// buttons
openEditFormButton.addEventListener('click', () => {
  editPopup.open()
})

openAddFormButton.addEventListener('click', () => {
  addPopup.open()
})

// Section rendering
function renderCard (data) {
  const cardElement = new Card({data,
    handleCardClick: () => {
    imagePopup.open(data.link, data.name)
  },
    handleDeleteCard: (id) => {
    confirmPopup.open()

    confirmPopup.setAction(() => {
      api.deleteCard(id)
      .then(res => {
        cardElement.removeCard(res)
        confirmPopup.close()
      })
    })
  }}, cardTemplateSelector, userId);
  return cardElement.getCardElement()
}

const cardList = new Section ({
  renderer: (item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
    };
    cardList.addItem(renderCard(cardPropsObject));
    }
  }, '.elements'
);
