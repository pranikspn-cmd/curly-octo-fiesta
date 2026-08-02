// ===========================
// PRANIKS Website JavaScript
// ===========================

// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow while scrolling
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";
    }
});

// Fade-in animation
const items = document.querySelectorAll(".about, #collection, footer");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.2
});

items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s ease";
    observer.observe(item);
});

// Collection image zoom
const images = document.querySelectorAll(".card img");

images.forEach(img => {
    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.cursor = "pointer";
        popup.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "10px";

        popup.appendChild(image);

        document.body.appendChild(popup);

        popup.addEventListener("click", () => {
            popup.remove();
        });

    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to PRANIKS");
});