import React, { useState, useEffect, useCallback } from 'react';
import {View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Input from '../../components/Input/Index';

export default function SignUp(){
    const [image, setImage] = useState("");
    

    useEffect(()=>{
        (async () => {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if(status !== 'granted'){
                alert('Ops!! precisamos que você permita o uso da camêra.')
            }
        })();
    },[])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <SafeAreaView style={styles.container} >
            <ScrollView>
                <View style={styles.card}>

                    <Text style={styles.titulo}>Cadastre-se</Text>
                    
                    <Input icon="mail" title='Nome' />
                    <Input icon="mail" title='Sobrenome' />
                     {/*<Input title='Telefone' />
                    <Input title='E-mail' />
                    <Input title='Senha'  secureTextEntry={true} />
                    <Input title='Confirmar Senha' secureTextEntry={true} /> */}
                    <TouchableOpacity style={styles.button} onPress={pickImage}>
                        <Text style={styles.textButton}>
                            Foto de perfil
                        </Text>
                    </TouchableOpacity>
                    <View>
                        {image !== "" && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>}
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>    
            </ScrollView>
            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        marginBottom:0,
        marginTop:50
    },
    image: {
        height: Dimensions.get('window').width * 0.6,
        margin:0
    },
    card:{
        alignItems:'center',
        marginTop:0,
        backgroundColor:'#206A5D',
        // height: Dimensions.get('window').height * 1,
        height: 'auto',
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'white',
        marginBottom:25
    },
    button:{
        backgroundColor: '#C4C4C4',
        width: '80%',
        height:37,
        alignItems:'center',
        borderRadius:5,
        marginTop:15
    },
    textButton:{
        fontSize:20
    },
    link:{
        fontSize:20
    }
})
