import React from 'react';
import { ImageBackgroundProps, Text } from 'react-native';

import { AnimeProps } from '../../types/AnimeProps';
import { Button } from '../../components/Button'

import { Container, ContainerImage, ContainerAnimeText, Resume, Title } from './styles';

interface HeroProps extends ImageBackgroundProps {
  animeData: AnimeProps;
  onPressPlayButton?: () => void;
  onPress?: () => void;
}

const Hero: React.FC<HeroProps> = ({ source, animeData, onPressPlayButton, ...props }) => {
  return (
    <Container {...props}>
      <ContainerImage source={source} resizeMode='cover'>
        <ContainerAnimeText>
          <Title>{animeData?.title}</Title>
          <Resume>{animeData?.resume ? animeData?.resume : 'Resumo não disponivel'}</Resume>
          <Button title='Assistir' onPress={onPressPlayButton} />
        </ContainerAnimeText>
      </ContainerImage>
    </Container>
  );
};

export { Hero };
