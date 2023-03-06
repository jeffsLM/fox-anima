import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MagnifyingGlassIcon } from "react-native-heroicons/solid";
import { Container, Img, ContainerImage, Title, ContentHeader, ToachContainer } from './styles';

import foxIcon from '../../assets/fox.png'

interface HeaderProps extends TouchableOpacityProps {
  title?: string;
  disabledSearch?: boolean;
  navigation: any;
}

const Header: React.FC<HeaderProps> = ({ title, navigation, disabledSearch = false, ...props }) => {

  const [isFocused, setIsFocused] = useState(false)
  const handleOnFocus = () => {
    setIsFocused(true)
  }
  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <Container>
      <ContentHeader>
        <ContainerImage>
          <Img resizeMode='contain' source={
            foxIcon
          } />
        </ContainerImage>
        <Title>Fox Anima {title ? ' | ' + title : ''}</Title>
      </ContentHeader>

      {!disabledSearch && <ToachContainer onFocus={handleOnFocus} onBlur={handleBlur} isFocused={isFocused} onPress={() => {
        navigation.navigate('Search')
      }}>
        <MagnifyingGlassIcon color="#FFF" fill="#FFF" size={24} />
      </ToachContainer>}
    </Container>
  );
};

export { Header };

