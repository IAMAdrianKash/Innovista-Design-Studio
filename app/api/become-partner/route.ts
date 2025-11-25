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
    const { name, email, website, location, category, tagline, description, specialties, avatar, portfolioLinks } = body;

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

    // Handle avatar upload if present
    let imageAsset = undefined;
    if (avatar) {
      try {
        // Extract base64 data and mime type
        const matches = avatar.match(/^data:(.+);base64,(.+)$/);
        if (matches) {
          const mimeType = matches[1];
          const base64Data = matches[2];
          const buffer = Buffer.from(base64Data, 'base64');

          // Upload to Sanity
          const uploadedAsset = await sanityWriteClient.assets.upload('image', buffer, {
            filename: `${slug}-avatar.${mimeType.split('/')[1]}`,
          });

          imageAsset = {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: uploadedAsset._id,
            },
          };
        }
      } catch (uploadError) {
        console.error('Error uploading avatar:', uploadError);
        // Continue without avatar if upload fails
      }
    }

    // Format portfolio links for Sanity
    const formattedPortfolioLinks = portfolioLinks && portfolioLinks.length > 0
      ? portfolioLinks.map((link: { url: string; description: string }) => ({
          url: link.url,
          description: link.description || undefined,
        }))
      : undefined;

    // Generate a unique draft ID
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2, 9);
    const draftId = `drafts.${slug}-${timestamp}-${randomStr}`;

    // Create the draft partner document
    const draftPartner: any = {
      _id: draftId,
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
      portfolioLinks: formattedPortfolioLinks,
      verified: false, // Draft partners start unverified
      featured: false, // Draft partners start unfeatured
      order: 999, // Default order, can be changed in Sanity
    };

    // Add image only if uploaded successfully
    if (imageAsset) {
      draftPartner.image = imageAsset;
    }

    // Create the document in Sanity as a draft
    const result = await sanityWriteClient.create(draftPartner, {
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
