// CMS API Composable - Handles all CMS API operations
import type { CmsApiResponse, CmsSectionsResponse, CmsQueryParams, CmsPage, CmsSection } from '~/types'
import { API_ENDPOINTS } from '~/config/api/endpoints'

export const useCmsApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  /**
   * Build query string from params object
   */
  const buildQueryString = (params: CmsQueryParams): string => {
    const query = new URLSearchParams()
    if (params.view) query.append('view', params.view)
    if (params.slug) query.append('slug', params.slug)
    if (params.pageId) query.append('pageId', String(params.pageId))
    if (params.pageType) query.append('pageType', params.pageType)
    if (params.sectionId) query.append('sectionId', String(params.sectionId))
    if (params.sectionKey) query.append('sectionKey', params.sectionKey)
    if (params.sectionType) query.append('sectionType', params.sectionType)
    if (params.isHomePage !== undefined) query.append('isHomePage', String(params.isHomePage))
    return query.toString()
  }

  /**
   * Fetch CMS pages with optional filters
   */
  const fetchCmsPages = async (params: CmsQueryParams = {}): Promise<CmsApiResponse | null> => {
    try {
      const queryString = buildQueryString(params)
      const endpoint = queryString
        ? `${API_ENDPOINTS.CMS_PAGES_READ}?${queryString}`
        : API_ENDPOINTS.CMS_PAGES_READ

      const fullUrl = `${baseURL}${endpoint}`
      console.log('🔍 CMS API URL:', fullUrl)

      const data = await $fetch<any>(fullUrl, {
        method: 'GET'
      })

      // Defensive: normalize response shape - data can be single object or array
      const rawData = data?.data
      let pages: CmsPage[] = []
      if (Array.isArray(rawData)) {
        pages = rawData
      } else if (rawData && typeof rawData === 'object') {
        pages = [rawData as CmsPage]
      }

      const response: CmsApiResponse = {
        success: data?.success ?? false,
        message: data?.message || '',
        data: pages
      }

      return response
    } catch (err: any) {
      console.error('❌ CMS fetch error:', err.message || err, 'URL:', `${baseURL}${API_ENDPOINTS.CMS_PAGES_READ}`)
      return null
    }
  }

  /**
   * Fetch home page CMS content
   */
  const fetchHomePage = async (): Promise<CmsApiResponse | null> => {
    return fetchCmsPages({ isHomePage: true })
  }

  /**
   * Fetch CMS page by slug
   */
  const fetchPageBySlug = async (slug: string): Promise<CmsApiResponse | null> => {
    return fetchCmsPages({ slug })
  }

  /**
   * Fetch CMS sections by page ID
   */
  const fetchSectionsByPageId = async (pageId: number): Promise<CmsApiResponse | null> => {
    return fetchCmsPages({ view: 'sections', pageId })
  }

  /**
   * Fetch CMS sections by page slug
   * Defensive: handles both direct sections array and pages-with-sections response
   */
  const fetchSectionsBySlug = async (slug: string): Promise<CmsSectionsResponse | null> => {
    try {
      const queryString = buildQueryString({ view: 'sections', slug })
      const endpoint = `${API_ENDPOINTS.CMS_PAGES_READ}?${queryString}`
      const fullUrl = `${baseURL}${endpoint}`
      console.log('🔍 CMS Sections API URL:', fullUrl)

      const data = await $fetch<any>(fullUrl, {
        method: 'GET'
      })

      const rawData = data?.data
      let sections: CmsSection[] = []

      if (Array.isArray(rawData)) {
        const first = rawData[0]
        if (first && ('sectionKey' in first || 'sectionType' in first)) {
          // API returned sections directly
          sections = rawData
        } else if (first && 'sections' in first) {
          // API returned pages with nested sections - extract from first page
          sections = first.sections || []
        } else {
          sections = rawData
        }
      } else if (rawData && typeof rawData === 'object') {
        if ('sections' in rawData) {
          // Single page object with sections
          sections = rawData.sections || []
        } else {
          // Single section object
          sections = [rawData as CmsSection]
        }
      }

      const response: CmsSectionsResponse = {
        success: data?.success ?? false,
        message: data?.message || '',
        data: sections
      }

      return response
    } catch (err: any) {
      console.error('❌ CMS sections fetch error:', err.message || err, 'URL:', `${baseURL}${API_ENDPOINTS.CMS_PAGES_READ}`)
      return null
    }
  }

  /**
   * Get full image URL from CMS media object
   * Prepends base URL to relative fileUrl paths
   */
  const getCmsImageUrl = (image: { fileUrl?: string } | null | undefined, fallback: string = ''): string => {
    if (!image || !image.fileUrl) return fallback
    const fileUrl = image.fileUrl
    if (fileUrl.startsWith('http')) return fileUrl
    if (fileUrl.startsWith('/')) {
      return `${baseURL}${fileUrl.slice(1)}`
    }
    return fileUrl
  }

  return {
    fetchCmsPages,
    fetchHomePage,
    fetchPageBySlug,
    fetchSectionsByPageId,
    fetchSectionsBySlug,
    getCmsImageUrl,
    baseURL
  }
}
