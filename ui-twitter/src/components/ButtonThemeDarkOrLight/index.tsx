import * as S from './ButtonThemeDarkOrLight.style'

interface ButtonThemeDarkOrLightProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  isDarkTheme: boolean
}

export function ButtonThemeDarkOrLight({isDarkTheme, ...rest}: ButtonThemeDarkOrLightProps) {

  return (
    <S.buttonThemeDarkOrLight
      {...rest}
      themeDark={isDarkTheme}
      type="button"
    >  
      <span>{isDarkTheme ? '🌚' : '🌞'}</span>
    </S.buttonThemeDarkOrLight>
  )
}
