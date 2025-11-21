/**
 * Tally.so API Integration
 * Handles form submissions to Tally.so while keeping custom form designs
 */

export interface TallyFormData {
  [key: string]: string | string[] | boolean | undefined;
}

export interface TallySubmissionResponse {
  success: boolean;
  message?: string;
  submissionId?: string;
  error?: string;
}

/**
 * Submit form data to Tally.so
 * @param formId - The Tally form ID
 * @param data - Form data to submit
 * @param apiKey - Tally API key
 */
export async function submitToTally(
  formId: string,
  data: TallyFormData,
  apiKey: string
): Promise<TallySubmissionResponse> {
  try {
    // Tally.so API endpoint for form submissions
    const url = `https://api.tally.so/forms/${formId}/submissions`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: data,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      message: 'Form submitted successfully',
      submissionId: result.submissionId || result.id,
    };
  } catch (error) {
    console.error('Tally submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to submit form',
    };
  }
}

/**
 * Contact form submission helper
 */
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  budget: string;
  website?: string;
  message: string;
  agreedToPrivacy: boolean;
}): Promise<TallySubmissionResponse> {
  const formId = process.env.TALLY_CONTACT_FORM_ID;
  const apiKey = process.env.TALLY_API_KEY;

  if (!formId || !apiKey) {
    throw new Error('Tally configuration missing');
  }

  // Map form fields to Tally field structure
  const tallyData: TallyFormData = {
    'first_name': data.firstName,
    'last_name': data.lastName,
    'email': data.email,
    'service': data.service,
    'budget': data.budget,
    'website': data.website || '',
    'message': data.message,
    'privacy_consent': data.agreedToPrivacy,
  };

  return submitToTally(formId, tallyData, apiKey);
}

/**
 * Audit form submission helper
 */
export async function submitAuditForm(data: {
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  frustration?: string;
}): Promise<TallySubmissionResponse> {
  const formId = process.env.TALLY_AUDIT_FORM_ID;
  const apiKey = process.env.TALLY_API_KEY;

  if (!formId || !apiKey) {
    throw new Error('Tally configuration missing');
  }

  // Map form fields to Tally field structure
  const tallyData: TallyFormData = {
    'website': data.website,
    'first_name': data.firstName,
    'last_name': data.lastName,
    'email': data.email,
    'frustration': data.frustration || '',
  };

  return submitToTally(formId, tallyData, apiKey);
}
