# 🚀 World-Class Portfolio Website

A premium, high-performance personal portfolio website designed for Project Managers and Technology Strategists. This site features a cinematic global video background, interactive particle effects, and advanced glassmorphism UI.

![Portfolio Preview](assets/images/profile.png)

## ✨ Key Features

-   **Cinematic Global Background**: A single, high-quality video background that provides a seamless visual flow across the entire site.
-   **Interactive Particles**: A subtle constellation effect (`particles.js`) that reacts to mouse movement, adding a layer of "magic".
-   **Glassmorphism Design**: Modern, frosted-glass cards and sections that float elegantly over the background.
-   **Smooth Scrolling**: Integrated `Lenis` for buttery-smooth scroll experiences.
-   **3D Tilt Effects**: Cards react to cursor movement using `Vanilla-Tilt.js`.
-   **Custom Cursor**: A magnetic custom cursor that snaps to interactive elements.
-   **Fully Responsive**: Optimized for all devices, from large desktops to mobile phones.
-   **LinkedIn Integration**: A dedicated section to embed your latest thought leadership post.

## 🛠️ Technology Stack

-   **HTML5**: Semantic structure.
-   **CSS3**: Advanced styling with variables, flexbox, grid, and animations.
-   **JavaScript (ES6+)**: Dynamic logic and library integrations.
-   **Libraries**:
    -   [Particles.js](https://vincentgarreau.com/particles.js/) (Interactive background)
    -   [Lenis](https://github.com/studio-freight/lenis) (Smooth scrolling)
    -   [Vanilla-Tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) (3D hover effects)
    -   [Typed.js](https://github.com/mattboldt/typed.js/) (Typewriter animation)
    -   [Font Awesome](https://fontawesome.com/) (Icons)

## 📂 Project Structure

```
/
├── assets/
│   ├── images/       # Profile pictures and static assets
│   └── videos/       # Background videos (hero-background.mp4, etc.)
├── css/
│   └── style.css     # Main stylesheet
├── js/
│   └── main.js       # Main JavaScript logic
├── index.html        # Main entry point
├── README.md         # Project documentation
└── resume.pdf        # Downloadable resume
```

## 🚀 How to Use

1.  **Clone or Download**: Download the project files to your local machine.
2.  **Open**: Simply open `index.html` in any modern web browser (Chrome, Safari, Firefox).
3.  **No Build Required**: This is a static site, so no `npm install` or build steps are needed!

## 🎨 Customization Guide

### 1. Changing the Background Video
Replace the file `assets/videos/hero-background.mp4` with your own video file. Ensure it is optimized for web (MP4 format, under 10MB is recommended).

### 2. Adding Your LinkedIn Post
To display your latest LinkedIn post in the "Featured Insight" section:
1.  Go to your LinkedIn post.
2.  Click the three dots (`...`) in the top right corner of the post.
3.  Select **Embed this post**.
4.  Copy the provided code.
5.  Open `index.html` and find the `<!-- PASTE YOUR LINKEDIN EMBED CODE BELOW THIS LINE -->` comment.
6.  Paste your code there and remove the placeholder div if desired.

### 3. Updating Links
-   **Social Media**: Search for `linkedin.com` or `mailto:` in `index.html` and update the `href` attributes.
-   **Projects**: Update the "View Code" or "Live Demo" links in the `#projects` section.

## 📱 Mobile Optimization
The site is fully responsive. The grid layouts automatically adjust to single columns on smaller screens, and the navigation transforms into a hamburger menu.

## 📄 License
This project is open for personal use. Feel free to modify and adapt it for your own portfolio!

---
*Designed with ❤️ by Your AI Assistant*
