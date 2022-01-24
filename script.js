const openEditFormButton = document.querySelector('.profile__button_type_edit');
const openAddFormButton = document.querySelector('.profile__button_type_add');
const popup = document.querySelector('.popup');
const editPopup = document.querySelector('.edit-popup');
const addPopup = document.querySelector('.add-popup');
const closeButton = popup.querySelector('.popup__close-button');
const editCloseButton = editPopup.querySelector('.edit-popup__close-button');
const addCloseButton = addPopup.querySelector('.add-popup__close-button');
const editForm = document.querySelector('.edit-form');
const addForm = document.querySelector('.add-form');

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

const imagePopup = document.querySelector('.image-popup');
const imageCloseButton = imagePopup.querySelector('.image-popup__close-button');
const fullSizeImage = imagePopup.querySelector('.image-popup__image');
const imageCaption = imagePopup.querySelector('.image-popup__caption');

const addCard = (card) => {
  // template
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  // buttons
  const cardLikeButton = cardElement.querySelector('.elements__button_like');
  const cardTrashButton = cardElement.querySelector('.elements__button_trash');
  // content
  cardImage = cardElement.querySelector('.elements__image');
  cardTitle = cardElement.querySelector('.elements__text');
 
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
  imageCaption.textContent = evt.target.alt;
  imagePopup.classList.add('popup_visible');
 })

 function closeImagePopup() {
  imagePopup.classList.remove('popup_visible');
 }

  imageCloseButton.addEventListener('click', closeImagePopup)

  return cardElement
}

function renderCard (card) { 
  const cardList = document.querySelector('.elements');
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

const cardPopulation = () => {
  const cardList = document.querySelector('.elements');
  initialCards.forEach((item) => {
    const cardPropsObject = {
      name: item.name, 
      link: item.link,
    };
    cardList.append(addCard(cardPropsObject));
  });
};
cardPopulation();

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

  renderCard({name: inputTitle.value, link: inputImage.value})

  inputTitle.value = "";
  inputImage.value = "";

  closeAddForm()
}

addForm.addEventListener('submit', handleCardSubmit);

//image.forEach((img) => {
//  img.addEventListener('click', (img) => {
//    imagePopup.classList.add('popup_visible');
//    const getImageStyle = img.style.background;
//    const getImageCaption = img.textContent;

//    fullSizeImage.style.background = getImageStyle;
//    imageCaption.textContent = getImageCaption;
//  });
//})