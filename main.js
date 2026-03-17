
import './crime-section.js';

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

customElements.define('crime-section', class extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: var(--section-bg-light);
                    margin-bottom: 2rem;
                    padding: 2.5rem;
                    border-radius: 8px;
                    box-shadow: var(--box-shadow-light);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                :host(:hover) {
                    transform: translateY(-5px);
                    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
                }
                h2 {
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                    color: var(--primary-color);
                }
                h2 i {
                    margin-right: 15px;
                    font-size: 1.8rem;
                }
                p {
                    font-family: 'Roboto', sans-serif;
                }
                button {
                    background: var(--primary-color);
                    color: #fff;
                    border: none;
                    padding: 12px 20px;
                    cursor: pointer;
                    border-radius: 5px;
                    font-weight: 600;
                    transition: background-color 0.3s, transform 0.3s;
                }
                button:hover {
                    background-color: #0056b3;
                    transform: translateY(-2px);
                }
            </style>
            <section>
                <h2><i class="${this.getAttribute('icon')}"></i> ${this.getAttribute('title')}</h2>
                <p><slot></slot></p>
                <button>더 알아보기</button>
            </section>
        `;
        shadow.appendChild(template.content.cloneNode(true));
    }
});
