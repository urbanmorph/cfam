# AutoMod Setup Guide

Discord's built-in AutoMod helps protect your server from spam, harmful content, and rule violations automatically.

## Prerequisites

- You must have **Community** enabled on your server
- You need **Administrator** or **Manage Server** permission

---

## Setting Up AutoMod

### Step 1: Enable Community (if not already enabled)

1. Go to **Server Settings**
2. Click **Enable Community**
3. Follow the setup wizard:
   - Set up rules channel (use #server-rules)
   - Set up moderator-only channel (you can create #mod-chat)
   - Accept the requirements

### Step 2: Access AutoMod

1. Go to **Server Settings**
2. Click **AutoMod** in the left sidebar
3. Click **Create Rule** or edit existing rules

---

## Recommended AutoMod Rules for CFAM Server

### Rule 1: Block Harmful Links

**Name:** Suspicious Links Protection

**Trigger Type:** Commonly Flagged Words
- ✅ Enable **Commonly Flagged Words**

**Actions:**
- ✅ Block Message
- ✅ Send Alert to: #mod-chat (create this channel if needed)
- ⬜ Timeout Member (optional - 60 seconds for first offense)

**Exempt Roles:**
- @🛡️ Admin
- @🔨 Moderator

**Exempt Channels:**
- None (apply to all channels)

---

### Rule 2: Prevent Spam

**Name:** Spam Prevention

**Trigger Type:** Mention Spam
- Threshold: **5 mentions** in a single message

**Actions:**
- ✅ Block Message
- ✅ Send Alert to: #mod-chat
- ✅ Timeout Member: **5 minutes**

**Exempt Roles:**
- @🛡️ Admin
- @🔨 Moderator

---

### Rule 3: Block Profanity (Optional)

**Name:** Profanity Filter

**Trigger Type:** Keyword Filter

**Keywords to Block:**
```
Add offensive words/slurs specific to your community standards
- Consider cultural context (English + Hindi slurs)
- Review Discord's default flagged words list
```

**Actions:**
- ✅ Block Message
- ⬜ Send Alert (optional - can be noisy)
- ⬜ Timeout Member (optional for severe words only)

**Exempt Roles:**
- @🛡️ Admin
- @🔨 Moderator

**Exempt Channels:**
- #off-topic (more relaxed)

**Note:** Be careful with profanity filters - they can be overly aggressive. Consider starting without this and adding only if needed.

---

### Rule 4: New Member Protection

**Name:** New Member Spam Protection

**Trigger Type:** Keyword Filter

**Keywords:**
```
discord.gg/
http://
https://
www.
.gg/
```

**Actions:**
- ✅ Block Message
- ✅ Send Alert to: #mod-chat

**Exempt Roles:**
- @🛡️ Admin
- @🔨 Moderator
- @🌟 Active Contributor (trusted members)

**Apply to:**
- Members joined in the last **7 days**

**Note:** This prevents new accounts from posting links (common spam tactic)

---

### Rule 5: Phone Number Protection

**Name:** Personal Info Protection

**Trigger Type:** Keyword Filter (using regex patterns if available)

**Keywords:**
```
+91
mobile number
phone number
call me at
whatsapp me
```

**Actions:**
- ✅ Block Message
- ✅ Send Alert to: #mod-chat (so mods can educate user)

**Note:** Protects users from accidentally sharing personal info publicly

---

## Additional AutoMod Settings

### Verification Level
**Server Settings → Safety Setup → Verification Level**
- Recommended: **Medium** (verified email required)
- For high-security: **High** (member for 10+ minutes)

### Explicit Content Filter
**Server Settings → Safety Setup → Explicit Content Filter**
- Recommended: **Scan messages from all members**

### DM Settings
**Server Settings → Safety Setup → DM Spam Filter**
- Enable: **Filter spam DMs**

---

## Creating #mod-chat Channel

AutoMod alerts should go to a private moderator channel:

1. Create a new text channel: **#mod-chat**
2. Set permissions:
   - @everyone: ❌ View Channel
   - @🛡️ Admin: ✅ All permissions
   - @🔨 Moderator: ✅ View, Send Messages, Read History
3. Post a message explaining its purpose:
   ```
   This is the moderator coordination channel.
   AutoMod alerts and member reports will appear here.
   ```

---

## Testing AutoMod

After setup:

1. **Create a test channel** (#mod-testing)
2. **Test each rule** with an alt account or ask a trusted member
3. **Verify alerts** are sent to #mod-chat
4. **Check false positives** - adjust rules as needed
5. **Delete test channel** when done

---

## Monitoring & Adjusting

### First Week:
- Check #mod-chat daily for AutoMod alerts
- Look for false positives (legitimate messages blocked)
- Adjust keyword lists and thresholds

### Monthly Review:
- Check AutoMod analytics (Server Settings → AutoMod)
- See which rules trigger most often
- Adjust based on actual community behavior

---

## Best Practices

✅ **DO:**
- Start conservative (fewer blocked words)
- Exempt trusted roles
- Send alerts for review before auto-punishment
- Regularly review and update rules
- Communicate with members about AutoMod

❌ **DON'T:**
- Block too many words (creates frustration)
- Apply same rules to all channels (e.g., #off-topic can be relaxed)
- Rely 100% on AutoMod (human moderation still needed)
- Set harsh timeouts without testing first

---

## Alternative: Using Bots for Moderation

If Discord's AutoMod isn't sufficient, consider these bots:

### **Dyno Bot** (Most Popular)
- Website: https://dyno.gg
- Features: Advanced AutoMod, custom commands, music
- Free tier: Good for most servers

### **MEE6** (Beginner Friendly)
- Website: https://mee6.xyz
- Features: Leveling, AutoMod, custom commands
- Free tier: Basic protection

### **Carl-bot** (Best Free Option)
- Website: https://carl.gg
- Features: Reaction roles, AutoMod, tags
- Free tier: Nearly all features free

**To add any bot:**
1. Visit bot's website
2. Click "Invite" or "Add to Discord"
3. Select your CFAM server
4. Follow bot's dashboard setup instructions

---

## Emergency Lockdown

If your server is being raided or heavily spammed:

### Immediate Actions:
1. **Server Settings → Safety Setup**
2. Set Verification Level to **Highest** (verified phone required)
3. Enable **Pause Invites** (stops new joins)
4. Adjust AutoMod to be more aggressive temporarily

### DM All Mods:
- Alert your @🔨 Moderator team
- Have them monitor and ban raiders
- Document the incident

### After the Raid:
- Review and ban raiders
- Restore normal verification settings
- Update AutoMod rules based on attack patterns
- Communicate with community about the incident

---

## Questions?

**AutoMod not working?** Make sure Community is enabled
**Too many false positives?** Reduce keyword strictness
**Need help?** Ask in Discord Admin communities or DM experienced admins

**Useful Resources:**
- Discord AutoMod Guide: https://discord.com/safety/automod
- Discord Moderator Academy: https://discord.com/moderation

---

**Remember: AutoMod is a tool, not a replacement for human moderators!**
