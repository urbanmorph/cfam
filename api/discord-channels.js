/**
 * Vercel Serverless Function: Fetch Discord Channels
 * Endpoint: /api/discord-channels
 */

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
  const GUILD_ID = process.env.DISCORD_GUILD_ID || '858737267929907240';

  if (!BOT_TOKEN) {
    return res.status(500).json({
      error: 'Discord bot token not configured',
      message: 'Add DISCORD_BOT_TOKEN to Vercel environment variables'
    });
  }

  try {
    // Fetch channels from Discord API
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/channels`,
      {
        headers: {
          'Authorization': `Bot ${BOT_TOKEN}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
    }

    const channels = await response.json();

    // Organize channels by category
    const categories = {};
    const categorizedChannels = [];

    // First pass: identify categories
    channels.forEach(channel => {
      if (channel.type === 4) { // Category
        categories[channel.id] = {
          id: channel.id,
          name: channel.name,
          position: channel.position,
          channels: []
        };
      }
    });

    // Second pass: assign channels to categories
    channels.forEach(channel => {
      if (channel.type !== 4) { // Not a category
        const categoryData = {
          id: channel.id,
          name: channel.name,
          type: channel.type,
          position: channel.position
        };

        if (channel.parent_id && categories[channel.parent_id]) {
          categories[channel.parent_id].channels.push(categoryData);
        } else {
          // Uncategorized channel
          categorizedChannels.push(categoryData);
        }
      }
    });

    // Convert categories object to array and sort
    const sortedCategories = Object.values(categories)
      .sort((a, b) => a.position - b.position)
      .map(cat => ({
        ...cat,
        channels: cat.channels.sort((a, b) => a.position - b.position)
      }));

    // Response
    return res.status(200).json({
      success: true,
      guild_id: GUILD_ID,
      categories: sortedCategories,
      uncategorized: categorizedChannels.sort((a, b) => a.position - b.position),
      total_channels: channels.length,
      cached_at: new Date().toISOString()
    });

  } catch (error) {
    console.error('Discord API error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch Discord channels',
      message: error.message
    });
  }
}
