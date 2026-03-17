
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    }
});
