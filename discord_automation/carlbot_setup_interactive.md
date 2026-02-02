# Carl-bot Interactive Setup Guide for CFAM Discord

## Step 1: Invite Carl-bot (2 minutes)

### 1.1 Visit Carl-bot Website
Go to: **https://carl.gg**

### 1.2 Click "Invite"
- Click the big **"Invite"** button at the top
- OR go directly to: https://carl.gg/invite

### 1.3 Select Your Server
- A Discord authorization page will open
- Select **"Council For Active Mobility"** from the dropdown
- Click **"Continue"**

### 1.4 Authorize Permissions
Carl-bot will request these permissions:
- ✅ Manage Roles
- ✅ Manage Channels
- ✅ Read Messages/View Channels
- ✅ Send Messages
- ✅ Manage Messages
- ✅ Embed Links
- ✅ Add Reactions

Click **"Authorize"** and complete the CAPTCHA.

### 1.5 Verify Bot Joined
- Check your Discord server member list
- You should see **Carl-bot** listed (may show as offline until configured)

---

## Step 2: Access Carl-bot Dashboard (1 minute)

### 2.1 Go to Dashboard
Visit: **https://carl.gg/dashboard**

### 2.2 Login with Discord
- Click **"Login"** button
- Authorize Carl-bot dashboard to access your Discord account

### 2.3 Select Your Server
- You'll see a list of servers where Carl-bot is installed
- Click on **"Council For Active Mobility"**

You should now see the Carl-bot dashboard for your server!

---

## Step 3: Create Reaction Role Message #1 - Persona Roles (7 minutes)

### 3.1 Navigate to Reaction Roles
- In the left sidebar, click **"Reaction roles"**
- Click **"+ New"** button (top right)

### 3.2 Select Channel
- Channel: **#welcome-start-here**
- Click **"Confirm"**

### 3.3 Create the Message
Click **"Edit message"** and paste this:

```
**🎯 SELECT YOUR ROLE**

Choose the role(s) that best describe you:

🚶 **Citizen** - Everyday walkers and cyclists
📊 **Expert** - Urban planners, researchers, analysts
🏛️ **Administrator** - Government officials, bureaucrats
🗳️ **Politician** - Elected representatives, councillors
🏢 **Corporate** - Company teams, HR, CSR

*You can select multiple roles!*
```

Click **"Save"**

### 3.4 Add Reactions and Link Roles

Now you'll add each emoji and link it to a role.

**For each role below:**
1. Click **"+ Add reaction"**
2. Type or paste the emoji
3. Select the corresponding role from dropdown
4. Repeat for all 5 roles

**Role Mappings:**

| Emoji | Role to Select |
|-------|----------------|
| 🚶 | 🚶 Citizen |
| 📊 | 📊 Expert |
| 🏛️ | 🏛️ Administrator |
| 🗳️ | 🗳️ Politician |
| 🏢 | 🏢 Corporate |

### 3.5 Configure Settings

Scroll down to **"Reaction role settings"**:

- **Mode:** Select **"Multiple"** (users can pick multiple roles)
- **Self-removable:** Toggle **ON** (users can remove roles by unreacting)
- **Required role:** Leave empty
- **Blacklisted role:** Leave empty

Click **"Save"** at the bottom

### 3.6 Post the Message

Click **"Post"** button at the top right.

The message will appear in #welcome-start-here with the reaction emojis!

---

## Step 4: Create Reaction Role Message #2 - City Roles (7 minutes)

### 4.1 Create New Reaction Role
- Go back to **Reaction roles** page
- Click **"+ New"** button
- Select channel: **#welcome-start-here**
- Click **"Confirm"**

### 4.2 Create the Message
Click **"Edit message"** and paste:

```
**🏙️ SELECT YOUR CITY**

Get updates and connect with people from your city:

🅰️ Bangalore
🅱️ Delhi-NCR
🅲️ Mumbai
🅳️ Pune
🅴️ Chennai
🅵️ Hyderabad
⭕ Other Cities

*Select the city where you live or work!*
```

Click **"Save"**

### 4.3 Add City Reactions

**Role Mappings:**

| Emoji | Role to Select |
|-------|----------------|
| 🅰️ | 🏙️ Bangalore |
| 🅱️ | 🏙️ Delhi-NCR |
| 🅲️ | 🏙️ Mumbai |
| 🅳️ | 🏙️ Pune |
| 🅴️ | 🏙️ Chennai |
| 🅵️ | 🏙️ Hyderabad |
| ⭕ | 🏙️ Other Cities |

### 4.4 Configure Settings
- **Mode:** **Multiple** (some people work in multiple cities)
- **Self-removable:** **ON**

Click **"Save"**, then **"Post"**

---

## Step 5: Create Reaction Role Message #3 - Activity Roles (5 minutes)

### 5.1 Create New Reaction Role
- **Reaction roles** → **"+ New"**
- Channel: **#welcome-start-here**
- **"Confirm"**

### 5.2 Create the Message
```
**🚴 HOW DO YOU COMMUTE?**

Select all that apply:

🚴 Cyclist
🚶 Walker
🚇 Transit User
♿ Accessibility Advocate

*You can select multiple!*
```

Click **"Save"**

### 5.3 Add Activity Reactions

**Role Mappings:**

| Emoji | Role to Select |
|-------|----------------|
| 🚴 | 🚴 Cyclist |
| 🚶 | 🚶 Walker |
| 🚇 | 🚇 Transit User |
| ♿ | ♿ Accessibility Advocate |

### 5.4 Configure Settings
- **Mode:** **Multiple**
- **Self-removable:** **ON**

Click **"Save"**, then **"Post"**

---

## Step 6: Test the Reaction Roles (3 minutes)

### 6.1 Go to #welcome-start-here
You should see three reaction role messages:
1. 🎯 Select Your Role (persona roles)
2. 🏙️ Select Your City
3. 🚴 How Do You Commute?

### 6.2 Test With Your Account
- Click on each emoji
- Check that you receive the role (look at your username color or profile)
- Try removing a role by clicking the emoji again

### 6.3 Test With Alt Account (Recommended)
- Use an alt account or ask a friend
- Make sure they can:
  - See all three messages
  - React to emojis
  - Receive roles
  - Remove roles

---

## Step 7: Adjust Role Hierarchy (Important!)

For Carl-bot to assign roles, its role must be **above** the roles it's assigning.

### 7.1 Open Server Settings
- Right-click your server icon
- Click **"Server Settings"**

### 7.2 Go to Roles
- Click **"Roles"** in the left sidebar

### 7.3 Verify Carl-bot Position
- Find **"Carl-bot"** in the role list
- It should be **above** all persona, city, and activity roles
- If not, **drag Carl-bot** higher in the list

The hierarchy should look like:
```
👑 Founder
🛡️ Admin
🔨 Moderator
🤖 Bot
Carl-bot ← Should be here or higher
🌟 Active Contributor
... (other roles)
🚶 Citizen
📊 Expert
etc.
```

Click **"Save Changes"**

---

## 🎉 You're Done!

Carl-bot is now set up for self-assignable roles!

### What Members Will Do:
1. Join your Discord server
2. Read the welcome message
3. React to the emojis
4. Get their roles automatically
5. Access relevant channels

---

## 🛠️ Optional: Additional Carl-bot Features

### Custom Commands
Create shortcuts for common info:
- Dashboard → **Tags & Custom Commands**
- Example: `!altmo` → Responds with Altmo app link

### AutoMod
Carl-bot also has moderation features:
- Dashboard → **Moderation**
- Set up auto-mod rules, logging, etc.

### Welcome Messages
Send DMs to new members:
- Dashboard → **Welcome message**
- Create a custom welcome DM

### Logging
Track server events:
- Dashboard → **Logging**
- Log joins, leaves, deleted messages, etc.

---

## ❓ Troubleshooting

**Problem: Roles aren't being assigned**
- Check Carl-bot role position (must be above roles it assigns)
- Verify Carl-bot has "Manage Roles" permission
- Check if user already has the role

**Problem: Emojis not showing up**
- Make sure you saved the message before posting
- Try a different emoji if one isn't working
- Discord might have emoji loading issues - refresh

**Problem: Can't find a role in dropdown**
- Check if role exists in Server Settings → Roles
- Role names are case-sensitive
- Emoji in role name should match exactly

**Problem: Carl-bot isn't responding**
- Check if Carl-bot is online (server member list)
- Check bot permissions
- Visit Carl-bot status page: https://status.carl.gg

---

## 📞 Need More Help?

- **Carl-bot Docs:** https://docs.carl.gg
- **Carl-bot Support Server:** https://carl.gg/support
- **CFAM Contact:** contact@cfam.in

---

## ✅ Checklist

- [ ] Carl-bot invited to server
- [ ] Accessed Carl-bot dashboard
- [ ] Created persona roles reaction message
- [ ] Created city roles reaction message
- [ ] Created activity roles reaction message
- [ ] Tested all reactions
- [ ] Verified Carl-bot role hierarchy
- [ ] Tested with alt account

**Estimated Total Time: 20-25 minutes**

---

*Once complete, your Discord server will have fully functional self-assignable roles!* 🎉
