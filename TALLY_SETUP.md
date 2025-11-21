# Tally.so Form Integration Setup

This project uses Tally.so's API to handle form submissions while maintaining custom form designs.

## Overview

The integration keeps your beautiful custom form designs while using Tally's API to manage submissions, notifications, and data storage.

## Setup Instructions

### 1. Create Your Tally Forms

1. Go to [Tally.so](https://tally.so) and create two forms:
   - **Contact Form** - for general inquiries
   - **Audit Form** - for free website audit requests

2. In each form, create fields that match these names:

   **Contact Form Fields:**
   - `first_name` (Short text)
   - `last_name` (Short text)
   - `email` (Email)
   - `service` (Dropdown)
   - `budget` (Dropdown)
   - `website` (URL, optional)
   - `message` (Long text)
   - `privacy_consent` (Checkbox)

   **Audit Form Fields:**
   - `website` (URL)
   - `first_name` (Short text)
   - `last_name` (Short text)
   - `email` (Email)
   - `frustration` (Long text, optional)

### 2. Get Your API Credentials

1. Go to your Tally.so account settings
2. Navigate to API section
3. Copy your API key
4. For each form, copy the Form ID (found in form settings or URL)

### 3. Configure Environment Variables

Create a `.env.local` file in the project root (or update your existing `.env` file):

```bash
# Tally.so Configuration
TALLY_API_KEY=tly-DaKrk0zugQ3toKxGGWKbje4788McZ2w8
TALLY_CONTACT_FORM_ID=your-contact-form-id-here
TALLY_AUDIT_FORM_ID=your-audit-form-id-here
```

**Note:** The API key has been pre-filled. You just need to add your form IDs.

### 4. Install Dependencies

No additional dependencies are needed - the integration uses Next.js built-in fetch API.

### 5. Test Your Forms

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to:
   - `/contact` - Test the contact form
   - `/audit` - Test the audit request form

3. Submit test data and verify:
   - Form shows loading state while submitting
   - Success message appears after submission
   - Data appears in your Tally.so dashboard
   - You receive email notifications (if configured in Tally)

## Architecture

### File Structure

```
├── app/
│   └── api/
│       └── submit-form/
│           └── route.ts          # API endpoint handler
├── components/
│   ├── Contact.tsx               # Contact form with Tally integration
│   └── Audit.tsx                 # Audit form with Tally integration
├── lib/
│   └── tally.ts                  # Tally API service functions
└── .env.local                    # Environment variables
```

### How It Works

1. **User submits form** → Form data is sent to `/api/submit-form`
2. **API route validates** → Checks required fields and form type
3. **Tally service submits** → Sends data to Tally.so API
4. **Response handling** → Shows success/error message to user

### Security

- API key is stored server-side in environment variables
- Never exposed to the client
- All submissions go through your Next.js API route

## Customization

### Modify Field Mappings

Edit `/lib/tally.ts` to change how form fields map to Tally fields:

```typescript
const tallyData: TallyFormData = {
  'first_name': data.firstName,
  'last_name': data.lastName,
  // Add or modify mappings here
};
```

### Add More Forms

1. Create a new form submission function in `/lib/tally.ts`
2. Add a new case in `/app/api/submit-form/route.ts`
3. Update your component to use the new form type

### Customize Success Messages

Edit the success message UI in:
- `/components/Contact.tsx` (lines ~143-160)
- `/components/Audit.tsx` (lines ~138-155)

## Troubleshooting

### Forms not submitting?

1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure Tally form IDs match your actual forms
4. Confirm field names in Tally match the integration

### Getting 500 errors?

Check server logs:
```bash
npm run dev
```

Common issues:
- Missing or incorrect API key
- Form ID doesn't exist
- Field name mismatch between code and Tally form

### API Key Issues?

- Verify the key starts with `tly-`
- Check you have the correct permissions
- Generate a new key if needed from Tally settings

## Benefits of This Approach

✅ Keep your custom form designs
✅ Tally handles data storage and notifications
✅ Easy to manage submissions in Tally dashboard
✅ Built-in spam protection from Tally
✅ Export capabilities from Tally
✅ Integration with other tools via Tally (Zapier, Webhooks, etc.)

## Support

For Tally.so API documentation, visit:
https://developers.tally.so/api-reference/introduction

For issues with this integration, check the troubleshooting section above or review the code in `/lib/tally.ts`.
