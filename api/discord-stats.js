/**
 * Vercel Serverless Function: Fetch Discord Server Stats
 * Endpoint: /api/discord-stats
 */

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const INVITE_CODE = 'j8jgV7rc7J'; // Public invite code

  try {
    // Fetch server stats from public invite endpoint
    const response = await fetch(
      `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true&with_expiration=true`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`Discord API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Extract useful stats
    const stats = {
      success: true,
      server_name: data.guild?.name || 'Council For Active Mobility',
      server_id: data.guild_id,
      description: data.guild?.description || data.profile?.description,
      total_members: data.approximate_member_count || 0,
      online_members: data.approximate_presence_count || 0,
      features: data.guild?.features || [],
      cached_at: new Date().toISOString()
    };

    // Cache for 5 minutes
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

    return res.status(200).json(stats);

  } catch (error) {
    console.error('Discord stats error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch Discord stats',
      message: error.message,
      // Fallback data
      server_name: 'Council For Active Mobility',
      total_members: 100,
      online_members: 0
    });
  }
}
