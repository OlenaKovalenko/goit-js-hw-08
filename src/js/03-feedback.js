import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);


const formInfo = {};

function onFormInput(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();
    formInfo[fieldName] = fieldValue;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
}

function populateInput() {
    const parseObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (parseObject) {
        form.elements.email.value = parseObject.email || '';
        form.elements.message.value = parseObject.message || '';
    }
}

form.addEventListener('input', populateInput);
populateInput();

function onFormSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, message }
    } = event.currentTarget;

    if (email.value === "" || message.value.trim() === "") {
        alert("Please fill in all the fields!");
        return;
        
    } else { 
        console.log(formInfo);
        localStorage.removeItem(STORAGE_KEY);
        event.currentTarget.reset();
    }
}

