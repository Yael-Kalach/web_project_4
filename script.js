// popups
const popupMaster = document.querySelector('.popup');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const imagePopup = document.querySelector('.image-popup');
// overlay
const popupOverlay = popupMaster.querySelector('.popup__overlay');
const editOverlay = editPopup.querySelector('.edit-popup__overlay');
const addOverlay = addPopup.querySelector('.add-popup__overlay');
const imageOverlay = imagePopup.querySelector('.image-popup__overlay');
// buttons
const openEditFormButton = document.querySelector('.profile__button_type_edit');
const openAddFormButton = document.querySelector('.profile__button_type_add');
// X buttons
const closeButtonMaster = popupMaster.querySelector('.popup__close-button');
const editCloseButton = editPopup.querySelector('.edit-popup__close-button');
const addCloseButton = addPopup.querySelector('.add-popup__close-button');
const imageCloseButton = imagePopup.querySelector('.image-popup__close-button');
// forms
const editForm = document.querySelector('.edit-form');
const addForm = document.querySelector('.add-form');
// Profile
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
// Profile input
const inputName = document.querySelector('.form__input_type_name');
const inputAbout = document.querySelector('.form__input_type_about');
// Elements content
const fullSizeImage = imagePopup.querySelector('.image-popup__image');
const imageCaption = imagePopup.querySelector('.image-popup__caption');
const cardList = document.querySelector('.elements');
// add form
const inputTitle = document.querySelector('.form__input_type_title');
const inputImage = document.querySelector('.form__input_type_image');

// Popup functions
function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener("keydown", escClose);
}

function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.addEventListener("keydown", escClose);
}

function handleClosePopup(event) {
  closePopup(event.target.closest('.popup'));
}

function escClose(event) {
  if (event.key == "Escape"){ 
  const visiblePopup = document.querySelector('.popup_visible');
  visiblePopup.classList.remove('popup_visible');
  }
 }

// Profile popup
openEditFormButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(editPopup);
});

// Profile form

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  handleClosePopup(event)
}

editForm.addEventListener('submit', handleProfileFormSubmit);
editCloseButton.addEventListener('click', handleClosePopup);
editOverlay.addEventListener('click', handleClosePopup);
// Elements

const addCard = (card) => {
  // template
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  // buttons
  const cardLikeButton = cardElement.querySelector('.elements__button_like');
  const cardTrashButton = cardElement.querySelector('.elements__button_trash');
  // content
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__text');
 
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;

  // like button
 
 cardLikeButton.addEventListener("click", (e) => {
  e.target.classList.toggle("elements__button_like_active");
});

  // trash button
 
 cardTrashButton.addEventListener('click', function (evt) {
   evt.target.closest('.elements__card').remove();
 });

 //image

 cardImage.addEventListener('click', function (evt) {
  fullSizeImage.src = evt.target.src;
  fullSizeImage.alt = evt.target.alt;
  imageCaption.textContent = evt.target.alt;
  openPopup(imagePopup)
 })

  return cardElement
}

function renderCard (card) { 
  cardList.prepend(addCard(card)); 
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
    cardList.append(addCard(cardPropsObject));
  });
};
populateCard();

// add popup

openAddFormButton.addEventListener('click',() => {openPopup(addPopup)});
addCloseButton.addEventListener('click', handleClosePopup);
addOverlay.addEventListener('click', handleClosePopup);

// add form

function handleAddCardSubmit(event) {
  event.preventDefault();

  renderCard({name: inputTitle.value, link: inputImage.value})

  inputTitle.value = "";
  inputImage.value = "";

  handleClosePopup(event)
}

addForm.addEventListener('submit', handleAddCardSubmit);

imageCloseButton.addEventListener('click', handleClosePopup);
imageOverlay.addEventListener('click', handleClosePopup);