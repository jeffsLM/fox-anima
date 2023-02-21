import styled from 'styled-components';
import { View, Image, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  width: 100%;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Img = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`;
export const ContainerImage = styled(View)`
  width: 66px;
  height: 58px;
`;

export const ContentHeader = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text)`
  color: #fff;
  font-family: 'Poppins-Regular';
  font-size: 20px;
  line-height: 24px;
`;

type TouachContainerProps = {
  isFocused: boolean;
};
export const ToachContainer = styled(TouchableOpacity)<TouachContainerProps>`,
  margin: 7px;

  ${(props) =>
    props.isFocused &&
    `
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 4px;
    transform: scale(1.11);
    transition: all .2s ease-in-out;
    `}

`;
