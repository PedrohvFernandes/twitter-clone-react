import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :root {
    --twitter-blue: #1da1f2;
  } */

  body {
    -webkit-font-smoothing: antialiased;
    font: 400 1rem ${props => props.theme.font.fontFamily.roboto};
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.background.main};
    color: ${({ theme }) => theme.color.background.contrastText};
  }


  button {
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`
