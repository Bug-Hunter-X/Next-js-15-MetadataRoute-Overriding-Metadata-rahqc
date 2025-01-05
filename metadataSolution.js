```javascript
import { MetadataRoute } from 'next/server'

export default function Metadata({ params }) {
  return (
    <MetadataRoute>
      {
        title: `Product ${params.productId}`,
        description: 'Product details',
      }
    </MetadataRoute>
  );
}

export const metadata = {
  title: 'Products',
  description: 'This is the global metadata description.'
};
```