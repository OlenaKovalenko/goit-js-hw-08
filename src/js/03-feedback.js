import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector(".feedback-form"),
    emailInput: document.querySelector('input[name="email"]'),
    messageInput: document.querySelector('textarea[name="message"]'),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);


function onFormInput(event) {
  
    const formInfo = {
        email: refs.emailInput.value,
        message: refs.messageInput.value,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formInfo));
}

function populateInput() {
    const parseObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  
    if (parseObject) {
        refs.emailInput.value = parseObject.email ?? '';
        refs.messageInput.value = parseObject.message ?? '';
    }
}

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
        const feedbackData = {};
        new FormData(refs.form).forEach((value, name) => {
            feedbackData[name] = value;
        });


        console.log(feedbackData);
        localStorage.removeItem(STORAGE_KEY);
        event.currentTarget.reset();
    }
}

