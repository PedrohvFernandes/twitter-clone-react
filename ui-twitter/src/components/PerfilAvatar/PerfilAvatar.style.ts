import styled from "styled-components";

const divTweetContentTweetHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`
const tweetContentTweetHeaderSpan = styled.span`
  font-size: ${({ theme }) => theme.font.defaultXS};
  color: ${({ theme }) => theme.color.secondary.main};
`

export {
  divTweetContentTweetHeader,
  tweetContentTweetHeaderSpan,
}