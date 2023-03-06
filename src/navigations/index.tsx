import * as React from 'react';
import { Home } from '../screens/Home/Home';
import { Player } from '../screens/Player/Player';
import { Episodes } from '../screens/Episodes/Episodes';
import { Search } from '../screens/Search/Search';
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
        <Stack.Screen name="Episodes" component={Episodes} />
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

