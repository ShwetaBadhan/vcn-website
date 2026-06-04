// Product Store Types

/**
 * Product variant with pricing information
 */
export interface ProductVariant {
  id: string | number
  sellingPrice: string
  mrp: string
  isDefault: boolean
  productImages?: ProductImage[]
}

/**
 * Product image with primary flag
 */
export interface MediaVariants {
  webp?: string
  thumb?: string
  medium?: string
  large?: string
  original?: string
}

export interface Media {
  id: number
  fileUrl: string
  fileName?: string
  mimeType?: string
  webpUrl?: string | null
  variants?: MediaVariants
}

export interface ProductImage {
  id: number
  productId?: number
  productVariantId?: number
  mediaId: number
  isPrimary: boolean
  isActive?: boolean
  media?: Media
}

/**
 * Main product entity
 */
export interface Product {
  id: string | number
  name: string
  slug: string
  description?: string
  image?: string
  images?: ProductImage[]
  variants?: ProductVariant[]
  label?: string
  isNew?: boolean
}

/**
 * Product category entity
 */
export interface Category {
  id: string | number
  name: string
  slug: string
  description?: string
  image?: string
}

/**
 * Product page entity for detailed product page content
 */
export interface ProductPage {
  id: number
  productId: number
  heroTitle: string
  heroDescription: string
  heroImage: string
  faqs: any[]
  iconValues: any[]
  supportBackgroundImage: string | null
  supportTitle: string
  supportMainTitle: string
  supportKeyPoints: any[]
  bundleImage: string | null
  bundleHeading: string
  bundleButtonText: string
  bundleKeyPoints: any[]
  journeyTitle: string
  journeySubTitle: string
  journeyMainImage: string | null
  journeySideImages: any[]
  journeyKeyPoints: any[]
  journeyHowToUse: any[]
  purityTitle: string
  purityDescription: string
  purityKeyPoints: any[]
  featureHeading: string
  featureSubHeading: string
  featureImage: string | null
  featureKeyPoints: any[]
  isActive: boolean
  createdAt: string
  updatedAt: string
  product: {
    id: number
    name: string
    slug: string
    isActive: boolean
    isDeleted: boolean
  }
}

/**
 * Product state structure for Pinia store
 */
export interface ProductState {
  products: Product[]
  categories: Category[]
  selectedProduct: Product | null
  selectedProductPage: ProductPage | null
  loading: boolean
  error: string | null
}

/**
 * Product pricing result from getter
 */
export interface ProductPricing {
  price: string
  oldPrice: string | null
}
