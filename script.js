const openFormButton = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');
const form = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const inputName = document.querySelector('.form__input_type_name');
const inputAbout = document.querySelector('.form__input_type_about');

//popup

function openForm() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.classList.add('popup_visible');
}

function closeForm() {
  popup.classList.remove('popup_visible');
}

openFormButton.addEventListener('click', openForm);
closeButton.addEventListener('click', closeForm); 

//form

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeForm()
}

form.addEventListener('submit', handleFormSubmit); 

//like button
