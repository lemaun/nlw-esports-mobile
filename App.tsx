import { useEffect, useRef } from 'react';
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter'
import { Subscription } from 'expo-modules-core'

import { Routes } from './src/routes'
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

import './src/services/notificationsConfigs'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'



export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })
  /*
  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()
  
  useEffect(() => {
    getPushNotificationToken()
  })
  */
  
  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
