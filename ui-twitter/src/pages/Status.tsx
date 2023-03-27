import { PaperPlaneRight } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { useCreateNewTweet } from '../Hooks/useCreateNewTweet'

export function Status() {
  const { content } = useParams<{ content: string }>()
  const { 
    createNewTweet, 
    handleHotKeySubmit, 
    tweets,
    errors,
    handleSubmit,
    register
  } =
    useCreateNewTweet([
      'Concordo...',
      'Olha, faz sentido!',
      'Parabéns pelo progresso.'
    ])

  return (
    <main>
      <Header title="Tweet" />

      <Tweet content={content!} />

      <Separator />

      <Form
        submit="Answer"
        svgOn={true}
        svg={<PaperPlaneRight />}
        placeholder="Tweet your answer"
        createNewTweet={createNewTweet}
        handleHotkeySubmit={handleHotKeySubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />

      {tweets.map((answer, index) => {
        return <Tweet key={`${answer}-${index}`} content={answer} />
      })}
    </main>
  )
}
