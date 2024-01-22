const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";


form.addEventListener('input', e => {
    let data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
localStorage.setItem(localStorageKey, JSON.stringify(data));
});

function restoreData() {
    let savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        let {email, message} = JSON.parse(savedData);
        form.elements.email.value = email || '';
        form.elements.message.value = message || '';
    }
}

restoreData();

form.addEventListener('submit', e => {
    e.preventDefault();
    let savedData = localStorage.getItem(localStorageKey);
    if (savedData) {
        let {email, message} = JSON.parse(savedData);
        if (email && message) {
            console.log({email, message});
            localStorage.removeItem(localStorageKey);
            form.reset();
        } else {
            alert('Please, fill all the fields!');
        }
    }
});