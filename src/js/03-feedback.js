import throttle from 'lodash.throttle';

const inputEl = document.querySelector(".feedback-form");
// console.log(inputEl);

const KEY_LOCALSTORAGE = "feedback-form-state";

inputEl.addEventListener('input', throttle(handlerInputEvt, 500));
inputEl.addEventListener('submit', handlerSubmitEvt);

const saveFormData = {};
restoreData();

function handlerInputEvt(evt) {
    const target = evt.target;
    saveFormData[target.name] = target.value;
    localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(saveFormData))
}

function handlerSubmitEvt(evt) {
    evt.preventDefault();
    const formData = localStorage.getItem(KEY_LOCALSTORAGE);
    if (formData) {
        console.log(JSON.parse(formData));
    }
    evt.currentTarget.reset();
    localStorage.removeItem(KEY_LOCALSTORAGE);
}

function restoreData() {
  const formData = localStorage.getItem(KEY_LOCALSTORAGE);  
  if (formData) {
    inputEl.email.value = JSON.parse(formData).email;
    inputEl.message.value = JSON.parse(formData).message;
  }
}


