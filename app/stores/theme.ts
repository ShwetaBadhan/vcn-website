import { defineStore } from 'pinia'
import type { ThemeData, ThemeState } from '~/types'

// DEFAULT FALLBACK THEME - matches public/css/style.css :root variables
const DEFAULT_THEME: ThemeData = {
  id: 0,
  name: 'Default',
  scope: 'PUBLIC',
  logoUrl: '/images/logo/logo.png',
  faviconUrl: '/images/logo/favicon.png',
  primaryColor: '#5E6C1F',      // --vcn-primary
  secondaryColor: '#1D4503',    // --vcn-footer
  accentColor: '#d3fa99',        // --vcn-badge
  isActive: true
}

export const useThemeStore = defineStore('theme', {
  state: (): ThemeState => ({
    theme: null,
    loaded: false,
    loading: false,
    error: null
  }),

  getters: {
    // ALWAYS return a valid theme (either API or default)
    currentTheme: (state): ThemeData => state.theme || DEFAULT_THEME,

    // API fields with fallbacks
    primaryColor: (state) => state.theme?.primaryColor || DEFAULT_THEME.primaryColor,
    secondaryColor: (state) => state.theme?.secondaryColor || DEFAULT_THEME.secondaryColor,
    accentColor: (state) => state.theme?.accentColor || DEFAULT_THEME.accentColor,
    logoUrl: (state) => state.theme?.logoUrl || DEFAULT_THEME.logoUrl,
    faviconUrl: (state) => state.theme?.faviconUrl || DEFAULT_THEME.faviconUrl,

    // Check if using custom theme or default
    hasCustomTheme: (state) => state.theme !== null
  },

  actions: {
    async loadTheme() {
      if (this.loading || this.loaded) return

      this.loading = true

      try {
        const { fetchTheme } = useThemeApi()
        const response = await fetchTheme()

        if (response?.success) {
          if (response.data) {
            // API returned theme data
            this.theme = response.data
            console.log('✅ Custom theme loaded:', this.theme.name)
          } else {
            // API returned null - use defaults
            this.theme = null
          }
          this.applyThemeToCSS()
          this.updateFavicon()
        } else {
          this.error = response?.message || 'Failed to load theme'
          console.warn('⚠️ Theme load failed:', this.error)
        }
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Unknown error'
        console.error('❌ Theme API error:', this.error)
      } finally {
        this.loading = false
        this.loaded = true
      }
    },

    applyThemeToCSS() {
      if (!process.client) return

      const root = document.documentElement
      const colors = this.currentTheme

      // Core colors (always set)
      root.style.setProperty('--vcn-primary', colors.primaryColor)
      root.style.setProperty('--vcn-footer', colors.secondaryColor)
      root.style.setProperty('--vcn-badge', colors.accentColor)
      root.style.setProperty('--vcn-accent', colors.accentColor)
      root.style.setProperty('--vcn-dark', colors.secondaryColor) // --vcn-dark uses --vcn-footer

      // Update gradient based on primary and secondary
      root.style.setProperty('--vcn-gradient', `linear-gradient(135deg, ${colors.primaryColor}, ${colors.secondaryColor})`)

      
    },

    updateFavicon() {
      if (!process.client) return

      const faviconLink = document.querySelector('link[rel="shortcut icon"]') as HTMLLinkElement
      if (faviconLink && this.faviconUrl) {
        faviconLink.href = this.faviconUrl
      }
    },

    // Manually set a theme (useful for testing)
    setManualTheme(themeData: Partial<ThemeData>) {
      this.theme = { ...DEFAULT_THEME, ...themeData, id: 999 } as ThemeData
      this.applyThemeToCSS()
      this.updateFavicon()
    }
  }
})
