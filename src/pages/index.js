// Imports
//utils
import {
  settings,
  initialCards,
  openEditFormButton,
  openAddFormButton,
  inputTitle,
  inputImage,
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
const userInfo = new UserInfo({nameSelector: '.profile__name', aboutSelector: '.profile__about'})

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
    imagePopup.open(data.link, data.name)
  });
  return cardElement.getCardElement()
}

const cardList = new Section ({
  items: initialCards,
  renderer: () => {
    const cardElement = new Card({}, cardTemplateSelector, () => {
      renderCard()
      })
    return cardElement.getCardElement()
    }
  }, '.elements'
);
cardList.renderItems(renderCard(initialCards))

// const populateCard = () => {
//   initialCards.forEach((item) => {
//     const cardPropsObject = {
//       name: item.name,
//       link: item.link,
//     };
//     cardList.addItem(renderCard(cardPropsObject));
//   });
// };
// populateCard();
