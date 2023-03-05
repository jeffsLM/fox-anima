import styled from 'styled-components';
import { View, ScrollView, ImageBackground, SafeAreaView, Dimensions, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('screen').width;
const width = Dimensions.get('screen').height;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #171b2e;
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
  height: 100%;
`;

export const HeaderContainer = styled(View)`
  margin: 5px;
`;

export const Hero = styled(ImageBackground)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${height / 6 + 'px'};
  width: ${width * 2 + 'px'};
`;

export const Shadow = styled(LinearGradient).attrs({
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

export const Subtitle = styled(Text)`
  font-family: 'Poppins-Light';
  font-size: 11px;
  color: #ffff;
`;

export const Grid = styled(View)`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  /* height: ${height / 2 + 'px'}; */
`;

export const Item = styled(View)`
  max-width: 25%;
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
`;

export const Section = styled(View)`
  flex: 1;
  max-width: 75%;
  /* background: blue; */
  height: 100%;
  display: flex;
  flex-direction: row;
  width: ${width * 2 + 'px'};
`;
