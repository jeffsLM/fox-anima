import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { AnimeProps } from '../../types/AnimeProps'
import { Hero } from '../Hero'
import { ItemCarousel } from './styles';

type HeroCorousel = {
  lastAnimes: AnimeProps[]
}

const HeroCorousel: React.FC<HeroCorousel> = ({ lastAnimes }) => {
  const { width } = Dimensions.get('window');

  return (
    <View style={{ height: width / 2, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={lastAnimes}
        autoPlayInterval={7000}
        scrollAnimationDuration={2000}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <ItemCarousel onPress={() => console.log('precionado')}>
            <Hero animeData={lastAnimes[index]} source={{ uri: lastAnimes[index].image }} onPress={() => console.log('precionado')} />
          </ItemCarousel>
        )}
      />
    </View>
  );
}

export { HeroCorousel };
