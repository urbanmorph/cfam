# Role Assignment Setup Guide

## Option 1: Using Discord's Native Onboarding (Recommended - No Bot Required)

If you have Community features enabled:

1. **Enable Community** (if not already):
   - Server Settings → Enable Community
   - Follow the setup wizard

2. **Set Up Onboarding**:
   - Server Settings → Onboarding
   - Add questions for:
     - "What's your role?" → Persona roles
     - "Which city are you from?" → City roles
     - "How do you commute?" → Activity roles

## Option 2: Using Carl-bot (Most Popular)

### Step 1: Invite Carl-bot

1. Go to https://carl.gg
2. Click **"Invite"**
3. Select your CFAM server
4. Authorize with Administrator permissions

### Step 2: Create Reaction Role Message

1. Go to https://carl.gg/dashboard
2. Select your server
3. Click **"Reaction Roles"** in the left sidebar
4. Click **"Create New"**

### Step 3: Configure Persona Roles

**Channel:** #welcome-start-here

**Message:**
```
👋 **Welcome to CFAM Discord!**

Select your role(s) to access relevant channels:

🚶 - **Citizen** - Everyday walkers and cyclists
📊 - **Expert** - Urban planners, researchers, analysts
🏛️ - **Administrator** - Government officials, bureaucrats
🗳️ - **Politician** - Elected representatives, councillors
🏢 - **Corporate** - Company teams, HR, CSR
```

**Reactions:**
- 🚶 → @🚶 Citizen
- 📊 → @📊 Expert
- 🏛️ → @🏛️ Administrator
- 🗳️ → @🗳️ Politician
- 🏢 → @🏢 Corporate

**Settings:**
- Mode: **Multiple roles** (users can select multiple)
- Self-removable: **Yes**

### Step 4: Configure City Roles

Create another reaction role message:

**Message:**
```
🏙️ **Select Your City**

🏙️ React to get updates from your city:

🅰️ - Bangalore
🅱️ - Delhi-NCR
🅲️ - Mumbai
🅳️ - Pune
🅴️ - Chennai
🅵️ - Hyderabad
⭕ - Other Cities
```

**Reactions:**
- 🅰️ → @🏙️ Bangalore
- 🅱️ → @🏙️ Delhi-NCR
- 🅲️ → @🏙️ Mumbai
- 🅳️ → @🏙️ Pune
- 🅴️ → @🏙️ Chennai
- 🅵️ → @🏙️ Hyderabad
- ⭕ → @🏙️ Other Cities

### Step 5: Configure Activity Roles

**Message:**
```
🚴 **How Do You Commute?**

Select all that apply:

🚴 - Cyclist
🚶 - Walker
🚇 - Transit User
♿ - Accessibility Advocate
```

**Reactions:**
- 🚴 → @🚴 Cyclist
- 🚶 → @🚶 Walker
- 🚇 → @🚇 Transit User
- ♿ → @♿ Accessibility Advocate

---

## Option 3: Using MEE6 (Easier UI, Free Tier Limited)

### Step 1: Invite MEE6

1. Go to https://mee6.xyz
2. Click **"Add to Discord"**
3. Select your server and authorize

### Step 2: Set Up Reaction Roles

1. Go to https://mee6.xyz/dashboard
2. Select your server
3. Click **"Reaction Roles"** plugin
4. Click **"Create a new message"**
5. Select #welcome-start-here
6. Create messages similar to Carl-bot setup above

**Note:** MEE6 free tier limits you to 1 reaction role message. Consider Carl-bot for multiple messages.

---

## Testing

After setup:
1. Test with an alt account or ask a friend
2. Verify roles are assigned correctly
3. Check that users can access role-specific channels (if you've set permissions)

---

## Troubleshooting

**Reactions not working?**
- Ensure the bot has "Manage Roles" permission
- Make sure bot's role is above the roles it's assigning
- Check that emojis are correct

**Users can't see channels?**
- If you want role-specific channels, you'll need to set channel permissions
- For now, all channels are public (recommended for transparency)
