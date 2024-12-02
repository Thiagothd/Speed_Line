// Initialize Feather icons
feather.replace();

// Mobile menu functionality
function toggleMenu() {
    const nav = document.querySelector('.nav-desktop');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});