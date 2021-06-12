import React, { useState, useEffect, useCallback } from 'react';
import {View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';

import {Feather} from '@expo/vector-icons';

import DropDownPicker from 'react-native-dropdown-picker';

import * as ImagePicker from 'expo-image-picker';
import {styles, stylesInputMask} from './Styles';
// import TextInputMask from 'react-native-text-input-mask';

import {TextInputMask} from 'react-native-masked-text';

import Input from '../../components/Input/Index';

export default function CreateService({navigation}:any){
    const [image, setImage] = useState("");
    const [texto, setTexto] = useState("00000");

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'},
        {label: 'CU', value: 'CU'},
        {label: 'CU2', value: 'CU2'},
        {label: 'CU3', value: 'CU3'}
    ]);


    const [isFocused, setIsFocused] = useState(false);

     const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    
    useEffect(()=>{
        (async () => {
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if(status !== 'granted'){
                alert('Ops!! precisamos que você permita o uso da camêra.')
            }
        })();
    },[])

    const handleText = ({value}:any) =>{
        setTexto(value)
    }

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

                    <Text style={styles.titulo}>Cadastro {'\n'} seu serviço</Text>
                    
                    <Input placeholder="Título do serviço" icon="type" title='titulo' />
                    <Input placeholder="Descrição do serviço" icon="align-left" title='descricao' />
                    <Input placeholder="Materiais utilizados" icon="list" title='materiais'/> 
                    <Input placeholder="Valor" icon="dollar-sign" title='valor'/> 
                    {/* <TextInputMask
                        onChangeText={(formatted, extracted) => {
                            console.log(formatted) // +1 (123) 456-78-90
                            console.log(extracted) // 1234567890
                        }}
                        mask={"+1 ([000]) [000] [00] [00]"}
                    /> */}
                    <View style={[stylesInputMask.container,isFocused ? stylesInputMask.borderContainerFocus : stylesInputMask.borderContainerBlur]}>
                        <Feather style={stylesInputMask.icon} name='dollar-sign'  />
                         <TextInputMask
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            style={stylesInputMask.input}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$',
                                suffixUnit: ''
                            }}
                            type={'money'}
                            onChangeText={text => setTexto(text)}
                            value={texto}
                        /> 
                    </View>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        multiple={true}
                        min={0}
                        max={5}
                        placeholder="Selecione um item"
                        />
                    
                    <TouchableOpacity style={styles.button} onPress={pickImage}>
                        <Text style={styles.textButton}>
                            Foto de perfil
                        </Text>
                    </TouchableOpacity>

                    <View>
                        {image !== "" && <Image source={{ uri: image }} style={{ width: 200, height: 200 }}/>}
                    </View>

                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Success")}}>
                        <Text style={styles.textButton}>
                            Cadastrar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack()}}>
                        <Text style={styles.textButton}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </View>    
            </ScrollView>
            

        </SafeAreaView>
    );
}
