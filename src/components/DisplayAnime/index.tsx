import React, { useState } from 'react';
import { ImageBackgroundProps, Text } from 'react-native';
import { AnimeProps } from '../../types/AnimeProps';

import { ContainerImage, Selector, Header, Footer, Title, Flag, FlagCotainer } from './styles';


interface DisplayAnimeProps extends ImageBackgroundProps {
  animeData: AnimeProps;
  hasTVPreferredFocus: boolean;
  onPressPlayButton?: () => void;
  onPress?: () => void;
}

const DisplayAnime: React.FC<DisplayAnimeProps> = ({ source, hasTVPreferredFocus, animeData, ...props }) => {

  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Selector isFocused={isFocused} onFocus={handleOnFocus} onBlur={handleBlur} {...props} hasTVPreferredFocus={hasTVPreferredFocus}>
      <ContainerImage source={source} resizeMode='stretch'>
        <Footer>
          <Title>{animeData.title}</Title>
          {animeData.sub === 'Dublado' && (<FlagCotainer>
            <Flag>{animeData.sub.toUpperCase()}</Flag>
          </FlagCotainer>)}
        </Footer>
      </ContainerImage>
    </Selector>
  )
}

export { DisplayAnime };
