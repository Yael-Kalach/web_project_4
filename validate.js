const hideError = (props) =>{
    const {inputErrorClass, input} = props
    const errorElement = document.querySelector(`#${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove("form__error_visible");
    errorElement.textContent = ''
}

const showError = (props) =>{
    const {inputErrorClass, input} = props
    const errorElement = document.querySelector(`#${input.id}-error`)
    const error = input.validationMessage
    input.classList.add(inputErrorClass);
    errorElement.textContent = error
    errorElement.classList.add("form__error_visible")
}

const checkValidity = (input) =>{
  return input.validity.valid;
}

const toggleButton = (props) => {
const {submitButton, inactiveButtonClass, isDisabled} = props;
submitButton.disabled = isDisabled;
if (isDisabled) {
    submitButton.classList.add(inactiveButtonClass);
}
else{
    submitButton.classList.remove(inactiveButtonClass);
}
}

const enableValidation = (settings) =>{
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
            const input = [...form.querySelectorAll(inputSelector)];
            const submitButton = form.querySelector(submitButtonSelector)
            input.forEach((input)=>{
                console.log(input);
                input.addEventListener('input', () => {
                   const isValid = checkValidity(input);
                   if (isValid){
                       hideError({input: input, inputErrorClass: inputErrorClass});
                       toggleButton({
                        submitButton: submitButton,
                        inactiveButtonClass: inactiveButtonClass,
                        isDisabled: false,
                       });
                   }
                   else{
                       showError({input: input, inputErrorClass: inputErrorClass});
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
};

// validation

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  }); 