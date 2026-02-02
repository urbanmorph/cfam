# Vercel Deployment Guide for CFAM

## 🚀 Quick Start (10 minutes)

### Prerequisites
- GitHub account (already have)
- Discord bot token (regenerate if compromised)

---

## Step 1: Sign Up for Vercel (2 minutes)

1. **Go to:** https://vercel.com/signup
2. **Click:** "Continue with GitHub"
3. **Authorize Vercel** to access your repositories
4. **Done!** ✅

---

## Step 2: Import Your Project (3 minutes)

1. **In Vercel Dashboard:**
   - Click **"Add New"** → **"Project"**

2. **Import Git Repository:**
   - Find **"urbanmorph/cfam"** in the list
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Other (leave as is)
   - **Root Directory:** `./` (default)
   - **Build Command:** Leave empty
   - **Output Directory:** `./` (default)
   - **Install Command:** Leave empty

4. **Click "Deploy"**
   - Wait 30-60 seconds
   - Your site is now live! ✅

---

## Step 3: Add Environment Variables (2 minutes)

**CRITICAL: Add your Discord bot token**

1. **In Vercel Project Dashboard:**
   - Go to **Settings** → **Environment Variables**

2. **Add these variables:**

   **Variable 1:**
   ```
   Name: DISCORD_BOT_TOKEN
   Value: [Your regenerated bot token from Discord Developer Portal]
   Environment: Production, Preview, Development
   ```

   **Variable 2:**
   ```
   Name: DISCORD_GUILD_ID
   Value: 858737267929907240
   Environment: Production, Preview, Development
   ```

3. **Click "Save"**

4. **Redeploy:**
   - Go to **Deployments** tab
   - Click **"..."** on latest deployment → **"Redeploy"**

---

## Step 4: Configure Custom Domain (3 minutes)

### Option A: Use cfam.in (Existing Domain)

1. **In Vercel Project Settings:**
   - Go to **Domains**

2. **Add Domain:**
   - Enter: `cfam.in`
   - Click **"Add"**

3. **Update DNS Records:**
   - Go to your domain registrar (where you bought cfam.in)
   - Update DNS records as shown by Vercel:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21

     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for DNS propagation** (5-30 minutes)
   - Vercel will automatically issue SSL certificate
   - Your site will be live at https://cfam.in

### Option B: Use Vercel Subdomain (Free, Instant)

Your site is automatically available at:
```
https://cfam-[random].vercel.app
```

You can use this while setting up custom domain.

---

## Step 5: Test Your Deployment (2 minutes)

### Test API Endpoints:

**1. Discord Stats API:**
```
https://cfam.in/api/discord-stats
```

**Expected response:**
```json
{
  "success": true,
  "server_name": "Council For Active Mobility",
  "total_members": 112,
  "online_members": 3,
  "cached_at": "2026-02-02T12:00:00Z"
}
```

**2. Discord Channels API:**
```
https://cfam.in/api/discord-channels
```

**Expected response:**
```json
{
  "success": true,
  "categories": [...],
  "total_channels": 15
}
```

### Test Website:

**Visit your persona pages:**
- https://cfam.in/action/citizen.html
- Check if member count loads (should show real number)

---

## 🎯 What You Get with Vercel

### ✅ Features Now Available:

1. **Real-time Discord data:**
   - Live member counts
   - Channel lists
   - Server stats

2. **Serverless API:**
   - `/api/discord-stats` - Server statistics
   - `/api/discord-channels` - Channel structure

3. **Automatic deployments:**
   - Push to GitHub → Auto-deploy
   - Preview deployments for pull requests

4. **Global CDN:**
   - Fast loading worldwide
   - Edge caching

5. **Free tier includes:**
   - Unlimited bandwidth
   - 100 GB-hours per month
   - Automatic HTTPS
   - Custom domains

---

## 🔧 Troubleshooting

### API Returns Error

**Check:**
1. Environment variables are set correctly
2. Bot token is valid (regenerate if needed)
3. Bot is in the Discord server
4. Bot has proper permissions

**Fix:**
- Vercel Dashboard → Settings → Environment Variables
- Update `DISCORD_BOT_TOKEN`
- Redeploy

### Member Count Shows "Loading..."

**Check:**
1. Open browser console (F12)
2. Look for errors
3. Check `/api/discord-stats` directly

**Fix:**
- Ensure API is deployed
- Check CORS headers in vercel.json
- Hard refresh browser (Cmd+Shift+R)

### Domain Not Working

**Check:**
1. DNS records are correct
2. Wait for propagation (up to 24 hours)
3. Vercel shows "Valid Configuration"

**Fix:**
- Verify DNS at https://dnschecker.org/
- Remove and re-add domain in Vercel

---

## 📊 Monitoring

### View Logs:

1. **Vercel Dashboard** → **Deployments** → Click deployment
2. **Functions** tab → See API calls
3. **Real-time logs** of API requests

### Analytics:

- Vercel Dashboard → **Analytics**
- See traffic, performance, errors

---

## 🔄 Updating Your Site

### Automatic Deployment:

Every time you push to GitHub:
```bash
git add .
git commit -m "Update content"
git push origin main
```

Vercel automatically:
1. Detects the push
2. Builds and deploys
3. Updates https://cfam.in
4. Takes ~30 seconds

### Manual Deployment:

1. Vercel Dashboard → Deployments
2. Click "Redeploy" on any deployment

---

## 🔐 Security Best Practices

### ✅ What's Secure:

- Bot token stored as environment variable (encrypted)
- Never exposed in browser
- HTTPS everywhere
- Serverless functions isolated

### ⚠️ Remember:

- Don't commit `.env` to git
- Regenerate tokens if exposed
- Use Vercel environment variables for secrets
- Keep `.vercelignore` updated

---

## 💰 Pricing

**Free Tier (Hobby):**
- Perfect for CFAM
- Unlimited bandwidth
- 100 GB-hours/month serverless
- 100 deployments/day
- Custom domains

**You're well within free limits!** ✅

---

## 📞 Support

**Vercel Documentation:**
- https://vercel.com/docs

**CFAM API Endpoints:**
- `/api/discord-stats` - Server stats
- `/api/discord-channels` - Channel list

**Issues:**
- Check Vercel deployment logs
- Verify environment variables
- Test API endpoints directly

---

## ✅ Deployment Checklist

**Before deploying:**
- [ ] Regenerate Discord bot token
- [ ] Commit all changes to GitHub
- [ ] Remove any sensitive data

**During deployment:**
- [ ] Sign up for Vercel
- [ ] Import GitHub repository
- [ ] Add environment variables
- [ ] Configure custom domain (optional)
- [ ] Test API endpoints

**After deployment:**
- [ ] Test member count loads
- [ ] Verify API responses
- [ ] Check all persona pages
- [ ] Monitor logs for errors
- [ ] Set up analytics

---

**Ready to deploy?** Follow the steps above!

Questions? Check Vercel docs or deployment logs. 🚀
