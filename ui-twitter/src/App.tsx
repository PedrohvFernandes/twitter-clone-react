import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { ThemeProvider } from 'styled-components'
import { ButtonThemeDarkOrLight } from './components/ButtonThemeDarkOrLight'
import { useIsDarkTheme } from './Hooks/useIsDarkTheme'
import { GlobalStyle } from './Styles/Global.Style'
import { Theme } from './Styles/Theme.style'
import { DarkTheme } from './Styles/Themes/Dark.theme'

export function App() {
  const { getDarkThemeFromLocalStorage, handleButton } = useIsDarkTheme()
  return (
    <ThemeProvider theme={getDarkThemeFromLocalStorage === 'false' ? Theme : DarkTheme}>
      <ButtonThemeDarkOrLight
        isDarkTheme={getDarkThemeFromLocalStorage}
        onClick={handleButton}
      />

      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
