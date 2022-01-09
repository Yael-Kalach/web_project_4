const openFormButton = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const overlay = document.querySelector('.popup__overlay');
const closeButton = popup.querySelector('.popup__close-button');
const form = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.popup__form_input_name');
const inputAbout = document.querySelector('.popup__form_input_about');

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', closeForm); 


function toggleForm() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_visible');
  overlay.classList.add('popup__overlay_active');
}

function closeForm() {
  popup.classList.remove('popup_visible');
  overlay.classList.remove('popup__overlay_active');
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
}

form.addEventListener('submit', handleFormSubmit); 