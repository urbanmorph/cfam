/**
 * CFAM Discord Widget Helper
 * Handles widget loading, error states, and analytics tracking
 */

// Configuration
const DISCORD_CONFIG = {
  server_id: '858737267929907240',
  channels: {
    citizen: '1467740239668707444',
    expert: '1467740273147646238',
    administrator: '1467740291787264063',
    politician: '1467740317464793293',
    corporate: '1467740355712778271'
  },
  invites: {
    citizen: 'j8jgV7rc7J',
    expert: 'j8jgV7rc7J',
    administrator: 'j8jgV7rc7J',
    politician: 'j8jgV7rc7J',
    corporate: 'j8jgV7rc7J'
  }
};

/**
 * Track widget interactions via Google Analytics
 */
function trackWidgetEvent(action, persona, label = '') {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': 'discord_widget',
      'event_label': persona,
      'action_type': label
    });
  }

  // Console log for debugging
  console.log(`[Discord Widget] ${action}: ${persona} ${label}`);
}

/**
 * Fetch real member count from Vercel API (or fallback to Discord API)
 */
async function fetchDiscordMemberCount() {
  // Try Vercel API first (if deployed)
  try {
    const response = await fetch('/api/discord-stats');
    if (response.ok) {
      const data = await response.json();
      if (data.success) {
        return {
          totalMembers: data.total_members || 0,
          onlineMembers: data.online_members || 0,
          serverName: data.server_name
        };
      }
    }
  } catch (error) {
    console.log('[Discord Widget] Vercel API not available, falling back to public API');
  }

  // Fallback to public Discord API
  const inviteCode = DISCORD_CONFIG.invites.citizen;
  const apiUrl = `https://discord.com/api/v10/invites/${inviteCode}?with_counts=true`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      totalMembers: data.approximate_member_count || 0,
      onlineMembers: data.approximate_presence_count || 0
    };
  } catch (error) {
    console.warn('[Discord Widget] Failed to fetch member count:', error);
    return null;
  }
}

/**
 * Update member count badge with real data
 */
async function updateMemberCountBadge() {
  const badge = document.querySelector('.widget-badge');
  if (!badge) return;

  const countText = badge.querySelector('.online-count');
  if (!countText) return;

  // Show loading state
  countText.textContent = 'Loading...';

  // Fetch real data
  const counts = await fetchDiscordMemberCount();

  if (counts) {
    // Update with real data
    const { totalMembers, onlineMembers } = counts;

    // Show total members (more impressive than online count)
    if (totalMembers > 0) {
      countText.textContent = `${totalMembers} members`;
    } else {
      countText.textContent = 'Active community';
    }

    // Store counts for analytics
    if (typeof window !== 'undefined') {
      window.discordMemberCounts = counts;
    }
  } else {
    // Fallback if API fails
    countText.textContent = 'Active community';
  }
}

/**
 * Initialize widget on page load
 */
function initializeWidget() {
  const widgetContainer = document.querySelector('.discord-widget-container');

  if (!widgetContainer) {
    return;
  }

  const persona = widgetContainer.dataset.persona;

  // Track widget load
  trackWidgetEvent('widget_loaded', persona);

  // Fetch and update real member count from Discord API
  updateMemberCountBadge();

  // Track CTA button clicks
  const ctaButtons = document.querySelectorAll('.widget-cta-button');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const buttonType = this.classList.contains('widget-cta-button-secondary')
        ? 'qr_code'
        : 'full_discord';
      trackWidgetEvent('cta_click', persona, buttonType);
    });
  });

  // Track widget interactions (scrolling, clicking inside widget)
  const widgetEmbed = document.querySelector('widgetbot');
  if (widgetEmbed) {
    let hasInteracted = false;
    widgetEmbed.addEventListener('click', function() {
      if (!hasInteracted) {
        trackWidgetEvent('widget_interaction', persona, 'first_click');
        hasInteracted = true;
      }
    });
  }
}

/**
 * Handle widget loading states
 */
function handleWidgetLoading() {
  const widgets = document.querySelectorAll('widgetbot');

  widgets.forEach(widget => {
    // Add loading indicator
    const loader = document.createElement('div');
    loader.className = 'widget-loading';
    loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading chat...';
    widget.parentNode.insertBefore(loader, widget);

    // Show widget and remove loader after timeout
    setTimeout(() => {
      loader.style.display = 'none';
      widget.style.display = 'block';
    }, 2000);

    // Fallback: Remove loader after 5 seconds even if widget doesn't load
    setTimeout(() => {
      if (loader.style.display !== 'none') {
        loader.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Widget taking longer than expected. Please refresh or <a href="https://discord.gg/' +
          DISCORD_CONFIG.invites.citizen +
          '" style="color: #5865F2;">join Discord directly</a>.';
      }
    }, 5000);
  });
}

/**
 * Generate QR code for deep linking (using API)
 */
function generateQRCode(persona) {
  const inviteCode = DISCORD_CONFIG.invites[persona];
  const inviteURL = `https://discord.gg/${inviteCode}`;

  // Using goqr.me API for QR code generation
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inviteURL)}`;

  return qrCodeURL;
}

/**
 * Initialize QR codes if present
 */
function initializeQRCodes() {
  const qrImages = document.querySelectorAll('.widget-qr-code img[data-persona]');

  qrImages.forEach(img => {
    const persona = img.dataset.persona;
    img.src = generateQRCode(persona);
    img.alt = `QR code to join ${persona} Discord channel`;
  });
}

/**
 * Mobile deep linking helper
 */
function detectMobileAndShowDeepLink() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    const deepLinkButtons = document.querySelectorAll('.widget-cta-button[href*="discord.gg"]');

    deepLinkButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const inviteCode = this.href.split('discord.gg/')[1];

        // Try Discord app deep link first
        window.location.href = `discord://invite/${inviteCode}`;

        // Fallback to web after 1 second if app doesn't open
        setTimeout(() => {
          window.location.href = this.href;
        }, 1000);
      });
    });
  }
}

/**
 * Refresh member count periodically
 */
function startMemberCountRefresh() {
  // Update every 5 minutes to avoid rate limiting
  setInterval(updateMemberCountBadge, 300000); // 5 minutes
}

/**
 * Main initialization
 */
document.addEventListener('DOMContentLoaded', function() {
  initializeWidget();
  initializeQRCodes();
  detectMobileAndShowDeepLink();
  startMemberCountRefresh();
});

/**
 * Handle widget loading when page fully loads
 */
window.addEventListener('load', function() {
  handleWidgetLoading();
});

/**
 * Export for testing
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    trackWidgetEvent,
    getOnlineMemberCount,
    generateQRCode
  };
}
