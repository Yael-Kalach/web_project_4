const cardTemplateSelector = ('#card-template')

// forms
const editForm = document.querySelector(".edit-form")
const addCardForm = document.querySelector(".add-form")

// Imports

    // Popups
    import {PopupWithImage} from "../components/PopupWithImage.js"
    import {PopupWithForm} from "../components/PopupWithForm.js"

    //Form validator
    import FormValidator from "../components/FormValidator.js"

    const editFormValidator = new FormValidator(settings, editForm)
    const addCardFormValidator = new FormValidator(settings, addCardForm)

    editFormValidator.enableValidation()
    addCardFormValidator.enableValidation()

    // user info
    import {UserInfo} from "../components/UserInfo.js"

    //section
    import {Section} from "../components/Section.js"

    //utils
    import {
      settings,
      initialCards,
      openEditFormButton,
      openAddFormButton,
      editCloseButton,
      addCloseButton,
      imageCloseButton,
      inputTitle,
      inputImage,
      profileName,
      profileAbout
    } from "../utils/utils.js"

    //Card
    import {Card} from "../components/Card.js"

    //misc
    // import { data } from "autoprefixer"

    //import "../../pages/index.css"


const userInfo = new UserInfo({name: '.profile__name', about: '.profile__about'})

// popups
const imagePopup = new PopupWithImage('.image-popup');
const editPopup = new PopupWithForm('.edit-popup', (data) => {
  userInfo.setUserInfo(data);
  debugger
});
const addPopup = new PopupWithForm('.add-popup', () => {
  cardList.addItem(renderCard({
      name: inputTitle.value,
      link: inputImage.value
      })
    );
});

// Event Listeners
imagePopup.setEventListeners()

editPopup.setEventListeners()

addPopup.setEventListeners()

addCardForm.addEventListener('submit', () => {
  addPopup.close()
})

editForm.addEventListener('submit', () => {
  editPopup.close()
})

// buttons
openEditFormButton.addEventListener('click', () => {
  editPopup.open()
})

openAddFormButton.addEventListener('click', () => {
  addPopup.open()
})

// X buttons
editCloseButton.addEventListener('click', () => {
  editPopup.close()
})

addCloseButton.addEventListener('click', () => {
  addPopup.close()
})

imageCloseButton.addEventListener('click', () => {
  imagePopup.close()
})

// Section rendering
function renderCard (data) {
  const cardElement = new Card({data}, cardTemplateSelector, () => {
    imagePopup.open(data.link, data.name)
  });
  return cardElement.getCardElement()
}

const cardList = new Section ({
  items: {},
  renderer: (item) => {
    const cardElement = new Card({item}, cardTemplateSelector, () => {
      imagePopup.open(item.link, item.name)
      })
    return cardElement.getCardElement()
    }
  }, '.elements'
);

const populateCard = () => {
  initialCards.forEach((item) => {
    const cardPropsObject = {
      name: item.name,
      link: item.link,
    };
    cardList.addItem(renderCard(cardPropsObject));
  });
};
populateCard();

// OLD CODE - NO TOUCHY

// Profile

// // Profile input
// const inputName = document.querySelector('.form__input_type_name');
// const inputAbout = document.querySelector('.form__input_type_about');

// Profile popup
// openEditFormButton.addEventListener('click', () => {
//   inputName.value = profileName.textContent;
//   inputAbout.value = profileAbout.textContent;
//   editFormValidator.checkInitialFormValidity()
//   open();
// });

// Profile form

// function handleProfileFormSubmit(event) {
//   event.preventDefault();
//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   close()
// }

// editForm.addEventListener('submit', handleProfileFormSubmit);
//editCloseButton.addEventListener('mousedown', handleCloseByClick);
//editOverlay.addEventListener('mousedown', handleCloseByClick);

// Elements

// default cards


// add popup

// openAddFormButton.addEventListener('mousedown',() => {
//   addCardFormValidator.checkInitialFormValidity()
//   open()
// });

//addCloseButton.addEventListener('mousedown', handleCloseByClick);
//addOverlay.addEventListener('mousedown', handleCloseByClick);

// add form

// function handleAddCardSubmit(event) {
//   event.preventDefault();
//   cardList.prepend(renderCard({
//     name: inputTitle.value,
//     link: inputImage.value}));

//   event.target.reset()

//   close()
// }

// addCardForm.addEventListener('submit', handleAddCardSubmit);
