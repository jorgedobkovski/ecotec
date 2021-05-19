import React from 'react';
import {View,Text, Image, StyleSheet, Dimensions, SafeAreaView,TextInput, TouchableOpacity} from 'react-native';
import Sucesso from '../../images/sucesso.png';

export default function Sucess(){
    return (
        <SafeAreaView style={styles.container} >
            <Image source={Sucesso} style={styles.image} resizeMode="contain" />

            <Text style={styles.mensagem}>Parabéns! {'\n'} Voce foi cadastrado com sucesso </Text>    

            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>
                    Login
                </Text>        
            </TouchableOpacity>   

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        marginBottom:0
    },
    image: {
        height: Dimensions.get('window').width * 0.8,
        margin:0
    },
    mensagem:{
        fontWeight:"bold",
        fontSize:25,
        color:'black',
        marginBottom:25,
        textAlign: 'center'
    },
    button:{
        backgroundColor: '#206A5D',
        width: '50%',
        height:37,
        alignItems:'center',
        borderRadius:5
    },
    textButton:{
        fontSize:20,
        color:'white'
    },
})
//lolo
