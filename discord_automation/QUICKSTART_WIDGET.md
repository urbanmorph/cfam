# Discord Widget Quick Start Guide

## 🎯 What's Been Done

✅ **All 5 persona pages now have Discord widgets embedded:**
- `/action/citizen.html` (pilot implementation)
- `/action/expert.html`
- `/action/administrator.html`
- `/action/politician.html`
- `/action/corporate.html`

✅ **Core infrastructure files created:**
- `/css/discord-widget.css` - Widget styling
- `/js/discord-widget.js` - Widget functionality & analytics
- `/discord_automation/widgetbot-config.json` - Configuration

✅ **Features implemented:**
- Embedded live Discord chat (via WidgetBot)
- Guest mode (no Discord account required)
- Mobile responsive design
- "Join Full Discord Server" CTA buttons
- QR code generator for mobile deep linking
- Analytics tracking (Google Analytics integration)

---

## 🚀 5-Minute Setup (Critical Steps)

### Step 1: Add WidgetBot Bot to Discord

1. Go to: https://widgetbot.io/
2. Click "Get Started" → "Add to Discord"
3. Select server: **Council For Active Mobility**
4. Authorize with these permissions:
   - ✅ Read Messages/View Channels
   - ✅ Send Messages
   - ✅ Embed Links
   - ✅ Read Message History

### Step 2: Get Channel IDs from Discord

1. In Discord, enable Developer Mode:
   - Settings → Advanced → Developer Mode (ON)

2. Right-click each channel → Copy ID:
   ```
   #citizen-general          → 123456789012345678
   #expert-technical         → 123456789012345679
   #administrator-impl       → 123456789012345680
   #politician-policy        → 123456789012345681
   #corporate-partnerships   → 123456789012345682
   ```

### Step 3: Update Configuration File

Edit `/discord_automation/widgetbot-config.json`:

```json
{
  "personas": {
    "citizen": {
      "channel_id": "PASTE_YOUR_CITIZEN_CHANNEL_ID_HERE",
      ...
    },
    "expert": {
      "channel_id": "PASTE_YOUR_EXPERT_CHANNEL_ID_HERE",
      ...
    }
    // ... repeat for all 5 personas
  }
}
```

### Step 4: Update HTML Files

Find and replace in each file:

**In `/action/citizen.html` (line ~389):**
```html
<!-- Change this: -->
channel="REPLACE_WITH_CITIZEN_CHANNEL_ID"

<!-- To this: -->
channel="123456789012345678"
```

Repeat for:
- `expert.html` → `REPLACE_WITH_EXPERT_CHANNEL_ID`
- `administrator.html` → `REPLACE_WITH_ADMIN_CHANNEL_ID`
- `politician.html` → `REPLACE_WITH_POLITICIAN_CHANNEL_ID`
- `corporate.html` → `REPLACE_WITH_CORPORATE_CHANNEL_ID`

### Step 5: Configure Channel Permissions

For each persona channel in Discord:

1. Right-click channel → Edit Channel → Permissions
2. Set **@everyone** role:
   - ✅ View Channel
   - ✅ Send Messages
   - ✅ Embed Links
   - ✅ Attach Files
   - ✅ Read Message History
   - ✅ Add Reactions
3. Set **WidgetBot** bot role (same permissions as above)
4. Save changes

### Step 6: Test It!

1. Open `/action/citizen.html` in browser
2. Wait 2-3 seconds for widget to load
3. Click in chat area → Enter guest username
4. Type a test message → Send
5. Check Discord app → Message should appear!

**If working:** Repeat test for all 5 persona pages ✅

---

## 📋 Quick Verification Checklist

```
Setup Phase:
[ ] WidgetBot bot added to Discord server
[ ] Developer Mode enabled in Discord
[ ] All 5 channel IDs copied from Discord
[ ] widgetbot-config.json updated with real IDs
[ ] All 5 HTML files updated with real channel IDs
[ ] Channel permissions configured (guest posting allowed)

Testing Phase:
[ ] Citizen page widget loads correctly
[ ] Expert page widget loads correctly
[ ] Administrator page widget loads correctly
[ ] Politician page widget loads correctly
[ ] Corporate page widget loads correctly
[ ] Guest chat works (send test message)
[ ] Message appears in Discord app
[ ] "Join Full Discord" button works
[ ] "Show QR Code" button works
[ ] QR code generates correctly
[ ] Mobile responsive (test on phone)
[ ] Analytics tracking works (check browser console)

Production Phase:
[ ] All personas tested end-to-end
[ ] Monitoring set up (Google Analytics dashboard)
[ ] User feedback mechanism in place
[ ] Documentation shared with team
[ ] Backup of working configuration saved
```

---

## 🔧 Troubleshooting

### Problem: Widget shows "Loading..." forever

**Solution:**
1. Check browser console (F12) for errors
2. Verify WidgetBot script loaded: Look for `@widgetbot/html-embed` in Network tab
3. Confirm channel ID is correct in HTML
4. Clear browser cache and reload

### Problem: "Channel not found" error

**Solution:**
1. Double-check channel ID is correct (re-copy from Discord)
2. Verify server ID: `858737267929907240`
3. Ensure WidgetBot bot is still in the server
4. Check bot has access to the channel

### Problem: Can't send messages as guest

**Solution:**
1. Verify channel permissions: @everyone can "Send Messages"
2. Check WidgetBot dashboard: Guest mode enabled
3. Try different browser (incognito mode)
4. Ensure channel isn't read-only or locked

### Problem: Widget looks unstyled/broken

**Solution:**
1. Verify CSS file loads: Check Network tab for `discord-widget.css`
2. Check file path is correct: `../css/discord-widget.css`
3. Clear browser cache (Ctrl+Shift+R)
4. Verify Bootstrap 5.3.2 is loaded

### Problem: QR code doesn't appear

**Solution:**
1. Click "Show QR Code" button first (it's hidden by default)
2. Check browser console for errors
3. Verify QR API is accessible: https://api.qrserver.com
4. Check network connectivity

---

## 📊 Analytics Dashboard

The widget automatically tracks these events:

| Event | Description | Metric |
|-------|-------------|--------|
| `widget_loaded` | Widget appears on page | Impressions |
| `widget_interaction` | User clicks in widget | Engagement rate |
| `cta_click` (full_discord) | "Join Full Discord" clicked | Conversion rate |
| `cta_click` (qr_code) | "Show QR Code" clicked | Mobile interest |

**View in Google Analytics:**
- Events → `discord_widget` → Group by `event_label` (persona)

**Key Metrics:**
- **Engagement rate:** `widget_interaction` / `widget_loaded` → Target: 30-40%
- **Conversion rate:** `cta_click` / `widget_interaction` → Target: 5-10%

---

## 🎨 Customization Options

### Change Widget Height

Edit HTML (line ~389 in each file):
```html
<widgetbot
    server="..."
    channel="..."
    height="600">  <!-- Change this value -->
</widgetbot>
```

Default: 600px (desktop), 500px (mobile)

### Change Online Count Estimate

Edit `/discord_automation/widgetbot-config.json`:
```json
"citizen": {
  "online_estimate": 500  // Change this number
}
```

### Change Colors/Theme

Edit `/css/discord-widget.css`:
```css
.discord-widget-container {
  background: #2c2f33;  /* Dark gray - change this */
}

.widget-badge {
  background: #5865F2;  /* Discord purple - change this */
}
```

### Disable QR Code Feature

In each HTML file, remove this section:
```html
<!-- Remove the entire .widget-qr-section div -->
<div class="widget-qr-section" style="display: none;">
  ...
</div>
```

---

## 🚦 Deployment Checklist

### Before Going Live:

```
[ ] All 5 widgets tested on staging/local
[ ] Guest chat verified on all personas
[ ] Mobile responsive confirmed (iOS + Android)
[ ] Analytics tracking verified (send test events)
[ ] Deep links tested (opens Discord app)
[ ] QR codes tested (scan with phone)
[ ] Load testing done (check performance impact)
[ ] Team trained on moderation (widget messages in Discord)
[ ] Backup plan ready (can disable widgets if needed)
[ ] Monitoring dashboard set up (Google Analytics)
```

### After Going Live:

```
Day 1:
[ ] Monitor widget load rates (check analytics)
[ ] Watch for error reports (check Discord/email)
[ ] Test from different browsers/devices
[ ] Verify moderation works (delete test message)

Week 1:
[ ] Review engagement metrics (interaction rates)
[ ] Gather user feedback (survey/Discord)
[ ] Monitor message volume per persona
[ ] Check for spam/abuse (adjust moderation)

Month 1:
[ ] Analyze conversion rates (widget → full Discord)
[ ] Compare persona performance (which engages most)
[ ] A/B test widget placement (mid-page vs bottom)
[ ] Optimize based on data (adjust messaging/CTAs)
```

---

## 📞 Support

### Issues with WidgetBot:
- **Docs:** https://docs.widgetbot.io/
- **Support:** https://widgetbot.io/support
- **Discord:** https://discord.gg/NYBEhN7

### Issues with CFAM Implementation:
- **Full Guide:** See `WIDGET_IMPLEMENTATION_GUIDE.md`
- **Config File:** `widgetbot-config.json`
- **Discord Server:** https://discord.gg/j8jgV7rc7J (admin access)

---

## 🎯 Success Criteria

**Month 1 Goals:**
- [ ] Widget engagement rate: 30%+ (300+ interactions per 1000 views)
- [ ] Guest chat usage: 10%+ (100+ messages per 1000 views)
- [ ] Discord conversions: 5%+ (50+ joins per 1000 views)
- [ ] No major bugs or complaints
- [ ] Positive user feedback (survey results)

**If goals met:** Expand to other CFAM pages (data portal, activities, etc.)

**If goals not met:** Iterate on design, placement, messaging

---

## 📝 Quick Commands

### Test Widget on Local Server:
```bash
cd /Users/sathya/Documents/GitHub/cfam
python3 -m http.server 8000
# Open: http://localhost:8000/action/citizen.html
```

### Update All Widgets at Once:
```bash
cd /Users/sathya/Documents/GitHub/cfam
python3 discord_automation/add_widgets_to_personas.py
```

### View Widget Files:
```bash
# CSS
open css/discord-widget.css

# JS
open js/discord-widget.js

# Config
open discord_automation/widgetbot-config.json
```

---

**Status:** ✅ Phase 1 Complete - All widgets installed, ready for channel ID configuration

**Next Step:** Complete Step 1-6 above (5-minute setup)

**Questions?** See `WIDGET_IMPLEMENTATION_GUIDE.md` for comprehensive details
