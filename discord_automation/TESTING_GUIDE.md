# Discord Widget Testing Guide

## 🚀 Local Server is Running

**Server URL:** http://localhost:8000

## 📋 Test Pages

Open these URLs in your browser to test each persona widget:

### 1. Citizen Page (Pilot Implementation)
```
http://localhost:8000/action/citizen.html
```

### 2. Expert Page
```
http://localhost:8000/action/expert.html
```

### 3. Administrator Page
```
http://localhost:8000/action/administrator.html
```

### 4. Politician Page
```
http://localhost:8000/action/politician.html
```

### 5. Corporate Page
```
http://localhost:8000/action/corporate.html
```

---

## ✅ Visual Testing Checklist

For each page, verify:

### Widget Appearance
- [ ] Widget section appears with dark gray background (#2c2f33)
- [ ] Header shows Discord icon + channel name (e.g., "#citizen-general")
- [ ] Online badge shows count (e.g., "500+ online") with green pulsing dot
- [ ] Three feature icons show: "Live chat", "Guest mode", "Mobile friendly"
- [ ] Widget embed area shows (currently with placeholder channel ID)
- [ ] CTA section shows below with two buttons

### Widget Styling
- [ ] Widget has rounded corners (12px border-radius)
- [ ] Box shadow appears around widget container
- [ ] Section has light gray background (#f8f9fa)
- [ ] Discord purple accent color (#5865F2) on icons and badges
- [ ] Text is readable (white on dark background)

### CTA Buttons
- [ ] "Join Full Discord Server" button is visible (Discord purple background)
- [ ] "Show QR Code" button is visible (outline style)
- [ ] Buttons are properly aligned (side by side on desktop)
- [ ] Hover effects work (buttons lift on hover)

### QR Code Feature
- [ ] QR code section is hidden by default
- [ ] Clicking "Show QR Code" reveals the QR section
- [ ] QR code image appears (placeholder until channel IDs configured)
- [ ] Text says "Scan with your phone"
- [ ] Clicking again hides the QR section

### Mobile Responsive (Resize browser to ~375px width)
- [ ] Widget fits screen width
- [ ] No horizontal overflow
- [ ] Buttons stack vertically
- [ ] Header items stack or shrink appropriately
- [ ] Widget height adjusts to 500px
- [ ] Text remains readable

---

## ⚠️ Expected Behavior (With Placeholder IDs)

Since the actual Discord channel IDs haven't been configured yet, here's what you should see:

### What WILL Work:
✅ Visual layout and styling
✅ Responsive design
✅ Button hover effects
✅ QR code toggle functionality
✅ Section placement on page
✅ CSS animations (pulsing dot, slide-up animation)

### What WON'T Work (Yet):
❌ Widget won't load Discord chat (shows loading spinner or error)
❌ Can't send messages (no real channel connected)
❌ QR code might show error (no valid invite code)
❌ Analytics won't track (requires real user interaction)

**This is EXPECTED** - The widget needs real Discord channel IDs to function.

---

## 🔧 Next Steps to Make Widget Functional

After visual testing, follow these steps to connect real Discord channels:

### 1. Get Channel IDs from Discord
```
1. Open Discord desktop/web app
2. Settings → Advanced → Developer Mode (ON)
3. Right-click each persona channel → Copy ID
4. Save these IDs somewhere safe
```

### 2. Update Configuration File
```bash
# Edit this file:
nano discord_automation/widgetbot-config.json

# Replace each "REPLACE_WITH_*_CHANNEL_ID" with actual IDs
```

### 3. Update HTML Files
```bash
# Edit each file:
nano action/citizen.html      # Find line ~389
nano action/expert.html       # Find channel="REPLACE_WITH_..."
nano action/administrator.html
nano action/politician.html
nano action/corporate.html

# Replace with actual channel ID:
channel="123456789012345678"
```

### 4. Reload Pages
```bash
# Refresh browser (Cmd+R / Ctrl+R)
# Or hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
```

### 5. Test Live Functionality
```
1. Widget should load within 2-3 seconds
2. Click in chat area → Enter guest username
3. Type test message → Send
4. Check Discord app → Message should appear!
```

---

## 🎨 Design Review Points

### Color Consistency
- **Discord purple (#5865F2):** Used for icons, badges, CTA buttons
- **Dark gray (#2c2f33):** Widget container background
- **Green (#3ba55d):** Online status dot
- **White (#ffffff):** Primary text color

### Typography
- **Widget title:** 1.25rem, weight 600
- **CTA button text:** weight 500
- **Body text:** 0.95rem
- **Feature icons:** 0.9rem

### Spacing
- **Container padding:** 20px
- **Section margin:** 3rem vertical
- **Element gaps:** 1rem default, 0.5rem for inline items
- **Border radius:** 12px containers, 8px buttons/images

### Animations
- **Pulsing dot:** 2s ease-in-out infinite
- **Button hover:** Transform translateY(-2px) with shadow
- **Widget appearance:** Slide-up 0.5s ease-out

---

## 📱 Cross-Browser Testing

Test in these browsers to verify compatibility:

### Desktop Browsers
- [ ] **Chrome** (latest) - http://localhost:8000/action/citizen.html
- [ ] **Firefox** (latest)
- [ ] **Safari** (latest - Mac only)
- [ ] **Edge** (latest)

### Mobile Browsers (Use device or dev tools)
- [ ] **Mobile Safari** (iOS) - Use developer tools responsive mode
- [ ] **Mobile Chrome** (Android) - Use developer tools responsive mode

### Browser Dev Tools (F12)
- [ ] Check Console tab for JavaScript errors
- [ ] Check Network tab for failed resource loads
- [ ] Check Elements tab to inspect widget structure

---

## 🐛 Common Visual Issues to Look For

### CSS Issues
- **Broken layout:** Check if discord-widget.css loaded (Network tab)
- **Wrong colors:** Verify CSS path is correct (`../css/discord-widget.css`)
- **Unstyled widget:** Hard refresh browser (clear cache)
- **Overlapping elements:** Check for z-index conflicts

### JavaScript Issues
- **Buttons not working:** Check console for errors
- **No animations:** Verify discord-widget.js loaded
- **QR toggle broken:** Check onclick handler in HTML

### Responsive Issues
- **Horizontal scroll on mobile:** Check max-width settings
- **Text too small:** Verify font-sizes at different breakpoints
- **Buttons too narrow:** Check min-width and padding

---

## 📸 Screenshot Checklist

Take screenshots at these breakpoints for documentation:

### Desktop (1920x1080)
- [ ] Full page view showing widget in context
- [ ] Widget close-up (just the widget container)
- [ ] Hover state on "Join Full Discord" button
- [ ] QR code section revealed

### Tablet (768x1024)
- [ ] Full page view
- [ ] Widget close-up

### Mobile (375x667)
- [ ] Full page view (vertical scroll)
- [ ] Widget with stacked buttons
- [ ] QR code section on mobile

---

## ✨ Polish Review

Look for these polish elements:

### User Experience
- [ ] Clear call-to-action ("Join the conversation")
- [ ] Benefit statement ("no Discord account needed")
- [ ] Social proof (online count badge)
- [ ] Low friction (guest mode highlighted)
- [ ] Multiple conversion paths (widget chat + full Discord CTA)

### Accessibility
- [ ] Color contrast sufficient (dark background, white text)
- [ ] Buttons large enough (min 44x44px touch targets)
- [ ] Icons have semantic meaning (not decorative)
- [ ] Focus states visible (keyboard navigation)

### Performance
- [ ] Widget loads asynchronously (doesn't block page)
- [ ] Images lazy load (if below fold)
- [ ] No layout shift (widget has fixed height)
- [ ] Smooth animations (60fps)

---

## 🎯 Success Criteria

The implementation is ready for production if:

✅ All 5 persona pages load without errors
✅ Widget sections appear in correct location on page
✅ Styling matches design spec (colors, spacing, typography)
✅ Responsive design works on all breakpoints
✅ Buttons are clickable and visually respond to hover
✅ QR code toggle functionality works
✅ No console errors in browser dev tools
✅ No broken images or missing resources
✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)

Once these pass, you're ready to configure Discord channel IDs!

---

## 🔄 Stop Server

When done testing:

```bash
# Find the server process
lsof -ti:8000

# Kill it
kill $(lsof -ti:8000)

# Or just Ctrl+C in the terminal where server is running
```

---

## 📞 Need Help?

- **Setup instructions:** `QUICKSTART_WIDGET.md`
- **Detailed guide:** `WIDGET_IMPLEMENTATION_GUIDE.md`
- **Full docs:** `DISCORD_INTEGRATION_README.md`

---

**Happy Testing! 🎉**

Once visual testing passes, follow QUICKSTART_WIDGET.md to configure real Discord channels.
