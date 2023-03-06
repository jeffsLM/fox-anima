import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import uuid from 'react-native-uuid';

import { Header } from '../../components/Header'
import { AnimeList } from '../../components/AnimeList'

import { api } from '../../services/api'
import { AnimeProps } from '../../types';

import { Container, HeaderContainer, Scroll } from './styles';


export const Home: React.FC = ({ navigation }: any) => {
  const [lastAnimes, setLastAnimes] = useState<AnimeProps[]>([])
  const [historyAnimes, setHistoryAnimes] = useState<AnimeProps[]>([])
  const [animes, setAnimes] = useState<AnimeProps[]>([])
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [isLoadingAnimes, setIsLoadingAnimes] = useState(true);


  const getLastAnime = async () => {
    setIsLoading(true);
    await api.post<AnimeProps[]>('/fox/last')
      .then(async (e) => {
        await getAnime()
        await getHistory()
        setLastAnimes(e.data);
        setIsLoading(false);
      })
      .catch(e => setIsLoading(false));
  }

  const getAnime = async () => {
    setIsLoadingAnimes(true);
    await api.post<AnimeProps[]>('/fox/animes')
      .then((e) => {
        setAnimes(e.data);
        setIsLoadingAnimes(false);
      })
      .catch(e => setIsLoadingAnimes(false));
  }
  const getHistory = async () => {
    setIsLoadingHistory(true);
    const user = await AsyncStorage.getItem('@USER_ID');
    await api.post<AnimeProps[]>('/history/list', { user: JSON.parse(user || '') })
      .then((e) => {
        setHistoryAnimes(e.data);
        setIsLoadingHistory(false);
      })
      .catch(e => setIsLoadingHistory(false));
  }

  const validateUser = async () => {
    try {
      const value = await AsyncStorage.getItem('@USER_ID')

      if (value === null) {
        try {
          const newUser = uuid.v4()
          const jsonValue = JSON.stringify(newUser)
          await AsyncStorage.setItem('@USER_ID', jsonValue)
        } catch (e) { }
      }
    } catch (e) { }
  }

  const handleSelectAnime = (data: AnimeProps) => {
    navigation.navigate('Episodes', {
      params: data,
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      getLastAnime(); validateUser();
    }, [navigation])
  );

  return (
    <Container>
      <HeaderContainer>
        <Header navigation={navigation} />
      </HeaderContainer>
      <Scroll>
        {isLoading || isLoadingHistory || isLoadingAnimes ? (
          <View style={{ flex: 1 }}>
            <ActivityIndicator color="#F4791F" size={72} />
          </View>
        ) : (
          <>
            <View style={{ flex: 1 }}>
              {!isLoading && <AnimeList keyToChildren='lançamentos' label='Lançamentos' autoFocus oddBackground data={lastAnimes} handleSelectAnime={handleSelectAnime} />}
            </View>
            <View style={{ flex: 1 }}>
              {!isLoadingHistory && <AnimeList keyToChildren='historico' label='Histórico' data={historyAnimes} handleSelectAnime={handleSelectAnime} />}
            </View>
            <View style={{ flex: 1 }}>
              {!isLoadingAnimes && <AnimeList keyToChildren='historico' label='Animes' data={animes} handleSelectAnime={handleSelectAnime} />}
            </View>
          </>
        )}
      </Scroll>
    </Container>
  );
}



