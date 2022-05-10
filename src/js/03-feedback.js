import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onFormsubmit);

const getData = localStorage.getItem(STORAGE_KEY);
const parseData = JSON.parse(getData)

if (parseData) {
    form.email.value = parseData.email;
    form.message.value = parseData.message;
}

function onFormData() {
    const email = form.email.value;
    const message = form.message.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({email, message}))
}

function onFormsubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(parseData);
    
}



