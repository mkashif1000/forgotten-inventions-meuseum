// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const navLinks = document.querySelector('.nav-links');
    
        if (hamburgerBtn && navLinks) {
            hamburgerBtn.addEventListener('click', function() {
                navLinks.classList.toggle('show');
                hamburgerBtn.classList.toggle('active');
            });
        }
    
        // Close mobile menu when a link is clicked
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(item => {
            item.addEventListener('click', function() {
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    hamburgerBtn.classList.remove('active');
                }
            });
        });
    
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for submit.html
    const inventionSubmitForm = document.getElementById('inventionSubmitForm');
    if (inventionSubmitForm) {
        inventionSubmitForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateForm()) {
                // Simulate form submission
                document.getElementById('submissionMessage').textContent = "Thank you for your submission!";
                inventionSubmitForm.reset();
            }
        });

        // Real-time character count for description
        const descriptionTextarea = document.getElementById('description');
        const charCount = document.getElementById('charCount');
        if (descriptionTextarea && charCount) {
            descriptionTextarea.addEventListener('input', function() {
                charCount.textContent = this.value.length;
            });
        }
    }

    // FAQ toggle for faq.html
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Simple animation for timeline.html
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length > 0) {
        window.addEventListener('scroll', function() {
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                if (itemTop < window.innerHeight - 100) {
                    item.classList.add('visible');
                }
            });
        });
    }
});

// Form validation function
function validateForm() {
    let isValid = true;
    const requiredFields = ['yourName', 'email', 'inventionName', 'category', 'description', 'whyForgotten'];
    const errorMessages = {
        yourName: 'Please enter your name.',
        email: 'Please enter a valid email address.',
        inventionName: 'Please enter the invention name.',
        category: 'Please select a category.',
        description: 'Please provide a description.',
        whyForgotten: 'Please explain why the invention was forgotten.',
        termsAgree: 'Please agree to the terms.'
    };

    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        const errorSpan = document.getElementById(field + 'Error');
        if (!input.value.trim()) {
            isValid = false;
            errorSpan.textContent = errorMessages[field];
        } else {
            errorSpan.textContent = '';
        }
    });

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        isValid = false;
        emailError.textContent = errorMessages.email;
    }

    // Year validation
    const yearInput = document.getElementById('yearCreated');
    const yearError = document.getElementById('yearError');
    if (yearInput.value && (yearInput.value < 1700 || yearInput.value > 2025)) {
        isValid = false;
        yearError.textContent = 'Please enter a year between 1700 and 2025.';
    } else {
        yearError.textContent = '';
    }

    // Terms agreement validation
    const termsAgree = document.getElementById('termsAgree');
    const termsError = document.getElementById('termsError');
    if (!termsAgree.checked) {
        isValid = false;
        termsError.textContent = errorMessages.termsAgree;
    } else {
        termsError.textContent = '';
    }

    return isValid;
}

