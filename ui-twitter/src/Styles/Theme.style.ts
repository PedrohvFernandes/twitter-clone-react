export const Theme = {
  // https://encycolorpedia.pt/ebeef0
  color: {
    background: {
      main: '#fff',
      contrastText: '#141827'
    },
    primary: {
      main: '#ebeef0',
      contrastText: '#b5c0c7'
    },
    secondary: {
      main: '#89a2b8',
      contrastText: '#6182a0'
    },
    tertiary: {
      main: '#1da1f2',
      contrastText: '#0c84cd'
    },
    quaternary: {
      main: '#5b7083',
      contrastText: '#495a69'
    },
    fifth: {
      main: '#f7f9fa',
      contrastText: '#bacbd4'
    },
    error: {
      main: '#e0245e',
      contrastText: '#b61a4a'
    },
    white: {
      main: '#fff',
      contrastText: '#000'
    },
    black: {
      main: '#000',
      contrastText: '#fff'
    },
    filter: {
      main: 'brightness(0.8)',
      contrastText: 'brightness(1.3)'
    }
  },

  // border: {
  //   radius: '15px',
  //   style: '2px solid #736681'
  // },

  font: {
    small: '0.5rem',
    defaultXS: '0.875rem',
    defaultS: '1rem',
    defaultM: '1.25rem',
    defaultL: '1.5rem',
    big: '2rem',
    bigger: '3rem',
    fontFamily: {
      roboto: 'Roboto, sans-serif'
    }
  },

  deviceMax: {
    mobileS: `(max-width: 320px)`,
    mobileM: `(max-width: 375px)`,
    mobileL: `(max-width: 425px)`,
    tablet: `(max-width: 768px)`,
    laptop: `(max-width: 1024px)`,
    laptopL: `(max-width: 1440px)`,
    desktop: `(max-width: 2560px)`,
    desktopL: `(max-width: 2560px)`
  }
}
