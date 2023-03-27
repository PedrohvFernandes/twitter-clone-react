import styled from 'styled-components'

const divHeader = styled.div`
  padding: 1.5rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.font.defaultM};
  font-weight: 700;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary.main};
  svg{
    width: 1.5rem;
    height: 1.5rem;
    color: ${({ theme }) => theme.color.tertiary.contrastText};
    filter: ${({ theme }) => theme.color.filter.main};
  }
`

export {
  divHeader
}