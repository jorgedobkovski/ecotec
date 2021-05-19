import {StyleSheet,Dimensions} from 'react-native';

export const styles =  StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        marginBottom:0
    },
    image: {
        height: Dimensions.get('window').width * 0.6,
        margin:0
    },
    card:{
        alignItems:'center',
        marginTop:0,
        // backgroundColor:'#206A5D',
        height: Dimensions.get('window').width * 0.7,
        width: 321,
        borderRadius:13
    },
    titulo:{
        fontSize:25,
        color:'black',
        marginBottom:25
    },
    button:{
        width: '90%',
        height: 60,
        paddingHorizontal:16,
        backgroundColor: '#03ff5f',
        borderRadius: 10,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        color: '#312e38',
        fontSize:18
    },
    link:{
        marginTop: 24,
        fontSize:20
    },
    forgotPasswordText:{
        color: '#000',
        fontSize: 16,
        // fontFamily: 'RobotoSlab-Regular';
    }
})
