import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


const formInfo = {};

function onFormInput(event) {

    formInfo[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
}

function populateInput() {
    const parseObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (parseObject) {
 
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');

        emailInput.value = parseObject.email ?? '';
        messageInput.value = parseObject.message ?? '';
    }
}

populateInput();

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const message = formElements.message.value;

    if (mail === "" || message.trim() === "") {
        alert("Please fill in all the fields!");
        return;
        
    } else { 
        localStorage.removeItem(STORAGE_KEY);
        console.log(formInfo);
        event.currentTarget.reset();
    }
}

