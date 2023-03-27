import styled from 'styled-components'

type TextAreaProps = {
  error: boolean
}

const containerTextarea = styled.div<TextAreaProps>`
  border: ${({ error, theme }) =>
    error && `2px solid ${theme.color.error.contrastText}`};
  border-radius: 15px;
  width: 100%;
`
const Textarea = styled.textarea<TextAreaProps>`
  flex: 1;
  border: 0;
  font-size: ${({ theme }) => theme.font.defaultM};
  font-weight: 500;
  margin-top: 1.25rem;
  padding: 1rem;
  resize: none;
  color: ${({ theme }) => theme.color.black.main};
  background-color: transparent;
  width: 100%;
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

export { containerTextarea, Textarea }
