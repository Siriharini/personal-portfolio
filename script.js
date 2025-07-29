document.addEventListener('DOMContentLoaded', function() {
    // --- Skill Bar Animation Logic ---
    // Select all elements with the class 'skill-bar'
    const skillBars = document.querySelectorAll('.skill-bar');

    // Function to animate the skill bars
    const animateSkills = () => {
        skillBars.forEach(bar => {
            // Get the target percentage from the 'data-percentage' attribute
            const percentage = bar.dataset.percentage;
            // Set the width of the skill bar to its percentage
            bar.style.width = percentage + '%';
            // Add the 'animated' class to trigger the percentage text opacity transition
            bar.classList.add('animated');
        });
    };

    // --- Intersection Observer for Skill Section Animation ---
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
        // Loop through each entry (each observed element)
        entries.forEach(entry => {
            // Check if the element is intersecting (in view) and if it's the skills section
            if (entry.isIntersecting && entry.target.id === 'skills') {
                // If it is, trigger the skill animation
                animateSkills();
                // Stop observing the skills section once it's animated to prevent re-animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Options for the observer: trigger when 50% of the target is visible
        threshold: 0.5
    });

    // Get the 'skills' section element
    const skillsSection = document.getElementById('skills');

    // If the skills section exists, start observing it
    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // --- No specific JavaScript for the contact form is needed for basic submission ---
    // The HTML form's 'action' attribute handles where the data goes (e.g., Formspree).
    // If you plan to add form validation or submission feedback (e.g., "Message Sent!"),
    // that JavaScript would go here.
});