# Discord Bot Description

## Short Description (190 characters max for Discord)
```
CFAM Community Bot - Automated server setup for the Council for Active Mobility. Manages channels, roles, and welcome messages for India's active mobility movement.
```

## Long Description (for bot listing sites)
```
The official CFAM (Council for Active Mobility) Discord Bot automates server management
for active mobility communities across India.

Features:
• Automated channel and role creation
• Welcome message management
• Permission setup for persona-based channels
• Community organization for citizens, experts, administrators, politicians, and corporates

Built to support CFAM's mission of making Indian cities safer and more accessible through
walking, cycling, and active transportation advocacy.

Perfect for:
- Active mobility advocacy groups
- Urban planning communities
- Cycling and pedestrian safety organizations
- Government urban development teams
- Corporate sustainability initiatives

Open source and customizable for similar community organizations.
```

## Bio for Bot Profile
```
Official bot of the Council for Active Mobility (CFAM) 🚴🚶
Automating community management for India's active mobility movement.
Built with Python & discord.py | Open source
```

## Bot Avatar Suggestions
- CFAM logo
- Bicycle + pedestrian icon combination
- Green/blue themed icon representing sustainable transportation

## Bot Status Messages
You can rotate these as the bot's status:

```python
statuses = [
    "🚴 Supporting active mobility",
    "🚶 Building safer streets",
    "🌱 Promoting sustainable cities",
    "📊 Organizing the CFAM community",
    "🏙️ Making cities walkable & cyclable",
]
```

## Adding Status to Bot
Add this to your bot code if you want rotating statuses:

```python
import discord
from discord.ext import tasks

@tasks.loop(minutes=10)
async def change_status():
    statuses = [
        discord.Activity(type=discord.ActivityType.watching, name="active mobility in India"),
        discord.Activity(type=discord.ActivityType.listening, name="community feedback"),
        discord.Game(name="Building safer streets 🚴"),
    ]
    await bot.change_presence(activity=random.choice(statuses))

@bot.event
async def on_ready():
    change_status.start()
```
