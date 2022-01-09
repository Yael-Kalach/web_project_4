const openFormButton = document.querySelector('.profile__button_edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const form = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.popup__form_input_name');
const inputAbout = document.querySelector('.popup__form_input_about');

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', closeForm); 

//popup

function toggleForm() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_visible');
}

function closeForm() {
  popup.classList.remove('popup_visible');
}

//form

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
}

form.addEventListener('submit', handleFormSubmit); 
form.addEventListener('submit', closeForm); 

//like button
