# Documentation: Carousel with Timer and Quotes

## Overview
This project implements a **carousel slider** with a built-in **countdown timer** and **dynamic quote display**. The carousel automatically transitions between slides based on a timer, and each slide is associated with a quote that updates accordingly.

Live Demo: [Count with Quote](https://countwith-quote.vercel.app/)

---

## Technologies Used
- **HTML5** (Structure)
- **CSS3** (Styling, including Bootstrap 5)
- **JavaScript (ES6)** (Logic for timer, slide transitions, and quote updates)
- **Bootstrap 5.3.3** (Carousel functionality, responsive layout)

---

## File Structure
```
project-folder/
│── index.html         # Main HTML file
│── css/
│   └── style.css      # Styling file
│── js/
│   └── script.js      # JavaScript functionality
└── assets/            # (Optional) Images and other assets
```

---

## Features
### 1. **Carousel Slider**
- Uses Bootstrap's **carousel component**.
- Contains **three slides** with background images set via CSS.
- Slides transition automatically based on a countdown timer.
- Navigation buttons (previous/next) are available (but commented out).

### 2. **Countdown Timer**
- A timer starts when the page loads.
- Displays **minutes (`.min`)** and **seconds (`.count`)**.
- When the timer reaches **zero**, the slide automatically changes.
- Timer resets for the next slide.

### 3. **Dynamic Quotes**
- Each slide has an associated quote.
- The displayed quote updates when the slide changes.

---

## Code Breakdown
### **1. HTML Structure (`index.html`)**
Contains:
- **Carousel** with three slides.
- **Timer display** positioned above the carousel.
- **Quote section** displayed below the carousel.

### **2. CSS Styling (`style.css`)**
- Sets **background images** for the slides.
- Styles the **timer** (centered above the carousel).
- Defines **light text color** and layout adjustments.

### **3. JavaScript Functionality (`script.js`)**
#### **Key Functions:**
- `window.onload`: Starts the timer and displays the first quote.
- `timer()`: Runs the countdown and switches slides when time reaches zero.
- `currSlide(n)`: Moves to the next or previous slide.
- `nxtSlide(para)`: Activates a specific slide and updates the quote.
- `displayQuote(idx)`: Changes the quote based on the active slide.

---

## How It Works
1. **Page Loads** → Timer starts at `10` seconds.
2. **Timer Counts Down** → When it reaches `0`, the slide changes.
3. **Slide Changes** → The timer resets and continues.
4. **Quotes Update** → Each slide displays a different quote.
5. **Loop Continues** until the last slide, then stops.

---

## Future Enhancements
- Add **pause/resume functionality** for the timer.
- Implement **manual navigation buttons** for the carousel.
- Add **more slides and quotes dynamically**.
- Improve **responsive design for mobile users**.

---

## Credits
- **Bootstrap 5.3.3** for styling and carousel functionality.
- **Pixabay** for free background images.

This concludes the documentation. 🚀

