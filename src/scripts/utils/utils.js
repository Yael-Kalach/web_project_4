export const profileSelector = document.querySelector('.profile');
export const cardListSelector = document.querySelector('.elements');
export const openEditFormButton = document.querySelector('.profile__button_type_edit');
export const openAddFormButton = document.querySelector('.profile__button_type_add');
export const editCloseButton = document.querySelector('.edit-popup__close-button');
export const addCloseButton = document.querySelector('.add-popup__close-button');
export const imageCloseButton = document.querySelector('.image-popup__close-button');
// add form
export const inputTitle = document.querySelector('.form__input_type_title');
export const inputImage = document.querySelector('.form__input_type_image');
// edit form
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');

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
