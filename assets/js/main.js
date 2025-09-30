// POLYMVTHIC PUNKS JavaScript
// Terminal-style interactions and keyboard navigation

document.addEventListener('DOMContentLoaded', function() {
    console.log('POLYMVTHIC_PUNKS.exe initialized...');
    
    // Simple keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement.tagName === 'A' || focusedElement.tagName === 'BUTTON') {
                focusedElement.click();
            }
        }
    });

    // Add some terminal-like typing effect
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect on load
    const commandLines = document.querySelectorAll('.command-line');
    commandLines.forEach((line, index) => {
        setTimeout(() => {
            // Add subtle typing effect
            line.style.opacity = '0';
            line.style.animation = 'fadeIn 0.5s ease-in forwards';
        }, index * 500);
    });

    // Add CSS animation for fadeIn
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-10px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);

    // Easter egg: Konami code for terminal mode
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateTerminalMode();
        }
    });

    function activateTerminalMode() {
        console.log('TERMINAL_MODE_ACTIVATED');
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 2000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add glitch effect on button hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch 0.3s ease-in-out';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });

    // Console welcome message
    console.log(`
    ██████╗  ██████╗ ██╗  ██╗   ██╗███╗   ███╗██╗   ██╗████████╗██╗  ██╗██╗ ██████╗
    ██╔══██╗██╔═══██╗██║  ╚██╗ ██╔╝████╗ ████║██║   ██║╚══██╔══╝██║  ██║██║██╔════╝
    ██████╔╝██║   ██║██║   ╚████╔╝ ██╔████╔██║██║   ██║   ██║   ███████║██║██║     
    ██╔═══╝ ██║   ██║██║    ╚██╔╝  ██║╚██╔╝██║╚██╗ ██╔╝   ██║   ██╔══██║██║██║     
    ██║     ╚██████╔╝███████╗██║   ██║ ╚═╝ ██║ ╚████╔╝    ██║   ██║  ██║██║╚██████╗
    ╚═╝      ╚═════╝ ╚══════╝╚═╝   ╚═╝     ╚═╝  ╚═══╝     ╚═╝   ╚═╝  ╚═╝╚═╝ ╚═════╝
    
    ██████╗ ██╗   ██╗███╗   ██╗██╗  ██╗███████╗
    ██╔══██╗██║   ██║████╗  ██║██║ ██╔╝██╔════╝
    ██████╔╝██║   ██║██╔██╗ ██║█████╔╝ ███████╗
    ██╔═══╝ ██║   ██║██║╚██╗██║██╔═██╗ ╚════██║
    ██║     ╚██████╔╝██║ ╚████║██║  ██╗███████║
    ╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
    
    > SYSTEM STATUS: OPERATIONAL
    > POLYMATHS: ONLINE  
    > MISSION: CATEGORY CREATION
    
    Welcome to the matrix, fellow hacker.
    `);
});