import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { ImgAvatar } from '../ImgAvatar'
import { PerfilAvatar } from '../PerfilAvatar'
import * as S from './Tweet.style'

interface TweetProps {
  content: string
}

export function Tweet({ content }: TweetProps) {
  return (
    <S.linkTweet to={`/status/${content}`}>
      <ImgAvatar imgSrc='https://github.com/pedrohvfernandes.png' imgAlt='Pedro Henrique' />
      <S.divTweetContent>
        <PerfilAvatar username='pedroPeripecias' name='Pedro Henrique' />
        <S.tweetContentP>{content}</S.tweetContentP>

        <S.tweetContentFooter>
          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <ChatCircle />
            </S.tweetContentFooterButtonSvg>
            20
          </S.tweetContentFooterButton>

          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <ArrowsClockwise />
            </S.tweetContentFooterButtonSvg>
            20
          </S.tweetContentFooterButton>

          <S.tweetContentFooterButton type="button">
            <S.tweetContentFooterButtonSvg>
              <Heart />
            </S.tweetContentFooterButtonSvg>
            20
          </S.tweetContentFooterButton>
        </S.tweetContentFooter>
      </S.divTweetContent>
    </S.linkTweet>
  )
}
