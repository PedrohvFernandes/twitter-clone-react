import { TextareaHTMLAttributes, forwardRef } from 'react'
import * as S from './Textarea.style'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

// https://react.dev/reference/react/forwardRef
// Para ter acesso a ref do elemento HTML é preciso usar o forwardRef e passar o elemento HTML como tipo genérico, no caso o HTMLTextAreaElement e se tiver mais alguma props é só passar como segundo parâmetro uma interface/type que extenda as props do elemento HTML. Dessa forma evitamos de usar estado(useState) para controlar o valor do elemento HTML input e ficar fazendo re-renderização desnecessária.
export const InputTweet = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ ...res }, ref) => {
    return <S.Textarea {...res} ref={ref} />
  }
)
