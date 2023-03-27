import { FormEvent, KeyboardEvent, ReactNode, RefObject } from 'react'
import { ImgAvatar } from '../ImgAvatar'
import { InputTweet } from '../InputTweet'
import * as S from './Form.style'

interface FormProps {
  // newTweet: string
  // Como agora é uma referencia e nãp um estado então não é mais uma string e sim um elemento HTML
  newTweet: RefObject<HTMLTextAreaElement>
  // setNewTweet: (newTweet: string) => void
  submit?: string
  svgOn?: boolean
  svg?: ReactNode
  placeholder: string
  createNewTweet: (event: FormEvent) => void
  handleHotkeySubmit: (event: KeyboardEvent) => void
}

export function Form({
  newTweet,
  // setNewTweet,
  submit = 'Tweet',
  svgOn = false,
  svg,
  placeholder,
  createNewTweet,
  handleHotkeySubmit
}: FormProps) {

  // function createNewTweet(event: FormEvent) {
  //   event.preventDefault()

  //   setTweets([newTweet, ...tweets])
  //   setNewTweet('')
  // }

  // function handleHotkeySubmit(event: KeyboardEvent) {
  //   if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
  //     setTweets([newTweet, ...tweets])
  //     setNewTweet('')
  //   }
  // }

  return (
    <S.newTweetForm
      onSubmit={createNewTweet}
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
          // value={newTweet}
          onKeyDown={handleHotkeySubmit}
          // onChange={event => {
          //   setNewTweet(event.target.value)
          // }}
          // Usando ref para evitar re-renderização desnecessária, que antes com o useState era feito toda vez que o usuário digitava algo no input.
          ref={newTweet}
        />
      </S.newTweetFormLabel>

      <S.newTweetFormButtonSubmit type="submit" svgOn={svgOn}>
        <span>{submit}</span> {svgOn && svg}
      </S.newTweetFormButtonSubmit>
    </S.newTweetForm>
  )
}
