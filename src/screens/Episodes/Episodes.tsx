import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

import { Header } from '../../components/Header'
import { DisplayAnime } from '../../components/DisplayAnime'
import { Button } from '../../components/Button';

import { api } from '../../services/api'
import { AnimeProps, EpisodeProps } from '../../types';

import { Container, HeaderContainer, Scroll, Hero, Shadow, Title, Subtitle, Grid, Item, Section } from './styles';


export const Episodes: React.FC = ({ navigation, route }: any) => {
  const data: EpisodeProps = route.params.params;
  const [isLoading, setIsLoading] = useState(true);
  const [resolution, setResolution] = useState('360p');
  const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);


  const getEpisodeList = async () => {
    await api.post<EpisodeProps[]>('/fox/episodes', { universal_anime_id: data.universal_anime_id })
      .then((e) => {
        setEpisodes(e.data);
        setIsLoading(false);
      })
      .catch(e => setIsLoading(false));
  }

  useEffect(() => { getEpisodeList() }, [])

  const handleSelectAnime = async (data: EpisodeProps) => {
    await getHistory(data);
    navigation.navigate('Player', {
      params: data,
    })
  }

  const getHistory = async (data: EpisodeProps) => {
    const user = await AsyncStorage.getItem('@USER_ID');

    await api.post<AnimeProps[]>('/history/create', {
      universal_anime_id: data.universal_anime_id,
      key: uuid.v4(),
      user: JSON.parse(user || ''),
      episode: data.episode,
      watched_at: new Date(),
      last_viewed_at: new Date(),
      max_duration: 0,
      progress: 0
    })
      .then((e) => { console.log('criado') })
      .catch(e => { console.log('error', e) });
  }

  return (
    <Container>
      <HeaderContainer>
        <Header title={data.title} />
      </HeaderContainer>
      <Scroll>
        <Hero source={{ uri: data.image }} resizeMode='cover'>
          <Shadow>
            <Title>{data.title}</Title>
            <Subtitle>{data.alternative_name}</Subtitle>
          </Shadow>
        </Hero>
        <Grid>
          <Section>
            <Scroll horizontal>
              {isLoading ? <ActivityIndicator color="#F4791F" size={72} /> :
                episodes.map((item, index) => item.resolution === resolution && <DisplayAnime key={index} source={{ uri: item.image }} onPress={() => handleSelectAnime(item)} isEpisode episodeData={item} hasTVPreferredFocus={false} />)
              }
            </Scroll>
          </Section>
          <Item>
            <Button active={resolution === '360p'} title='360p' onPress={() => { setResolution('360p') }} width='120px' mb="5px" />
            <Button active={resolution === '720p'} title='720p' onPress={() => { setResolution('720p') }} width='120px' mb="5px" />
            <Button active={resolution === '1080p'} title='1080p' onPress={() => { setResolution('1080p') }} width='120px' mb="5px" />
          </Item>
        </Grid>
      </Scroll>
    </Container>
  );
}



