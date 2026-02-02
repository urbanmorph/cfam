#!/usr/bin/env python3
"""
Add Discord widgets to all persona pages
Run this after updating widgetbot-config.json with actual channel IDs
"""

import json
import os
import re

# Persona configuration
PERSONAS = {
    'expert': {
        'title': 'Fellow Experts',
        'section_title': 'Chat with Technical Experts',
        'description': 'Discuss infrastructure design, policy analysis, and research data',
    },
    'administrator': {
        'title': 'Fellow Administrators',
        'section_title': 'Chat with Government Administrators',
        'description': 'Coordinate implementation strategies and share best practices',
    },
    'politician': {
        'title': 'Fellow Politicians',
        'section_title': 'Chat with Policy Makers',
        'description': 'Discuss legislative strategies and constituent engagement',
    },
    'corporate': {
        'title': 'Corporate Leaders',
        'section_title': 'Chat with Business Partners',
        'description': 'Explore partnerships, CSR initiatives, and business opportunities',
    }
}

def load_config():
    """Load widgetbot configuration"""
    config_path = os.path.join(os.path.dirname(__file__), 'widgetbot-config.json')
    with open(config_path, 'r') as f:
        return json.load(f)

def generate_widget_html(persona, config):
    """Generate widget HTML for a persona"""
    persona_config = config['personas'][persona]
    persona_info = PERSONAS[persona]

    return f'''
    <!-- Discord Widget Section -->
    <section class="discord-section py-5" style="background: #f8f9fa;">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="discord-section-title">
              <h2>{persona_info['section_title']}</h2>
              <p class="lead text-muted">
                Join the conversation right here - no Discord account needed!
              </p>
            </div>

            <!-- Widget Container -->
            <div class="discord-widget-container" data-persona="{persona}">
              <div class="widget-header">
                <div class="widget-title">
                  <i class="fab fa-discord"></i>
                  {persona_config['channel_name']}
                </div>
                <span class="widget-badge">
                  <span class="status-dot"></span>
                  <span class="online-count">{persona_config['online_estimate']}+ online</span>
                </span>
              </div>

              <!-- Widget Features -->
              <div class="widget-features">
                <div class="widget-feature">
                  <i class="fas fa-comments"></i>
                  Live chat
                </div>
                <div class="widget-feature">
                  <i class="fas fa-user-shield"></i>
                  Guest mode available
                </div>
                <div class="widget-feature">
                  <i class="fas fa-mobile-alt"></i>
                  Mobile friendly
                </div>
              </div>

              <!-- WidgetBot Embed -->
              <widgetbot
                  server="{config['server_id']}"
                  channel="{persona_config['channel_id']}"
                  width="100%"
                  height="600">
              </widgetbot>

              <!-- Full Discord CTA -->
              <div class="widget-cta">
                <p class="widget-cta-text">
                  <strong>Want the full experience?</strong><br>
                  Get voice chat, mobile app, push notifications, and join all channels
                </p>
                <div class="widget-cta-buttons">
                  <a href="https://discord.gg/{persona_config['invite_code']}"
                     class="widget-cta-button"
                     target="_blank"
                     rel="noopener noreferrer">
                    <i class="fab fa-discord"></i>
                    Join Full Discord Server
                  </a>
                  <button class="widget-cta-button widget-cta-button-secondary"
                          onclick="document.querySelector('.widget-qr-section').style.display = document.querySelector('.widget-qr-section').style.display === 'none' ? 'flex' : 'none'">
                    <i class="fas fa-qrcode"></i>
                    Show QR Code
                  </button>
                </div>

                <!-- QR Code Section (Hidden by default) -->
                <div class="widget-qr-section" style="display: none;">
                  <div class="widget-qr-code">
                    <img data-persona="{persona}" alt="QR code to join Discord">
                  </div>
                  <div class="widget-qr-text">
                    <strong>Scan with your phone</strong>
                    Opens Discord app directly to {persona_config['channel_name']}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
'''

def add_css_link(html_content):
    """Add discord-widget.css link if not present"""
    if 'discord-widget.css' in html_content:
        return html_content

    # Add after cfam.css
    pattern = r'(<link href="../css/cfam.css" rel="stylesheet">)'
    replacement = r'\1\n  <link href="../css/discord-widget.css" rel="stylesheet">'
    return re.sub(pattern, replacement, html_content)

def add_js_scripts(html_content):
    """Add WidgetBot and discord-widget.js scripts if not present"""
    if 'widgetbot' in html_content and 'discord-widget.js' in html_content:
        return html_content

    # Add before </body>
    scripts = '''
  <!-- WidgetBot Embed Script -->
  <script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>

  <!-- Discord Widget Helper -->
  <script src="../js/discord-widget.js"></script>
'''

    html_content = html_content.replace('</body>', scripts + '</body>')
    return html_content

def find_insertion_point(html_content, persona):
    """Find where to insert the widget section"""

    # Look for common patterns to insert after
    patterns = [
        r'(</section>\s*<!--[^>]*Real Stories[^>]*-->)',  # After action cards, before stories
        r'(</section>\s*<!--[^>]*FAQ[^>]*-->)',          # Before FAQ
        r'(</section>\s*<!--[^>]*CTA[^>]*-->)',          # Before final CTA
    ]

    for pattern in patterns:
        match = re.search(pattern, html_content, re.IGNORECASE)
        if match:
            return match.start(1)

    # If no pattern found, insert before footer
    footer_match = re.search(r'<!--\s*Footer\s*-->', html_content)
    if footer_match:
        return footer_match.start()

    return None

def add_widget_to_file(filepath, persona, config):
    """Add widget to a persona HTML file"""

    print(f"\nProcessing {filepath}...")

    with open(filepath, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Check if widget already exists
    if 'discord-widget-container' in html_content:
        print(f"  ⚠️  Widget already exists in {filepath}, skipping")
        return False

    # Add CSS link
    html_content = add_css_link(html_content)
    print("  ✓ Added CSS link")

    # Generate widget HTML
    widget_html = generate_widget_html(persona, config)

    # Find insertion point
    insertion_point = find_insertion_point(html_content, persona)

    if insertion_point is None:
        print(f"  ❌ Could not find insertion point for {filepath}")
        return False

    # Insert widget
    html_content = (
        html_content[:insertion_point] +
        '\n' + widget_html + '\n' +
        html_content[insertion_point:]
    )
    print("  ✓ Inserted widget HTML")

    # Add JS scripts
    html_content = add_js_scripts(html_content)
    print("  ✓ Added JS scripts")

    # Write back
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(html_content)

    print(f"  ✅ Successfully updated {filepath}")
    return True

def main():
    """Main execution"""
    print("=" * 60)
    print("Discord Widget Installer for CFAM Persona Pages")
    print("=" * 60)

    # Load configuration
    try:
        config = load_config()
        print("\n✓ Loaded widgetbot-config.json")
    except Exception as e:
        print(f"\n❌ Error loading config: {e}")
        return

    # Check if channel IDs are set
    unset_channels = []
    for persona, persona_config in config['personas'].items():
        if 'REPLACE_WITH' in persona_config['channel_id']:
            unset_channels.append(persona)

    if unset_channels:
        print(f"\n⚠️  WARNING: Channel IDs not set for: {', '.join(unset_channels)}")
        print("   Widget will not work until you update widgetbot-config.json")
        print("   Continuing with placeholder IDs (update later)...")

    # Get project root
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.dirname(script_dir)
    action_dir = os.path.join(project_root, 'action')

    # Process each persona (skip citizen as it's already done)
    results = {'success': [], 'skipped': [], 'failed': []}

    for persona in PERSONAS.keys():
        filepath = os.path.join(action_dir, f'{persona}.html')

        if not os.path.exists(filepath):
            print(f"\n❌ File not found: {filepath}")
            results['failed'].append(persona)
            continue

        try:
            if add_widget_to_file(filepath, persona, config):
                results['success'].append(persona)
            else:
                results['skipped'].append(persona)
        except Exception as e:
            print(f"  ❌ Error: {e}")
            results['failed'].append(persona)

    # Summary
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    print(f"✅ Success: {len(results['success'])} files")
    for persona in results['success']:
        print(f"   - {persona}.html")

    if results['skipped']:
        print(f"\n⚠️  Skipped: {len(results['skipped'])} files (already had widgets)")
        for persona in results['skipped']:
            print(f"   - {persona}.html")

    if results['failed']:
        print(f"\n❌ Failed: {len(results['failed'])} files")
        for persona in results['failed']:
            print(f"   - {persona}.html")

    print("\n" + "=" * 60)
    print("NEXT STEPS:")
    print("=" * 60)
    print("1. Update channel IDs in widgetbot-config.json (if not done)")
    print("2. Test each page in browser:")
    for persona in results['success']:
        print(f"   - http://localhost:8000/action/{persona}.html")
    print("3. Verify widget loads and guest chat works")
    print("4. Test 'Join Full Discord' and 'Show QR Code' buttons")
    print("5. Test on mobile browser")
    print("\nSee WIDGET_IMPLEMENTATION_GUIDE.md for detailed testing steps")
    print("=" * 60)

if __name__ == '__main__':
    main()
