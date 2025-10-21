// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
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

// Section data for each engineering discipline
const sectionData = {
    s1: {
        title: "Mechanical Engineering",
        description: "Study materials for mechanical engineering including thermodynamics, materials science, and mechanical systems.",
        icon: "fas fa-cogs",
        color: "#2563eb"
    },
    s2: {
        title: "Civil Engineering",
        description: "Resources for civil engineering covering construction, structural analysis, and infrastructure development.",
        icon: "fas fa-building",
        color: "#16a34a"
    },
    s3: {
        title: "Computer Science Engineering",
        description: "Programming resources, algorithms, software development, and computer systems engineering materials.",
        icon: "fas fa-laptop-code",
        color: "#7c3aed"
    },
    s4: {
        title: "Cybersecurity Engineering",
        description: "Security protocols, network protection, digital forensics, and cybersecurity engineering resources.",
        icon: "fas fa-shield-alt",
        color: "#dc2626"
    },
    s5: {
        title: "Electrical Engineering",
        description: "Power systems, electronics, electrical circuits, and electrical engineering study materials.",
        icon: "fas fa-bolt",
        color: "#f59e0b"
    },
    s6: {
        title: "Chemical Engineering",
        description: "Process engineering, chemistry, materials science, and chemical engineering resources.",
        icon: "fas fa-atom",
        color: "#10b981"
    },
    s7: {
        title: "Aerospace Engineering",
        description: "Aircraft design, propulsion systems, aerodynamics, and aerospace engineering materials.",
        icon: "fas fa-plane",
        color: "#3b82f6"
    },
    s8: {
        title: "Industrial Engineering",
        description: "Systems optimization, manufacturing processes, operations research, and industrial engineering resources.",
        icon: "fas fa-robot",
        color: "#8b5cf6"
    }
};

// PDF storage (in a real application, this would be server-side)
let pdfStorage = {
    s1: [],
    s2: [],
    s3: [],
    s4: [],
    s5: [],
    s6: [],
    s7: [],
    s8: []
};

// Function to open a specific section
function openSection(sectionId) {
    const section = sectionData[sectionId];
    if (!section) return;

    // Navigate to the specific section page
    window.location.href = `sections/${sectionId}.html`;
}

// Function to save PDF data to localStorage
function savePDFData() {
    localStorage.setItem('ksu_pdf_storage', JSON.stringify(pdfStorage));
}

// Function to load PDF data from localStorage
function loadPDFData() {
    const saved = localStorage.getItem('ksu_pdf_storage');
    if (saved) {
        pdfStorage = JSON.parse(saved);
    }
}

// Function to generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Function to get file icon based on file type
function getFileIcon(fileName) {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
        case 'pdf':
            return 'fas fa-file-pdf';
        case 'doc':
        case 'docx':
            return 'fas fa-file-word';
        case 'ppt':
        case 'pptx':
            return 'fas fa-file-powerpoint';
        case 'xls':
        case 'xlsx':
            return 'fas fa-file-excel';
        default:
            return 'fas fa-file';
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadPDFData();
    
    // Add click handlers for section cards
    document.querySelectorAll('.section-card').forEach(card => {
        card.addEventListener('click', function() {
            const sectionId = this.onclick.toString().match(/openSection\('([^']+)'\)/);
            if (sectionId) {
                openSection(sectionId[1]);
            }
        });
    });

    // Add smooth scrolling to all anchor links
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

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// Export functions for use in section pages
window.openSection = openSection;
window.sectionData = sectionData;
window.pdfStorage = pdfStorage;
window.savePDFData = savePDFData;
window.loadPDFData = loadPDFData;
window.generateId = generateId;
window.formatFileSize = formatFileSize;
window.getFileIcon = getFileIcon;
