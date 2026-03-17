import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getPartnerBySlug } from '@/lib/content';

const FROM_EMAIL = 'leads@innovista.design';
const TO_EMAIL = 'hello@innovista.design';

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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, partnerName, partnerId } = body;

    // Validate required fields
    if (!name || !email || !message || !partnerName || !partnerId) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Fetch partner details including contact email
    const partner = await getPartnerBySlug(partnerId);
    const partnerEmail = partner?.contactEmail || 'Not provided';

    // Build email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5F4E; border-bottom: 3px solid #2D5F4E; padding-bottom: 10px;">
          🤝 New Partner Introduction Request
        </h2>

        <div style="margin: 20px 0; padding: 20px; background: #FFF9E6; border-left: 4px solid #FFB800; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold; color: #333;">Requested Partner:</p>
          <p style="margin: 5px 0 0 0; font-size: 18px; color: #2D5F4E;">${partnerName}</p>
          <p style="margin: 5px 0 0 0; color: #666;"><strong>Partner Email:</strong> <a href="mailto:${partnerEmail}">${partnerEmail}</a></p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 15px;">Client Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            ` : ''}
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Their Request</h3>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <div style="margin: 30px 0; padding: 20px; background: #E8F5E9; border-left: 4px solid #2D5F4E; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold; color: #333;">📋 Quick Intro Email Template:</p>
          <div style="margin: 15px 0; padding: 15px; background: white; border-radius: 5px; font-family: monospace; font-size: 12px; line-height: 1.6;">
            <strong>To:</strong> ${partnerEmail}<br>
            <strong>Cc:</strong> ${email}<br>
            <strong>Subject:</strong> Intro: ${name} ${company ? `(${company})` : ''}<br><br>
            Hi ${partnerName.split(' ')[0]},<br><br>
            I'd like to introduce you to ${name}${company ? ` from ${company}` : ''}. They're looking for help with:<br><br>
            "${message}"<br><br>
            ${name}, ${partnerName.split(' ')[0]} is one of our trusted partners and I think you two would be a great fit.<br><br>
            I'll let you both take it from here!
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
          <p>This intro request was submitted via the Innovista Partner Directory.</p>
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const resend = getResend();
    const { data: emailData, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `🤝 Partner Intro Request: ${partnerName} - ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      messageId: emailData?.id,
    });
  } catch (error) {
    console.error('Partner intro request error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
