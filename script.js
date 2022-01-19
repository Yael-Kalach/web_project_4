const openEditFormButton = document.querySelector('.profile__button_type_edit');
const openAddFormButton = document.querySelector('.profile__button_type_add');
const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const closeButton = popup.querySelector('.popup__close-button');
const editCloseButton = editPopup.querySelector('.edit-popup__close-button');
const addCloseButton = addPopup.querySelector('.add-popup__close-button');
const editForm = document.querySelector('.form__edit');
const addForm = document.querySelector('.form__add');

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

// template
const cardTemplate = document.querySelector('#card-template').cloneNode(true).content.querySelector('.elements__card');

const addCard = (props) => {
  // props
  const localName = props.name;
  const localLink = props.link;
  const localCardTemplate = props.Template;
  // contents
  const cardElement = localCardTemplate;
  const cardImage = cardElement.querySelector('.elements__image');
  cardImage.style.backgroundImage = 'url(' + localLink + ')';
  const cardTitle = cardElement.querySelector('.elements__text');
  cardTitle.textContent = localName;
  // like button
  const cardLikeButton = cardElement.querySelector('.elements__button_like');
  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__button_like_active');
  });
  // trash button
  const cardTrashButton = cardElement.querySelector('.elements__button_trash');
  cardTrashButton.addEventListener('click', function () {
    const card = document.querySelector('.elements__card')
    card.forEach((item) => {
      item.remove();
    });});
  return cardElement
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

const cardPopulation = () => {
  const cardTemplate = document.querySelector('#card-template').cloneNode(true).content.querySelector('.elements__card');
  const cardList = document.querySelector('.elements');
  initialCards.forEach((item) => {
    const cardPropsObject = {
      name: item.name, 
      link: item.link,
      Template: cardTemplate
    };
    cardList.append(addCard(cardPropsObject));
    debugger;
  });
};
cardPopulation();

// add
const elementsTitle = document.querySelector('.elements__text');
const elementsImage = document.querySelector('.elements__image');

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

function handleCardSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector('.form__input_type_title');
  const inputImage = document.querySelector('.form__input_type_image');

  elementsTitle.textContent = inputTitle.value;
  elementsImage.style.backgroundImage = `url(${inputImage.value})`;
  closeAddForm()
  addCard(props)
  
  inputTitle.value = "";
  inputImage.value = "";
}

addForm.addEventListener('submit', handleCardSubmit);