import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Navigations } from './src/navigations'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigations />
    </GestureHandlerRootView>
  )
};

export default App;
