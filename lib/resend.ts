/**
 * Resend Email Service
 * Handles email sending for contact and audit forms
 */

import { Resend } from 'resend';

// Email configuration
const FROM_EMAIL = 'onboarding@resend.dev'; // Resend's test email (change to your verified domain)
const TO_EMAIL = 'hello@innovista.design';

// Lazy initialization - only create Resend instance when needed
let resendInstance: Resend | null = null;

function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not set in environment variables');
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  budget: string;
  website?: string;
  message: string;
  agreedToPrivacy: boolean;
}

export interface AuditFormData {
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  frustration?: string;
}

/**
 * Send contact form email
 */
export async function sendContactEmail(data: ContactFormData) {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5F4E; border-bottom: 3px solid #2D5F4E; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service:</td>
              <td style="padding: 8px 0;">${data.service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Budget:</td>
              <td style="padding: 8px 0;">${data.budget}</td>
            </tr>
            ${data.website ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Website:</td>
              <td style="padding: 8px 0;"><a href="${data.website}" target="_blank">${data.website}</a></td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Project Details</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${data.message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>This email was sent from the Innovista Design Studio contact form.</p>
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const resend = getResend();
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `New Contact Form: ${data.service} - ${data.firstName} ${data.lastName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return {
      success: true,
      messageId: emailData?.id,
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}

/**
 * Send audit request email
 */
export async function sendAuditEmail(data: AuditFormData) {
  try {
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5F4E; border-bottom: 3px solid #2D5F4E; padding-bottom: 10px;">
          🎯 New Free Audit Request
        </h2>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Website:</td>
              <td style="padding: 8px 0;"><a href="${data.website}" target="_blank">${data.website}</a></td>
            </tr>
          </table>
        </div>

        ${data.frustration ? `
        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Biggest Frustration</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${data.frustration.replace(/\n/g, '<br>')}
          </div>
        </div>
        ` : ''}

        <div style="margin: 30px 0; padding: 20px; background: #FFF9E6; border-left: 4px solid #FFB800; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold; color: #333;">📋 Next Steps:</p>
          <ol style="margin: 10px 0 0 0; padding-left: 20px; color: #666;">
            <li>Visit the website and take screenshots</li>
            <li>Analyze key conversion points</li>
            <li>Record Loom video with findings</li>
            <li>Send audit within 48 hours</li>
          </ol>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>This email was sent from the Innovista Design Studio free audit form.</p>
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const resend = getResend();
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `🎯 New Audit Request: ${data.website}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return {
      success: true,
      messageId: emailData?.id,
    };
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}
