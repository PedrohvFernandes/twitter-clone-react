import styled from 'styled-components'

export const divSeparator = styled.div`
  background: ${({ theme }) => theme.color.fifth.main};
  border-top: 1px solid ${({ theme }) => theme.color.primary.main};
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
  height: 0.75rem;
`
