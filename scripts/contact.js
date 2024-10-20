const form = document.getElementById('contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const serviceID = 'service_i4oskfr';
const templateID = 'template_29hjmr2';
const publicKey = 'ymn2KgYlY75XPZaJd';

emailjs.init(publicKey);

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputData = {
        from_name: nameInput.value,
        user_email: emailInput.value,
        message: messageInput.value
    };
    emailjs.send(serviceID, templateID, inputData).then(
        ()=>{
            nameInput.value = '';
            emailInput.value = '';
            messageInput.value = '';
            console.log('Exitos pibe');
        },
        (error) => {
            console.log(error);
        }
    );
});