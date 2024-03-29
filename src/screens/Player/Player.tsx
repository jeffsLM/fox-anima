import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';

import { Header } from '../../components/Header'
import { AnimeList } from '../../components/AnimeList'
import PlayerControls from '../../components/PlayerControls'
import ProgressBar from '../../components/ProgressBar'

import { api } from '../../services/api'
import { EpisodeProps } from '../../types';

import { VideoContainer, ControlOverlay, ContentInLoading } from './styles';


const height = Dimensions.get('screen').width;
const width = Dimensions.get('screen').height;

export const Player: React.FC = ({ route }: any) => {
  const data: EpisodeProps = route.params.params;
  const videoRef = React.createRef<any>();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(true);
  const [inLoading, setInLoading] = useState(false);
  const [showControl, setShowControl] = useState(true);

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const handlePlay = () => {
    setTimeout(() => setShowControl(false), 500);
    setPlay(true);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 15);
    setCurrentTime(currentTime - 15);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 15);
    setCurrentTime(currentTime + 15);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  const onLoadEnd = (data: any) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = (data: any) => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };



  return (
    <>
      <VideoContainer>
        <Video source={{ uri: data.url, type: 'mp4' }}
          ref={videoRef}
          style={styles.backgroundVideo}
          controls={false}
          volume={100}
          paused={!play}
          onLoadStart={() => console.log('onLoadStart')}
          onBuffer={() => {
            setInLoading(!inLoading)
          }}
          resizeMode={'contain'}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </VideoContainer>
      {
        inLoading && (
          <ControlOverlay>
            <ContentInLoading>
              <ActivityIndicator color="#F4791F" size={72} />
            </ContentInLoading>
          </ControlOverlay>
        )
      }
      <PlayerControls
        onPlay={handlePlay}
        onPause={handlePlayPause}
        playing={play}
        skipBackwards={skipBackward}
        skipForwards={skipForward}
      />
      <ProgressBar currentTime={currentTime}
        duration={duration > 0 ? duration : 0}
        onSlideStart={handlePlayPause}
        onSlideComplete={handlePlayPause}
        onSlideCapture={onSeek} />
    </>
  );
}




var styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,

    height: height,
    width: width * 1.78,
    backgroundColor: 'black',
  },
});
