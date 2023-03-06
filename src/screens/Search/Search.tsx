import React, { useState, useRef } from 'react';
import { ActivityIndicator } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid';


import { Header } from '../../components/Header'
import { DisplayAnime } from '../../components/DisplayAnime'

import { api } from '../../services/api'
import { AnimeProps } from '../../types';

import { Container, HeaderContainer, Scroll, Input, ContainerInput, ButtonNext, Divider, Label } from './styles';


export const Search: React.FC = ({ navigation }: any) => {
  const [text, onChangeText] = useState();
  const [loading, setIsLoading] = useState(false);
  const [animes, setAnimes] = useState<AnimeProps[]>([]);

  const [isFocused, setIsFocused] = useState({ input: false, button: false, indexTerm: false })
  const ref_input = useRef<any>();

  const getHistory = async () => {
    setIsLoading(true);
    await api.post<AnimeProps[]>('/fox/search', { search: text })
      .then((e) => {
        setAnimes(e.data);
        setIsLoading(false);
      })
      .catch(e => setIsLoading(false));
  }

  const deepSearch = async () => {
    setIsLoading(true);
    await api.post<AnimeProps[]>('/queue/create', { term: text, process: 'N', created_at: new Date(), updated_at: new Date() })
      .then(async (e) => {
        await chage()
        // setIsLoading(false)
      })
      .catch(e => setIsLoading(false));
  }

  const chage = async () => {
    await api.post<AnimeProps[]>('/populate/charge', {})
      .then(async (e) => {
        await getHistory()
        setIsLoading(false)
      })
      .catch(e => { console.log('erro', e); setIsLoading(false) });
  }

  const handleSelectAnime = (data: AnimeProps) => {
    navigation.navigate('Episodes', {
      params: data,
    })
  }

  return (
    <Container>
      <HeaderContainer>
        <Header disabledSearch navigation={navigation} />
      </HeaderContainer>
      <ContainerInput>
        <Divider>
          <ButtonNext
            hasTVPreferredFocus
            isFocused={isFocused.input}
            onFocus={() => { setIsFocused({ ...isFocused, input: true }) }}
            onBlur={() => { setIsFocused({ ...isFocused, input: false }) }}
            onPress={() => {
              ref_input.current.focus()
            }}
          >
            <Input
              ref={ref_input}
              onChangeText={(e) => { onChangeText(e) }}
              value={text}
              placeholder="teste"
              returnKeyType="next"
              hasTVPreferredFocus
            />
          </ButtonNext>
          <ButtonNext
            isFocused={isFocused.button}
            onPress={() => { getHistory() }}
            onFocus={() => { setIsFocused({ ...isFocused, button: true }) }}
            onBlur={() => { setIsFocused({ ...isFocused, button: false }) }}
          >
            <MagnifyingGlassIcon color="#fff" fill="#fff" size={24} />
          </ButtonNext>
        </Divider>
        <Divider>
          <ButtonNext
            isFocused={isFocused.indexTerm}
            onPress={() => { deepSearch() }}
            onFocus={() => { setIsFocused({ ...isFocused, indexTerm: true }) }}
            onBlur={() => { setIsFocused({ ...isFocused, indexTerm: false }) }}
          >
            <Label>
              Deep Search
            </Label>
          </ButtonNext>
        </Divider>
      </ContainerInput>
      <Scroll horizontal>
        {loading ? <ActivityIndicator color="#F4791F" size={72} /> :
          animes.map((item, index) => <DisplayAnime key={index} source={{ uri: item.image }} onPress={() => handleSelectAnime(item)} animeData={item} hasTVPreferredFocus={index === 0} />)
        }
      </Scroll>
    </Container>
  );
}



