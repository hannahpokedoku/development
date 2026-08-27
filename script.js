const backgrounds =
    document.querySelectorAll(".section-background");

function updateParallax() {

    backgrounds.forEach(background => {

        const section =
            background.parentElement;

        const rect =
            section.getBoundingClientRect();

        const speed = 0.25;

        const offset =
            (window.innerHeight / 2 - rect.top) * speed;

        background.style.transform =
            `translateY(${offset}px) scale(1.08)`;

    });
}

window.addEventListener(
    "scroll",
    updateParallax
);

window.addEventListener(
    "resize",
    updateParallax
);

updateParallax();