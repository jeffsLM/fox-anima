import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header'
import { AnimeList } from '../../components/AnimeList'

import { api } from '../../services/api'
import { AnimeProps } from '../../types';

import { Container, HeaderContainer, Scroll } from './styles';


export const Home: React.FC = ({ navigation }: any) => {
  const [lastAnimes, setLastAnimes] = useState<AnimeProps[]>([])
  const [isLoading, setIsLoading] = useState(true);


  const getLastAnime = async () => {
    await api.post<AnimeProps[]>('/fox/last')
      .then((e) => {
        setLastAnimes(e.data);
        setIsLoading(false);
      })
      .catch(e => setIsLoading(false));
  }

  const handleSelectAnime = (data: AnimeProps) => {
    navigation.navigate('AnimeDetail', {
      params: data,
    })
  }

  useEffect(() => { getLastAnime() }, [])

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Scroll>
        <View style={{ flex: 1 }}>
          {!isLoading && <AnimeList label='Lançamentos' autoFocus oddBackground data={lastAnimes} handleSelectAnime={handleSelectAnime} />}
        </View>
      </Scroll>
    </Container>
  );
}



