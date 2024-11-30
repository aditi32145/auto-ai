const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const testimonials = [
    {
        name: "Jonas Andersen",
        date: "April 14, 2024",
        text: "It’s great to see that your software is generating over 90% AI responses here. Thank you, XyleneTech.",
        image: "images/testimo.jpg"
    },
    {
        name: "Amelia",
        date: "May 20, 2023",
        text: "I am very pleased with your service. I will definitely consider developing another software with you.",
        image: "images/human3.avif"
    },
    {
        name: "Aditi Majumder",
        date: "June 10, 2022",
        text: "I’m waiting for your new product. Highly recommended!",
        image: "images/testi2.jpg"
    }
];

let currentIndex = 0;

const nameElem = document.getElementById("testimonial-name");
const dateElem = document.getElementById("testimonial-date");
const textElem = document.getElementById("testimonial-text");
const imageElem = document.getElementById("testimonial-image");

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateTestimonial();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateTestimonial();
});

function updateTestimonial() {
    const { name, date, text, image } = testimonials[currentIndex];
    nameElem.textContent = name;
    dateElem.textContent = date;
    textElem.textContent = text;
    imageElem.src = image;
}

// Initialize the first testimonial
updateTestimonial();


// faq start
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const toggleIcon = button.querySelector('.faq-toggle');

        // Collapse all other open FAQ items
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer) {
                otherAnswer.classList.add('hidden');
                const otherToggleIcon = otherAnswer.previousElementSibling.querySelector('.faq-toggle');
                otherToggleIcon.innerHTML = '&#9662;';
                otherToggleIcon.classList.remove('rotate-180');
            }
        });

        // Toggle the clicked FAQ item
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            toggleIcon.innerHTML = '&#9652;';
            toggleIcon.classList.add('rotate-180');
        } else {
            answer.classList.add('hidden');
            toggleIcon.innerHTML = '&#9662;';
            toggleIcon.classList.remove('rotate-180');
        }
    });
});
// faq end


function activateSection(sectionId) {
    // Reset all sections
    document.querySelectorAll('.flex.items-center').forEach(element => {
        element.classList.remove('text-blue-500');
    });

    // Highlight the clicked section
    const section = document.getElementById(sectionId);
    section.classList.add('text-blue-500');

    // Adjust the vertical line
    const verticalLine = document.getElementById('vertical-line');
    const topOffset = section.offsetTop;
    verticalLine.style.top = topOffset + 'px';
}

// Initial activation
activateSection('safety-notices');


// Get elements
const modal = document.getElementById('privacy-policy-modal');
const trigger = document.getElementById('privacy-policy-trigger');
const closeModal = document.getElementById('close-modal');

// Open modal
trigger.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.classList.add('hidden');
    }
});
