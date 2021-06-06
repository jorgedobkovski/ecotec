import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';
import EcoTec from '../../images/EcoTecTexto.png';
function Menu(){
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
        </SafeAreaView>
    )
}
function Button(){
    return(
        <View>
            <TouchableOpacity style={stylus.buttonServices}>
                <Feather name = {"search"} style = {stylus.buttonServices}/>
                <Text style={{color:'white'}}>
                    Encontrar serviços
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylus.buttonMyServices}>
                <Feather name = {"plus-circle"} style = {stylus.buttonMyServices}/>
                <Text style={{color:'white'}}>
                    Meus serviços
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        backgroundColor:'#206A5D',
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 5,
        paddingVertical: 35,
        height: 83,
        justifyContent: 'center'
    },
    icons:{
        fontSize: 25,
        color: 'white',
        marginRight: 30
    },
    viewTitle:{
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 5,
        height: 83
    }
})
const stylus = StyleSheet.create({
    buttonServices:{
        backgroundColor:'#206A5D',
        fontSize:18,
        height:61,
        width:256,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
    buttonMyServices:{
        backgroundColor:'#206A5D',
        fontSize:18,
        height:61,
        width:256,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    }
});
export default Menu;
