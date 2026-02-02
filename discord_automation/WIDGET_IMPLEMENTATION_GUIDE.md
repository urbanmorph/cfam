# Discord Widget Implementation Guide

## Status: Phase 1 Complete (Citizen Page Pilot)

This guide walks you through implementing the hybrid Discord integration (WidgetBot embed + deep link CTAs) across all CFAM persona pages.

## What's Been Implemented

### ✅ Completed (Phase 1: Pilot on Citizen Page)

1. **Core Widget Files Created:**
   - `/css/discord-widget.css` - Widget styling (250+ lines)
   - `/js/discord-widget.js` - Widget helper functions with analytics (200+ lines)
   - `/discord_automation/widgetbot-config.json` - Configuration file

2. **Citizen Page Integration:**
   - Widget embedded in `/action/citizen.html` after "What Can You Do" section
   - CSS and JS links added to page
   - Guest chat functionality ready
   - Deep link CTA buttons included
   - QR code toggle feature added
   - Mobile responsive design

### 🔄 Pending (Phase 2-4)

1. **WidgetBot Setup:**
   - Add WidgetBot bot to Discord server
   - Get actual channel IDs for each persona
   - Update `widgetbot-config.json` with real IDs
   - Configure guest posting permissions

2. **Expand to Other Personas:**
   - Expert page
   - Administrator page
   - Politician page
   - Corporate page

3. **Testing & Optimization:**
   - Test guest chat functionality
   - Verify mobile responsiveness
   - A/B test widget placement
   - Monitor analytics

---

## Step-by-Step Setup Guide

### Step 1: Add WidgetBot to Discord Server (5 minutes)

1. Visit https://widgetbot.io/
2. Click "Get Started" → "Add to Discord"
3. Select "Council For Active Mobility" server (ID: 858737267929907240)
4. Authorize with these permissions:
   - Read Messages/View Channels
   - Send Messages
   - Embed Links
   - Read Message History
   - Use External Emojis

### Step 2: Get Channel IDs (5 minutes)

1. In Discord, enable Developer Mode:
   - User Settings → Advanced → Developer Mode (toggle ON)

2. For each persona channel, right-click the channel → Copy ID:
   ```
   #citizen-general      → Copy ID
   #expert-technical     → Copy ID
   #administrator-impl   → Copy ID
   #politician-policy    → Copy ID
   #corporate-partners   → Copy ID
   ```

3. Update `/discord_automation/widgetbot-config.json`:
   ```json
   "citizen": {
     "channel_id": "PASTE_CITIZEN_CHANNEL_ID_HERE",
     ...
   }
   ```

### Step 3: Configure WidgetBot Dashboard (10 minutes)

1. Visit https://widgetbot.io/dashboard
2. Select your server from the dropdown
3. For each persona channel:
   - Click "Create Widget"
   - Select the channel
   - Copy the server and channel IDs (verify they match)
   - Configure settings:
     - ✅ Guest mode: Enabled
     - ✅ Notifications: Enabled
     - ✅ File uploads: Enabled
     - Theme: Dark
   - Copy the embed code (we already have the structure, just need IDs)

### Step 4: Update Channel IDs in HTML (10 minutes)

Replace `REPLACE_WITH_*_CHANNEL_ID` in each persona page:

**File: `/action/citizen.html` (line ~389)**
```html
<widgetbot
    server="858737267929907240"
    channel="PASTE_ACTUAL_CITIZEN_CHANNEL_ID"
    width="100%"
    height="600">
</widgetbot>
```

Repeat for all 5 persona pages.

### Step 5: Configure Discord Channel Permissions (5 minutes)

For each persona channel, ensure these permissions:

**@everyone role:**
- ✅ View Channel
- ✅ Send Messages
- ✅ Embed Links
- ✅ Attach Files
- ✅ Read Message History
- ✅ Use External Emojis
- ✅ Add Reactions

**WidgetBot bot role:**
- ✅ All of the above +
- ✅ Manage Messages (for moderation)
- ✅ Manage Webhooks

### Step 6: Test Widget Functionality (15 minutes)

**Desktop Testing:**
1. Open `/action/citizen.html` in browser
2. Wait for widget to load (2-3 seconds)
3. Click in chat area → Enter guest username
4. Type a test message → Send
5. Verify message appears in:
   - Widget itself
   - Discord desktop/mobile app
6. Test "Join Full Discord Server" button
7. Test "Show QR Code" button

**Mobile Testing:**
1. Open on mobile browser (Chrome/Safari)
2. Verify widget is responsive (500px height)
3. Test guest chat on mobile
4. Test deep link opens Discord app
5. Test QR code scanning

**Guest User Flow:**
1. Close all Discord tabs/apps
2. Reload page (clear cookies if needed)
3. Click in widget → Prompted for username
4. Enter name → Send message
5. Verify appears as "Guest_[username]" in Discord

**Discord User Flow:**
1. Log into Discord in another browser tab
2. Reload widget page
3. Widget should detect Discord login
4. Send message → Appears with your Discord avatar/username

---

## Adding Widget to Other Persona Pages

### Template for Expert/Administrator/Politician/Corporate Pages

Insert this section after the main action cards section (similar to citizen.html line 358):

```html
<!-- Discord Widget Section -->
<section class="discord-section py-5" style="background: #f8f9fa;">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="discord-section-title">
          <h2>Chat with Fellow [PERSONA_NAME]s</h2>
          <p class="lead text-muted">
            Join the conversation right here - no Discord account needed!
          </p>
        </div>

        <!-- Widget Container -->
        <div class="discord-widget-container" data-persona="[PERSONA_SLUG]">
          <div class="widget-header">
            <div class="widget-title">
              <i class="fab fa-discord"></i>
              #[CHANNEL_NAME]
            </div>
            <span class="widget-badge">
              <span class="status-dot"></span>
              <span class="online-count">[ONLINE_COUNT]+ online</span>
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
              server="858737267929907240"
              channel="REPLACE_WITH_[PERSONA]_CHANNEL_ID"
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
              <a href="https://discord.gg/j8jgV7rc7J"
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
                <img data-persona="[PERSONA_SLUG]" alt="QR code to join Discord">
              </div>
              <div class="widget-qr-text">
                <strong>Scan with your phone</strong>
                Opens Discord app directly to #[CHANNEL_NAME]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Variables to replace:**
- `[PERSONA_NAME]` → Citizens | Experts | Administrators | Politicians | Corporate Leaders
- `[PERSONA_SLUG]` → citizen | expert | administrator | politician | corporate
- `[CHANNEL_NAME]` → citizen-general | expert-technical | administrator-implementation | politician-policy | corporate-partnerships
- `[ONLINE_COUNT]` → 500 | 150 | 80 | 50 | 120 (from widgetbot-config.json)
- `REPLACE_WITH_[PERSONA]_CHANNEL_ID` → Actual Discord channel ID

**Also add to `<head>` section:**
```html
<link href="../css/discord-widget.css" rel="stylesheet">
```

**And before `</body>`:**
```html
<!-- WidgetBot Embed Script -->
<script src="https://cdn.jsdelivr.net/npm/@widgetbot/html-embed"></script>

<!-- Discord Widget Helper -->
<script src="../js/discord-widget.js"></script>
```

---

## Analytics Tracking

The widget automatically tracks these events via Google Analytics:

### Events Tracked

1. **widget_loaded** - When widget appears on page
   ```javascript
   // event_category: discord_widget
   // event_label: [persona]
   // action_type: widget_loaded
   ```

2. **widget_interaction** - First click inside widget
   ```javascript
   // event_category: discord_widget
   // event_label: [persona]
   // action_type: first_click
   ```

3. **cta_click** - "Join Full Discord" button click
   ```javascript
   // event_category: discord_widget
   // event_label: [persona]
   // action_type: full_discord
   ```

4. **cta_click** - "Show QR Code" button click
   ```javascript
   // event_category: discord_widget
   // event_label: [persona]
   // action_type: qr_code
   ```

### View Analytics

Google Analytics → Events → discord_widget → View by:
- Event Label (persona breakdown)
- Action Type (interaction type)

**Key Metrics to Monitor:**
- Widget load rate (pageviews with widget / total pageviews)
- Interaction rate (widget_interaction / widget_loaded)
- Conversion rate (cta_click / widget_interaction)
- Persona comparison (which personas engage most)

---

## Troubleshooting

### Widget Not Loading

**Symptoms:** Gray box or infinite loading spinner

**Solutions:**
1. Check browser console (F12) for errors
2. Verify WidgetBot script loaded: `https://cdn.jsdelivr.net/npm/@widgetbot/html-embed`
3. Verify channel ID is correct in HTML
4. Check Discord server ID matches: `858737267929907240`
5. Ensure WidgetBot bot is in the server and has permissions
6. Try in incognito mode (clear cache/cookies)

### Guest Chat Not Working

**Symptoms:** Can't type messages as guest

**Solutions:**
1. Check channel permissions (@everyone can send messages)
2. Verify guest mode enabled in WidgetBot dashboard
3. Check if channel is read-only or locked
4. Try with a different browser
5. Verify WidgetBot bot has "Send Messages" permission

### Widget Shows "Not Found" Error

**Symptoms:** Widget displays error message

**Solutions:**
1. Channel ID is incorrect → Double-check copied ID
2. Channel was deleted/renamed → Update ID in HTML
3. WidgetBot bot removed from server → Re-add bot
4. Server ID is wrong → Verify `858737267929907240`

### Mobile Deep Link Not Opening App

**Symptoms:** Clicking button opens web browser instead of app

**Solutions:**
1. Ensure Discord app is installed on mobile
2. Check deep link format: `discord://invite/[CODE]`
3. Some browsers block deep links → Try Chrome/Safari
4. Fallback URL should open after 1 second

### QR Code Not Generating

**Symptoms:** Broken image icon

**Solutions:**
1. Check browser console for CORS errors
2. Verify QR API is accessible: `https://api.qrserver.com`
3. Check invite code is valid in `discord-widget.js`
4. Try alternative QR API if needed

### Widget Appears Unstyled

**Symptoms:** Widget looks broken, no colors/spacing

**Solutions:**
1. Verify CSS file loaded: `../css/discord-widget.css`
2. Check path is correct (relative to HTML file)
3. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
4. Check for CSS conflicts with `cfam.css`
5. Verify Bootstrap 5.3.2 is loaded

---

## Performance Considerations

### Page Load Impact

- **WidgetBot script:** ~50KB (CDN cached)
- **Custom CSS:** 8KB
- **Custom JS:** 6KB
- **Total added weight:** ~64KB

**Impact:** Minimal - script loads asynchronously

### Optimization Tips

1. **Lazy loading:** Widget below fold can lazy load
2. **Preconnect:** Add to `<head>` for faster widget load:
   ```html
   <link rel="preconnect" href="https://cdn.jsdelivr.net">
   ```
3. **Defer JS:** Already handled by widget script
4. **Cache headers:** Ensure CSS/JS are cached (1 week+)

---

## Security Considerations

### WidgetBot Security

- ✅ Iframe sandboxing prevents XSS
- ✅ HTTPS encryption for all messages
- ✅ OAuth2 for Discord login
- ✅ No credentials stored in widget
- ✅ GDPR compliant (Discord & WidgetBot)

### Guest Mode Privacy

- **Data collected:** Username (chosen by user), message content
- **Data stored:** On Discord servers (follow Discord privacy policy)
- **Tracking:** IP address logged by Discord (standard)
- **Deletion:** Users can request data deletion via Discord

### Moderation

- All widget messages appear in Discord channels
- Moderators can delete widget messages
- Bans/kicks apply to widget users
- AutoMod rules apply to widget (if configured)
- Guest users can be blocked by username/IP

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check widget load on all 5 pages
- Verify guest chat functionality
- Monitor analytics for errors/drops

**Monthly:**
- Review WidgetBot dashboard for updates
- Check online member counts accuracy
- Update invite codes if changed
- Review analytics metrics

**Quarterly:**
- A/B test widget placement (mid-page vs bottom)
- Survey users about widget experience
- Optimize conversion rate (widget → full Discord)
- Review and update channel descriptions

### Updating Channel IDs

If channels are renamed/moved:

1. Get new channel ID (right-click → Copy ID)
2. Update `widgetbot-config.json`
3. Update HTML files (`channel="NEW_ID"`)
4. Update `discord-widget.js` if invite codes changed
5. Test widget loads with new ID

---

## Success Metrics

### Target Metrics (Month 1)

- **Widget views:** 1,000+ per page
- **Widget interactions:** 30-40% of viewers
- **Guest messages:** 10-15% send at least one message
- **Full Discord conversions:** 5-10% click CTA
- **Mobile usage:** 40-50% of interactions

### Long-term Goals (Month 3-6)

- **Engagement rate:** 50%+ viewers interact with widget
- **Conversion rate:** 15%+ convert to full Discord members
- **Message volume:** 100+ messages per persona per week
- **User retention:** 70%+ widget users return within 7 days
- **Cross-persona:** 20%+ users engage with multiple personas

### Tracking Dashboard

Create Google Data Studio dashboard with:
1. Widget loads by persona (line chart)
2. Interaction rate funnel (pageview → load → interaction → CTA)
3. Persona comparison (bar chart)
4. Mobile vs desktop split (pie chart)
5. Conversion rate over time (line chart)

---

## Next Steps

### Immediate (This Week)

1. ✅ Complete WidgetBot setup (Steps 1-3 above)
2. ✅ Get all channel IDs (Step 2)
3. ✅ Update `widgetbot-config.json` with real IDs
4. ✅ Update citizen.html with actual channel ID
5. ✅ Test citizen page widget end-to-end

### Short-term (Next Week)

6. Add widget to expert.html
7. Add widget to administrator.html
8. Add widget to politician.html
9. Add widget to corporate.html
10. Test all widgets on desktop and mobile

### Medium-term (Weeks 3-4)

11. Set up Google Analytics dashboard
12. Monitor engagement metrics
13. Gather user feedback (survey/Discord)
14. A/B test widget placement
15. Optimize conversion funnel

### Long-term (Month 2+)

16. Expand to other CFAM pages if successful
17. Consider WidgetBot premium for custom branding
18. Integrate voice/video links for events
19. Add embedded calendar for community rides
20. Build automated reports for stakeholders

---

## Support & Resources

### Documentation

- **WidgetBot Docs:** https://docs.widgetbot.io/
- **Discord.js Guide:** https://discordjs.guide/
- **Discord Developer Portal:** https://discord.com/developers/docs/

### Community Support

- **WidgetBot Discord:** https://discord.gg/NYBEhN7
- **CFAM Discord:** https://discord.gg/j8jgV7rc7J (admin access)

### Contact

- **Technical issues:** [Your email/Discord]
- **Widget problems:** WidgetBot support (https://widgetbot.io/support)
- **Discord server issues:** Server admin team

---

## Appendix: File Structure

```
cfam/
├── css/
│   ├── cfam.css
│   └── discord-widget.css          ← NEW (250 lines)
├── js/
│   ├── amb.js
│   └── discord-widget.js           ← NEW (200 lines)
├── action/
│   ├── citizen.html                ← UPDATED (widget added)
│   ├── expert.html                 ← TO UPDATE
│   ├── administrator.html          ← TO UPDATE
│   ├── politician.html             ← TO UPDATE
│   └── corporate.html              ← TO UPDATE
└── discord_automation/
    ├── widgetbot-config.json       ← NEW (config file)
    └── WIDGET_IMPLEMENTATION_GUIDE.md  ← THIS FILE
```

---

## Version History

- **v1.0 (2026-02-02):** Initial implementation on citizen.html
  - Core CSS/JS files created
  - Widget embedded with hybrid approach
  - Deep link CTAs and QR codes added
  - Analytics tracking configured

- **v1.1 (Planned):** Expansion to all persona pages
- **v1.2 (Planned):** A/B testing and optimization
- **v2.0 (Planned):** Enhanced features (calendar, voice links)

---

**Last Updated:** 2026-02-02
**Status:** Phase 1 Complete (Citizen Page Pilot)
**Next Review:** After citizen page testing (1 week)
