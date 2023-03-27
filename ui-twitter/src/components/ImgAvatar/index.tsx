import * as S from './ImgAvatar.style'

interface ImgAvatarProps {
  imgSrc?: string
  imgAlt?: string
}

export function ImgAvatar({
  imgSrc = 'https://media.istockphoto.com/id/1024619672/pt/foto/thinking-asking-stick-figure-man-person-with-blue-question-mark-3d-rendering-interrogation.jpg?s=170667a&w=0&k=20&c=2e3oYcbinemz8yGeJ6RbIsVwi4ChyAzPOF_3vi0E_P4=',
  imgAlt = 'Sem foto de perfil'
}: ImgAvatarProps) {
  return (
    <S.img
      src={imgSrc}
      alt={
        imgSrc.includes(
          'thinking-asking-stick-figure-man-person-with-blue-question-mark-3d-renderin'
        )
          ? 'Sem foto de perfil'
          : imgAlt
      }
    />
  )
}
