# Linking www.twincitiesdad.com

This guide outlines the steps to link your custom domain `www.twincitiesdad.com` to your Astro site.

## 1. Commit and Push Changes

The first step is to ensure the latest configuration changes (specifically the update to `astro.config.mjs`) are pushed to your GitHub repository.

```bash
git add astro.config.mjs
git commit -m "chore: update site URL to twincitiesdad.com"
git push origin main
```

## 2. Configure Your Hosting Provider

Since your project uses `@astrojs/node` for Server-Side Rendering (SSR), you need a hosting provider that supports Node.js. 

### Option A: Vercel (Recommended)
1.  Log in to [Vercel](https://vercel.com/).
2.  Import your GitHub repository `Grimwizza/twincitiesdad`.
3.  Vercel should automatically detect Astro.
4.  Deploy the site.
5.  Go to **Settings** > **Domains**.
6.  Add `twincitiesdad.com` (root domain). Vercel will automatically add `www.twincitiesdad.com` and recommend redirecting root to www.
7.  Vercel will provide the necessary DNS records.

### Spaceship.com DNS Configuration
Since you are using Spaceship.com, follow these steps to add the records Vercel provides:

1.  Log in to your [Spaceship.com Account](https://spaceship.com/).
2.  Go to **Domain List** and find `twincitiesdad.com`.
3.  Click **Manage** next to the domain.
4.  Navigate to the **Advanced DNS** tab.
5.  **Important:** If there are existing default records (like "Parking Page"), delete them.
6.  Click **Add New Record** to create the records required by Vercel.

**Expected Records from Vercel:**

| Type  | Host | Value |
| :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*Note: Vercel might give you slightly different values, always use what they show in your dashboard.*

### Option B: Netlify
1.  Log in to [Netlify](https://www.netlify.com/).
2.  Import your repository.
3.  Netlify should detect Astro.
4.  Deploy the site.
5.  Go to **Domain Management** > **Add Custom Domain**.
6.  Enter `www.twincitiesdad.com`.
7.  Follow the instructions to verifying the domain ownership.

### Option C: Railway/Render/VPS
If you are deploying to a service like Railway or a VPS, you will need to:
1.  Build the project: `npm run build`.
2.  Start the server: `node ./dist/server/entry.mjs`.
3.  Point your domain's A record to your server's IP address.

## 3. Verify
After adding the records in Spaceship, go back to Vercel and check the domain status. It may take a few minutes (up to 48 hours in rare cases) for the changes to propagate.

