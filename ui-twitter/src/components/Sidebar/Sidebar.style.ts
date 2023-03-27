import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const sidebar = styled.aside`
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: fixed;
  left: 0;
  top: 0;
  max-height: 100%;
  overflow-y: auto;
  @media ${({ theme }) => theme.deviceMax.tablet} {
    padding: 1.5rem 0.75rem;
    align-items: center;
  }
`

const logo = styled.img`
  width: 2rem;
  height: 2rem;
`

const mainNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const newTweetButton = styled.button`
  background: ${({ theme }) => theme.color.tertiary.main};
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  font-size: ${({ theme }) => theme.font.defaultM};
  font-weight: 900;
  border: 0;
  outline: 0;
  transition: filter 0.3s ease-in-out;
  &:hover {
    /* filter: brightness(0.9); */
    filter: ${({ theme }) => theme.color.filter.main};
  }
  svg {
    width: 1.5rem;
    height: 1.5rem;
    display: none;
  }
  @media ${({ theme }) => theme.deviceMax.tablet} {
    svg {
      display: block;
    }

    span {
      display: none;
    }
  }
`

const linksNavigation = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 1.25rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.color.tertiary.contrastText};
  }
  &.active {
    color: ${({ theme }) => theme.color.tertiary.contrastText};
  }
  svg {
    width: 2rem;
    height: 2rem;
  }

  @media ${({ theme }) => theme.deviceMax.tablet} {
    span {
      display: none;
    }
  }
`

export { sidebar, logo, newTweetButton, mainNavigation, linksNavigation }
