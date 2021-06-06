import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';
import LogoI from '../../images/logoI.png';
import Input from '../../components/Input/Index';
import {styles} from './Styles';

export default function LogIn({navigation}:any){
    const logado = true;
    return ( 
        <SafeAreaView style={styles.container} >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >

                <ScrollView
                    contentContainerStyle={{ flex: 1 }}
                    keyboardShouldPersistTaps="handled"     
                >
                    <View style={styles.container}>    
                        <Image source={LogoI} style={styles.image} resizeMode="contain" />

                        <View style={styles.card}>

                            <Text style={styles.titulo}>Login</Text>
                            <Input icon="mail" title='E-mail' keyboardType="email-address" />
                            <Input icon="lock" title='Senha'  secureTextEntry={true} />

                            <TouchableOpacity onPress={()=>{console.log(navigation); navigation.navigate("ServiceCatalog")}} style={styles.button}>
                                <Text style={styles.textButton}>
                                    Entrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={()=>{ navigation.navigate("SignUp")}} style={styles.link}>
                            <Text style={styles.forgotPasswordText}>Cadastre-se</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{navigation.navigate("ResetPassword")}} style={styles.link}>
                            <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.link}>Esqueceu sua senha?</Text> */}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}