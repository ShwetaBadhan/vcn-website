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
export interface ProductImage {
  image: string
  isPrimary: boolean
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
 * Product state structure for Pinia store
 */
export interface ProductState {
  products: Product[]
  categories: Category[]
  selectedProduct: Product | null
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
