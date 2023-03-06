import styled from 'styled-components';
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

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

type ButtonProps = {
  isFocused: boolean;
};

export const Input = styled(TextInput)`
  height: 40px;
  width: 180px;
  /* margin: 12px; */
  color: #fff;
  padding: 5px;
  background: rgba(0, 0, 0, 0.5);
`;

export const ContainerInput = styled(View)`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled(Text)`
  color: #ffffff;
  font-size: 16px;
  padding: 5px;
  font-family: 'Poppins-Regular';
`;

export const ButtonNext = styled(TouchableOpacity)<ButtonProps>`
  ${(props) =>
    props.isFocused &&
    `
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 2px
    `};
`;
