/**
 * Strapi returns a top-level array "Image" for media,
 * "Name" for the product name, "price" for the price, etc.
 */

// Each image item in the "Image" array
export interface StrapiImageItem {
  id: number;
  url: string;            // e.g. "/uploads/JPEG_image_..."
  name: string;           // e.g. "JPEG image-49FD-..."
  alternativeText?: string | null;
  caption?: string | null;
  width?: number;
  height?: number;
  // If you want to type the "formats" object, do so here, or leave it as `any`.
  formats?: unknown;
  ext?: string;
  mime?: string;
  size?: number;
  provider?: string;
  // Timestamps etc.
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  // etc.
}

// Each product item
export interface StrapiProductItem {
  id: number;                 // e.g. 2
  Name: string;               // capital "N"
  price: string;             // e.g. "۳۵۰,۰۰۰ تومان"
  Image?: StrapiImageItem[]; // array of images
  description?: unknown;         // your RichText, or refine further
  featuredProducts?: boolean;
  documentId?: string;       // you have "documentId" in your JSON
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  // More fields if needed
}

// The top-level response from Strapi's /api/products
export interface StrapiProductResponse {
  data: StrapiProductItem[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
