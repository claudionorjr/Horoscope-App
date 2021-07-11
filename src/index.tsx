import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './Routes';
import { ContextProvider } from './Hooks';

const AppManager = () => {
  const { colors } = useTheme();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.secondary} />
      <NavigationContainer>
        <ContextProvider>
          <AppRoutes />
        </ContextProvider>
      </NavigationContainer>
    </>
  );
};

export default AppManager;
