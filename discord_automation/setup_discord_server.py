#!/usr/bin/env python3
"""
CFAM Discord Server Setup Automation
Reads discord-channel-structure.md and creates all channels, categories, and roles
"""

import discord
from discord.ext import commands
import os
import re
from dotenv import load_dotenv
import asyncio
import ssl
import certifi

# Load environment variables
load_dotenv()

# Fix SSL certificate verification on macOS
ssl_context = ssl.create_default_context(cafile=certifi.where())
os.environ['SSL_CERT_FILE'] = certifi.where()

TOKEN = os.getenv('DISCORD_BOT_TOKEN')
GUILD_ID = int(os.getenv('DISCORD_GUILD_ID')) if os.getenv('DISCORD_GUILD_ID') else None

# Define intents
intents = discord.Intents.default()
intents.guilds = True
intents.members = True

bot = commands.Bot(command_prefix='!', intents=intents)

# Color mapping for categories
CATEGORY_COLORS = {
    'WELCOME & INFO': discord.Color.blue(),
    'PERSONA CHANNELS': discord.Color.green(),
    'CITY-SPECIFIC': discord.Color.purple(),
    'ACTIVE MOBILITY TOPICS': discord.Color.orange(),
    'NAMO BILL': discord.Color.red(),
    'COMMUNITY & EVENTS': discord.Color.gold(),
    'TECH & TOOLS': discord.Color.teal(),
    'MEDIA & RESOURCES': discord.Color.dark_blue(),
    'GENERAL': discord.Color.light_gray(),
}

# Role definitions from the markdown
ROLES_CONFIG = {
    'staff': [
        {'name': '👑 Founder', 'color': discord.Color.gold()},
        {'name': '🛡️ Admin', 'color': discord.Color.red()},
        {'name': '🔨 Moderator', 'color': discord.Color.blue()},
        {'name': '🤖 Bot', 'color': discord.Color.light_gray()},
    ],
    'persona': [
        {'name': '🚶 Citizen', 'color': discord.Color.green()},
        {'name': '📊 Expert', 'color': discord.Color.blue()},
        {'name': '🏛️ Administrator', 'color': discord.Color.purple()},
        {'name': '🗳️ Politician', 'color': discord.Color.red()},
        {'name': '🏢 Corporate', 'color': discord.Color.teal()},
    ],
    'city': [
        {'name': '🏙️ Bangalore', 'color': discord.Color.orange()},
        {'name': '🏙️ Delhi-NCR', 'color': discord.Color.orange()},
        {'name': '🏙️ Mumbai', 'color': discord.Color.orange()},
        {'name': '🏙️ Pune', 'color': discord.Color.orange()},
        {'name': '🏙️ Chennai', 'color': discord.Color.orange()},
        {'name': '🏙️ Hyderabad', 'color': discord.Color.orange()},
        {'name': '🏙️ Other Cities', 'color': discord.Color.orange()},
    ],
    'activity': [
        {'name': '🚴 Cyclist', 'color': discord.Color.green()},
        {'name': '🚶 Walker', 'color': discord.Color.green()},
        {'name': '🚇 Transit User', 'color': discord.Color.green()},
        {'name': '♿ Accessibility Advocate', 'color': discord.Color.green()},
    ],
    'special': [
        {'name': '🌟 Active Contributor', 'color': discord.Color.gold()},
        {'name': '🏆 Hejje Gala Participant', 'color': discord.Color.gold()},
        {'name': '📱 Altmo User', 'color': discord.Color.teal()},
        {'name': '✅ Verified Corporate', 'color': discord.Color.blue()},
        {'name': '✅ Verified Government', 'color': discord.Color.blue()},
    ],
}


def parse_markdown_structure(file_path):
    """Parse the discord-channel-structure.md file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    structure = []
    current_category = None
    current_subcategory = None
    lines = content.split('\n')

    i = 0
    while i < len(lines):
        line = lines[i].strip()

        # Category headers (## emoji NAME)
        if line.startswith('## ') and not line.startswith('## 🔧') and not line.startswith('## 📝') and not line.startswith('## 🎨') and not line.startswith('## 📊'):
            category_name = re.sub(r'^##\s+[^\s]+\s+', '', line).strip()
            current_category = {
                'name': category_name,
                'emoji': line.split()[1] if len(line.split()) > 1 else '',
                'channels': [],
                'subcategories': []
            }
            structure.append(current_category)
            current_subcategory = None

        # Subcategory headers (### emoji┃NAME) - for persona categories
        elif line.startswith('### ') and '┃' in line:
            subcategory_name = line.split('┃')[1].strip() if '┃' in line else re.sub(r'^###\s+', '', line).strip()
            current_subcategory = {
                'name': subcategory_name,
                'emoji': line.split()[1].split('┃')[0] if '┃' in line else '',
                'channels': []
            }
            if current_category:
                current_category['subcategories'].append(current_subcategory)

        # Channel headers (### or ####)
        elif (line.startswith('### ') or line.startswith('#### ')) and not '**Category Description:**' in line:
            # Extract channel name
            channel_line = re.sub(r'^#{3,4}\s+', '', line).strip()

            # Skip if it's a voice channel section
            if 'VOICE CHANNELS' in current_category.get('name', '') if current_category else False:
                i += 1
                continue

            # Get description if it exists
            description = ''
            j = i + 1
            while j < len(lines) and lines[j].strip().startswith('**Description:**'):
                desc_line = lines[j].strip()
                description = re.sub(r'\*\*Description:\*\*\s*', '', desc_line)
                break
                j += 1

            channel_info = {
                'name': channel_line,
                'description': description
            }

            # Add to subcategory if exists, otherwise to category
            if current_subcategory:
                current_subcategory['channels'].append(channel_info)
            elif current_category and 'VOICE CHANNELS' not in current_category['name']:
                current_category['channels'].append(channel_info)

        i += 1

    return structure


def clean_channel_name(name):
    """Convert channel name to Discord-friendly format"""
    # Remove emojis and special chars, convert to lowercase with hyphens
    name = re.sub(r'[^\w\s-]', '', name)
    name = name.strip().lower().replace(' ', '-')
    return name


@bot.event
async def on_ready():
    """Bot is ready, start the setup process"""
    print(f'{bot.user} has connected to Discord!')

    guild = bot.get_guild(GUILD_ID)
    if not guild:
        print(f'Could not find guild with ID {GUILD_ID}')
        await bot.close()
        return

    print(f'Setting up server: {guild.name}')

    try:
        # Step 1: Create roles
        print('\n=== Creating Roles ===')
        await create_roles(guild)

        # Step 2: Parse markdown and create structure
        print('\n=== Parsing Channel Structure ===')
        markdown_path = '../discord-channel-structure.md'
        structure = parse_markdown_structure(markdown_path)

        # Step 3: Create categories and channels
        print('\n=== Creating Categories and Channels ===')
        await create_server_structure(guild, structure)

        # Step 4: Create voice channels
        print('\n=== Creating Voice Channels ===')
        await create_voice_channels(guild)

        print('\n✅ Server setup complete!')

    except Exception as e:
        print(f'\n❌ Error during setup: {e}')
        import traceback
        traceback.print_exc()

    await bot.close()


async def create_roles(guild):
    """Create all roles defined in the configuration"""
    existing_roles = {role.name: role for role in guild.roles}

    for category, roles in ROLES_CONFIG.items():
        print(f'\nCreating {category} roles...')
        for role_config in roles:
            role_name = role_config['name']
            if role_name in existing_roles:
                print(f'  ⏭️  {role_name} already exists')
                continue

            try:
                await guild.create_role(
                    name=role_name,
                    color=role_config['color'],
                    mentionable=True
                )
                print(f'  ✅ Created role: {role_name}')
                await asyncio.sleep(1)  # Rate limiting
            except Exception as e:
                print(f'  ❌ Failed to create role {role_name}: {e}')


async def create_server_structure(guild, structure):
    """Create categories and channels from parsed structure"""

    for category_data in structure:
        category_name_full = f"{category_data['emoji']} {category_data['name']}"

        # Skip voice channels category (handled separately)
        if 'VOICE' in category_data['name']:
            continue

        # Find or create category
        category = discord.utils.get(guild.categories, name=category_name_full)
        if not category:
            try:
                category = await guild.create_category(category_name_full)
                print(f'\n✅ Created category: {category_name_full}')
                await asyncio.sleep(1)
            except Exception as e:
                print(f'\n❌ Failed to create category {category_name_full}: {e}')
                continue
        else:
            print(f'\n⏭️  Category already exists: {category_name_full}')

        # Create channels directly in category
        for channel_info in category_data['channels']:
            await create_text_channel(guild, category, channel_info)

        # Create subcategories (for persona channels)
        for subcategory_data in category_data['subcategories']:
            subcategory_name = f"{subcategory_data['emoji']}┃{subcategory_data['name']}"

            # Find or create subcategory
            subcategory = discord.utils.get(guild.categories, name=subcategory_name)
            if not subcategory:
                try:
                    subcategory = await guild.create_category(subcategory_name)
                    print(f'  ✅ Created subcategory: {subcategory_name}')
                    await asyncio.sleep(1)
                except Exception as e:
                    print(f'  ❌ Failed to create subcategory {subcategory_name}: {e}')
                    continue
            else:
                print(f'  ⏭️  Subcategory already exists: {subcategory_name}')

            # Create channels in subcategory
            for channel_info in subcategory_data['channels']:
                await create_text_channel(guild, subcategory, channel_info)


async def create_text_channel(guild, category, channel_info):
    """Create a single text channel"""
    channel_name = clean_channel_name(channel_info['name'])

    # Check if channel exists
    existing_channel = discord.utils.get(guild.text_channels, name=channel_name, category=category)
    if existing_channel:
        print(f'    ⏭️  Channel already exists: {channel_name}')
        return

    try:
        # Set permissions for announcements channel
        kwargs = {
            'name': channel_name,
            'category': category,
        }

        # Add topic if available
        if channel_info.get('description'):
            kwargs['topic'] = channel_info.get('description', '')[:1024]

        # Add overwrites for announcements channel
        if 'announcements' in channel_name:
            kwargs['overwrites'] = {
                guild.default_role: discord.PermissionOverwrite(send_messages=False, add_reactions=True)
            }

        channel = await guild.create_text_channel(**kwargs)
        print(f'    ✅ Created channel: {channel_name}')
        await asyncio.sleep(1)  # Rate limiting
    except Exception as e:
        print(f'    ❌ Failed to create channel {channel_name}: {e}')


async def create_voice_channels(guild):
    """Create voice channels"""
    voice_channels = [
        {'name': '🎤 General Voice', 'description': 'General voice chat'},
        {'name': '🎤 Expert Discussions', 'description': 'Voice for technical discussions, planning sessions'},
        {'name': '🎤 Community Meetups', 'description': 'Virtual meetups, town halls'},
        {'name': '🎤 AFK Zone', 'description': 'Away from keyboard'},
    ]

    # Find or create voice category
    voice_category_name = '🛠️ VOICE CHANNELS'
    voice_category = discord.utils.get(guild.categories, name=voice_category_name)
    if not voice_category:
        try:
            voice_category = await guild.create_category(voice_category_name)
            print(f'✅ Created category: {voice_category_name}')
            await asyncio.sleep(1)
        except Exception as e:
            print(f'❌ Failed to create voice category: {e}')
            return
    else:
        print(f'⏭️  Voice category already exists: {voice_category_name}')

    # Create voice channels
    for vc_info in voice_channels:
        vc_name = vc_info['name']
        existing_vc = discord.utils.get(guild.voice_channels, name=vc_name, category=voice_category)

        if existing_vc:
            print(f'  ⏭️  Voice channel already exists: {vc_name}')
            continue

        try:
            await guild.create_voice_channel(
                name=vc_name,
                category=voice_category
            )
            print(f'  ✅ Created voice channel: {vc_name}')
            await asyncio.sleep(1)
        except Exception as e:
            print(f'  ❌ Failed to create voice channel {vc_name}: {e}')


if __name__ == '__main__':
    if not TOKEN:
        print('❌ Error: DISCORD_BOT_TOKEN not found in environment variables')
        print('Please create a .env file with your bot token')
        exit(1)

    if not GUILD_ID:
        print('❌ Error: DISCORD_GUILD_ID not found in environment variables')
        print('Please add your server ID to the .env file')
        exit(1)

    print('Starting CFAM Discord Server Setup Bot...')
    bot.run(TOKEN)
