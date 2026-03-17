
# Blueprint: Crime Prevention Education Website

## Overview

This project is a web-based educational resource dedicated to raising awareness and providing information on the prevention of drunk driving, violence, and sex crimes. The website will feature a modern, intuitive design that is both visually engaging and easy to navigate. It will serve as a central hub for educational content, resources, and support information.

## Design and Features

### Visual Design

- **Aesthetics:** The website will have a clean, professional, and trustworthy design. The layout will be visually balanced with ample white space to improve readability. A modern and sophisticated look and feel has been achieved through updated fonts, colors, and shadows.
- **Color Palette:** A sophisticated color scheme is used, combining calming blues and grays with accent colors to draw attention to key information. The palette is vibrant and modern.
- **Typography:** Clear and legible Google Fonts ('Poppins' and 'Roboto') are used for a distinct typographic style with a strong hierarchy.
- **Iconography:** Each section (Drunk Driving, Violence, Sex Crimes) is represented by a unique and intuitive icon to enhance visual communication.
- **Interactivity:** Buttons and other interactive elements have subtle hover effects and shadows to provide a sense of depth and responsiveness.

### Features

- **Responsive Design:** The website is fully responsive, ensuring a seamless experience on desktops, tablets, and mobile devices.
- **Navigation:** A clear and simple navigation bar is present at the top of the page.
- **Educational Sections (Web Components):** The main content is divided into three distinct sections, each implemented as a reusable `<crime-section>` web component. This improves modularity and maintainability.
    - **Drunk Driving:** Information on the dangers, consequences, and prevention of drunk driving.
    - **Violence:** Resources and education on recognizing and preventing various forms of violence.
    - **Sex Crimes:** Sensitive and informative content on sexual assault, consent, and support for survivors.
- **Call-to-Action Buttons:** Each section includes a "Learn More" button.
- **Theme Toggle:** A button to switch between light and dark modes.
- **Partnership Form:** A simple contact form for partnership inquiries, integrated with Formspree.

## Current Plan

1.  **Create `crime-section.js`**: Create a new JavaScript file for the web component.
2.  **Define the `CrimeSection` Custom Element**: In `crime-section.js`, create a class that extends `HTMLElement` and defines the structure and styling for the component using a template and Shadow DOM.
3.  **Update `main.js`**: Import and register the new custom element in the main JavaScript file.
4.  **Refactor `index.html`**: Replace the existing `<section>` elements for drunk driving, violence, and sex crimes with the new `<crime-section>` custom element, passing data via attributes.
5.  **Update `style.css`**: Remove the styles that are now encapsulated within the web component's Shadow DOM and adjust any global styles as needed.
6.  **Push to GitHub**: Commit the changes and push them to the `origin main` branch.
