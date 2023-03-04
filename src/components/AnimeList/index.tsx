import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { DisplayAnime } from '../DisplayAnime'
import { AnimeProps } from '../../types/AnimeProps'

import { List, Container, Label } from './styles';

interface AnimeListProps {
  data: AnimeProps[];
  label: string;
  oddBackground?: boolean;
  autoFocus?: boolean;
  handleSelectAnime: (data: AnimeProps) => void;
};

const AnimeList: React.FC<AnimeListProps> = ({ data, label, autoFocus = false, oddBackground = false, handleSelectAnime }) => {
  return (
    <Container oddBackground={oddBackground}>
      <Label>{label}</Label>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) => <DisplayAnime hasTVPreferredFocus={autoFocus && index === 0} onPress={() => handleSelectAnime(item)} source={{ uri: item.image }} animeData={item} />}
        keyExtractor={(item) => item.universal_anime_id}
      />
    </Container>
  );
}

export { AnimeList };
