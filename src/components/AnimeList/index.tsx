import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

import { DisplayAnime } from '../DisplayAnime'
import { AnimeProps } from '../../types/AnimeProps'

import { List, Container } from './styles';

interface AnimeListProps {
  data: AnimeProps[]

};

const AnimeList: React.FC<AnimeListProps> = ({ data }) => {
  return (
    <Container>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItemAnime}
        keyExtractor={(item) => item.universal_anime_id}
      />
    </Container>
  );
}

const renderItemAnime = (data: ListRenderItemInfo<AnimeProps>) => {
  return <DisplayAnime source={{ uri: data.item.image }} animeData={data.item} />
}

export { AnimeList };
