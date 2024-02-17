// Add affect while scrolling up and down
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    const paras = document.querySelectorAll('.para');
    let lastScrollTop = 0;

    function fadeInOnScroll() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const direction = st > lastScrollTop ? 'down' : 'up';

        items.forEach(item => {
            const itemRect = item.getBoundingClientRect();
            const isInViewport = itemRect.top < window.innerHeight && itemRect.bottom >= 0;

            if (isInViewport && !item.classList.contains('visible')) {
                item.classList.add('visible');
            } else if (!isInViewport && direction === 'up' && item.classList.contains('visible')) {
                item.classList.remove('visible');
            }
        });
        paras.forEach(para => {
            const itemRect = para.getBoundingClientRect();
            const isInViewport = itemRect.top < window.innerHeight && itemRect.bottom >= 0;

            if (isInViewport && !para.classList.contains('slide-in')) {
                para.classList.add('slide-in');
            } else if (!isInViewport && direction === 'up' && para.classList.contains('slide-in')) {
                para.classList.remove('slide-in');
            }
        });

        lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener('scroll', fadeInOnScroll);
    window.addEventListener('resize', fadeInOnScroll);

    // Check visibility on page load
    fadeInOnScroll();
});
