import { TextareaHTMLAttributes, forwardRef } from 'react'
import * as S from './Textarea.style'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: boolean
}

// Deixei o ref, mas não estamos usando ele nessa branch, estamos usando o react-hook-form
export const InputTweet = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, ...res }, ref) => {
    return (
      <S.containerTextarea error={error}>
        <S.Textarea {...res} ref={ref} error={error} />
      </S.containerTextarea>
    )
  }
)
