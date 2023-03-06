import React, { useState } from 'react';
import { PlayIcon, PlayPauseIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from 'react-native-heroicons/solid'

import { Container, Toach } from './styles'

interface IFocusedProps {
  skipBackwards: boolean;
  playing: boolean;
  skipForwards: boolean;
}

const PlayerControls = (props: any) => {
  const { playing, onPlay, onPause, skipForwards, skipBackwards } = props;
  const [isFocused, setIsFocused] = useState<IFocusedProps>({ skipBackwards: false, playing: false, skipForwards: false });

  return (
    <Container>
      <Toach onPress={skipBackwards} onFocus={() => { setIsFocused({ ...isFocused, skipBackwards: true }) }}
        onBlur={() => { setIsFocused({ ...isFocused, skipBackwards: false }) }}>
        <ChevronDoubleLeftIcon color={isFocused.skipBackwards ? "#fff" : "#F4791F"} fill={isFocused.skipBackwards ? "#fff" : "#F4791F"} size={17} />
      </Toach>

      <Toach hasTVPreferredFocus onPress={playing ? onPause : onPlay} onFocus={() => { setIsFocused({ ...isFocused, playing: true }) }} onBlur={() => { setIsFocused({ ...isFocused, playing: false }) }}>
        {playing ? <PlayPauseIcon color={isFocused.playing ? "#fff" : "#F4791F"} fill={isFocused.playing ? "#fff" : "#F4791F"} size={17} /> : <PlayIcon color={isFocused.playing ? "#fff" : "#F4791F"} fill={isFocused.playing ? "#fff" : "#F4791F"} size={17} />}
      </Toach>

      <Toach onPress={skipForwards} onFocus={() => { setIsFocused({ ...isFocused, skipForwards: true }) }} onBlur={() => { setIsFocused({ ...isFocused, skipForwards: false }) }}>
        <ChevronDoubleRightIcon color={isFocused.skipForwards ? "#fff" : "#F4791F"} fill={isFocused.skipForwards ? "#fff" : "#F4791F"} size={17} />
      </Toach>
    </Container>

  );
};

export default PlayerControls;
