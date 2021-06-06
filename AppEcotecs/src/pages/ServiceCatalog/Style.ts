import {StyleSheet,Dimensions} from 'react-native';

export const stylesInputSearch = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.9,
        height: 60,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        marginTop:-30,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#F0F0F5',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:15
    },
     icon:{
        marginRight: 16,
    },
}) 

export  const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:0
    },   
    title:{
        width: Dimensions.get('screen').width,
        paddingHorizontal:15,
        fontFamily:'Poppins_600SemiBold',
        fontSize:20,
        marginVertical:10,
        textAlign:'justify'
    },
    button:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        width:120,
        height:128,
        backgroundColor:'#F0F0F5',
        borderRadius:8,
        marginRight: 10,
        padding: 20,
        borderColor: '#10b04b',
        
    },
    buttonSelected:{
    borderColor: '#10b04b',
    borderWidth: 1,
    },
    textoButton:{
    fontSize:15,
    color:'black'
    },
    iconButton:{
    marginBottom:5,
    },
   
});


export  const stylesFlatlistServicos = StyleSheet.create({
    button:{
        flex:1,
        alignItems:'center',
        width:'100%',
        height:114,
        backgroundColor:'#F0F0F5',
        borderRadius:8,
        marginRight: 10,
        marginBottom: 10,
        flexDirection:'row'
    },
    iconButton:{
        width:'35%',
        height:'100%',
        borderRadius:8,
        marginRight:17
    },
    titleButton:{
      fontSize:15,
      fontWeight:'bold'
    },
    descriptionButton:{
        fontSize:10,
        color:'#3D3D4D',
        fontWeight:'bold'
    },
    providerButton:{
        fontSize:10,
        color:'#3D3D4D',
    },
    textPrice:{
        marginTop:8,
        fontSize:18,
        color:'#39B100',
    },
    contentContainer: {
        height:Dimensions.get('screen').height
      }
});