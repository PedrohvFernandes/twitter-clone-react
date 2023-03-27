import { KeyboardEvent, useState } from 'react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  newTweet: z
    .string()
    .trim()
    .max(280, 'Máximo 280 caracteres para um tweet 😎')
    .min(3, 'Mínimo 3 caracteres para um tweet 😎')
})

export type FormPropsZod = z.infer<typeof schema>
// export interface FormPropsZod {z: z.infer<typeof schema>}

export const useCreateNewTweet = (tweetsExisting: string[]) => {
  const [tweets, setTweets] = useState(tweetsExisting)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormPropsZod>({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  const createNewTweet = (data: FormPropsZod) => {
    setTweets([data.newTweet, ...tweets])
    data.newTweet = ''
  }

  const handleHotKeySubmit = (event: KeyboardEvent, data: FormPropsZod) => {
    if (event?.key === 'Enter' && (event?.ctrlKey || event?.metaKey)) {
      setTweets([data.newTweet, ...tweets])
      data.newTweet = ''
    }
  }

  return {
    tweets,
    createNewTweet,
    handleHotKeySubmit,
    register,
    handleSubmit,
    errors
  }
}
