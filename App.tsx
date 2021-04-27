import React, { useEffect } from 'react';
import AppLoading from 'expo-app-loading'; // API de carregamento => Melhor forma para lidar com carregamento de fontes, realiza o await do carregamento de componentes
import * as Notifications from 'expo-notifications'; //API de notificacoes
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'; //API de fontes

import { PlantProps } from './src/libs/storage';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    const subscription = Notifications.addNotificationReceivedListener(
      async notifications => {
        const data = notifications.request.content.data.plant as PlantProps;
        console.log(data);
      });
    return () => subscription.remove();

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("Nots Agendadas");

    //   console.log(data);
    // }

  }, []);

  if (!fontsLoaded) //Caso a fonte n esteja carregada ainda fica carregada a tela de Splash
    return <AppLoading />

  return (
    <Routes /> //Caso os componentes estejam carregados ira chamar a tela de rotas
  )
}
