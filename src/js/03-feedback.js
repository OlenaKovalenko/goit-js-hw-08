import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const inputs = document.querySelectorAll("input");
const inputsArr = [...inputs];
console.log(inputs);
form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);



const formData = {};

function onFormInput(event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateInput(event) {
    const savedInput = localStorage.getItem(STORAGE_KEY);
    const parseObject = JSON.parse(savedInput);
    console.log(savedInput);
    console.log(parseObject);

    if (savedInput) {

        for (let i = 0; i < inputsArr.length; i += 1) {
            for (const key in parseObject) {
                inputsArr[i].value = parseObject[key];
                console.log(key);
                console.log(parseObject[key]);
                return;
            }
        }
    



        // inputsArr.forEach(input => {
        //     for (const key in parseObject) {
        //         console.log(key);
        //         console.log(parseObject[key]);
        //         input.value = parseObject[key];
        //     }
        // })




        // for (const key in parseObject) {
        //     inputsArr.forEach(input => {
        //         input.value = parseObject[key]
        //     });
         
        // }
    }
}

populateInput();

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const message = formElements.message.value;

    if (mail === "" || message === "") {
        alert("Please fill in all the fields!");
        return;
        
    } else { 
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(formData);
    }
}

