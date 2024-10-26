// Smooth scroll to section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Example script for form submission or other dynamic elements
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Danke für deine Nachricht!");
});
