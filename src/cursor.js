document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');

    // Only enable on desktop 
    if (window.matchMedia("(pointer: fine)").matches) {
        document.body.classList.add('cursor-active');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        });

        document.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-clicked');
        });

        document.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-clicked');
        });

        const updateCursorHover = (e) => {
            const isHovering = !!e.target.closest('.cursor-section');
            cursor.classList.toggle('section-hover-active', isHovering);
        };
        document.addEventListener('mouseover', updateCursorHover);
        document.addEventListener('mouseout', updateCursorHover);

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    }
});