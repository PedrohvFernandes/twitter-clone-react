import styled from 'styled-components'

const divLayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  /* 
  display: grid;
  grid-template-columns: 300px 1fr; */

  /* Com a sidebar flutuante */
  /* width: 100%; */
  padding-left: 13rem;

  @media ${props => props.theme.deviceMax.tablet} {
    max-width: 1000px;
    padding-left: 5rem;
    /* grid-template-columns: 80px 1fr; */
  }

  @media ${props => props.theme.deviceMax.mobileL} {
    width: max-content;
  }
`

const divContent = styled.div`
  border-left: 1px solid ${props => props.theme.color.primary.main};
  border-right: 1px solid ${props => props.theme.color.primary.main};
  min-height: 100vh;
`

export { divLayout, divContent }
