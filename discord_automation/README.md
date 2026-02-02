# CFAM Discord Server Setup Automation

Automatically creates all channels, categories, and roles from `discord-channel-structure.md` using Python and discord.py.

## Prerequisites

- Python 3.8 or higher
- A Discord server where you have Administrator permissions
- A Discord Bot Token

## Setup Instructions

### Step 1: Create a Discord Bot

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click **"New Application"** and give it a name (e.g., "CFAM Server Setup")
3. Go to the **"Bot"** section in the left sidebar
4. Click **"Add Bot"** and confirm
5. Under the bot's username, click **"Reset Token"** and copy the token (keep this secret!)
6. Scroll down to **"Privileged Gateway Intents"** and enable:
   - ✅ Server Members Intent
   - ✅ Message Content Intent (optional, not required for this script)

### Step 2: Invite the Bot to Your Server

1. In the Developer Portal, go to **"OAuth2"** > **"URL Generator"**
2. Select scopes:
   - ✅ `bot`
3. Select bot permissions:
   - ✅ Manage Roles
   - ✅ Manage Channels
   - ✅ View Channels
4. Copy the generated URL at the bottom
5. Open the URL in your browser and select your CFAM server
6. Click **"Authorize"**

### Step 3: Get Your Server ID

1. Open Discord
2. Go to **User Settings** > **Advanced**
3. Enable **"Developer Mode"**
4. Right-click on your CFAM server icon
5. Click **"Copy Server ID"**

### Step 4: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   DISCORD_BOT_TOKEN=your_actual_bot_token_here
   DISCORD_GUILD_ID=your_server_id_here
   ```

### Step 5: Install Dependencies

```bash
pip install -r requirements.txt
```

Or using a virtual environment (recommended):

```bash
# Create virtual environment
python3 -m venv venv

# Activate it
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### Step 6: Run the Setup Script

```bash
python setup_discord_server.py
```

## What It Does

The script will:

1. ✅ Create all roles with proper colors and emojis:
   - Staff roles (Founder, Admin, Moderator, Bot)
   - Persona roles (Citizen, Expert, Administrator, Politician, Corporate)
   - City roles (Bangalore, Delhi-NCR, Mumbai, etc.)
   - Activity roles (Cyclist, Walker, Transit User, Accessibility Advocate)
   - Special roles (Active Contributor, Verified Corporate, etc.)

2. ✅ Create all categories:
   - 🏠 WELCOME & INFO
   - 👥 PERSONA CHANNELS (with subcategories for each persona)
   - 🌆 CITY-SPECIFIC
   - 🎯 ACTIVE MOBILITY TOPICS
   - 📖 NAMO BILL
   - 🎪 COMMUNITY & EVENTS
   - 💻 TECH & TOOLS
   - 📰 MEDIA & RESOURCES
   - 🗨️ GENERAL
   - 🛠️ VOICE CHANNELS

3. ✅ Create all text and voice channels with:
   - Proper channel names (with emojis)
   - Channel descriptions/topics
   - Special permissions (e.g., #announcements is read-only)

4. ✅ Handle existing channels/roles gracefully (won't create duplicates)

## Expected Output

```
Starting CFAM Discord Server Setup Bot...
Bot has connected to Discord!
Setting up server: Your Server Name

=== Creating Roles ===

Creating staff roles...
  ✅ Created role: 👑 Founder
  ✅ Created role: 🛡️ Admin
  ...

=== Parsing Channel Structure ===

=== Creating Categories and Channels ===

✅ Created category: 🏠 WELCOME & INFO
    ✅ Created channel: announcements
    ✅ Created channel: welcome-start-here
    ...

=== Creating Voice Channels ===
✅ Created category: 🛠️ VOICE CHANNELS
  ✅ Created voice channel: 🎤 General Voice
  ...

✅ Server setup complete!
```

## Safety Features

- **Idempotent**: Safe to run multiple times - won't create duplicates
- **Rate Limited**: Respects Discord API rate limits with delays between operations
- **Error Handling**: Continues even if individual operations fail

## Troubleshooting

### "Could not find guild with ID"
- Make sure your `DISCORD_GUILD_ID` in `.env` is correct
- Ensure the bot has been invited to your server

### "403 Forbidden" errors
- Make sure the bot has Administrator permissions in your server
- Check that all required OAuth2 scopes were selected when inviting the bot

### "Missing Intents" error
- Go back to Discord Developer Portal
- Enable **Server Members Intent** in Bot settings

## Next Steps After Running

1. **Set up role assignment**: Install a bot like MEE6 or Carl-bot for reaction roles
2. **Configure AutoMod**: Set up automated moderation rules
3. **Adjust permissions**: Fine-tune channel permissions for specific roles
4. **Welcome message**: Post the welcome message in #welcome-start-here
5. **Pin important messages**: Pin rules, important links, etc.

## Customization

To modify the structure:
1. Edit `../discord-channel-structure.md`
2. Adjust role colors in `ROLES_CONFIG` in `setup_discord_server.py`
3. Run the script again (it won't create duplicates)

## Clean Up

After successful setup, you can:
- Kick the bot from your server (it's no longer needed)
- Or keep it and add more automation features later

---

**Questions?** Contact the CFAM team at contact@cfam.in
