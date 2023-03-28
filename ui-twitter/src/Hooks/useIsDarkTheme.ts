import { useState } from 'react'

export const useIsDarkTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const getDarkThemeFromLocalStorage = localStorage.getItem('isDarkTheme')

  if (getDarkThemeFromLocalStorage === null) {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme))
  }

  const handleButton = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme))
  }

  return {
    handleButton,
    getDarkThemeFromLocalStorage
  }
}
