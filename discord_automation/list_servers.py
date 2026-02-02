#!/usr/bin/env python3
"""
List all servers (guilds) the bot has access to
"""

import discord
from discord.ext import commands
import os
from dotenv import load_dotenv
import ssl
import certifi

load_dotenv()

TOKEN = os.getenv('DISCORD_BOT_TOKEN')

# Fix SSL certificate verification on macOS
ssl_context = ssl.create_default_context(cafile=certifi.where())
os.environ['SSL_CERT_FILE'] = certifi.where()

intents = discord.Intents.default()
intents.guilds = True

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'\n{bot.user} has connected to Discord!')
    print(f'\nBot is in {len(bot.guilds)} server(s):\n')

    if len(bot.guilds) == 0:
        print('❌ The bot is not in any servers!')
        print('\nTo invite the bot:')
        print('1. Go to https://discord.com/developers/applications')
        print('2. Select your application')
        print('3. Go to OAuth2 → URL Generator')
        print('4. Select "bot" scope and "Administrator" permission')
        print('5. Copy and open the generated URL')
        print('6. Select your server and authorize')
    else:
        for guild in bot.guilds:
            print(f'✅ Server: {guild.name}')
            print(f'   ID: {guild.id}')
            print(f'   Members: {guild.member_count}')
            print()

    await bot.close()

if __name__ == '__main__':
    bot.run(TOKEN)
