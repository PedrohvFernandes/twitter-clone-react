import styled from 'styled-components'
type IButton = {
  themeDark: boolean
}
export const buttonThemeDarkOrLight = styled.button<IButton>`
  background-color: ${props => props.theme.color.tertiary.main};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  z-index: 12;
  font-size: ${props => props.theme.font.defaultL};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.color.tertiary.contrastText};
    filter: ${props => props.theme.color.filter.main};
  }

  &:focus {
    outline: none;
  }

  span {
    @keyframes floatAndRotate {
      0% {
        transform: translatey(0px);
        transform: rotate(0turn) scale(1);
      }
      25% {
        transform: rotate(1turn) scale(1);
      }
      50% {
        /* transform: rotate(1turn) scale(1.2); */
        transform: translatey(-10px);
      }
      75% {
        transform: rotate(0turn) scale(1.5);
      }
      /* 100% {
        transform: rotate(0turn) scale(1);  
        transform: translatey(0px);
      } */
    }
    animation: floatAndRotate 4s ease-in-out infinite;
  }

  @media ${props => props.theme.deviceMax.laptop} {
    top: 3.5rem;
  }
`
