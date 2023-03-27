import * as S from './PerfilAvatar.style'

interface PerfilAvatarProps {
  name?: string
  username?: string
}

export function PerfilAvatar({ name = 'Sem nome', username = 'Anonimo' }: PerfilAvatarProps) {
  return (
    <S.divTweetContentTweetHeader>
      <strong>{name}</strong>
      <S.tweetContentTweetHeaderSpan>@{username}</S.tweetContentTweetHeaderSpan>
    </S.divTweetContentTweetHeader>
  )
}
