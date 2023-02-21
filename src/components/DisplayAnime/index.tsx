import React from 'react';
import { ImageBackgroundProps, Text } from 'react-native';
import { AnimeProps } from '../../types/AnimeProps';

import { ContainerImage } from './styles';


interface DisplayAnimeProps extends ImageBackgroundProps {
  animeData: AnimeProps;
  onPressPlayButton?: () => void;
  onPress?: () => void;
}

const DisplayAnime: React.FC<DisplayAnimeProps> = ({ source, animeData }) => {
  return (
    <ContainerImage source={source} resizeMode='cover'>
      <Text>Teste</Text>
    </ContainerImage>
  );
}

export { DisplayAnime };
