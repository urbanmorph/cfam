# Quick Start Guide

Set up your CFAM Discord server in 5 minutes!

## TL;DR

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Create .env file
cp .env.example .env

# 3. Add your credentials to .env
# - Get bot token from https://discord.com/developers/applications
# - Get server ID by right-clicking your server (enable Developer Mode first)

# 4. Run the script
python setup_discord_server.py
```

## Detailed Steps

### 1. Create Discord Bot (2 minutes)

1. Visit https://discord.com/developers/applications
2. Click **"New Application"** → Name it "CFAM Setup Bot"
3. Go to **"Bot"** tab → Click **"Add Bot"**
4. Click **"Reset Token"** → **Copy the token** (save it!)
5. Scroll to **"Privileged Gateway Intents"** → Enable **"Server Members Intent"**
6. Go to **"OAuth2"** → **"URL Generator"**
   - Scopes: Check `bot`
   - Bot Permissions: Check `Manage Roles`, `Manage Channels`, `View Channels`
7. Copy the generated URL and open it in your browser
8. Select your server and authorize

### 2. Get Server ID (30 seconds)

1. Open Discord → **User Settings** → **Advanced** → Enable **"Developer Mode"**
2. Right-click your server icon → **"Copy Server ID"**

### 3. Configure (30 seconds)

```bash
cp .env.example .env
```

Edit `.env`:
```
DISCORD_BOT_TOKEN=paste_your_bot_token_here
DISCORD_GUILD_ID=paste_your_server_id_here
```

### 4. Run (2 minutes)

```bash
pip install -r requirements.txt
python setup_discord_server.py
```

Watch it create:
- ✅ 30+ roles with colors
- ✅ 9 major categories
- ✅ 60+ channels
- ✅ 4 voice channels

### 5. Done!

Your server is ready! The bot will automatically:
- Skip existing channels (safe to re-run)
- Set proper permissions
- Add channel descriptions

## What's Next?

1. **Set up role assignment**: Install MEE6 or Carl-bot for reaction roles
2. **Post welcome message** in #welcome-start-here
3. **Configure AutoMod** for spam protection
4. **Customize** permissions as needed

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Could not find guild" | Double-check your server ID in `.env` |
| "403 Forbidden" | Make sure bot has Administrator permission |
| "Missing Intents" | Enable "Server Members Intent" in bot settings |

## Support

Questions? contact@cfam.in
