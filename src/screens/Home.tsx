import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';

import { Header } from '../components/Header'
import { HeroCorousel } from '../components/HeroCorousel'
import { AnimeList } from '../components/AnimeList'

import { api } from '../services/api'
import { AnimeProps } from '../types/AnimeProps'

import { Container, HeaderContainer, Scroll } from './styles';


export const Home: React.FC = () => {
  const { width } = Dimensions.get('window');
  const [lastAnimes, setLastAnimes] = useState<AnimeProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getLastAnime = async () => {
    await api.post<AnimeProps[]>('/fox/last')
      .then((e) => {
        setLastAnimes(e.data);
        setIsLoading(false);
      })
      .catch(e => setIsLoading(false));
  }

  useEffect(() => { getLastAnime() }, [])

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Scroll>
        <View style={{ flex: 1 }}>
          {!isLoading && <AnimeList data={lastAnimes} />}
        </View>
      </Scroll>
    </Container>
  );
}



