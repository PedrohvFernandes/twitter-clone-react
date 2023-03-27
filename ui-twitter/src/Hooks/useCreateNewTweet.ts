import { FormEvent, KeyboardEvent, useRef, useState } from 'react'

// https://www.youtube.com/watch?v=2Y0SDdaAvzs / https://www.youtube.com/watch?v=1jA6CrtQ050&t=1s
export const useCreateNewTweet = (tweetsExisting: string[]) => {
  // Evitar usar estado em forms para não ficar atualizando o estado a cada letra digitada
  // const [newTweet, setNewTweet] = useState('')

  // https://www.youtube.com/watch?v=uHxC8FH3l10&list=PLzILwKck99iar3MQeGw3W_MoMlVBYhrCY&index=3
  const newTweet = useRef<HTMLTextAreaElement>(null) // <HTMLTextAreaElement
  
  const [tweets, setTweets] = useState(tweetsExisting)

  const createNewTweet = (event: FormEvent) => {
    event.preventDefault()
    setTweets([newTweet.current!.value, ...tweets])
    newTweet.current!.value = ''
  }

  const handleHotKeySubmit = (event: KeyboardEvent) => {
    if (event?.key === 'Enter' && (event?.ctrlKey || event?.metaKey)) {
      setTweets([newTweet.current!.value, ...tweets])
      newTweet.current!.value = ''

    }
  }

  return { tweets, newTweet, createNewTweet, handleHotKeySubmit }
}
