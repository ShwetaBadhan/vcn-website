import { defineStore } from 'pinia'
import type { CmsSection, CmsState } from '~/types'
import { PAGE_DATA } from '~/constants'
import { useCmsApi } from '~/composables/useCmsApi'

export const useCmsStore = defineStore('cms', {
  state: (): CmsState => ({
    pages: [],
    currentPage: null,
    loading: false,
    error: null,
    loaded: false
  }),

  getters: {
    // Get current page sections
    currentSections: (state): CmsSection[] => {
      return state.currentPage?.sections || []
    },

    // Get section by key
    getSectionByKey: (state) => (key: string): CmsSection | null => {
      return state.currentPage?.sections?.find((s: CmsSection) => s.sectionKey === key) || null
    },

    // Get section by type
    getSectionByType: (state) => (type: string): CmsSection | null => {
      return state.currentPage?.sections?.find((s: CmsSection) => s.sectionType === type) || null
    },

    // Get hero section specifically
    heroSection: (state): CmsSection | null => {
      return state.currentPage?.sections?.find((s: CmsSection) => s.sectionType === 'HERO' || s.sectionKey === 'hero') || null
    },

    // Check if page has sections
    hasSections: (state): boolean => {
      return (state.currentPage?.sections?.length || 0) > 0
    },
    getPageSection:
      () =>
        (
          page: keyof typeof PAGE_DATA,
          section: string
        ) => {

          const pageData = PAGE_DATA[page]

          if (!pageData) return null

          return pageData[section as keyof typeof pageData] || null
        },
    navbarData: () => PAGE_DATA.common.navbar,

    topFooterData: () => PAGE_DATA.common.topFooter,

    bottomFooterData: () => PAGE_DATA.common.bottomFooter,

    sidebar: () => PAGE_DATA.common.sidebar
  },

  actions: {
    // Fetch home page content
    async fetchHomePage() {
      const { fetchHomePage } = useCmsApi()
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const response = await fetchHomePage()

        if (response?.success && response.data && response.data.length > 0) {
          const page = response.data[0]
          if (page) {
            this.currentPage = page
            this.pages = response.data
            console.log('✅ CMS home page loaded:', page.title)
          }
        } else if (response?.success) {
          // API returned success but no data - CMS not configured yet, not an error
          console.log('ℹ️ CMS home page not configured yet, using fallbacks')
        } else {
          this.error = response?.message || 'No CMS data returned'
          console.warn('⚠️ CMS home page empty:', this.error)
        }
      } catch (err: any) {
        this.error = err.message || 'Failed to load CMS content'
        console.error('❌ CMS home page error:', this.error)
      } finally {
        this.loading = false
        this.loaded = true
      }
    },

    // Fetch page by slug
    async fetchPageBySlug(slug: string) {
      const { fetchPageBySlug } = useCmsApi()
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const response = await fetchPageBySlug(slug)

        if (response?.success && response.data && response.data.length > 0) {
          const page = response.data[0]
          if (page) {
            this.currentPage = page
            this.pages = response.data
            console.log('✅ CMS page loaded:', page.title)
          }
        } else if (response?.success) {
          console.log('ℹ️ CMS page not configured yet, using fallbacks')
        } else {
          this.error = response?.message || 'No CMS data returned'
          console.warn('⚠️ CMS page empty:', this.error)
        }
      } catch (err: any) {
        this.error = err.message || 'Failed to load CMS content'
        console.error('❌ CMS page error:', this.error)
      } finally {
        this.loading = false
        this.loaded = true
      }
    },

    // Fetch sections by page slug (returns sections directly)
    async fetchSectionsBySlug(slug: string) {
      const { fetchSectionsBySlug } = useCmsApi()
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const response = await fetchSectionsBySlug(slug)

        if (response?.success && response.data && response.data.length > 0) {
          const sections = response.data
          // Build a dummy page so existing getters work
          this.currentPage = {
            id: 0,
            title: slug,
            slug,
            description: '',
            pageType: '',
            isHomePage: slug === 'home',
            seo: null,
            sections,
            updatedAt: ''
          }
          console.log('✅ CMS sections loaded:', sections.length, 'sections')
        } else if (response?.success) {
          console.log('ℹ️ CMS sections not configured yet, using fallbacks')
        } else {
          this.error = response?.message || 'No CMS sections returned'
          console.warn('⚠️ CMS sections empty:', this.error)
        }
      } catch (err: any) {
        this.error = err.message || 'Failed to load CMS sections'
        console.error('❌ CMS sections error:', this.error)
      } finally {
        this.loading = false
        this.loaded = true
      }
    },

    // Clear current page
    clearPage() {
      this.currentPage = null
      this.loaded = false
    }
  }
})
