import React from 'react';
import {Image, Text,View,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import EsqueceuSenha from '../../images/esqueceusenha.png';
import Input from '../../components/Input/Index';
import {style} from './Styles';

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

            <Input icon="mail" placeholder="E-mail" />
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

