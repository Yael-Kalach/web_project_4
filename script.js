const openEditFormButton = document.querySelector('.profile__button_type_edit');
const openAddFormButton = document.querySelector('.profile__button_type_add');
const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.edit__popup');
const addPopup = document.querySelector('.add__popup');
const closeButton = popup.querySelector('.popup__close-button');
const editCloseButton = editPopup.querySelector('.edit-popup__close-button');
const addCloseButton = addPopup.querySelector('.add-popup__close-button');
const editForm = document.querySelector('.form__edit');
const addForm = document.querySelector('.form__add');
const elementsContainer = document.querySelector('.elements__container');

// edit
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
// edit input
const inputName = document.querySelector('.form__input_type_name');
const inputAbout = document.querySelector('.form__input_type_about');

// Edit popup

function openEditForm() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  editPopup.classList.add('popup_visible');
}

function closeEditForm() {
  editPopup.classList.remove('popup_visible');
}

openEditFormButton.addEventListener('click', openEditForm);
editCloseButton.addEventListener('click', closeEditForm);

// Edit form

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeEditForm()
}

editForm.addEventListener('submit', handleFormSubmit);

// Elements

function addElement(imageValue, textValue) {
  // template
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  // contents
  cardElement.querySelector('.elements__image').textContent = imageValue;
  cardElement.querySelector('.elements__text').textContent = textValue;
  // trash button
  cardElement.querySelector('.elements__button_trash').addEventListener("click", function (evt) {
    evt.cardElement.remove();})
  // like button
  cardElement.querySelector('.elements__button_like').addEventListener("click", function (evt) {
    evt.target.classList.toggle('elements__button_like_active');
  });
  elementsContainer.append(cardElement);
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

elementsContainer.append(initialCards)

// add
const elementsTitle = document.querySelector('.elements__text');
const elementsImage = document.querySelector('.elements__image');
// add input
const inputTitle = document.querySelector('.form__input_type_title');
const inputImage = document.querySelector('.form__input_type_image');

// add popup

function openAddForm() {
  addPopup.classList.add('popup_visible');
}

function closeAddForm() {
  addPopup.classList.remove('popup_visible');
}

openAddFormButton.addEventListener('click', openAddForm);
addCloseButton.addEventListener('click', closeAddForm);

// add form

function handleCardSubmit(event) {
  event.preventDefault();
  elementsTitle.textContent = inputTitle.value;
  elementsImage.textContent = inputImage.value;
  closeAddForm()
  addElement()
}

addForm.addEventListener('submit', handleCardSubmit);