import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import congratulations from '../../images/Congratulations.png';

export default function Congratulations(){
    return(
        <View style={style.Photo}>
            <Image source={congratulations} />
            <Text style={style.Title}>
                Parabéns!!!
            </Text>
            <Text style={style.Subtitle}>
                Seu serviço foi cadastrado com sucesso.
            </Text>
            <TouchableOpacity style={style.ButtonMenu}>
                <Text style={{color:'black', fontWeight:'bold'}}>
                    Voltar ao menu
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const style = StyleSheet.create({
    Photo:{
        alignItems:'center',
        padding:10
    },
    Title:{
        fontSize:23,
        fontWeight:'bold',
        marginTop: 43
    },
    Subtitle:{
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:95
    },
    ButtonMenu:{
        paddingVertical:5,
        paddingHorizontal:10,
        backgroundColor:'#FFC93C',
        fontWeight:'bold',
        height:37,
        width:150,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
}) 
