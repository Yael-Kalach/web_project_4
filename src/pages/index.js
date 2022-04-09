// Imports
//utils
import {
  settings,
  openEditFormButton,
  openAddFormButton,
  openAvatarFormButton,
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
import "../pages/index.css"
import { data } from "autoprefixer"

// API
let userId

Promise.all([api.getInitialCards(), api.getUserInformation(), api.getUserAvatar()])
  .then(([cardData, userData]) => {
    console.log('cardData', cardData)
    userId = userData._id
    cardList.renderItems(cardData);
    userInfo.setUserInfo({name: userData.name, about: userData.about});
    userInfo.setAvatar({avatar: userData.avatar})
  })

// form validators
const editFormValidator = new FormValidator(settings, editForm)
const addCardFormValidator = new FormValidator(settings, addCardForm)
editFormValidator.enableValidation()
addCardFormValidator.enableValidation()

// card template
const cardTemplateSelector = ('#card-template')

// user info
const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about', avatarSelector: '.profile__picture'})

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

const avatarPopup = new PopupWithForm('.avatar-popup', (data) => {
  userInfo.setAvatar(data)
  avatarPopup.close()
})

const confirmPopup = new PopupWithSubmit('.delete-card-popup');

// Event Listeners
imagePopup.setEventListeners()

editPopup.setEventListeners()

addPopup.setEventListeners()

confirmPopup.setEventListeners()

avatarPopup.setEventListeners()

// buttons
openEditFormButton.addEventListener('click', () => {
  editPopup.open('Save')
})

openAddFormButton.addEventListener('click', () => {
  addPopup.open('Create')
})

openAvatarFormButton.addEventListener('click', () => {
  avatarPopup.open('Save')
})
// Section rendering
function renderCard (data) {
  const cardElement = new Card({data,
    handleCardClick: () => {
    imagePopup.open(data.link, data.name)
  },
    handleDeleteCard: (id) => {
    confirmPopup.open('Yes')
    confirmPopup.setAction(() => {
      api.deleteCard(id)
      .then(res => {
        cardElement.removeCard(res)
        confirmPopup.close()
      })
    })
  },
    handleLikeButton: (id) => {
      const isAlreadyLiked = cardElement.isLiked()

        if (isAlreadyLiked){
          api.unlikeCard(id)
          .then(res => {
            cardElement.rmoveLikeCard(res.likes)
          })
        }
        else{
          api.likeCard(id)
          .then(res => {
            cardElement.addLikeCard(res.likes)
          })
        }
    }
  }, cardTemplateSelector, userId);
  return cardElement.getCardElement()
}

const cardList = new Section ({
  renderer: (item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
      owner: item.owner,
      likes: item.likes,
      _id: item._id
    };
    cardList.addItem(renderCard(cardPropsObject));
    }
  }, '.elements'
);
