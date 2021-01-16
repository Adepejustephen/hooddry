let toggle = () =>{
    let toggleBar = document.querySelector('.toggle-menu')
    let sideBar = document.querySelector('.nav')

    toggleBar.addEventListener('click', ()=>{
        toggleBar.classList.toggle('active');
        sideBar.classList.toggle('active');
    })
}




toggle();
let setContact = () =>{
    let contactBtn = document.querySelector('.contact-btn')
    let contact = document.querySelector('.form')
    let contianer = document.querySelector('.form-container')

    
    contactBtn.addEventListener('click', ()=>{
        // contactBtn = contact;
        contact.classList.toggle('show')
        // contianer.classList.toggle('active')
    })
}
setContact();

const email = document.querySelector('.email');
const username = document.querySelector('.username');
const contactClick = document.querySelector('.submit');
const form = document.querySelector('.form')

contactClick.addEventListener('click', (e) => {
    e.preventDefault()
    checkInputs()
})
function checkInputs(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue ==='') {
        setErrorFor(username, 'Full name cannot be blank')
    }
    else {
        setSuccessFor(username);
    }

    if(emailValue ==='') {
        setErrorFor(email, 'email name cannot be blank')
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email, 'invalid email')
    }
    else {
        setSuccessFor(email);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small =  formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}