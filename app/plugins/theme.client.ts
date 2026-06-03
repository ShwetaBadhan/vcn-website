// Theme Plugin - Auto-loads theme on client-side app startup
export default defineNuxtPlugin(async () => {
  const themeStore = useThemeStore()

  // Load theme on app startup
  if (!themeStore.loaded) {
    await themeStore.loadTheme()
  }

})
