# Blueprint: Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. Users can click a button to get a new set of 6 unique numbers between 1 and 45. The application also keeps a history of the generated numbers.

## Project Outline

### Style and Design (style.css)
*   **Layout:** Centered layout using Flexbox.
*   **Colors:** A modern color palette with a dark background and vibrant accent colors for the numbers.
*   **Fonts:** System fonts for a clean and modern look.
*   **Effects:** Subtle animations and box shadows for a "lifted" feel on interactive elements.
*   **Responsiveness:** The layout will adapt to different screen sizes.
*   **Texture:** A subtle noise texture on the background.

### Application Logic (main.js)
*   **Web Component:** A `<lotto-ball>` custom element to display each lottery number with its own styling.
*   **Number Generation:** A function will generate an array of 6 unique random integers between 1 and 45.
*   **Event Handling:** A click event on the "Generate" button will trigger the number generation and display.
*   **History:** An array will store the history of generated number sets, which will be displayed on the page.

### Structure (index.html)
*   **Header:** Contains the main title of the application.
*   **Main Section:**
    *   A container to display the generated lottery balls.
    *   The "Generate Numbers" button.
*   **History Section:** A section to display a list of previously generated number sets.

## Current Plan

*   **Objective:** Create a Lotto Number Generator web application.
*   **Steps:**
    1.  Create the main HTML structure in `index.html`.
    2.  Implement the number generation and display logic in `main.js`, including the `lotto-ball` web component.
    3.  Apply modern and visually appealing styles in `style.css`.
