import React from 'react';
import {Image, Text,View,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import EsqueceuSenha from '../../images/esqueceusenha.png';

export default function ResetPassword({navigation}:any){
    return (
        <View style={style.container}>
            <Image source={EsqueceuSenha} />
            <Text style={style.title}>
                Redefinir Senha
            </Text>
            <Text style={style.description}>
                Digite o e-mail asssociado a sua conta, e enviaremos um link para redefinir sua senha
            </Text>

            <TextInput style={style.input} placeholder="E-mail" />

            <TouchableOpacity style={style.buttonSend}>
                <Text style={{color:'white'}}>
                    Enviar
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonCancel} onPress={()=>{navigation.goBack()}}>
                <Text>
                    Cancelar
                </Text>
            </TouchableOpacity>
        </View>        
    );
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:10
    },
    title:{
        fontSize:23,
        fontWeight:'bold',
        marginBottom:15
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginBottom:15
    },
    input:{
        height:40,
        borderColor:'black',
        borderWidth:1,
        width:'90%',
        borderRadius:5,
        marginBottom:15
    },
    buttonSend:{
        backgroundColor:'#206A5D',
        height:37,
        width:'90%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
    buttonCancel:{
        backgroundColor:'#C4C4C4',
        height:37,
        width:'90%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
}) 
