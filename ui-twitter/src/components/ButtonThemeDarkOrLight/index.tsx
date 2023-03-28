import * as S from './ButtonThemeDarkOrLight.style'

interface ButtonThemeDarkOrLightProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  isDarkTheme: null | string
}

export function ButtonThemeDarkOrLight({isDarkTheme, ...rest}: ButtonThemeDarkOrLightProps) {

  return (
    <S.buttonThemeDarkOrLight
      {...rest}
      type="button"
    >  
      <span>{isDarkTheme === 'false' ? '🌞' : '🌚'}</span>
    </S.buttonThemeDarkOrLight>
  )
}
