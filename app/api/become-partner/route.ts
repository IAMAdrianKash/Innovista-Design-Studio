import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

// Create a Sanity client with write token for creating drafts
const sanityWriteClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'thhy1crr',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: false, // Must be false for write operations
  apiVersion: '2025-01-01',
  token: process.env.SANITY_WRITE_TOKEN, // Write token from environment variables
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, website, location, category, tagline, description, specialties } = body;

    // Validate required fields
    if (!name || !email || !location || !category || !tagline || !description) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate a slug from the business name
    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Parse specialties from comma-separated string to array
    const specialtiesArray = specialties
      ? specialties.split(',').map((s: string) => s.trim()).filter(Boolean)
      : [];

    // Create the draft partner document
    const draftPartner = {
      _type: 'partner',
      name,
      slug: {
        _type: 'slug',
        current: slug,
      },
      tagline,
      description,
      category,
      contactEmail: email,
      website: website || undefined,
      location,
      specialties: specialtiesArray.length > 0 ? specialtiesArray : undefined,
      verified: false, // Draft partners start unverified
      featured: false, // Draft partners start unfeatured
      order: 999, // Default order, can be changed in Sanity
    };

    // Create the document in Sanity as a draft
    const result = await sanityWriteClient.create(draftPartner, {
      // Using autoGenerateArrayKeys to handle arrays properly
      autoGenerateArrayKeys: true,
    });

    console.log('Partner application submitted as draft:', result._id);

    return NextResponse.json({
      success: true,
      message: 'Partner application submitted successfully',
      draftId: result._id,
    });
  } catch (error) {
    console.error('Error creating partner draft:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
