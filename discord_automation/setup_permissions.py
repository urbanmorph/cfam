#!/usr/bin/env python3
"""
Set up channel permissions for CFAM Discord server
Makes Expert/Administrator/Politician channels read-all but post-restricted
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

bot = commands.Bot(command_prefix='!', intents=intents)


@bot.event
async def on_ready():
    print(f'\n{bot.user} has connected to Discord!')

    guild = bot.get_guild(GUILD_ID)
    if not guild:
        print(f'Could not find guild with ID {GUILD_ID}')
        await bot.close()
        return

    print(f'Setting up permissions for: {guild.name}\n')
    print('This will make Expert/Administrator/Politician channels:')
    print('  - Visible to everyone (read-all)')
    print('  - Postable only by role members (post-restricted)')
    print()

    try:
        # Find roles
        expert_role = discord.utils.get(guild.roles, name='📊 Expert')
        admin_role = discord.utils.get(guild.roles, name='🏛️ Administrator')
        politician_role = discord.utils.get(guild.roles, name='🗳️ Politician')

        # Find categories
        expert_category = discord.utils.get(guild.categories, name='📊┃EXPERTS')
        admin_category = discord.utils.get(guild.categories, name='🏛️┃ADMINISTRATORS')
        politician_category = discord.utils.get(guild.categories, name='🗳️┃POLITICIANS')

        # Setup Expert channels
        if expert_category and expert_role:
            print('📊 Setting up Expert channels...')
            await setup_category_permissions(expert_category, expert_role, guild)
            print('✅ Expert channels configured')
        else:
            print('⚠️  Could not find Expert category or role')

        # Setup Administrator channels
        if admin_category and admin_role:
            print('\n🏛️ Setting up Administrator channels...')
            await setup_category_permissions(admin_category, admin_role, guild)
            print('✅ Administrator channels configured')
        else:
            print('⚠️  Could not find Administrator category or role')

        # Setup Politician channels
        if politician_category and politician_role:
            print('\n🗳️ Setting up Politician channels...')
            await setup_category_permissions(politician_category, politician_role, guild)
            print('✅ Politician channels configured')
        else:
            print('⚠️  Could not find Politician category or role')

        print('\n✅ Permission setup complete!')
        print('\nWhat was changed:')
        print('  - @everyone can VIEW and READ these channels')
        print('  - @everyone CANNOT send messages or create threads')
        print('  - Role members CAN send messages and participate')
        print('\nCitizen, City, and other channels remain fully public.')

    except Exception as e:
        print(f'\n❌ Error setting up permissions: {e}')
        import traceback
        traceback.print_exc()

    await bot.close()


async def setup_category_permissions(category, role, guild):
    """
    Set up permissions for a category:
    - @everyone: Can read, cannot post
    - Specific role: Can read and post
    """
    # Set permissions on the category
    await category.set_permissions(
        guild.default_role,
        view_channel=True,
        send_messages=False,
        create_public_threads=False,
        create_private_threads=False,
        send_messages_in_threads=False,
        add_reactions=True,
        read_message_history=True
    )

    await category.set_permissions(
        role,
        view_channel=True,
        send_messages=True,
        create_public_threads=True,
        create_private_threads=True,
        send_messages_in_threads=True,
        add_reactions=True,
        read_message_history=True
    )

    print(f'  ✅ Category permissions set for: {category.name}')
    await asyncio.sleep(1)

    # Sync all channels in the category
    for channel in category.channels:
        await channel.edit(sync_permissions=True)
        print(f'    ✅ Synced: {channel.name}')
        await asyncio.sleep(1)


if __name__ == '__main__':
    if not TOKEN or not GUILD_ID:
        print('❌ Error: Missing TOKEN or GUILD_ID in .env file')
        exit(1)

    print('╔════════════════════════════════════════════════════════╗')
    print('║     CFAM Discord Permission Setup                      ║')
    print('╚════════════════════════════════════════════════════════╝')
    print()
    print('⚠️  IMPORTANT: This will change channel permissions!')
    print()
    print('Current setup: All channels are public (everyone can post)')
    print('After running: Expert/Admin/Politician channels will be:')
    print('  - Visible to everyone')
    print('  - Only postable by role members')
    print()
    response = input('Do you want to proceed? (yes/no): ')

    if response.lower() in ['yes', 'y']:
        print('\nStarting permission setup bot...')
        bot.run(TOKEN)
    else:
        print('\nCancelled. No changes made.')
