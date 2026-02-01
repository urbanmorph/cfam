/**
 * Share Functionality for CFAM Website
 * Handles copy-to-clipboard and social sharing
 */

document.addEventListener('DOMContentLoaded', function() {
    // Copy link button functionality
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const copyFeedback = document.getElementById('copyFeedback');

    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            const url = 'https://cfam.in';
            const message = 'India needs the National Active Mobility Bill for safer streets. Join the movement at ' + url;

            // Try to use the modern Clipboard API first
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(message)
                    .then(function() {
                        showCopyFeedback(true);
                    })
                    .catch(function(err) {
                        console.error('Failed to copy:', err);
                        // Fallback to legacy method
                        fallbackCopy(message);
                    });
            } else {
                // Fallback for older browsers
                fallbackCopy(message);
            }
        });
    }

    /**
     * Show feedback when link is copied
     */
    function showCopyFeedback(success) {
        if (!copyFeedback) return;

        if (success) {
            copyFeedback.style.display = 'block';
            copyFeedback.setAttribute('role', 'status');
            copyFeedback.setAttribute('aria-live', 'polite');

            // Hide feedback after 3 seconds
            setTimeout(function() {
                copyFeedback.style.display = 'none';
            }, 3000);
        }
    }

    /**
     * Fallback copy method for older browsers
     */
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.top = '0';
        textarea.style.left = '0';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();

        try {
            const successful = document.execCommand('copy');
            showCopyFeedback(successful);
        } catch (err) {
            console.error('Fallback copy failed:', err);
            showCopyFeedback(false);
        }

        document.body.removeChild(textarea);
    }

    /**
     * Add keyboard support to persona cards
     */
    const personaCards = document.querySelectorAll('.persona-card');
    personaCards.forEach(function(card) {
        card.addEventListener('keydown', function(event) {
            // Enter or Space key
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                // Trigger click
                this.click();
            }
        });
    });

    /**
     * Track social sharing clicks for analytics (if needed)
     */
    const shareButtons = document.querySelectorAll('.btn-whatsapp, .btn-twitter, .btn-telegram, .btn-discord');
    shareButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const platform = this.classList.contains('btn-whatsapp') ? 'WhatsApp' :
                           this.classList.contains('btn-twitter') ? 'Twitter' :
                           this.classList.contains('btn-telegram') ? 'Telegram' : 'Discord';

            // Log for analytics (can be replaced with actual analytics tracking)
            console.log('Share clicked:', platform);

            // Could add Google Analytics or other tracking here
            // Example: gtag('event', 'share', { method: platform });
        });
    });
});
