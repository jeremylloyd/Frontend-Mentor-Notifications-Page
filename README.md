# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/Frontend-Mentor-Notifications-Page)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/Frontend-Mentor-Notifications-Page/)

## My process

### Built with

- HTML
- CSS (BEM)
- JS
- [MediaModifier Online SVG Editor](https://mediamodifier.com/free-svg-editor)

### What I learned

- CSS
  - Using BEM methodology decreases the reliance on the specific HTML tag you use. This makes it easy to add semantic HTML afterwards if you screw up, and generally makes it easier to add element containers later if required
  - If you put an SVG alongside text, you can vertically align it with the text using:
    ```
    /* Get the SVG to appear inline with the neighbouring text */
    display: inline-block;
    vertical-align: middle;
    ```
  - A good CSS reset is hosted here [https://meyerweb.com/eric/tools/css/reset/](https://meyerweb.com/eric/tools/css/reset/)
- Go through the design assets before you start to figure out what you need to make yourself. It took me a while to realise that the unread icon wasn't included in the assets