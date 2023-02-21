import styled from 'styled-components';
import { FlatList, View } from 'react-native';

import { AnimeProps } from '../../types/AnimeProps';

export const List = styled(FlatList as new () => FlatList<AnimeProps>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  removeClippedSubviews: false,
  initialNumToRender: 5,
  maxToRenderPerBatch: 7,
  windowSize: 3,
})``;

export const Container = styled(View)`
  flex: 1;
  weight: 200px;
  height: 100px;
`;
