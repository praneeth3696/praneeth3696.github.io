/**
 * ---------------------------------------------------------
 * MODULAR ARRAYS - EDIT THESE TO UPDATE THE WEBSITE CONTENT
 * ---------------------------------------------------------
 */

/**
 * SKILLS ARRAY
 * To add a new skill, add an object to this array.
 * Example:
 * { name: 'Rust', icon: '🦀', category: 'Language' }
 */
const SKILLS = [
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'C', icon: '©️', category: 'Language' },
    { name: 'C++', icon: '⚙️', category: 'Language' },
    { name: 'MATLAB', icon: '📈', category: 'Tool' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Linux', icon: '🐧', category: 'OS' },
    { name: 'Networking', icon: '🌐', category: 'Concepts' },
    { name: 'Git', icon: '🌲', category: 'Tool' }
];

/**
 * PROJECTS ARRAY
 * To add a new project, add an object to this array.
 * Example:
 * {
 *   name: 'Project Name',
 *   description: 'Project description here.',
 *   tags: ['Tag1', 'Tag2'],
 *   githubUrl: 'https://github.com/...'
 * }
 */
const PROJECTS = [
    {
        name: 'ShadowPress',
        description: 'A steganography web app. Hide messages inside images and audio using LSB encoding. Includes chi-square steganalysis and a dark hacker UI.',
        tags: ['Node.js', 'Express', 'Steganography', 'Security'],
        githubUrl: 'https://github.com/praneeth3696/shadowpress'
    }
];

/**
 * CONTACT LINKS ARRAY
 * To add a new contact link, add an object to this array.
 * Note: Use SVG path strings for the icon.
 * Example:
 * {
 *   platform: 'Twitter',
 *   url: 'https://twitter.com/...',
 *   svgPath: '<path d="..."/>'
 * }
 */
const CONTACT_LINKS = [
    {
        platform: 'GitHub',
        url: 'https://github.com/praneeth3696',
        svgPath: '<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>'
    },
    {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/praneeth-reddy-yeddula-7836a1337/',
        svgPath: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
    }
];

/**
 * ---------------------------------------------------------
 * LOGIC - DO NOT EDIT BELOW UNLESS CHANGING FUNCTIONALITY
 * ---------------------------------------------------------
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTypewriter();
    renderSkills();
    renderProjects();
    renderContactLinks();
    initScrollAnimations();
});

// Navigation logic (Mobile toggle & smooth scrolling)
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Transform hamburger icon
        const hamburger = document.querySelector('.hamburger');
        if (navLinks.classList.contains('active')) {
            hamburger.style.background = 'transparent';
            hamburger.style.setProperty('--pseudo-top', '0');
            hamburger.style.setProperty('--pseudo-bottom', '0');
        } else {
            hamburger.style.background = 'var(--text-color)';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Typewriter effect logic
function initTypewriter() {
    const phrases = [
        "Systems Enthusiast.",
        "Building things that have real impact.",
        "Certified nerd."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    const typewriterElement = document.getElementById('typewriter-text');
    if (!typewriterElement) return;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster deleting
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal typing
        }
        
        // Logic for next actions
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of phrase
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pause before new typing
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

// Render skills to DOM
function renderSkills() {
    const skillsGrid = document.getElementById('skills-grid');
    if (!skillsGrid) return;
    
    SKILLS.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card fade-in';
        
        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        
        skillsGrid.appendChild(skillCard);
    });
}

// Render projects to DOM
function renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;
    
    PROJECTS.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        
        const tagsHtml = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        projectCard.innerHTML = `
            <h3 class="project-title">${project.name}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">
                ${tagsHtml}
            </div>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                View Code
            </a>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Render contact links to DOM
function renderContactLinks() {
    const contactLinksContainer = document.getElementById('contact-links');
    if (!contactLinksContainer) return;
    
    CONTACT_LINKS.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'contact-btn fade-in';
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer';
        linkElement.setAttribute('aria-label', link.platform);
        linkElement.title = link.platform;
        
        linkElement.innerHTML = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                ${link.svgPath}
            </svg>
        `;
        
        contactLinksContainer.appendChild(linkElement);
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible if you only want it to animate once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}
