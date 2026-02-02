#!/usr/bin/env python3
"""
Post welcome messages and initial content to CFAM Discord server
"""

import discord
from discord.ext import commands
import os
from dotenv import load_dotenv
import ssl
import certifi
import asyncio

load_dotenv()

TOKEN = os.getenv('DISCORD_BOT_TOKEN')
GUILD_ID = int(os.getenv('DISCORD_GUILD_ID')) if os.getenv('DISCORD_GUILD_ID') else None

# Fix SSL certificate verification on macOS
ssl_context = ssl.create_default_context(cafile=certifi.where())
os.environ['SSL_CERT_FILE'] = certifi.where()

intents = discord.Intents.default()
intents.guilds = True
intents.messages = True

bot = commands.Bot(command_prefix='!', intents=intents)

# Welcome message for #welcome-start-here
WELCOME_MESSAGE = """# 👋 Welcome to the Council for Active Mobility!

We're building safer, more accessible streets for everyone in India through walking, cycling, and active transportation.

## 🎯 Choose Your Role to Get Started

**React to the messages below to select your role(s):**

🚶 **Citizen** - For everyday walkers and cyclists
📊 **Expert** - Urban planners, researchers, data analysts
🏛️ **Administrator** - Government officials, bureaucrats
🗳️ **Politician** - Elected representatives, councillors
🏢 **Corporate** - Company sustainability teams, HR, CSR

## 🔗 Quick Links

🌐 **Website:** https://cfam.in
📱 **Altmo App:** https://www.altmo.app
🏆 **Hejje Gala Challenge:** https://hejjegala.in
📖 **National Active Mobility Bill:** https://cfam.in/amb.html

## 📜 Before You Start

- Read the rules in the server-rules channel (important!)
- Introduce yourself in the introductions channel
- Select your city role to get local updates
- Join relevant channels based on your interests

## 💬 Get Involved

- **Share your story** - How do you commute? What challenges do you face?
- **Ask questions** - We're here to help
- **Join events** - Check events-meetups for group rides and meetups
- **Contribute** - Share research, photos, ideas, and spread the word

## 🎪 Highlights

- **📊 Track your impact** with the Altmo app
- **🏆 Join Hejje Gala** - Company walking/cycling challenge
- **📖 Read the NAMo Bill** - India's first comprehensive active mobility legislation
- **🗺️ Explore our data portal** - Infrastructure maps and analytics

---

**Let's make Indian cities safer and more livable for everyone!** 🚴🚶

*Have questions? Contact us at contact@cfam.in*
"""

# Server rules for #server-rules (shortened to fit 2000 char limit)
SERVER_RULES = """# 📜 Server Rules

**Core Values:** Respect everyone • Stay on topic • Assume good faith • No spam

## ✅ Guidelines

**1️⃣ Be Respectful**
No harassment, hate speech, or personal attacks. Disagree with ideas, not people.

**2️⃣ Stay Safe**
Don't share personal info. Be cautious arranging meetups. Report suspicious behavior.

**3️⃣ Keep It Constructive**
Back up claims with sources. Avoid inflammatory politics unrelated to active mobility.

**4️⃣ Use Channels Properly**
Post in appropriate channels. Use threads for long discussions. Check before asking repeat questions.

**5️⃣ No Spam**
No message spam, excessive self-promotion, or bot spam. Keep memes to off-topic.

**6️⃣ Respect Privacy**
Don't share private conversations or doxx others. Credit shared content.

**7️⃣ Follow Discord ToS**
Must be 13+. No illegal or NSFW content. Follow: https://discord.com/guidelines

## 🚨 Moderation

**Report violations:** Use Discord's report or DM a moderator
**Consequences:** Warning → Temp ban → Permanent ban

## 🎯 Good Community Member

✅ DO: Share knowledge, ask questions, support others, give feedback
❌ DON'T: Spread misinfo, troll, mini-mod, demand instant responses

**Questions?** Ask in ask-anything
**Contact:** contact@cfam.in

*By participating, you agree to these rules.*
"""

# Introduction template for #introductions
INTRO_PROMPT = """# 👋 Introduce Yourself!

Welcome to CFAM! We'd love to get to know you.

**Tell us:**
- What's your name? (first name is fine!)
- Which city are you from?
- How do you commute? (walk, cycle, transit, car, mix?)
- Why are you interested in active mobility?
- What do you hope to get from this community?

**Feel free to share:**
- Your favorite cycling/walking route
- Challenges you face commuting
- Ideas for making your city more walkable/cyclable
- What brought you to CFAM

---

**I'll start!**

👋 I'm from the CFAM team, and I'm passionate about making Indian cities safer and more accessible for everyone. I cycle to work when I can, but the lack of safe infrastructure is a constant challenge. I hope this community becomes a space where we can all learn from each other and push for better streets together!

**Your turn!** Drop your introduction below. 👇
"""

# First announcement
FIRST_ANNOUNCEMENT = """# 🎉 Welcome to the CFAM Discord Server!

We're excited to have you here! This server is your hub for all things active mobility in India.

## 🏗️ What to Expect

This is a space for:
- **Citizens** to share experiences and connect
- **Experts** to discuss research and best practices
- **Administrators** to learn implementation strategies
- **Politicians** to build advocacy skills
- **Corporates** to promote employee wellness

## 🔥 Get Started

1. ✅ Read the rules in server-rules
2. ✅ Introduce yourself in introductions
3. ✅ Select your roles in welcome-start-here (react to the role messages)
4. ✅ Explore channels and join discussions
5. ✅ Share your ideas and experiences!

## 📅 Coming Soon

- Monthly group rides and walking tours
- Expert AMAs (Ask Me Anything)
- Hejje Gala challenge updates
- NAMo Bill discussion sessions
- Data portal workshops

## 🤝 Let's Build This Together

This community is what we make it. Share your ideas, ask questions, help others, and let's work together to make Indian cities safer and more livable for everyone.

**Questions?** Drop them in ask-anything or reach out to contact@cfam.in

See you in the channels! 🚴🚶

— The CFAM Team
"""


@bot.event
async def on_ready():
    print(f'\n{bot.user} has connected to Discord!')

    guild = bot.get_guild(GUILD_ID)
    if not guild:
        print(f'Could not find guild with ID {GUILD_ID}')
        await bot.close()
        return

    print(f'Posting welcome content to: {guild.name}\n')

    try:
        # Find channels
        welcome_channel = discord.utils.get(guild.text_channels, name='welcome-start-here')
        rules_channel = discord.utils.get(guild.text_channels, name='server-rules')
        intro_channel = discord.utils.get(guild.text_channels, name='introductions')
        announcements_channel = discord.utils.get(guild.text_channels, name='announcements')

        # Post welcome message
        if welcome_channel:
            print('📝 Posting welcome message...')
            msg = await welcome_channel.send(WELCOME_MESSAGE)
            await msg.pin()
            print('✅ Posted and pinned welcome message in #welcome-start-here')
            await asyncio.sleep(2)
        else:
            print('❌ Could not find #welcome-start-here channel')

        # Post server rules
        if rules_channel:
            print('\n📝 Posting server rules...')
            msg = await rules_channel.send(SERVER_RULES)
            await msg.pin()
            print('✅ Posted and pinned server rules in #server-rules')
            await asyncio.sleep(2)
        else:
            print('❌ Could not find #server-rules channel')

        # Post introduction prompt
        if intro_channel:
            print('\n📝 Posting introduction prompt...')
            await intro_channel.send(INTRO_PROMPT)
            print('✅ Posted introduction prompt in #introductions')
            await asyncio.sleep(2)
        else:
            print('❌ Could not find #introductions channel')

        # Post first announcement
        if announcements_channel:
            print('\n📝 Posting first announcement...')
            msg = await announcements_channel.send(FIRST_ANNOUNCEMENT)
            await msg.pin()
            print('✅ Posted and pinned first announcement in #announcements')
            await asyncio.sleep(2)
        else:
            print('❌ Could not find #announcements channel')

        print('\n✅ Welcome content posted successfully!')
        print('\n📋 Next Steps:')
        print('   1. Set up reaction roles (Carl-bot or Discord Native)')
        print('   2. Enable Community features and AutoMod')
        print('   3. Invite your team and beta testers')
        print('   4. Launch! 🚀')

    except Exception as e:
        print(f'\n❌ Error posting content: {e}')
        import traceback
        traceback.print_exc()

    await bot.close()


if __name__ == '__main__':
    if not TOKEN or not GUILD_ID:
        print('❌ Error: Missing TOKEN or GUILD_ID in .env file')
        exit(1)

    print('Starting content posting bot...')
    bot.run(TOKEN)
