import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { useCreateNewTweet } from '../Hooks/useCreateNewTweet'

export function Timeline() {
  const {
    createNewTweet,
    handleHotKeySubmit,
    tweets,
    errors,
    handleSubmit,
    register
  } = useCreateNewTweet(['Meu primeiro tweet', 'Teste', 'Deu certo tweetar!'])
  return (
    <main>
      <Header title="Home" page="Home" />

      <Form
        placeholder="What's happening?"
        createNewTweet={createNewTweet}
        handleHotkeySubmit={handleHotKeySubmit}
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
      />

      <Separator />

      {tweets.map((tweet, index) => {
        return <Tweet key={`${tweet}-${index}`} content={tweet} />
      })}
    </main>
  )
}
