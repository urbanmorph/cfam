#!/usr/bin/env python3
"""
Convert Discord widget embeds to deep link sections
"""

import re

# Template for deep link section
DEEPLINK_TEMPLATE = '''            <!-- Discord Community Section -->
            <div class="discord-widget-container" data-persona="{persona}">
              <div class="widget-header">
                <div class="widget-title">
                  <i class="fab fa-discord"></i>
                  {title}
                </div>
                <span class="widget-badge">
                  <span class="status-dot"></span>
                  <span class="online-count">{online}+ online</span>
                </span>
              </div>

              <!-- Community Highlights -->
              <div class="discord-community-content">
                <p class="discord-description">
                  {description}
                </p>

                <div class="discord-features-grid">
{features}
                </div>

                <!-- Main CTA -->
                <div class="discord-cta-primary">
                  <a href="https://discord.gg/j8jgV7rc7J"
                     class="widget-cta-button widget-cta-button-large"
                     target="_blank"
                     rel="noopener noreferrer">
                    <i class="fab fa-discord"></i>
                    Join Discord Server
                  </a>
                  <p class="discord-cta-subtext">Free to join • Available on mobile & desktop</p>
                </div>

                <!-- QR Code Option -->
                <div class="discord-qr-toggle">
                  <button class="widget-cta-button widget-cta-button-secondary"
                          onclick="document.querySelector('.widget-qr-section').style.display = document.querySelector('.widget-qr-section').style.display === 'none' ? 'flex' : 'none'">
                    <i class="fas fa-qrcode"></i>
                    Scan QR Code on Mobile
                  </button>
                </div>

                <!-- QR Code Section (Hidden by default) -->
                <div class="widget-qr-section" style="display: none;">
                  <div class="widget-qr-code">
                    <img data-persona="{persona}" alt="QR code to join Discord">
                  </div>
                  <div class="widget-qr-text">
                    <strong>Scan with your phone</strong>
                    Opens Discord app directly to the {persona} community
                  </div>
                </div>
              </div>
            </div>'''

FEATURE_TEMPLATE = '''                  <div class="discord-feature-item">
                    <i class="{icon}"></i>
                    <div>
                      <strong>{title}</strong>
                      <p>{description}</p>
                    </div>
                  </div>'''

# Persona configurations
PERSONAS = {
    'expert': {
        'title': 'Join the Expert Community',
        'online': '150',
        'description': 'Connect with technical experts, urban planners, and infrastructure designers. Discuss research, share data, and analyze policies for safer active mobility.',
        'features': [
            ('fas fa-comments', '#expert-planning', 'Technical discussions and research'),
            ('fas fa-drafting-compass', 'Infrastructure Design', 'Share detailed planning insights'),
            ('fas fa-chart-line', 'Policy Analysis', 'Review and critique legislation'),
            ('fas fa-users', '150+ Experts', 'Engineers, planners, researchers'),
        ]
    },
    'administrator': {
        'title': 'Join the Administrator Network',
        'online': '80',
        'description': 'Network with government officials and administrators implementing active mobility programs. Share best practices, coordinate strategies, and discuss governance frameworks.',
        'features': [
            ('fas fa-comments', '#administrator-implementation', 'Coordinate implementation strategies'),
            ('fas fa-clipboard-check', 'Best Practices', 'Learn from successful programs'),
            ('fas fa-landmark', 'Governance', 'Discuss policy frameworks'),
            ('fas fa-users', '80+ Officials', 'Administrators across India'),
        ]
    },
    'politician': {
        'title': 'Join the Policy Makers Forum',
        'online': '50',
        'description': 'Engage with elected representatives, MLAs, and councillors. Discuss legislative strategies, constituent engagement, and policy advocacy for active mobility.',
        'features': [
            ('fas fa-comments', '#politician-advocacy', 'Legislative strategy discussions'),
            ('fas fa-handshake', 'Constituent Engagement', 'Share effective approaches'),
            ('fas fa-gavel', 'Policy Discussions', 'Debate and refine proposals'),
            ('fas fa-users', '50+ Representatives', 'MLAs, councillors, leaders'),
        ]
    },
    'corporate': {
        'title': 'Join the Business Partners Network',
        'online': '120',
        'description': 'Connect with corporate leaders interested in active mobility partnerships. Explore CSR initiatives, public-private partnerships, and sustainable business opportunities.',
        'features': [
            ('fas fa-comments', '#corporate-sustainability', 'CSR and partnership opportunities'),
            ('fas fa-briefcase', 'Business Opportunities', 'Explore mobility sector growth'),
            ('fas fa-handshake', 'Public-Private', 'Collaborate on infrastructure'),
            ('fas fa-users', '120+ Partners', 'Corporate leaders and startups'),
        ]
    }
}

def generate_features(features_list):
    """Generate HTML for features grid"""
    features_html = []
    for icon, title, description in features_list:
        features_html.append(FEATURE_TEMPLATE.format(
            icon=icon,
            title=title,
            description=description
        ))
    return '\n'.join(features_html)

def generate_deeplink_section(persona):
    """Generate complete deep link section for a persona"""
    config = PERSONAS[persona]
    features_html = generate_features(config['features'])

    return DEEPLINK_TEMPLATE.format(
        persona=persona,
        title=config['title'],
        online=config['online'],
        description=config['description'],
        features=features_html
    )

def update_html_file(filepath, persona):
    """Update HTML file with new deep link section"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern to match the entire widget container section
    pattern = r'(<!-- Discord Community Section -->.*?<div class="discord-widget-container".*?</div>\s*</div>\s*</div>)'

    # Find and replace
    new_section = generate_deeplink_section(persona)
    updated_content = re.sub(pattern, new_section, content, flags=re.DOTALL)

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"✅ Updated {filepath}")

if __name__ == '__main__':
    import os

    base_path = '/Users/sathya/Documents/GitHub/cfam/action'

    for persona in ['expert', 'administrator', 'politician', 'corporate']:
        filepath = os.path.join(base_path, f'{persona}.html')
        try:
            update_html_file(filepath, persona)
        except Exception as e:
            print(f"❌ Error updating {persona}: {e}")

    print("\n✅ All pages updated to deep link sections!")
