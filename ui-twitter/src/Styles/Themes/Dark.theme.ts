import { DefaultTheme } from 'styled-components'
import { Theme } from '../Theme.style'

export const DarkTheme: DefaultTheme = {
  color: {
    background: {
      main: Theme.color.background.contrastText,
      contrastText: Theme.color.background.main
    },
    primary: {
      main: Theme.color.primary.contrastText,
      contrastText: Theme.color.primary.main
    },
    secondary: {
      main: Theme.color.secondary.contrastText,
      contrastText: Theme.color.secondary.main
    },
    tertiary: {
      main: Theme.color.tertiary.contrastText,
      contrastText: Theme.color.tertiary.main
    },
    quaternary: {
      main: Theme.color.quaternary.contrastText,
      contrastText: Theme.color.quaternary.main
    },
    fifth: {
      main: Theme.color.fifth.contrastText,
      contrastText: Theme.color.fifth.main
    },
    white: {
      main: Theme.color.white.contrastText,
      contrastText: Theme.color.white.main
    },
    black: {
      main: Theme.color.black.contrastText,
      contrastText: Theme.color.black.main
    },
    filter: {
      main: Theme.color.filter.contrastText,
      contrastText: Theme.color.filter.main
    }
  },

  font: Theme.font,
  deviceMax: Theme.deviceMax
}
