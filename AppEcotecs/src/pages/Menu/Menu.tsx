import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import EcoTec from '../../images/EcoTecTexto.png';
import { ScreenContainer } from 'react-native-screens';
import {styles, stylus} from './Styles'
function Menu({navigation}:any){
    return(
        <SafeAreaView>
            <View style = {styles.header}>
                <View style = {styles.viewTitle}>
                    <Feather name = {"log-out"} style = {styles.icons}/>
                    <Image source = {EcoTec}/>
                </View>
                <View>
                   <Feather name = {"user"} style = {styles.icons}/>
                </View>
            </View>
            <ButtonService navigation={navigation}/>
        </SafeAreaView>
    )
}
function ButtonService({navigation}:any){
    return(
        <View style={stylus.container}>
            <TouchableOpacity style={stylus.buttonServices} onPress={()=>{navigation.navigate("ServiceCatalog")}}>
                <Feather name = {"search"} style = {stylus.icons}/>
                <Text style={[{color:'white'}, stylus.text]}>
                    Encontrar serviços
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylus.buttonServices}>
                <Feather name = {"plus-circle"} style = {stylus.icons}/>
                <Text style={[{color:'white'}, stylus.text]}>
                    Meus serviços
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default Menu;