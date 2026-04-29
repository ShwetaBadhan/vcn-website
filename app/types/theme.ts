// Theme API Types

export interface ThemeData {
  id: number
  name: string
  scope: 'PUBLIC' | 'PRIVATE'
  logoUrl: string | null
  faviconUrl: string | null
  primaryColor: string
  secondaryColor: string
  accentColor: string
  isActive: boolean
}

export interface ThemeResponse {
  success: boolean
  message: string
  data: ThemeData | null
}

export interface ThemeState {
  theme: ThemeData | null
  loaded: boolean
  loading: boolean
  error: string | null
}
