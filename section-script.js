// Section-specific JavaScript for PDF management
document.addEventListener('DOMContentLoaded', function() {
    // Load existing PDF data
    loadPDFData();
    
    // Get current section from URL or page title
    const currentSection = getCurrentSection();
    
    // Initialize PDF list
    updatePDFList();
    
    // Handle PDF upload form
    const uploadForm = document.getElementById('uploadForm');
    if (uploadForm) {
        uploadForm.addEventListener('submit', handlePDFUpload);
    }
    
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
});

// Function to get current section from URL or page context
function getCurrentSection() {
    // Check if currentSection is set globally
    if (window.currentSection) {
        return window.currentSection;
    }
    
    // Try to determine from URL path
    const path = window.location.pathname;
    if (path.includes('/s1.html')) return 's1';
    if (path.includes('/s2.html')) return 's2';
    if (path.includes('/s3.html')) return 's3';
    if (path.includes('/s4.html')) return 's4';
    if (path.includes('/s5.html')) return 's5';
    if (path.includes('/s6.html')) return 's6';
    if (path.includes('/s7.html')) return 's7';
    if (path.includes('/s8.html')) return 's8';
    
    // Try to determine from page title
    const title = document.title.toLowerCase();
    if (title.includes('mechanical')) return 's1';
    if (title.includes('civil')) return 's2';
    if (title.includes('computer science')) return 's3';
    if (title.includes('cybersecurity')) return 's4';
    if (title.includes('electrical')) return 's5';
    if (title.includes('chemical')) return 's6';
    if (title.includes('aerospace')) return 's7';
    if (title.includes('industrial')) return 's8';
    
    return 's1'; // Default fallback
}

// Function to handle PDF upload
function handlePDFUpload(e) {
    e.preventDefault();
    
    const fileInput = document.getElementById('pdfFile');
    const files = fileInput.files;
    
    if (files.length === 0) {
        alert('Please select at least one PDF file to upload.');
        return;
    }
    
    const currentSection = getCurrentSection();
    
    // Process each file
    Array.from(files).forEach(file => {
        if (file.type === 'application/pdf') {
            const pdfData = {
                id: generateId(),
                name: file.name,
                size: file.size,
                uploadDate: new Date().toISOString(),
                file: file // Store the actual file object
            };
            
            pdfStorage[currentSection].push(pdfData);
        } else {
            alert(`File "${file.name}" is not a PDF. Please select only PDF files.`);
        }
    });
    
    // Save to localStorage
    savePDFData();
    
    // Update the PDF list
    updatePDFList();
    
    // Clear the form
    fileInput.value = '';
    
    // Show success message
    showNotification('PDFs uploaded successfully!', 'success');
}

// Function to update the PDF list display
function updatePDFList() {
    const pdfListContainer = document.getElementById('pdfList');
    const currentSection = getCurrentSection();
    const pdfs = pdfStorage[currentSection] || [];
    
    if (pdfs.length === 0) {
        pdfListContainer.innerHTML = '<p class="no-pdfs">No PDFs uploaded yet. Upload some materials to get started!</p>';
        return;
    }
    
    const pdfListHTML = pdfs.map(pdf => `
        <div class="pdf-item" data-id="${pdf.id}">
            <div class="pdf-info">
                <i class="pdf-icon ${getFileIcon(pdf.name)}"></i>
                <div>
                    <h4>${pdf.name}</h4>
                    <p>Size: ${formatFileSize(pdf.size)} | Uploaded: ${new Date(pdf.uploadDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div class="pdf-actions">
                <button class="btn-small btn-download" onclick="downloadPDF('${pdf.id}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn-small btn-delete" onclick="deletePDF('${pdf.id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
    
    pdfListContainer.innerHTML = pdfListHTML;
}

// Function to download a PDF
function downloadPDF(pdfId) {
    const currentSection = getCurrentSection();
    const pdf = pdfStorage[currentSection].find(p => p.id === pdfId);
    
    if (!pdf) {
        alert('PDF not found.');
        return;
    }
    
    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(pdf.file);
    link.download = pdf.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('PDF download started!', 'success');
}

// Function to delete a PDF
function deletePDF(pdfId) {
    if (!confirm('Are you sure you want to delete this PDF?')) {
        return;
    }
    
    const currentSection = getCurrentSection();
    pdfStorage[currentSection] = pdfStorage[currentSection].filter(p => p.id !== pdfId);
    
    // Save changes
    savePDFData();
    
    // Update display
    updatePDFList();
    
    showNotification('PDF deleted successfully!', 'success');
}

// Function to show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#16a34a' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Function to search PDFs
function searchPDFs(query) {
    const currentSection = getCurrentSection();
    const pdfs = pdfStorage[currentSection] || [];
    
    if (!query.trim()) {
        updatePDFList();
        return;
    }
    
    const filteredPDFs = pdfs.filter(pdf => 
        pdf.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const pdfListContainer = document.getElementById('pdfList');
    
    if (filteredPDFs.length === 0) {
        pdfListContainer.innerHTML = '<p class="no-pdfs">No PDFs found matching your search.</p>';
        return;
    }
    
    const pdfListHTML = filteredPDFs.map(pdf => `
        <div class="pdf-item" data-id="${pdf.id}">
            <div class="pdf-info">
                <i class="pdf-icon ${getFileIcon(pdf.name)}"></i>
                <div>
                    <h4>${pdf.name}</h4>
                    <p>Size: ${formatFileSize(pdf.size)} | Uploaded: ${new Date(pdf.uploadDate).toLocaleDateString()}</p>
                </div>
            </div>
            <div class="pdf-actions">
                <button class="btn-small btn-download" onclick="downloadPDF('${pdf.id}')">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="btn-small btn-delete" onclick="deletePDF('${pdf.id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join('');
    
    pdfListContainer.innerHTML = pdfListHTML;
}

// Add search functionality
function addSearchFunctionality() {
    const pdfList = document.querySelector('.pdf-list');
    if (!pdfList) return;
    
    const searchHTML = `
        <div class="search-container" style="margin-bottom: 1rem;">
            <div class="search-box" style="position: relative;">
                <input type="text" id="pdfSearch" placeholder="Search PDFs..." 
                       style="width: 100%; padding: 0.75rem 1rem 0.75rem 2.5rem; border: 1px solid #d1d5db; border-radius: 8px; font-size: 1rem;">
                <i class="fas fa-search" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: #6b7280;"></i>
            </div>
        </div>
    `;
    
    pdfList.insertAdjacentHTML('afterbegin', searchHTML);
    
    const searchInput = document.getElementById('pdfSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchPDFs(e.target.value);
        });
    }
}

// Initialize search functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addSearchFunctionality, 100);
});

// Export functions for global access
window.downloadPDF = downloadPDF;
window.deletePDF = deletePDF;
window.searchPDFs = searchPDFs;
