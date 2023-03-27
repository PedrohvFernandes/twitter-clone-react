import styled from 'styled-components'

type ITweetTheme = {
  isResponseTweetOrNewTweet?: string
  svgOn?: boolean
  error?: boolean
}

const errorMsg = styled.span<ITweetTheme>`
  display: none;
  ${({ error }) => error && 'display: flex;'}
  align-items: center;
  width: 100%;
  justify-content: center;
  padding: 1rem;
`

const newTweetForm = styled.form<ITweetTheme>`
  padding: 1.5rem 1.25rem;
  display: flex;
  ${({ isResponseTweetOrNewTweet }) =>
    isResponseTweetOrNewTweet === 'Tweet' && 'flex-direction: column;'}
  ${({ isResponseTweetOrNewTweet }) =>
    isResponseTweetOrNewTweet === 'Answer' && 'align-items: center;'}
  gap: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
  width: 100%;
`
const newTweetFormLabel = styled.label`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const newTweetFormButtonSubmit = styled.button<ITweetTheme>`
  background: ${({ error, theme }) =>
    error ? theme.color.error.contrastText : theme.color.tertiary.main};
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  margin-left: auto;
  color: #fff;
  font-size: ${({ theme }) => theme.font.defaultS};
  font-weight: 900;
  border: 0;
  outline: 0;
  :disabled {
    cursor: not-allowed;
  }
  transition: filter 0.3s ease-in-out;
  &:hover {
    filter: ${({ theme }) => theme.color.filter.main};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }
  @media ${({ theme }) => theme.deviceMax.tablet} {
    padding: 0.75rem;
    svg {
      display: block;
    }
    span {
      ${({ svgOn }) => svgOn && 'display: none;'}
    }
  }
`

export { newTweetForm, newTweetFormLabel, newTweetFormButtonSubmit, errorMsg }
