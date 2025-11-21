# How to Set Up Field Names in Tally.so

When you create fields in Tally.so, each field has a **Field Name** (also called Field ID) that the API uses to map data. Here's how to set them up:

## Step-by-Step Instructions

### 1. Go to Tally.so and Create a New Form

1. Log in to [Tally.so](https://tally.so)
2. Click **"Create form"**
3. Give it a name (e.g., "Contact Form" or "Audit Form")

### 2. Add Fields and Set Field Names

For each field you add, you need to set its **Field Name** (the internal identifier):

#### How to Set a Field Name:

1. Click **"+ Add field"**
2. Choose the field type (Text, Email, Dropdown, etc.)
3. Type the label that users will see (e.g., "First Name")
4. Click on the field settings (gear icon or three dots)
5. Look for **"Field name"** or **"Field ID"**
6. Enter the exact name from the list below

---

## Contact Form Fields Setup

Create these fields in your Tally Contact Form:

| Label (What users see) | Field Type | Field Name (IMPORTANT!) | Required |
|------------------------|------------|-------------------------|----------|
| First Name | Short text | `first_name` | Yes |
| Last Name | Short text | `last_name` | Yes |
| Email Address | Email | `email` | Yes |
| Service Needed | Dropdown | `service` | Yes |
| Estimated Budget | Dropdown | `budget` | Yes |
| Company Website | URL | `website` | No |
| Project Details | Long text | `message` | Yes |
| I agree to the privacy policy | Checkbox | `privacy_consent` | Yes |

### Dropdown Options for Contact Form:

**Service Needed (`service`):**
- Web Design & Build
- Lead Generation Strategy
- Business Automation
- SEO & Growth Retainer
- Other

**Estimated Budget (`budget`):**
- $8k - $15k
- $15k - $30k
- $30k - $50k
- $50k+

---

## Audit Form Fields Setup

Create these fields in your Tally Audit Form:

| Label (What users see) | Field Type | Field Name (IMPORTANT!) | Required |
|------------------------|------------|-------------------------|----------|
| Website URL | URL | `website` | Yes |
| First Name | Short text | `first_name` | Yes |
| Last Name | Short text | `last_name` | Yes |
| Email Address | Email | `email` | Yes |
| What's your biggest frustration? | Long text | `frustration` | No |

---

## Visual Example: Setting Field Name in Tally

When you're editing a field in Tally:

```
┌─────────────────────────────────────┐
│  Edit Field                         │
├─────────────────────────────────────┤
│                                     │
│  Label:           First Name        │
│                                     │
│  Field Name:      first_name   ⬅️   │  ← THIS IS WHAT YOU NEED TO SET!
│                                     │
│  Field Type:      Short text        │
│                                     │
│  Required:        ☑️ Yes            │
│                                     │
└─────────────────────────────────────┘
```

---

## Important Notes

⚠️ **Field names are case-sensitive!** Use exactly:
- `first_name` (with underscore, all lowercase) ✅
- NOT `firstName` ❌
- NOT `First_Name` ❌
- NOT `first name` ❌

⚠️ **The label can be anything** (what users see), but the **Field Name must match exactly**.

---

## After Setting Up Fields

1. **Publish your forms** in Tally
2. **Copy the Form IDs**:
   - Go to form settings
   - Copy the Form ID (looks like `abc123def456`)
3. **Add to your .env.local file**:

```bash
TALLY_API_KEY=tly-DaKrk0zugQ3toKxGGWKbje4788McZ2w8
TALLY_CONTACT_FORM_ID=your-contact-form-id-here
TALLY_AUDIT_FORM_ID=your-audit-form-id-here
```

---

## Testing Checklist

After setup, test by submitting both forms:

- [ ] Contact form submits successfully
- [ ] Audit form submits successfully
- [ ] Data appears in Tally dashboard
- [ ] All fields are populated correctly
- [ ] Email notifications work (if configured)

---

## Troubleshooting

### "Field not found" errors?
- Double-check the Field Name matches exactly (case-sensitive)
- Make sure you're looking at Field Name, not Field Label

### Fields missing in Tally dashboard?
- Verify the Field Name is set (not just the label)
- Check that the field is not hidden or conditional

### Still having issues?
- Export your form data from Tally to see actual field names
- Or check the Tally form's JSON/API preview to see field identifiers
