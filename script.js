
// Mobile Navigation Menu
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");

    menuToggle.textContent =
        navbar.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// GALLERY FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        galleryItems.forEach(image => {
            if (filter === "all" || image.dataset.category === filter) {
                image.classList.remove("hide");
            } else {
                image.classList.add("hide");
            }
        });
    });
});

// IMAGE LIGHTBOX

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

galleryItems.forEach(image => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightbox.classList.add("show");
    });
});

closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});

lightbox.addEventListener("click", event => {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});

// Consultation Form - WhatsApp
document.getElementById("consultation-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const room = document.getElementById("room-type").value;
    const message = document.getElementById("customer-message").value;

    const whatsappNumber = "918839333464";

    const whatsappMessage =
        `Hello Lavish Layers! I want a free consultation.

Name: ${name}
Phone: ${phone}
Room Type: ${room}
Requirements: ${message}`;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
});
