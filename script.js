// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to display feedback message
function displayFeedback(form, message, color) {
    let feedbackMessage = form.querySelector('.feedback-message');
    if (!feedbackMessage) {
        feedbackMessage = document.createElement('p');
        feedbackMessage.className = 'feedback-message';
        feedbackMessage.style.marginTop = '1rem';
        form.appendChild(feedbackMessage);
    }
    feedbackMessage.textContent = message;
    feedbackMessage.style.color = color;
}

// Handle form submission for validation
document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting

        const nameInput = form.querySelector('#name');
        const emailInput = form.querySelector('#email');
        const promoCodeInput = form.querySelector('#promo-code'); // Only on subscription form

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const promoCode = promoCodeInput?.value.trim(); // Optional for contact form

        // Validate name and email
        if (name === '' || email === '') {
            displayFeedback(form, 'Please fill in all required fields.', 'red');
            return;
        }

        if (!isValidEmail(email)) {
            displayFeedback(form, 'Please enter a valid email address.', 'red');
            return;
        }

        // Provide feedback specific to the page
        if (form.id === 'contact-form') {
            displayFeedback(form, 'Thank you for your message! We will get back to you shortly.', 'green');
        } else {
            displayFeedback(form, 'Subscription successful! Thank you for joining.', 'green');
            // Handle promo code validation for subscription page
            if (promoCodeInput) {
                if (promoCode === 'DISCOUNT10') {
                    displayFeedback(form, 'Promo code applied! You get 10% off.', 'green');
                } else if (promoCode) {
                    displayFeedback(form, 'Invalid promo code. Please try again.', 'red');
                    return;
                }
            }
        }

        // Clear the form fields
        form.reset();
    });
});

// Input Focus Microinteraction
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '#4a00e0'; // Highlight border on focus
    });
    input.addEventListener('blur', () => {
        input.style.borderColor = '#ddd'; // Reset border on blur
    });
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

document.querySelectorAll('.service-btn').forEach(button => {
    button.addEventListener('focus', () => {
        const dropdown = button.nextElementSibling;
        dropdown.style.display = 'block';
    });
    button.addEventListener('blur', () => {
        const dropdown = button.nextElementSibling;
        dropdown.style.display = 'none';
    });
});