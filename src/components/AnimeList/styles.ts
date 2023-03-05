import styled from 'styled-components';
import { FlatList, Text, View } from 'react-native';

import { AnimeProps } from '../../types/AnimeProps';

export const List = styled(FlatList as new () => FlatList<AnimeProps>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  removeClippedSubviews: false,
  initialNumToRender: 5,
  maxToRenderPerBatch: 7,
  windowSize: 3,
})``;

interface ContainerProps {
  oddBackground?: boolean;
}

export const Container = styled(View)<ContainerProps>`
  flex: 1;
  padding: 12px 26px 12px 12px;
  min-height: 250px;
  ${(props) => (props.oddBackground ? 'background: #282c4d;' : '')}
`;

export const Label = styled(Text)`
  color: #ffff;
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;
