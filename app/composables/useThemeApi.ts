// Theme API Composable - Handles all theme API operations
import type { ThemeResponse } from '~/types'

export const useThemeApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBaseUrl

  // Fetch theme from backend
  const fetchTheme = async (): Promise<ThemeResponse | null> => {
    try {
      const data = await $fetch<ThemeResponse>(`${baseURL}common/theme`, {
        method: 'GET'
      })
      
      console.log('Theme API response:', data)
      return data
    } catch (err: any) {
      console.error('Theme fetch error:', err.message || err)
      return null
    }
  }

  return {
    fetchTheme
  }
}
