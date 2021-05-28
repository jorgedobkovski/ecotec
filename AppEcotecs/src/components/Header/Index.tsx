import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View,Image, StyleSheet,Dimensions, TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons';
import EcoTecTexto from '../../images/EcoTecTexto.png';


export default function Header( { navigation }:any ){
     const { navi }:any = useNavigation();
    return (
        <View style={styles.header}>
            <Image source={EcoTecTexto} style={styles.image} resizeMode="contain"></Image>
            <TouchableOpacity onPress={()=>{
                  navigation.goBack()
                }}>
                <Entypo name="forward" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#206A5D',
        justifyContent:'space-between',
        alignItems:'center',
        width: Dimensions.get('window').width,
        height:148,
        flexDirection:'row',
        paddingBottom:10, 
        paddingHorizontal: 15,
    },
    image:{
       
    },
    icon:{
        color:'white',
        fontSize:25,
        paddingHorizontal:20,
        transform: [
            {rotateY:"180deg"}
        ]
    },
})