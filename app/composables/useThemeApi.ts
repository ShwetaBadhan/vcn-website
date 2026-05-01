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
      return data
    } catch (err: any) {
      // Silently fail - theme will use defaults
      return null
    }
  }

  return {
    fetchTheme
  }
}
