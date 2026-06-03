// CMS Types

/**
 * CMS Media image object
 */
export interface CmsMediaImage {
  id: number
  fileName: string
  fileUrl: string
  mimeType: string
  altText: string | null
  title: string | null
  width: number | null
  height: number | null
}

/**
 * CMS Section entity
 */
export interface CmsSection {
  id: number
  pageId: number
  name: string
  sectionKey: string
  sectionType: string
  title: string | null
  subtitle: string | null
  description: string | null
  image: CmsMediaImage | null
  mobileImage: CmsMediaImage | null
  backgroundImage: CmsMediaImage | null
  videoUrl: string | null
  buttonText: string | null
  buttonLink: string | null
  styles: Record<string, any>
  config: Record<string, any>
  extraData: Record<string, any>
  sortOrder: number
  items: CmsSectionItem[]
}

/**
 * CMS Section Item entity (nested content)
 */
export interface CmsSectionItem {
  id: number
  sectionId: number
  title: string | null
  subtitle: string | null
  description: string | null
  image: CmsMediaImage | null
  sortOrder: number
  extraData: Record<string, any>
  [key: string]: any
}

/**
 * CMS Page entity
 */
export interface CmsPage {
  id: number
  title: string
  slug: string
  description: string
  pageType: string
  isHomePage: boolean
  seo: Record<string, any> | null
  sections: CmsSection[]
  updatedAt: string
}

/**
 * CMS API response wrapper
 */
export interface CmsApiResponse {
  success: boolean
  message: string
  data: CmsPage[]
}

/**
 * CMS Sections API response wrapper (when view=sections)
 */
export interface CmsSectionsResponse {
  success: boolean
  message: string
  data: CmsSection[]
}

/**
 * CMS query parameters
 */
export interface CmsQueryParams {
  view?: 'pages' | 'sections' | 'items'
  slug?: string
  pageId?: number
  pageType?: string
  sectionId?: number
  sectionKey?: string
  sectionType?: string
  isHomePage?: boolean
}

/**
 * CMS State for Pinia store
 */
export interface CmsState {
  pages: CmsPage[]
  currentPage: CmsPage | null
  loading: boolean
  error: string | null
  loaded: boolean
}
