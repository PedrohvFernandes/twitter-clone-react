import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { GlobalStyle } from './Styles/Global.Style'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Styles/Theme.style'
import { ButtonThemeDarkOrLight } from './components/ButtonThemeDarkOrLight'
import { DarkTheme } from './Styles/Themes/Dark.theme'

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const handleButton = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? DarkTheme : Theme}>
      <ButtonThemeDarkOrLight
        isDarkTheme={isDarkTheme}
        onClick={handleButton}
      />

      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
