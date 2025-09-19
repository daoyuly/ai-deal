// Modern minimalist website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initAnimations();
    initContactForm();
    initDetailsToggle();
});

// Navbar transparency effect
function initNavbar() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'dark:bg-gray-900/95');
            navbar.classList.remove('bg-white/80', 'dark:bg-gray-900/80');
        } else {
            navbar.classList.add('bg-white/80', 'dark:bg-gray-900/80');
            navbar.classList.remove('bg-white/95', 'dark:bg-gray-900/95');
        }
    });
}

// Smooth scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.card, .grid > div, details').forEach(el => {
        observer.observe(el);
    });
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    }
}

// Form submission with loading state
function handleFormSubmission(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    // Collect form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        project: formData.get('project')
    };
    
    // Simulate API call
    setTimeout(() => {
        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        
        // Show success notification
        showNotification('感谢您的咨询！我们会在24小时内回复您。', 'success');
        
        // Reset form
        form.reset();
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'event_category': 'Contact',
                'event_label': 'Consultation Request'
            });
        }
        
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 opacity-70 hover:opacity-100">
                ✕
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Enhanced details/summary animation
function initDetailsToggle() {
    document.querySelectorAll('details').forEach(details => {
        const summary = details.querySelector('summary');
        
        summary.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (details.hasAttribute('open')) {
                // Closing
                details.style.height = details.offsetHeight + 'px';
                requestAnimationFrame(() => {
                    details.style.height = summary.offsetHeight + 'px';
                    setTimeout(() => {
                        details.removeAttribute('open');
                        details.style.height = '';
                    }, 200);
                });
            } else {
                // Opening
                details.setAttribute('open', '');
                const startHeight = summary.offsetHeight;
                const endHeight = details.offsetHeight;
                details.style.height = startHeight + 'px';
                requestAnimationFrame(() => {
                    details.style.height = endHeight + 'px';
                    setTimeout(() => {
                        details.style.height = '';
                    }, 200);
                });
            }
        });
    });
}

// Smooth scrolling utility functions
function scrollToContact() {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
        const offsetTop = contactElement.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function scrollToCases() {
    const casesElement = document.getElementById('cases');
    if (casesElement) {
        const offsetTop = casesElement.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Parallax effect for hero section (optional)
function initParallax() {
    const hero = document.querySelector('.hero-section');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Dark mode toggle (if needed)
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', 
        document.documentElement.classList.contains('dark') ? 'true' : 'false'
    );
}

// Initialize dark mode from localStorage
function initDarkMode() {
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
});

// Export functions for global access
window.scrollToContact = scrollToContact;
window.scrollToCases = scrollToCases;
window.toggleDarkMode = toggleDarkMode;