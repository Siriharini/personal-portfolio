// script.js - Highlight active nav link on scroll
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-links a");

// Function to update active link
const updateActiveLink = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Adjusted the offset to make the active state change a bit sooner
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

// Listen for scroll events
window.addEventListener("scroll", updateActiveLink);

// Call on load to set initial active link if page is not at the top
document.addEventListener("DOMContentLoaded", updateActiveLink);

// Optional: Smooth scroll for nav links (if not using scroll-behavior: smooth in HTML)
// navLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });