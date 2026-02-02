# Channel Permissions Customization Guide

This guide helps you customize channel permissions for different roles and use cases.

## Current Setup

Right now, **all channels are public** - everyone can see and post in all channels (except #announcements which is read-only).

This is **recommended for transparency and open discussion**, which aligns with CFAM's mission of public advocacy.

---

## Should You Restrict Channels?

### ✅ Keep Public If:
- You want maximum transparency
- You want to encourage cross-persona collaboration
- You want citizens to see how experts/admins/politicians think
- You want to build trust with the community

### 🔒 Consider Restricting If:
- Sensitive discussions need privacy (government officials, corporate strategy)
- You want role-specific safe spaces
- You need to prevent overwhelming discussions in expert channels

**Recommendation for CFAM:** Keep most channels public, restrict only sensitive ones.

---

## Channels to Consider Restricting

### Option 1: Semi-Private Persona Channels

Make persona channels **visible to all but only postable by role members**.

**Example: Expert Channels**

Benefits:
- Citizens can read expert discussions (educational)
- Only experts can post (maintains quality)
- Encourages learning and transparency

**Setup:**
1. Right-click channel (e.g., #expert-research)
2. **Edit Channel → Permissions**
3. **@everyone role:**
   - View Channel: ✅
   - Send Messages: ❌
   - Read Message History: ✅
4. **Add @📊 Expert role:**
   - View Channel: ✅
   - Send Messages: ✅
   - Read Message History: ✅

Repeat for:
- All **Expert** channels → @📊 Expert can post
- All **Administrator** channels → @🏛️ Administrator can post
- All **Politician** channels → @🗳️ Politician can post
- All **Corporate** channels → @🏢 Corporate can post

**Keep Citizen channels fully public** - they're the most accessible.

---

### Option 2: Fully Private Sensitive Channels

Some channels may need complete privacy.

**Candidates:**
- Corporate strategy discussions
- Government internal coordination
- Politician legislative planning

**Setup for Private Channel:**
1. Right-click channel
2. **Edit Channel → Permissions**
3. **@everyone role:**
   - View Channel: ❌ (hide completely)
4. **Add specific role:**
   - View Channel: ✅
   - All standard permissions: ✅

**Recommendation:** Create *new* private channels instead of hiding existing ones.

Example new channels:
- #corporate-private (only @🏢 Corporate + @✅ Verified Corporate)
- #admin-private (only @🏛️ Administrator + @✅ Verified Government)
- #mod-chat (already should be private - only mods)

---

## Recommended Permission Structure

### Tier 1: Fully Public (Current Setup)
**Who can see/post:** Everyone

- #announcements (read-only for @everyone)
- #welcome-start-here
- #server-rules
- #introductions
- All **Citizen** channels
- All **City** channels
- All **Topic** channels (cycling, walking, transit, etc.)
- All **NAMo Bill** channels
- All **Community & Events** channels
- All **Tech & Tools** channels
- All **Media & Resources** channels
- All **General** channels

**Why:** Open collaboration, transparency, accessibility

---

### Tier 2: Read-All, Post-Restricted (Recommended for Experts/Admins/Politicians)
**Who can see:** Everyone
**Who can post:** Role members only

- All **Expert** channels → Only @📊 Expert can post
- All **Administrator** channels → Only @🏛️ Administrator can post
- All **Politician** channels → Only @🗳️ Politician can post

**Why:** Maintains discussion quality while allowing learning

**Setup Script Below** ⬇️

---

### Tier 3: Role-Only (Optional for Corporate)
**Who can see:** Role members + mods
**Who can post:** Role members + mods

- All **Corporate** channels → Only @🏢 Corporate can see/post

**Why:** Companies may discuss sensitive strategy, budgets, internal matters

**Corporate Members Can Still:**
- See all Tier 1 public channels
- Participate in city channels
- Join community events

---

## Quick Setup: Tier 2 Permissions

I can create a Python script to automate Tier 2 setup if you want. Or do it manually:

### For Expert Channels:

1. Right-click **📊┃EXPERTS** category
2. **Edit Category → Permissions**
3. Click **@everyone**:
   - Send Messages: ❌
   - Create Public Threads: ❌
   - Create Private Threads: ❌
   - Send Messages in Threads: ❌
4. Click **Add Role → @📊 Expert**:
   - Send Messages: ✅
   - Create Public Threads: ✅
   - Send Messages in Threads: ✅
5. Click **"Sync Now"** to apply to all channels in category

Repeat for:
- **🏛️┃ADMINISTRATORS** category → @🏛️ Administrator
- **🗳️┃POLITICIANS** category → @🗳️ Politician
- **🏢┃CORPORATES** category → @🏢 Corporate (fully private if desired)

---

## Special Channel Permissions

### #announcements (Already Set)
- @everyone: ❌ Send Messages
- @🛡️ Admin: ✅ Send Messages
- @🔨 Moderator: ✅ Send Messages

### #mod-chat (Private - Should Create)
- @everyone: ❌ View Channel
- @🛡️ Admin: ✅ All Permissions
- @🔨 Moderator: ✅ All Permissions

### Voice Channels
**Current:** Everyone can join

**Optional Restrictions:**
- **Expert Discussions** voice → Only @📊 Expert + @everyone can listen (not speak)
- This requires **Voice → Speak** permission management

---

## Role Hierarchy & Permissions

Your current role hierarchy (top to bottom):

1. **👑 Founder** (highest)
2. **🛡️ Admin**
3. **🔨 Moderator**
4. **🤖 Bot** (your setup bot + future bots)
5. **Special roles** (Verified, Active Contributor, etc.)
6. **Persona roles**
7. **City roles**
8. **Activity roles**
9. **@everyone** (default)

### Adjusting Role Hierarchy:

1. **Server Settings → Roles**
2. **Drag roles** to reorder
3. Higher roles can manage lower roles

**Important:** Bot roles must be higher than roles they assign!

---

## Permission Troubleshooting

**User can't see a channel?**
- Check @everyone permissions (View Channel)
- Check if user has required role
- Check if channel is in a private category

**User can't post in a channel?**
- Check Send Messages permission
- Check if they're timed out
- Check AutoMod rules

**Role isn't working?**
- Check role hierarchy (Server Settings → Roles)
- Verify permissions are set correctly
- Try removing and re-adding role to user

---

## Best Practices

✅ **DO:**
- Use categories to apply permissions to multiple channels at once
- Test permissions with an alt account
- Document your permission structure
- Keep most channels public for transparency
- Use private channels sparingly

❌ **DON'T:**
- Over-complicate with too many permission layers
- Hide channels that should be transparent (defeats open advocacy)
- Forget to exclude mods/admins from restrictions
- Block @everyone from too many channels (creates elitism)

---

## Would You Like Me to Create a Script?

I can create a Python script to automate the Tier 2 permission setup (read-all, post-restricted for Expert/Admin/Politician channels).

Let me know if you want:
1. **Keep all channels public** (current setup) ← Recommended for CFAM
2. **Tier 2: Semi-private** (everyone can read, roles can post)
3. **Custom setup** (tell me specific requirements)

---

## Testing Your Permissions

1. **Create a test user** (alt account or friend)
2. **Don't assign any roles**
3. **Check what they can see/post**
4. **Assign different roles** and test again
5. **Adjust as needed**

---

**Remember: You can always change permissions later. Start open, restrict only if needed!**
