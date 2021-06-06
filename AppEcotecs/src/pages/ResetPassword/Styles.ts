import {StyleSheet,Dimensions} from 'react-native';

export const style = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:10,
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
        height:50,
        width:'90%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
    buttonCancel:{
        backgroundColor:'#C4C4C4',
        height:50,
        width:'90%',
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center'
    },
}) 
