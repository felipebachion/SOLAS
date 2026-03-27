const revealItems = document.querySelectorAll(
    ".story-card, .benefit-card, .attribute-card, .process-step, .publication-card, .scope-banner"
);

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
    }
);

revealItems.forEach((item) => observer.observe(item));
