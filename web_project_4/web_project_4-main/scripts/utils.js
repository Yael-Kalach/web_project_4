export const imagePopup = document.querySelector('.image-popup');
export const fullSizeImage = imagePopup.querySelector('.image-popup__image');
export const imageCaption = imagePopup.querySelector('.image-popup__caption');
export const imageCloseButton = imagePopup.querySelector('.image-popup__close-button');
export const imageOverlay = imagePopup.querySelector('.image-popup__overlay');

export function openPopup(popup) {
  popup.classList.add('popup_visible');
  document.addEventListener("keydown", handleCloseByEscape);
}

export function closePopup(popup) {
  popup.classList.remove('popup_visible');
  document.removeEventListener("keydown", handleCloseByEscape);
}

export function handleCloseByClick(event) {
  closePopup(event.target.closest('.popup'));
}

function handleCloseByEscape(event) {
  if (event.key == "Escape"){
    const visiblePopup = document.querySelector('.popup_visible');
    closePopup(visiblePopup)
  }
 }
