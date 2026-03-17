import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

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
    const { name, email, website, location, category, tagline, description, specialties, portfolioLinks } = body;

    if (!name || !email || !location || !category || !tagline || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const portfolioItems = Array.isArray(portfolioLinks)
      ? portfolioLinks
          .filter((item: { url?: string }) => item?.url)
          .map((item: { url: string; description?: string }) => `<li><a href="${item.url}">${item.url}</a>${item.description ? ` — ${item.description}` : ''}</li>`)
          .join('')
      : '';

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
        <h2 style="color: #2D5F4E; border-bottom: 3px solid #2D5F4E; padding-bottom: 10px;">New Partner Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Website:</strong> ${website ? `<a href="${website}">${website}</a>` : 'Not provided'}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Category:</strong> ${category}</p>
        <p><strong>Tagline:</strong> ${tagline}</p>
        <p><strong>Description:</strong><br/>${description}</p>
        <p><strong>Specialties:</strong> ${specialties || 'Not provided'}</p>
        ${portfolioItems ? `<h3>Portfolio Links</h3><ul>${portfolioItems}</ul>` : ''}
      </div>
    `;

    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `🤝 Partner Application: ${name}`,
      html: emailHtml,
    });

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Partner application submitted successfully',
      messageId: data?.id,
    });
  } catch (error) {
    console.error('Error handling partner application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
