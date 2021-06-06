// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';

import LogIn from './src/pages/LogIn/LogIn';
import SignUp from './src/pages/SignUp/SignUp';
import Success from './src/pages/Success/Success';
import ServiceCatalog from './src/pages/ServiceCatalog/ServiceCatalog';
import ResetPassword from './src/pages/ResetPassword/ResetPassword';
import Congratulations from './src/pages/Congratulations/Congratulations';
import UserProfile from './src/pages/UserProfile/UserProfile'; 
import ServicePage from './src/pages/ServicePage/ServicePage';

import {useFonts,Poppins_600SemiBold,Poppins_100Thin_Italic,Poppins_400Regular} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Mailsent from './src/pages/Mailsent/Mailsent';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateService from './src/pages/CreateServices/CreateService';

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({Poppins_600SemiBold,Poppins_100Thin_Italic,Poppins_400Regular})

  if(!fontsLoaded)
    return <AppLoading />

    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator  
                initialRouteName="LogIn"
                screenOptions={{headerShown: false,cardStyle: { backgroundColor: '#FFF' },}}
                >
                <Stack.Screen name="LogIn" component={LogIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Success" component={Success} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Congratulations" component={Congratulations} />
                <Stack.Screen name="ServiceCatalog" component={ServiceCatalog} />
                <Stack.Screen name="ServicePage" component={ServicePage} />
                <Stack.Screen name="UserProfile" component={UserProfile} />
                <Stack.Screen name="CreateService" component={CreateService} />
            </Stack.Navigator>
        </NavigationContainer>
    );
//   return (
//       <>
//         <StatusBar barStyle="light-content" />
//         <ServiceCatalog navigation="ServicePage" />
//       </>
//   );

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
