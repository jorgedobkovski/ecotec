import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    header:{
        backgroundColor:'#206A5D',
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 5,
        paddingVertical: 35,
        height: 83,
        justifyContent: 'center'
    },
    icons:{
        fontSize: 25,
        color: 'white',
        marginRight: 30
    },
    viewTitle:{
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 5,
        height: 83
    }
})
export const stylus = StyleSheet.create({
    buttonServices:{
        backgroundColor:'#206A5D',
        fontSize:18,
        height:61,
        width:256,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%',
        flexDirection:'row'
    },
    icons:{
        fontSize:35,
        color:'white',
    },
    text:{
        fontSize:18,
        marginLeft:17
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'75%'
    },
});