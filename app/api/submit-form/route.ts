import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, sendAuditEmail } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, ...formData } = body;

    // Validate form type
    if (!formType || !['contact', 'audit'].includes(formType)) {
      return NextResponse.json(
        { success: false, error: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Send email for the appropriate form type
    let result;
    if (formType === 'contact') {
      // Validate required contact form fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }
      result = await sendContactEmail(formData);
    } else if (formType === 'audit') {
      // Validate required audit form fields
      if (!formData.website || !formData.firstName || !formData.lastName || !formData.email) {
        return NextResponse.json(
          { success: false, error: 'Missing required fields' },
          { status: 400 }
        );
      }
      result = await sendAuditEmail(formData);
    }

    if (result?.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: result?.error || 'Submission failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    );
  }
}
