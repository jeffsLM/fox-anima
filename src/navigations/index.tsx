import * as React from 'react';
import { Home } from '../screens/Home/Home';
import { AnimeDetail } from '../screens/AnimeDetail/AnimeDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type ScreenNames = ["Home", "Auth"]

const Stack = createNativeStackNavigator();

export const Navigations: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AnimeDetail" component={AnimeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

