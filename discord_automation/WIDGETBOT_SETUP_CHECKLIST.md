# WidgetBot Setup Checklist
## When WidgetBot Service is Back Online

**Current Status:** ⏳ Waiting for WidgetBot service to restore (experiencing 522 timeout errors as of 2026-02-02)

---

## ✅ Current Implementation Status

### What's Already Done:

- ✅ **All HTML files updated** with correct Discord channel IDs
- ✅ **CSS styling complete** (`/css/discord-widget.css`)
- ✅ **JavaScript helper ready** (`/js/discord-widget.js`)
- ✅ **Configuration file set** (`widgetbot-config.json`)
- ✅ **Channel IDs configured:**
  - Citizen: 1467740239668707444 (#citizen-general)
  - Expert: 1467740273147646238 (#expert-planning)
  - Administrator: 1467740291787264063 (#administrator-implementation)
  - Politician: 1467740317464793293 (#politician-advocacy)
  - Corporate: 1467740355712778271 (#corporate-sustainability)

### What's Pending:

- ⏳ **Add WidgetBot bot to Discord server** (waiting for service)
- ⏳ **Test live chat functionality**
- ⏳ **Verify guest mode works**
- ⏳ **Configure channel permissions for bot**

---

## 🔍 Step 1: Check if WidgetBot is Back Online

**Test these URLs:**

1. **WidgetBot Homepage:** https://widgetbot.io/
   - Should load without 522 error
   - "Add to Discord" button should work

2. **WidgetBot Status:** https://status.widgetbot.io/
   - Check for any ongoing incidents
   - All systems should be "Operational"

3. **WidgetBot CDN:** https://cdn.jsdelivr.net/npm/@widgetbot/html-embed
   - Should return JavaScript code (not 522 error)

**If all three load successfully, proceed to Step 2!**

---

## 🚀 Step 2: Add WidgetBot Bot to Your Server

**Method A: Via WidgetBot Website (Recommended)**

1. Go to: **https://widgetbot.io/**
2. Click **"Get Started"** or **"Add to Discord"**
3. Select server: **"Council For Active Mobility"** (ID: 858737267929907240)
4. Review permissions:
   - ✅ Read Messages/View Channels
   - ✅ Send Messages
   - ✅ Embed Links
   - ✅ Read Message History
   - ✅ Use External Emojis
   - ✅ Add Reactions
5. Click **"Authorize"**
6. Complete CAPTCHA if prompted

**Method B: Direct Invite Link (If website method fails)**

```
https://discord.com/api/oauth2/authorize?client_id=293377429470396416&permissions=536870912&scope=bot
```

Paste this link in your browser and authorize.

---

## ⚙️ Step 3: Configure WidgetBot Dashboard (Optional)

1. Visit: **https://widgetbot.io/dashboard**
2. Log in with Discord
3. Select: **"Council For Active Mobility"** server
4. **For each persona channel**, create a widget:

   **Settings to configure:**
   - Theme: **Dark** ✅
   - Guest Mode: **Enabled** ✅
   - Notifications: **Enabled** ✅
   - File Uploads: **Enabled** ✅

   **Channels to configure:**
   - #citizen-general (1467740239668707444)
   - #expert-planning (1467740273147646238)
   - #administrator-implementation (1467740291787264063)
   - #politician-advocacy (1467740317464793293)
   - #corporate-sustainability (1467740355712778271)

5. Save settings

**Note:** The HTML files already have the correct configuration, so dashboard setup is optional but recommended for customization.

---

## 🔐 Step 4: Configure Discord Channel Permissions

**For EACH of the 5 persona channels:**

1. Discord → Right-click channel → **Edit Channel**
2. Go to **Permissions** tab
3. Click **@everyone** role
4. Set these permissions:
   - ✅ View Channel
   - ✅ Send Messages
   - ✅ Read Message History
   - ✅ Embed Links
   - ✅ Attach Files
   - ✅ Add Reactions
   - ✅ Use External Emojis
5. Click **WidgetBot** (or **Crate**) bot in permissions list
6. Ensure bot has same permissions as @everyone (should inherit)
7. Click **Save Changes**

**Repeat for all 5 channels:**
- #citizen-general
- #expert-planning
- #administrator-implementation
- #politician-advocacy
- #corporate-sustainability

---

## 🧪 Step 5: Test Widget Functionality

### Test on Local Server:

1. **Start local server** (if not running):
   ```bash
   cd /Users/sathya/Documents/GitHub/cfam
   python3 -m http.server 8001
   ```

2. **Open test pages:**
   - Citizen: http://localhost:8001/action/citizen.html
   - Expert: http://localhost:8001/action/expert.html
   - Administrator: http://localhost:8001/action/administrator.html
   - Politician: http://localhost:8001/action/politician.html
   - Corporate: http://localhost:8001/action/corporate.html

3. **For each page, verify:**

   **Loading:**
   - [ ] Widget section appears with dark background
   - [ ] "Loading chat..." spinner shows briefly (2-3 seconds)
   - [ ] Widget loads and shows Discord chat interface
   - [ ] No errors in browser console (F12)

   **Guest Chat:**
   - [ ] Click in chat area
   - [ ] Username prompt appears
   - [ ] Enter test username (e.g., "TestGuest")
   - [ ] Can type in message box
   - [ ] Send test message
   - [ ] Message appears in widget immediately
   - [ ] Message appears in Discord app/desktop

   **Discord User Chat:**
   - [ ] Log into Discord in another browser tab
   - [ ] Reload widget page
   - [ ] Widget recognizes Discord login
   - [ ] Shows your Discord avatar/username
   - [ ] Send message → Appears with Discord identity

   **CTA Buttons:**
   - [ ] "Join Full Discord Server" button works
   - [ ] Opens Discord app or web (https://discord.gg/j8jgV7rc7J)
   - [ ] "Show QR Code" button reveals QR section
   - [ ] QR code image loads correctly
   - [ ] Scanning QR code opens Discord invite

   **Mobile Responsive:**
   - [ ] Open on mobile browser (or resize to 375px)
   - [ ] Widget fits screen (no horizontal scroll)
   - [ ] Can scroll chat messages
   - [ ] Can type on mobile keyboard
   - [ ] Buttons stack vertically
   - [ ] Touch targets are large enough

---

## 🐛 Troubleshooting

### Widget shows "Loading..." forever

**Check:**
1. WidgetBot bot is in your server (check Members list)
2. Bot has permissions on the channel (see Step 4)
3. Channel ID is correct in HTML (see current implementation status above)
4. Browser console for errors (F12 → Console tab)

**Fix:**
- Re-invite WidgetBot bot
- Double-check channel permissions
- Clear browser cache (Cmd+Shift+R / Ctrl+Shift+F5)

### "Channel not found" error

**Check:**
1. Channel ID is correct (compare with config file)
2. Channel hasn't been deleted/renamed
3. Bot has access to the channel

**Fix:**
- Verify channel ID: Discord → Enable Developer Mode → Right-click channel → Copy ID
- Update HTML file if ID changed

### Guest mode not working

**Check:**
1. WidgetBot dashboard: Guest mode enabled
2. Channel permissions: @everyone can "Send Messages"
3. Channel isn't read-only or locked

**Fix:**
- Enable guest mode in WidgetBot dashboard
- Set channel permissions (see Step 4)
- Check channel isn't in "slow mode" or restricted

### Messages not syncing

**Check:**
1. Widget is connected (not showing reconnecting status)
2. Bot is online in Discord
3. Network connection is stable

**Fix:**
- Reload page to reconnect widget
- Check WidgetBot status page
- Verify bot is online in Discord server

---

## 📊 Step 6: Verify Analytics Tracking

1. Open browser console (F12)
2. Go to **Console** tab
3. Load a persona page
4. Look for log messages:
   ```
   [Discord Widget] widget_loaded: citizen
   [Discord Widget] widget_interaction: citizen first_click
   [Discord Widget] cta_click: citizen full_discord
   ```

5. Check Google Analytics (if configured):
   - Events → `discord_widget`
   - Should see events being tracked

---

## ✅ Success Criteria

All 5 persona pages should have:
- ✅ Widget loads within 2-3 seconds
- ✅ Guest users can send messages
- ✅ Discord users are recognized
- ✅ Messages sync between widget and Discord app
- ✅ CTA buttons work (Join Discord, QR code)
- ✅ Mobile responsive
- ✅ No console errors
- ✅ Analytics tracking works

---

## 🚢 Step 7: Deploy to Production

Once all tests pass:

1. **Commit changes:**
   ```bash
   git add -A
   git commit -m "Complete Discord widget integration with WidgetBot

   - Add embedded chat to all 5 persona pages
   - Configure guest mode and deep link CTAs
   - Integrate analytics tracking
   - Full documentation and setup guides"
   ```

2. **Push to repository:**
   ```bash
   git push origin main
   ```

3. **Deploy to production** (your deployment process)

4. **Test on production URL** (repeat Step 5 tests)

5. **Monitor for 24-48 hours:**
   - Check analytics for widget engagement
   - Watch Discord for widget messages
   - Monitor for error reports
   - Gather user feedback

---

## 📅 Estimated Timeline

**When WidgetBot is back:**
- Step 1: Check status (1 minute)
- Step 2: Add bot (2 minutes)
- Step 3: Dashboard config (5 minutes, optional)
- Step 4: Channel permissions (5 minutes)
- Step 5: Testing (15 minutes)
- Step 6: Analytics check (2 minutes)
- Step 7: Deploy (5 minutes)

**Total: ~35 minutes** from service restoration to production deployment

---

## 🔔 Notifications

**How to know when WidgetBot is back:**

1. **Check WidgetBot Status:**
   - Bookmark: https://status.widgetbot.io/
   - Sign up for status notifications (if available)

2. **Twitter/Discord:**
   - Follow WidgetBot updates
   - Join WidgetBot Discord: https://discord.gg/NYBEhN7

3. **Manual Check:**
   - Try visiting https://widgetbot.io/ once a day
   - If it loads without 522 error, service is back!

---

## 📞 Support Resources

**If issues persist:**

- **WidgetBot Docs:** https://docs.widgetbot.io/
- **WidgetBot Support:** https://widgetbot.io/support
- **WidgetBot Discord:** https://discord.gg/NYBEhN7
- **CFAM Implementation Docs:**
  - `QUICKSTART_WIDGET.md`
  - `WIDGET_IMPLEMENTATION_GUIDE.md`
  - `DISCORD_INTEGRATION_README.md`

---

## 📝 Quick Reference

**Your Server ID:** 858737267929907240

**Your Channel IDs:**
```json
{
  "citizen": "1467740239668707444",
  "expert": "1467740273147646238",
  "administrator": "1467740291787264063",
  "politician": "1467740317464793293",
  "corporate": "1467740355712778271"
}
```

**Invite Code:** j8jgV7rc7J

**Local Test Server:** http://localhost:8001/action/[persona].html

---

**Status:** ⏳ Ready to proceed once WidgetBot service is restored

**Last Updated:** 2026-02-02

**Next Check:** Try WidgetBot tomorrow (2026-02-03)
