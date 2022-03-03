// popups
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const imagePopup = document.querySelector('.image-popup');
// overlay
const editOverlay = editPopup.querySelector('.edit-popup__overlay');
const addOverlay = addPopup.querySelector('.add-popup__overlay');
const imageOverlay = imagePopup.querySelector('.image-popup__overlay');
// buttons
const openEditFormButton = document.querySelector('.profile__button_type_edit');
const openAddFormButton = document.querySelector('.profile__button_type_add');
// X buttons
const editCloseButton = editPopup.querySelector('.edit-popup__close-button');
const addCloseButton = addPopup.querySelector('.add-popup__close-button');
const imageCloseButton = imagePopup.querySelector('.image-popup__close-button');
// forms
const editForm = document.querySelector(".edit-form")
const addCardForm = document.querySelector(".add-form")
// Profile
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
// Profile input
const inputName = document.querySelector('.form__input_type_name');
const inputAbout = document.querySelector('.form__input_type_about');
// Elements content
const cardList = document.querySelector('.elements');
// add form
const inputTitle = document.querySelector('.form__input_type_title');
const inputImage = document.querySelector('.form__input_type_image');

// Imports
  
    //Form validator
    import FormValidator from "./FormValidator.js"

    const settings = {
      formSelector: ".form",
      inputSelector: ".form__input",
      submitButtonSelector: ".form__button",
      inactiveButtonClass: "form__button_disabled",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__error_visible"
    }

    const editFormValidator = new FormValidator(settings, editForm)
    const addCardFormValidator = new FormValidator(settings, addCardForm)

    editFormValidator.enableValidation()
    addCardFormValidator.enableValidation()

    //utils
    import {openPopup, closePopup, handleCloseByClick} from "./utils.js"

    //Card
    import {Card} from "./Card.js"

// Profile popup
openEditFormButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(editPopup);
  checkInitialFormValidity(editPopup.querySelector('form'), settings);
});

// Profile form

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(editPopup)
}

editForm.addEventListener('submit', handleProfileFormSubmit);
editCloseButton.addEventListener('click', handleCloseByClick);
editOverlay.addEventListener('click', handleCloseByClick);

// Elements

const cardTemplateSelector = ('#card-template')

function renderCard (data) {
  const cardElement = new Card(data, cardTemplateSelector);
  cardList.prepend(cardElement.getCardElement);
}

// default cards

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

const populateCard = () => {
  initialCards.forEach((item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
    };
    cardList.append(renderCard(cardPropsObject));
  });
};
populateCard();

// add popup

openAddFormButton.addEventListener('click',() => {
  openPopup(addPopup)
  checkInitialFormValidity(addPopup.querySelector('form'), settings)
});
addCloseButton.addEventListener('click', handleCloseByClick);
addOverlay.addEventListener('click', handleCloseByClick);

// add form

function handleAddCardSubmit(event) {
  event.preventDefault();

  renderCard({name: inputTitle.value, link: inputImage.value})

  inputTitle.value = "";
  inputImage.value = "";

  closePopup(addPopup)
}

addCardForm.addEventListener('submit', handleAddCardSubmit);
// image popup
imageCloseButton.addEventListener('click', handleCloseByClick);
imageOverlay.addEventListener('mousedown', handleCloseByClick);