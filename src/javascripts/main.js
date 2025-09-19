// nav tog
document.querySelector('[data-toggle="mobile-nav"]')
    .addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.toggle('hidden');
    });

// testimonials
(() => {
    const track = document.querySelector('[data-carousel-track]');
    if (!track) return;

    const slides = [...track.children];
    let index = 0;

    const update = () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    };

    document.addEventListener('click', (e) => {
    if (e.target.matches('[data-carousel-next]')) {
        index = (index + 1) % slides.length;
        update();
    }
    if (e.target.matches('[data-carousel-prev]')) {
        index = (index - 1 + slides.length) % slides.length;
        update();
    }
    });
})();
