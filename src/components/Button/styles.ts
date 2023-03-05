import styled from 'styled-components';
import { Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { PlayIcon } from 'react-native-heroicons/solid';

export const LinearGradientColor = styled(LinearGradient).attrs({
  colors: ['#ED2D23', '#F4791F'],
  start: { x: 0.0, y: 0.25 },
  end: { x: 0.5, y: 1.0 },
})`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 6.5px;
`;
export const Content = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  padding: 6.5px;
`;

export const Play = styled(PlayIcon)`
  margin-right: 15px;
`;

export const Flag = styled(Text)`
  color: #ffffff;
  font-weight: bold;
  font-family: 'Poppins-Regular';
`;

type ButtonProps = {
  isFocused: boolean;
  width: string;
  mb: string;
};
export const Button = styled(TouchableOpacity)<ButtonProps>`
  width: ${({ width }) => (width ? width : '15px;')};
  margin-bottom: ${({ mb }) => (mb ? mb : '0px;')};
  ${(props) =>
    props.isFocused &&
    `
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 2px
    `};
`;
