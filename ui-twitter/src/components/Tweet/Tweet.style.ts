import styled from 'styled-components'
import { Link } from 'react-router-dom'

// https://stackoverflow.com/questions/59288849/styling-a-router-link-with-styled-components
const linkTweet = styled(Link)`
  padding: 1.5rem 1.25rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
  /* border-bottom: 1px solid ${(props) => props.theme.color.primary.main}; */
  text-decoration: none;
  word-break: break-all;
`

const divTweetContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const tweetContentP = styled.p`
  line-height: 1.25;
`

const tweetContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 0.75rem;
`
const tweetContentFooterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 0;
  font-size: ${({ theme }) => theme.font.defaultXS};
  color: ${({ theme }) => theme.color.secondary.main};
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.color.tertiary.contrastText};
  }
`
const tweetContentFooterButtonSvg = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
`

export {
  linkTweet,
  divTweetContent,
  tweetContentP,
  tweetContentFooter,
  tweetContentFooterButton,
  tweetContentFooterButtonSvg
}
