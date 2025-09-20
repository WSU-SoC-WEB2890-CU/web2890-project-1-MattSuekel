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

// faqs
const OPEN = ['grid-rows-[1fr]', 'opacity-100'];
const CLOSED = ['grid-rows-[0fr]', 'opacity-0'];

const setOpen = (panel, open) => {

    OPEN.forEach(c => panel.classList.toggle(c, open));
    CLOSED.forEach(c => panel.classList.toggle(c, !open));

    const icon = panel.previousElementSibling?.querySelector('[data-accordion-icon]');
    if (icon) {
        icon.classList.toggle('fa-plus', !open);
        icon.classList.toggle('fa-minus', open);
    }
};

(() => {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-accordion]');
        if (!btn) return;

        const panelId = btn.getAttribute('aria-controls');
        const panel = panelId ? document.getElementById(panelId) : btn.parentElement.querySelector('[data-accordion-panel]');
        if (!panel) return;

        const isOpen = panel.classList.contains(OPEN[0]);

        document.querySelectorAll('[data-accordion-panel]').forEach(p => {
            if (p !== panel) setOpen(p, false);
        });
        document.querySelectorAll('[data-accordion]').forEach(b => {
            if (b !== btn) b.setAttribute('aria-expanded', 'false');
        });

        setOpen(panel, !isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
    });
})();

