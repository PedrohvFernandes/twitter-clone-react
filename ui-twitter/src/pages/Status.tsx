import { PaperPlaneRight } from 'phosphor-react'
import { useParams } from 'react-router-dom'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import { useCreateNewTweet } from '../Hooks/useCreateNewTweet'

/**
 * Fluxo de renderização:
 *
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 *
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
  const { content } = useParams<{ content: string }>()
  const { 
    createNewTweet, 
    handleHotKeySubmit, 
    newTweet, 
    // setNewTweet, 
    tweets 
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
        newTweet={newTweet}
        // setNewTweet={setNewTweet}
        submit="Answer"
        svgOn={true}
        svg={<PaperPlaneRight />}
        placeholder="Tweet your answer"
        createNewTweet={createNewTweet}
        handleHotkeySubmit={handleHotKeySubmit}
      />

      {tweets.map((answer, index) => {
        return <Tweet key={`${answer}-${index}`} content={answer} />
      })}
    </main>
  )
}
