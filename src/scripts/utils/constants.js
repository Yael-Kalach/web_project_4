export const profileSelector = document.querySelector('.profile');
export const cardListSelector = document.querySelector('.elements');
export const openEditFormButton = document.querySelector('.profile__button_type_edit');
export const openAddFormButton = document.querySelector('.profile__button_type_add');
export const openAvatarFormButton = document.querySelector('.profile__button_type_avatar');
export const editCloseButton = document.querySelector('.edit-popup__close-button');
export const addCloseButton = document.querySelector('.add-popup__close-button');
export const imageCloseButton = document.querySelector('.image-popup__close-button');
// add form
export const inputTitle = document.querySelector('.form__input_type_title');
export const inputImage = document.querySelector('.form__input_type_image');
// edit form
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__about');
// forms
export const editForm = document.querySelector(".edit-form")
export const avatarForm = document.querySelector(".avatar-form")
export const addCardForm = document.querySelector(".add-form")
// card template
export const cardTemplateSelector = ('#card-template')

export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
  }

export const initialCards = [
  {
    title: "Yosemite Valley",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    title: "Lake Louise",
    image: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    title: "Bald Mountains",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    title: "Latemar",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    title: "Vanoise National Park",
    image: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    image: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];
