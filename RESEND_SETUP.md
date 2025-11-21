# Resend Email Setup Guide

Your forms are now integrated with Resend - a modern, reliable email service built for developers. All form submissions will be sent directly to `hello@innovista.design`.

## ✨ Why Resend?

- ✅ **3,000 emails/month FREE** (then 100/day)
- ✅ Super reliable delivery (no spam folder issues)
- ✅ Built specifically for Next.js
- ✅ Clean, beautiful HTML emails
- ✅ Easy setup (5 minutes)

---

## 🚀 Quick Setup (3 Steps)

### 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### 2. Get Your API Key

1. Once logged in, go to [API Keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Give it a name (e.g., "Innovista Forms")
4. Copy the API key (starts with `re_`)

### 3. Add to Environment Variables

Create a `.env.local` file in your project root and add:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**That's it!** Your forms are now ready to send emails.

---

## 📧 Email Configuration

### Default Settings

By default, emails are sent:
- **FROM**: `onboarding@resend.dev` (Resend's test email)
- **TO**: `hello@innovista.design`
- **REPLY-TO**: User's email from the form

### Using Your Own Domain (Optional)

To send emails from your own domain (e.g., `forms@innovista.design`):

1. Go to [Resend Domains](https://resend.com/domains)
2. Click **"Add Domain"**
3. Add `innovista.design`
4. Add the DNS records to your domain provider
5. Wait for verification (usually 5-10 minutes)
6. Update `lib/resend.ts`:

```typescript
const FROM_EMAIL = 'forms@innovista.design'; // Change this line
```

---

## 🎨 What Your Emails Look Like

### Contact Form Email

```
Subject: New Contact Form: Web Design & Build - Jane Doe

┌─────────────────────────────────────────┐
│ New Contact Form Submission             │
├─────────────────────────────────────────┤
│ Contact Information                     │
│ Name:     Jane Doe                      │
│ Email:    jane@company.com              │
│ Service:  Web Design & Build            │
│ Budget:   $15k - $30k                   │
│ Website:  https://company.com           │
│                                         │
│ Project Details                         │
│ [User's message appears here]           │
└─────────────────────────────────────────┘
```

### Audit Request Email

```
Subject: 🎯 New Audit Request: https://company.com

┌─────────────────────────────────────────┐
│ 🎯 New Free Audit Request               │
├─────────────────────────────────────────┤
│ Contact Information                     │
│ Name:     Jane Doe                      │
│ Email:    jane@company.com              │
│ Website:  https://company.com           │
│                                         │
│ Biggest Frustration                     │
│ [User's frustration appears here]       │
│                                         │
│ 📋 Next Steps:                          │
│ 1. Visit the website                    │
│ 2. Analyze conversion points            │
│ 3. Record Loom video                    │
│ 4. Send audit within 48 hours           │
└─────────────────────────────────────────┘
```

---

## 🧪 Testing Your Forms

### 1. Start Development Server

```bash
npm run dev
```

### 2. Test Both Forms

- **Contact Form**: Visit `http://localhost:3000/contact`
- **Audit Form**: Visit `http://localhost:3000/audit`

### 3. Submit Test Data

Fill out and submit each form. You should:
- See loading state while submitting
- See success message after submission
- Receive an email at `hello@innovista.design`

### 4. Check Resend Dashboard

Go to [Resend Emails](https://resend.com/emails) to see:
- All sent emails
- Delivery status
- Email previews
- Any errors

---

## ⚙️ Customization

### Change Recipient Email

Edit `lib/resend.ts`:

```typescript
const TO_EMAIL = 'hello@innovista.design'; // Change to your email
```

### Customize Email Templates

Both email templates are in `lib/resend.ts`:
- `sendContactEmail()` - Contact form template
- `sendAuditEmail()` - Audit form template

You can modify the HTML to match your branding.

### Add Auto-Reply Emails

Want to send confirmation emails to users? Add this after sending the main email:

```typescript
// Send auto-reply to user
await resend.emails.send({
  from: 'hello@innovista.design',
  to: data.email,
  subject: 'Thanks for contacting Innovista!',
  html: '<p>We received your message and will get back to you soon.</p>',
});
```

---

## 📊 Monitoring & Limits

### Free Tier Limits

- **3,000 emails/month**
- **100 emails/day after**
- Unlimited domains
- Full analytics

### Check Usage

Go to [Resend Dashboard](https://resend.com/overview) to see:
- Emails sent this month
- Success/failure rates
- Remaining quota

---

## 🐛 Troubleshooting

### Emails not sending?

**Check API Key:**
```bash
# In your terminal
echo $RESEND_API_KEY
```

If empty, make sure `.env.local` exists with your API key.

**Check server logs:**
```bash
npm run dev
# Submit a form and check console for errors
```

### Emails going to spam?

- Use your own verified domain (not `onboarding@resend.dev`)
- Resend has excellent deliverability, but custom domains are better

### "API Key Invalid" error?

- Make sure you copied the full API key (starts with `re_`)
- Key should be in `.env.local`, not `.env.example`
- Restart your dev server after adding the key

### Still having issues?

1. Check [Resend Status](https://status.resend.com)
2. View [Resend Docs](https://resend.com/docs)
3. Check errors in [Resend Dashboard](https://resend.com/emails)

---

## 🔐 Security Notes

- ✅ API key is stored server-side only
- ✅ Never exposed to the browser
- ✅ All submissions go through your Next.js API route
- ✅ Form validation on both client and server

---

## 🎉 You're All Set!

Your forms will now reliably deliver submissions to your inbox. Resend's generous free tier means you won't have to worry about limits for a long time.

**Free tier gives you 3,000 emails/month** - that's about 100 form submissions per day!

### Next Steps:

1. Get your API key from Resend
2. Add it to `.env.local`
3. Test both forms
4. (Optional) Set up your custom domain

Questions? Check the [Resend documentation](https://resend.com/docs) or the troubleshooting section above.
