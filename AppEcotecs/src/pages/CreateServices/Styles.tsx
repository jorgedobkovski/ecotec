import {StyleSheet,Dimensions} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        marginBottom:0,
        marginTop:50,
    },
    image: {
        height: Dimensions.get('window').width * 0.6,
        margin:0
    },
    card:{
        alignItems:'center',
        marginTop:0,
        height: 'auto',
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'black',
        marginBottom:25
    },
    button:{
        backgroundColor: '#206A5D',
        width: '90%',
        height:50,
        alignItems:'center',
        borderRadius:5,
        marginTop:15,
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    textButton:{
        color:'white',
        fontSize:20
    },
    link:{
        fontSize:20
    }
})



export const stylesInputMask = StyleSheet.create({
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
