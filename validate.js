function hideError(input, settings){
  const {errorClass, inputErrorClass} = settings
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
  input.classList.remove(inputErrorClass);
}

function showError(input, settings){
  const {errorClass, inputErrorClass} = settings
  const errorElement = document.querySelector(`#${input.id}-error`);
  const error = input.validationMessage
  errorElement.textContent = error;
  errorElement.classList.add(errorClass)
  input.classList.add(inputErrorClass);
}



function checkValidity(input, settings) {
  if(input.validity.valid){
    hideError(input, settings)
  }
  else{
    showError(input, settings)
  }
}

function toggleButton(inputs, submitButton, settings){
  const isFormValid = inputs.every(input => input.validity.valid)
  const {inactiveButtonClass} = settings

  if(isFormValid){
    submitButton.disabled = false
    submitButton.classList.remove(inactiveButtonClass)
  }
  else{
    submitButton.disabled = 'disabled'
    submitButton.classList.add(inactiveButtonClass)
  }
}

function enableValidation(settings){
  const {
    formSelector,
    inputSelector,
    submitButtonSelector, ...rest} = settings || {};

  const forms = [...document.querySelectorAll(formSelector)]
  forms.forEach((form)=>{
    form.addEventListener("submit", (e)=>e.preventDefault());

    const inputs = [...form.querySelectorAll(inputSelector)];
    const submitButton = form.querySelector(submitButtonSelector)

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        checkValidity(input, rest)
        toggleButton(inputs, submitButton, rest)
      })

    })
  })
}

// validation

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
});

// OLD CODE

/*  const hideError = (props) =>{
  const {inputErrorClass, input} = props
  const errorElement = document.querySelector(`#${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove("form__error_visible");
    errorElement.textContent = ''
};

const showError = (props) =>{
  const {inputErrorClass, input} = props
  const errorElement = document.querySelector(`#${input.id}-error`)
  const error = input.validationMessage
  input.classList.add(inputErrorClass);
  errorElement.textContent = error
  errorElement.classList.add("form__error_visible")
}; */

//const toggleButton = (props) => {
//  const {submitButton, inactiveButtonClass, isDisabled} = props;
//  submitButton.disabled = isDisabled;
//  if (isDisabled) {
//    submitButton.classList.add(inactiveButtonClass);
//  }
//  else{
//    submitButton.classList.remove(inactiveButtonClass);
//}
//};

/* const enableValidation = (settings) =>{
  const {
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass} = settings || {};
  if (formSelector){
      const forms = [...document.querySelectorAll(formSelector)]
      forms.forEach((form)=>{
          form.addEventListener("submit", (e)=>e.preventDefault());
          const inputs = [...form.querySelectorAll(inputSelector)];
          const submitButton = form.querySelector(submitButtonSelector)
          const errorMessage = form.querySelector(errorClass)
          inputs.forEach((input)=>{
              input.addEventListener('input', () => {
                 const isValid = checkValidity(input);
                 if (isValid){
                     toggleButton({
                      submitButton: submitButton,
                      inactiveButtonClass: inactiveButtonClass,
                      isDisabled: false,
                     });
                 }
                 else{
                     toggleButton({
                      submitButton,
                      inactiveButtonClass,
                      isDisabled: true,
                     });
                 };
              });
          });
      });
  }
  else {
      console.log("There is no form selector specified")
  };
}; */
