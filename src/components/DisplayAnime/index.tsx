import React, { useState } from 'react';
import { ImageBackgroundProps } from 'react-native';
import { AnimeProps, EpisodeProps } from '../../types';
import Image from '../../assets/fox.png'

import { ContainerImage, Selector, Header, Footer, Title, Flag, FlagCotainer } from './styles';


interface DisplayAnimeProps extends ImageBackgroundProps {
  animeData?: AnimeProps;
  episodeData?: EpisodeProps;
  hasTVPreferredFocus: boolean;
  isEpisode?: boolean;
  onPressPlayButton?: () => void;
  onPress?: () => void;
}

const DisplayAnime: React.FC<DisplayAnimeProps> = ({ source, hasTVPreferredFocus, animeData, episodeData, isEpisode = false, ...props }) => {

  const [isFocused, setIsFocused] = useState(false)
  const [onImageError, setOnImageError] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  if (isEpisode) {
    return (
      <Selector isFocused={isFocused} onFocus={handleOnFocus} onBlur={handleBlur} {...props} hasTVPreferredFocus={hasTVPreferredFocus}>
        <ContainerImage onError={(e) => setOnImageError(true)} defaultSource={Image} source={onImageError ? Image : source} resizeMode='stretch'>
          <Footer>
            <Title>Episódio {episodeData?.episode}</Title>
          </Footer>
        </ContainerImage>
      </Selector>)
  }

  return (
    <Selector isFocused={isFocused} onFocus={handleOnFocus} onBlur={handleBlur} {...props} hasTVPreferredFocus={hasTVPreferredFocus}>
      <ContainerImage onError={(e) => setOnImageError(true)} defaultSource={Image} source={onImageError ? Image : source} resizeMode='stretch'>
        <Footer>
          <Title>{animeData?.title}</Title>
          {animeData?.sub === 'Dublado' && (<FlagCotainer>
            <Flag>{animeData?.sub.toUpperCase()}</Flag>
          </FlagCotainer>)}
        </Footer>
      </ContainerImage>
    </Selector>
  )
}

export { DisplayAnime };
