import styled from 'styled-components';
import { View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const { height, width } = Dimensions.get('screen');

type ContainerProps = {
  isFocused: boolean;
};
export const Selector = styled(TouchableOpacity)<ContainerProps>`
  width: ${width / 5 + 'px'};
  height: ${height / 2 + 'px'};
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

export const ContainerImage = styled(ImageBackground)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Header = styled(View)``;
export const Footer = styled(LinearGradient).attrs({
  colors: ['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.52)'],
  locations: [0, 1],
})`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const Title = styled(Text)`
  font-family: 'Poppins-Bold';
  font-size: 14px;
  color: #ffff;
`;

export const FlagCotainer = styled(LinearGradient).attrs({
  colors: ['#ED2D23', '#F4791F'],
  start: { x: 0.0, y: 0.25 },
  end: { x: 0.5, y: 1.0 },
})`
  border-radius: 50px;
  margin: 5px;
  padding: 3px;
`;

export const Flag = styled(Text)`
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 11px;
  font-family: 'Poppins-ThinItalic';
`;
