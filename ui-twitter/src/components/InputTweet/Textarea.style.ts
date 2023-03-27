import styled from 'styled-components'

const containerTextarea = styled.div`

`
const Textarea = styled.textarea`
  flex: 1;
  border: 0;
  font-size: ${({ theme }) => theme.font.defaultM};
  font-weight: 500;
  margin-top: 1.25rem;
  resize: none;
  color: ${({ theme }) => theme.color.black.main};
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.color.quaternary.contrastText};
  }

  @media ${({ theme }) => theme.deviceMax.tablet} {
    font-size: 1rem;
  }
`

export {
  containerTextarea,
  Textarea
}