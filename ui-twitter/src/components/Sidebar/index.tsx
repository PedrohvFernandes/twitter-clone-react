import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User
} from 'phosphor-react'
import twitterLogo from '../../assets/logo-twitter.svg'

import * as S from './Sidebar.style'

export function Sidebar() {
  return (
    <S.sidebar>
      
      <S.logo src={twitterLogo} alt="Logo" />

      <S.mainNavigation>
        <S.linksNavigation to="/">
          <House weight="fill" />
          <span>Home</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <Hash />
          <span>Explore</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <Bell />
          <span>Notifications</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <Envelope />
          <span>Messages</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <BookmarkSimple />
          <span>Bookmarks</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <FileText />
          <span>Lists</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <User />
          <span>Profile</span>
        </S.linksNavigation>

        <S.linksNavigation to="*">
          <DotsThreeCircle />
          <span>More</span>
        </S.linksNavigation>
      </S.mainNavigation>
      
      <S.newTweetButton type="button">
        <Pencil />
        <span>Tweet</span>
      </S.newTweetButton>
    </S.sidebar>
  )
}
