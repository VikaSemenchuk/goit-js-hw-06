const greeting = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

greeting.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    greeting.nameLabel.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length === 0) {
        greeting.nameLabel.textContent = 'Anonimous'
    }
}