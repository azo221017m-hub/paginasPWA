// Configuration
const CONFIG = {
    whatsappNumber: '521234567890', // Update this with your actual WhatsApp number
    dateFormat: {
        timeZoneAdjustment: 'T00:00:00' // UTC midnight to avoid timezone issues
    }
};

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Smooth Scroll with Animation
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Check if it's an internal link
        if (href && href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
                
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Update Active Nav Link on Scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
    }
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to elements that should animate
    const animatedElements = document.querySelectorAll(
        '.section-header, .about-content, .info-card, .testimonial-card, .appointment-content, .whatsapp-card'
    );
    
    animatedElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Stagger animation for multiple items
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    const benefitItems = document.querySelectorAll('.benefits-list li');
    benefitItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
        observer.observe(item);
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroDecoration = document.querySelector('.hero-decoration');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 500);
    }
    
    if (heroDecoration && scrolled < window.innerHeight) {
        heroDecoration.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Floating Cards Animation Enhancement
const floatingCards = document.querySelectorAll('.floating-card');
floatingCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
});

// WhatsApp Button Click Analytics (optional)
const whatsappButton = document.querySelector('.btn-whatsapp');
if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
        // You can add analytics tracking here
    });
}

// Handle External Links
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.setAttribute('rel', 'noopener noreferrer');
});

// Add smooth reveal animation to hero buttons
const heroButtons = document.querySelectorAll('.hero-buttons .btn');
heroButtons.forEach((button, index) => {
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        button.style.transition = 'all 0.6s ease-out';
        button.style.opacity = '1';
        button.style.transform = 'translateY(0)';
    }, 600 + (index * 150));
});

// Lazy Loading for Images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance: Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler
const handleScroll = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', handleScroll);

// Add active state to current page
window.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash || '#inicio';
    const currentLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
    if (currentLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        currentLink.classList.add('active');
    }
});

// Handle back/forward browser buttons
window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash || '#inicio';
    const currentLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
    if (currentLink) {
        navLinks.forEach(l => l.classList.remove('active'));
        currentLink.classList.add('active');
    }
});

// Set minimum date for appointment form
document.addEventListener('DOMContentLoaded', () => {
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        // Set minimum date to today
        const today = new Date().toISOString().split('T')[0];
        fechaInput.setAttribute('min', today);
        
        // Set maximum date to 3 months from now
        const maxDate = new Date();
        maxDate.setMonth(maxDate.getMonth() + 3);
        fechaInput.setAttribute('max', maxDate.toISOString().split('T')[0]);
    }
});

// Handle appointment form submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;
        const servicio = document.getElementById('servicio').value;
        const comentarios = document.getElementById('comentarios').value;
        
        // Format date to readable format
        const fechaObj = new Date(fecha + CONFIG.dateFormat.timeZoneAdjustment);
        const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);
        
        // Create WhatsApp message
        let mensaje = `Hola, me gustaría agendar una cita en Óptica Visión:%0A%0A`;
        mensaje += `*Nombre:* ${nombre}%0A`;
        mensaje += `*Teléfono:* ${telefono}%0A`;
        mensaje += `*Fecha preferida:* ${fechaFormateada}%0A`;
        mensaje += `*Hora preferida:* ${hora}%0A`;
        mensaje += `*Servicio:* ${servicio}%0A`;
        if (comentarios) {
            mensaje += `*Comentarios:* ${comentarios}%0A`;
        }
        mensaje += `%0A¿Pueden confirmar mi cita? Gracias.`;
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${CONFIG.whatsappNumber}?text=${mensaje}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Optional: Reset form after submission
        // appointmentForm.reset();
    });
}

console.log('Óptica Visión - Website loaded successfully');
