# Cache Revalidation Guide

## Setup

1. **Add the revalidation secret to your environment variables:**

   Create or update your `.env.local` file with a secret token:

   ```bash
   REVALIDATE_SECRET=your_super_secret_token_here
   ```

   You can generate a secure token with:

   ```bash
   openssl rand -base64 32
   ```

2. **Restart your development server** after adding the environment variable.

## Usage

### When to trigger revalidation

Call the revalidation API whenever you:

- Add, update, or delete pages in the database
- Change page titles, paths, or display order
- Update the `includeInProd` flag for any page

### How to revalidate the navigation (root layout)

**Using curl:**

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your_super_secret_token_here"}'
```

**Using fetch (in browser console or another API):**

```javascript
fetch("http://localhost:3000/api/revalidate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ secret: "your_super_secret_token_here" }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

**Expected response:**

```json
{
  "revalidated": true,
  "path": "/",
  "type": "layout",
  "now": 1699635120000
}
```

### How to revalidate a specific page

If you want to revalidate a specific page instead of the entire layout:

```bash
curl -X POST http://localhost:3000/api/revalidate \
  -H "Content-Type: application/json" \
  -d '{"secret":"your_super_secret_token_here","path":"/about"}'
```

## Production Deployment

### Vercel

If deploying to Vercel:

1. Add `REVALIDATE_SECRET` to your environment variables in the Vercel dashboard
2. Your revalidation URL will be: `https://yourdomain.com/api/revalidate`

### Automated Revalidation

You can automate revalidation by:

1. **Database Triggers**: Set up a database trigger that calls the API when pages are modified
2. **Admin Panel**: Add a "Refresh Cache" button in your CMS/admin interface
3. **Webhooks**: If using a CMS, configure webhooks to call the revalidation endpoint

## Security Notes

- **Never commit your `REVALIDATE_SECRET` to version control**
- Use different secrets for development and production
- The secret validates that only authorized requests can clear the cache
- Consider adding rate limiting in production to prevent abuse

## Troubleshooting

**Error: "Invalid secret"**

- Check that `REVALIDATE_SECRET` is set in your `.env.local` file
- Verify you're sending the correct secret in the request body
- Restart your dev server after changing environment variables

**Pages not updating after revalidation**

- In development, Next.js may still use hot reloading cache
- Try a hard refresh in your browser (Cmd+Shift+R on macOS)
- Check the API response to confirm revalidation succeeded
- In production, allow a few seconds for the cache to clear

**404 on API route**

- Ensure the file exists at `app/api/revalidate/route.ts`
- Check your Next.js version supports App Router API routes
- Verify your server is running
