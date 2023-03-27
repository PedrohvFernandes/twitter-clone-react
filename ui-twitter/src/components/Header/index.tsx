import { Sparkle } from 'phosphor-react'
import * as S from './Header.style'

interface HeaderProps {
  title: string
  page?: string
}

export function Header({ title, page }: HeaderProps) {
  return (
    <S.divHeader className="timeline-header">
      {title}
      {page === 'Home' && <Sparkle />}
    </S.divHeader>
  )
}
