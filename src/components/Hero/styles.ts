import styled from 'styled-components';
import { View, ImageBackground, Dimensions, Text } from 'react-native';

const { height, width } = Dimensions.get('window');
export const Container = styled(View)`
  flex: 1;
  /* opacity: 0.5; */
`;

export const ContainerImage = styled(ImageBackground).attrs({
  imageStyle: { opacity: 0.45 },
})`
  height: ${height / 2 + 'px'};
`;

export const ContainerAnimeText = styled(View)`
  flex: 1;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;
export const Title = styled(Text)`
  font-family: 'Poppins-Bold';
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  opacity: 1.5;
  color: #ffffff;
  margin-bottom: 5px;
`;
export const Resume = styled(Text)`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  margin-bottom: 10px;

  max-width: ${width / 1.75 + 'px'};

  color: #ffffff;
`;
