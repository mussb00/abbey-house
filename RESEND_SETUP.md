# Resend Email Integration Setup Guide

## Overview

This project uses [Resend](https://resend.com) for email handling. The integration allows the contact form to send emails to both the user (confirmation) and the Abbey House team (notification).

---

## Local Development Setup

### 1. Create Your Resend Account

1. Go to [https://resend.com](https://resend.com) and sign up for a free account
2. Navigate to **Settings > API Keys**
3. Create a new API key (or copy your existing one)

### 2. Configure Environment Variables

The project uses `.env.local` for local development. This file is **NOT** committed to version control (it's in `.gitignore`).

**Steps:**

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Resend API key:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL=contact@abbeyhouse.london
   ```

3. Replace `re_xxxxxxxxxxxx` with your actual Resend API key

### 3. Update Email Addresses

In `app/api/send-email/route.ts`, update the sender email:

```typescript
from: "Abbey House <onboarding@resend.dev>", // Change this to your domain
```

For local development, you can use Resend's default domain (`onboarding@resend.dev`), but in production, you should **use a verified domain**.

### 4. Test Locally

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your Resend dashboard for email delivery status

---

## Production Setup

### Environment Variables for Production

When deploying to production (Vercel, AWS, etc.), set these environment variables in your hosting platform's settings:

- **RESEND_API_KEY** - Your Resend API key (same as development)
- **CONTACT_EMAIL** - The email address to receive contact form submissions (should be your company email)

**For Vercel:**
1. Go to Project Settings > Environment Variables
2. Add `RESEND_API_KEY` and `CONTACT_EMAIL`
3. Apply to Production environment
4. Redeploy

**For Other Platforms:**
Consult your hosting provider's documentation on setting environment variables. The key principle is that `process.env.RESEND_API_KEY` and `process.env.CONTACT_EMAIL` must be available at runtime.

### Verify Your Domain in Resend

To send emails from a professional domain (e.g., `noreply@abbeyhouse.london`):

1. Go to [https://resend.com/domains](https://resend.com/domains)
2. Click **Add Domain**
3. Enter your domain (e.g., `abbeyhouse.london`)
4. Follow the DNS configuration steps
5. Once verified, update the email sender in `app/api/send-email/route.ts`:

```typescript
from: "Abbey House <noreply@abbeyhouse.london>",
```

### Production Considerations

- **Error Handling**: The API route includes comprehensive error handling. Email submission failures are logged but won't prevent the user from seeing a response.
- **Rate Limiting**: Consider adding rate limiting to prevent abuse. You can use middleware or libraries like `Ratelimit` from `@vercel/rate-limit`.
- **Monitoring**: Check your Resend dashboard regularly for delivery failures, bounces, and spam complaints.
- **GDPR/Privacy**: Ensure your contact form includes a privacy policy and GDPR compliance notice if required for your audience.

---

## File Structure

```
abbey-house/
├── .env.example              # Template (commit this)
├── .env.local               # Local secrets (DO NOT COMMIT)
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts     # Email API endpoint
│   └── contact.tsx          # Contact form component
└── next.config.ts
```

---

## API Endpoint: POST `/api/send-email`

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "message": "I need a boiler repair urgently..."
}
```

### Success Response (200)

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### Error Response (400/500)

```json
{
  "error": "Invalid form data"
}
```

---

## Troubleshooting

### Issue: "Email service is not configured"

**Solution**: Ensure `RESEND_API_KEY` is set in your `.env.local` or hosting platform's environment variables.

### Issue: "Invalid form data"

**Solution**: Check that all required fields (name, email, phone, message) are provided and non-empty.

### Issue: Emails not sending

**Checklist:**:
1. Verify your Resend API key is valid
2. Check the Resend dashboard for bounce/failure logs
3. Ensure your domain is verified (for production)
4. Check the server logs for error messages

### Issue: Verification emails going to spam

**Solution:**:
1. In Resend, add DKIM records for your domain
2. Ensure you're using a valid, warm sender domain
3. Keep sender name clear (e.g., "Abbey House <...>")

---

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore` for a reason
2. **Use a separate API key for production** - Resend allows multiple keys
3. **Validate all inputs** - The route includes HTML escaping for all user inputs
4. **Use HTTPS only** - Always use HTTPS in production
5. **Add rate limiting** - Prevent form spam by implementing rate limits
6. **Rotate API keys regularly** - Revoke old keys after migration

---

## Next Steps

1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key from Settings > API Keys
3. Set up `.env.local` with your API key
4. Test the contact form locally
5. Verify your domain in Resend for production
6. Deploy to your hosting platform and set environment variables
7. Monitor delivery via the Resend dashboard

---

For more help, visit [Resend Documentation](https://resend.com/docs).
