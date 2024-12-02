// Promo Code Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission
        const promoCodeInput = document.getElementById('promo-code');
        const promoCode = promoCodeInput?.value.trim(); // Trim whitespace

        const feedbackMessage = document.createElement('p'); // Feedback message element
        feedbackMessage.style.marginTop = '1rem';

        if (promoCode === 'DISCOUNT10') {
            feedbackMessage.textContent = 'Promo code applied! You get 10% off.';
            feedbackMessage.style.color = 'green';
        } else {
            feedbackMessage.textContent = 'Invalid promo code. Please try again.';
            feedbackMessage.style.color = 'red';
        }

        // Append feedback to form, remove previous feedback if exists
        const existingMessage = contactForm.querySelector('p');
        if (existingMessage) {
            existingMessage.remove();
        }
        contactForm.appendChild(feedbackMessage);
    });
}

// Input Focus Microinteraction
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#4a00e0'; // Highlight border
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#ddd'; // Reset border
    });
});
