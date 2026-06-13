// Get the button element
const btnClick = document.getElementById('btn-click');

// Add click event listener
btnClick.addEventListener('click', function() {
    alert('Button clicked! Welcome to JavaScript.');
    changeButtonColor();
});

// Function to change button color
function changeButtonColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    btnClick.style.backgroundColor = randomColor;
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const inputs = form.querySelectorAll('input, textarea');
        const formData = {};
        
        inputs.forEach(input => {
            formData[input.placeholder] = input.value;
        });
        
        console.log('Form Data:', formData);
        alert('Thank you for your message! (Check console for details)');
        form.reset();
    });
}

// Log when page loads
window.addEventListener('load', function() {
    console.log('Welcome to My Website!');
    console.log('This website is built with HTML, CSS, and JavaScript.');
});
