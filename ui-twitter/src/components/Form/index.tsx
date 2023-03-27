import { KeyboardEvent, ReactNode } from 'react'
import {
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form/dist/types'
import { FieldErrors } from 'react-hook-form/dist/types/errors'
import { FormPropsZod } from '../../Hooks/useCreateNewTweet'
import { ImgAvatar } from '../ImgAvatar'
import { InputTweet } from '../InputTweet'
import * as S from './Form.style'

interface FormProps {
  submit?: string
  svgOn?: boolean
  svg?: ReactNode
  placeholder: string
  createNewTweet: (data: FormPropsZod) => void
  handleHotkeySubmit: (event: KeyboardEvent, data: FormPropsZod) => void
  handleSubmit: UseFormHandleSubmit<{
    newTweet: string
  }>
  register: UseFormRegister<{
    newTweet: string
  }>
  errors: FieldErrors<{
    newTweet: string
  }>
}
export function Form({
  submit = 'Tweet',
  svgOn = false,
  svg,
  placeholder,
  createNewTweet,
  handleHotkeySubmit,
  handleSubmit,
  register,
  errors
}: FormProps) {
  const errorNewTweetLength = errors.newTweet?.message?.length ? true : false
  return (
    <>
      <S.errorMsg error={errorNewTweetLength}>
        {errors.newTweet?.message}
      </S.errorMsg>

      <S.newTweetForm
        onSubmit={handleSubmit(createNewTweet)}
        className="new-tweet-form"
        isResponseTweetOrNewTweet={submit}
      >
        <S.newTweetFormLabel htmlFor="tweet">
          <ImgAvatar
            imgSrc="https://github.com/pedrohvfernandes.png"
            imgAlt="Pedro Henrique"
          />
          <InputTweet
            id="tweet"
            placeholder={placeholder}
            {...register('newTweet')}
            error={errorNewTweetLength}
            // onKeyDown={handleSubmit(handleHotkeySubmit)}
          />
        </S.newTweetFormLabel>
        <S.newTweetFormButtonSubmit
          type="submit"
          svgOn={svgOn}
          error={errorNewTweetLength}
          disabled={errorNewTweetLength}
        >
          <span>{submit}</span> {svgOn && svg}
        </S.newTweetFormButtonSubmit>
      </S.newTweetForm>
    </>
  )
}
