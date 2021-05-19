// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import LogIn from './src/pages/LogIn/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Success from './src/pages/Success/Success';
import ServiceCatalog from './src/pages/ServiceCatalog/ServiceCatalog';
import ResetPassword from './src/pages/ResetPassword/ResetPassword';
import Congratulations from './src/pages/Congratulations/Congratulations';

import ServicePage from './src/pages/ServicePage/ServicePage';
import {useFonts,Poppins_600SemiBold,Poppins_100Thin_Italic,Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Mailsent from './src/pages/Mailsent/Mailsent';

export default function App() {
  const [fontsLoaded] = useFonts({Poppins_600SemiBold,Poppins_100Thin_Italic,Poppins_400Regular})

  if(!fontsLoaded)
    return <AppLoading />

  return (
      <>
        <StatusBar barStyle="light-content" />
        <ServiceCatalog />
      </>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//teste
//teste 2
//teste 3
