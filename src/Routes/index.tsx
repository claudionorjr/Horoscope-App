import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import Signs from '../Screens/Signs';
import { Header } from '../Components';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => (
  <Navigator initialRouteName="Home">
    <Screen
      name="Home"
      component={HomeScreen}
      options={{ header: () => <Header title="Horoscopos diários" /> }}
    />
    <Screen
      name="Signs"
      component={Signs}
      options={{
        header: () => <Header title="Escolha seu Signo" isBackArrow />,
      }}
    />
  </Navigator>
);

export default AppRoutes;
