const hoverLogos = document.querySelectorAll('.hover-logo');
const popup = document.getElementById('popup');

hoverLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        const summary = logo.getAttribute('data-summary');
        popup.textContent = summary;
        const rect = logo.getBoundingClientRect();
        popup.style.left = `${rect.left + window.scrollX}px`;
        popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
    });

    logo.addEventListener('mouseleave', () => {
        popup.style.visibility = 'hidden';
        popup.style.opacity = '0';
    });

    logo.addEventListener('click', () => {
        const link = logo.getAttribute('data-link');
        window.location.href = link;
    });
});
