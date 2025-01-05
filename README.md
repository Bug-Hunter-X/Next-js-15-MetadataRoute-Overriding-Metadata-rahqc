# Next.js 15 MetadataRoute Bug

This repository demonstrates a bug in Next.js 15's `MetadataRoute` component where metadata defined within a page component overrides metadata defined in the `metadata` export.  The expected behavior is that the metadata should be combined, not overridden.

## Bug Description

When you try to add metadata to a page using both the `MetadataRoute` and the `metadata` export, the page's metadata completely replaces the root-level metadata, losing any information specified in the `metadata` export. This issue breaks the expected behavior of combining the metadata properties.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/product/1`.  You will only see the page-level metadata, not the root-level metadata.

## Solution

The solution involves utilizing the new Metadata API correctly.  Instead of overriding, we use the page-level metadata for dynamic elements like the product ID, but we merge the default metadata at the root level using the `metadata` export.

## Note

This bug is specific to Next.js 15.  Make sure you are using version 15 to reproduce the issue.  It may be fixed in later versions, but as of now, this solution is required.

