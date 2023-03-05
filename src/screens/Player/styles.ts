import styled from 'styled-components';
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #171b2e;
`;
export const VideoContainer = styled(View)`
  flex: 1;
  width: 100%;
`;
export const Controler = styled(TouchableOpacity)`
  background: rgba(0, 0, 0, 0.5);
  flex: 1;
`;

export const ControlOverlay = styled(View)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: space-between;
`;

export const ContentInLoading = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
`;

export const HeaderContainer = styled(View)`
  margin: 5px;
`;

type ContainerProps = {
  isFocused?: boolean;
};
export const Toach = styled(TouchableOpacity)<ContainerProps>`
  transform: scale(0.9);
  ${(props) =>
    props.isFocused &&
    `
    border: 3px solid #fff;
    border-radius: 5px;
    padding: 2px;
    transform: scale(1);
    `};
`;

export const ItemCarousel = styled(TouchableWithoutFeedback)``;
