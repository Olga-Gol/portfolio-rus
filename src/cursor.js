document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const hoverables = document.querySelectorAll('a, button, [data-hover]');
    
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-active');
        });
    });

    // Only enable on desktop 
    if (window.matchMedia("(pointer: fine)").matches) {
        document.body.classList.add('cursor-active');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        // Make cursor smaller when clicking
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });

        // Hide cursor when not hovering over document
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    }
});