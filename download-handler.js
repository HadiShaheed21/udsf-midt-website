// Download Handler for KSU Engineering Portal
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to all download buttons
    const downloadButtons = document.querySelectorAll('.material-card .btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the material title
            const materialTitle = this.closest('.material-card').querySelector('h4').textContent;
            
            // Show a notification that the file will be available soon
            showDownloadNotification(materialTitle);
        });
    });
});

// Function to show download notification
function showDownloadNotification(materialTitle) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'download-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-info-circle"></i>
            <div>
                <h4>Material Coming Soon!</h4>
                <p>"${materialTitle}" will be available for download soon.</p>
            </div>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2563eb, #16a34a);
        color: white;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        max-width: 350px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .notification-content {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }
        .notification-content i {
            font-size: 1.5rem;
            margin-top: 0.25rem;
        }
        .notification-content h4 {
            margin: 0 0 0.5rem 0;
            font-size: 1.1rem;
        }
        .notification-content p {
            margin: 0;
            font-size: 0.9rem;
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Export for global access
window.showDownloadNotification = showDownloadNotification;
