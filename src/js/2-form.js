const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";


form.addEventListener('input', e => {
    let data = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
localStorage.setItem(localStorageKey, JSON.stringify(data));
})

form.addEventListener('submit', e => {
    e.preventDefault();
    let savedData = localStorage.getItem(localStorageKey);
    console.log(JSON.parse(savedData));
    localStorage.removeItem(localStorageKey);
    form.reset();
})