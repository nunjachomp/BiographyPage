contactForm.addEventListener('input', () => {
    if (firstname.value.length > 0 && email.value.length > 0) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
});