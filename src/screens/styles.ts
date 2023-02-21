import styled from 'styled-components';
import { View, ScrollView, Text, TouchableWithoutFeedback, SafeAreaView } from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #171b2e;
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
`;

export const HeaderContainer = styled(View)`
  margin: 5px;
`;

export const ItemCarousel = styled(TouchableWithoutFeedback)``;
