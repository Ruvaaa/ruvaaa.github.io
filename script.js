// Section fade-in effect
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.3,
});

sections.forEach(section => {
    section.classList.add("invisible");
    observer.observe(section);
});

// Highlight active nav link
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 80;

    sections.forEach(section => {
        const id = section.getAttribute("id");
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
