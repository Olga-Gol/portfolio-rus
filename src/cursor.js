document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    

    // document.addEventListener('mouseover', (e) => {
    //     if (!cursor) return;
        
    //     const target = e.target.closest('a, button, [data-hover], .cursor-section');
    //     if (target) {
    //         if (target.classList.contains('cursor-section')) {
    //             cursor.classList.add('section-hover-active');
    //         } else {
    //             cursor.classList.add('hover-active');
    //         }
    //     }
    // });

    // document.addEventListener('mouseout', (e) => {
    //     if (!cursor) return;
        
    //     const target = e.target.closest('a, button, [data-hover], .cursor-section');
    //     if (target) {
    //         cursor.classList.remove('hover-active', 'section-hover-active');
    //     }
    // });

    // hoverables.forEach(el => {
    //     el.addEventListener('mouseenter', () => {
    //         // Add different class if it's the cursor section
    //         if (el.classList.contains('cursor-section')) {
    //             cursor.classList.add('section-hover-active');
    //         } else {
    //             cursor.classList.add('hover-active');
    //         }
    //     });
    //     el.addEventListener('mouseleave', () => {
    //         // Remove both classes to be safe
    //         cursor.classList.remove('hover-active', 'section-hover-active');
    //     });
    // });

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

        document.addEventListener('mouseover', (e) => {
            const section = e.target.closest('.cursor-section');
            if (section) {
                cursor.classList.add('section-hover-active');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget || !e.relatedTarget.closest('.cursor-section')) {
                cursor.classList.remove('section-hover-active');
            }
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