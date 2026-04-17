# Blueprint: Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. Users can click a button to get a new set of 6 unique numbers between 1 and 45. The application also keeps a history of the generated numbers and supports both dark and light modes.

## Project Outline

### Style and Design (style.css)
*   **Layout:** Centered layout using Flexbox.
*   **Theming:** Supports Dark and Light modes using CSS variables and `.light-mode` class.
*   **Colors:** Official lottery color schemes for balls; dynamic theme colors for background and containers.
*   **Fonts:** System fonts for a clean and modern look.
*   **Effects:** Subtle animations, transitions, and box shadows for a "lifted" feel on interactive elements.
*   **Responsiveness:** The layout will adapt to different screen sizes.
*   **Texture:** A subtle brick wall texture pattern on the background.

### Application Logic (main.js)
*   **Web Component:** A `<lotto-ball>` custom element to display each lottery number with its own styling.
*   **Number Generation:** A function will generate an array of 6 unique random integers between 1 and 45.
*   **Event Handling:** 
    *   A click event on the "Generate" button will trigger the number generation and display.
    *   A click event on the theme toggle button will switch between dark and light modes.
*   **Persistence:** Uses `localStorage` to save and restore the user's theme preference.
*   **History:** An array will store the history of generated number sets, which will be displayed on the page.

### Structure (index.html)
*   **Main Container:**
    *   **Theme Toggle:** A button to switch between dark and light modes.
    *   **Header:** Main title of the application.
    *   **Number Display:** A container to display the generated lottery balls.
    *   **Action Button:** The "Generate Numbers" button.
*   **History Section:** A section to display a list of previously generated number sets.

## Implementation Steps

1.  **Initial Setup**: Basic HTML structure and CSS reset.
2.  **Web Component**: Create `LottoBall` class for rendering individual balls.
3.  **Core Logic**: Implement random number generation and sorting in `main.js`.
4.  **UI Updates**: Build functions to display numbers and update history.
5.  **Theme Implementation**:
    *   Add CSS variables to `:root`.
    *   Implement `.light-mode` overrides.
    *   Add theme toggle button and logic in `main.js`.
6.  **Persistence**: Use `localStorage` to remember the user's theme preference.
7.  **Final Polish**: Refine animations and responsive breakpoints.
