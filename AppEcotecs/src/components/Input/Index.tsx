import React,{useState,useCallback} from 'react';
import {TextInput, TextInputProps, Text, StyleSheet,View} from 'react-native';
import {Feather, Entypo} from '@expo/vector-icons';

interface InputProps extends TextInputProps{
    title?: string;
    icon:string;
    placeholder?: string;
}

export default function Input({title,icon,placeholder,...rest}:InputProps){
    const [isFocused, setIsFocused] = useState(false);

     const handleInputFocus = useCallback(() => {
        setIsFocused(true);
        console.log("mudou focus ",isFocused)
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        console.log("mudou Blur ",isFocused)
    }, []);
    
    return (
        <View 
            style={
                [
                    styles.container,
                    isFocused ? styles.borderContainerFocus : styles.borderContainerBlur
                ]}
            >
            <Feather 
                name={icon}
                size={20}
                color={isFocused ? '#03ff5f' : '#10b04b'}
                style={styles.icon} />

            
            <TextInput 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                style={[ styles.input]} 
                placeholder={placeholder}
                value={()=>{}} {...rest}/>
        </ View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: '90%',
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginTop: 8,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#232129',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:15
    },
    borderContainerBlur:{
        borderColor: '#10b04b'
    },
    borderContainerFocus:{
        borderColor: '#03ff5f'
    },
    icon:{
         marginRight: 16,
    },
    input:{
        flex: 1,
        color: 'black',
        fontSize: 16,
        borderColor:'#eee',
        // font-family: 'RobotoSlab-Regular',
    }
})

