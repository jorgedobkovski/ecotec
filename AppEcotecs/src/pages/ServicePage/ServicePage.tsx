import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
    ScrollView,
    SectionList,
    Platform,
    Linking
} from 'react-native';
import whatsapp from "../../images/whatsapp.png";
import Header from "../../components/Header/Index";
import fonts from '../../config/font';

const DataServicos =
    {
      id: "1",
      img:'https://static1.casapraticaqualita.com.br/articles/7/69/7/@/736-voce-pode-fazer-vasos-de-plantas-customi-article_content_img-3.jpg',
      title: "Vaso de planta com garrafa",
      description: "Vaso de plantas para deixar sua varanda um ambiente mais aconchegante...",
      materials: ["Tábua de madeira de 2m", "5 garrafas de vidro de tamanhos variados", "barbante"],
      categoria:'Artesanato',
      provider:'Diego Fernandes',
      providerImg:'https://blog.rocketseat.com.br/content/images/2019/05/profile.png',
      preco:"R$ 50,00",
    }

export default function ServicePage({navigation}:any){
    
return( 
    <SafeAreaView  style={styles.container}>
       
            <Header navigation={navigation} />      
            
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:DataServicos.img}}></Image>
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{DataServicos.title}</Text>
                    <Text style={styles.contentText}>{DataServicos.description}</Text>
                    <Text style={styles.subtitle}>Materiais Necessários</Text>
                    <Text style={styles.contentText}>{DataServicos.materials.join(', \n')}.</Text>

                    <TouchableOpacity style={styles.providerView} onPress={()=>{navigation.navigate("UserProfile")}}>
                        <Image style={styles.profileImg} source={{uri:DataServicos.providerImg}}></Image>
                        <View>
                            <Text style={styles.subtitle}>{DataServicos.provider}</Text>
                            <Text style={styles.contentText}>Ver perfil</Text> 
                        </View>
                    </TouchableOpacity>               
                </View>
                <View style={styles.cardBottom}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.contentText}>Valor do serviço</Text>
                        <Text style={styles.prizeText}>{DataServicos.preco}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>{Linking.openURL(`https://api.whatsapp.com/send?phone=5569993176455&text=Olá,%20meu%20amigo!`)}}>
                        <Image source={whatsapp}/>
                        <Text style={styles.buttonText}>Entrar em contato</Text>                                                
                    </TouchableOpacity>                
                </View>
            </View>  

    </SafeAreaView>
)}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:0
    },
    card:{
        backgroundColor:'white',
        marginTop: -30,
        
        width: Dimensions.get('screen').width*0.9,
        borderRadius: 8,
        borderWidth: 1,
        borderColor:'#E6E6F0',
        padding:-30,
        marginBottom: 30,
    },
    image:{
        borderRadius:8,
        height:142,
        width:'100%',
    },
    title:{
        color:"#223734",
        fontFamily:'Poppins_600SemiBold',
        fontSize:19,
    },
    subtitle:{
        color:"#223734",
        fontFamily:'Poppins_600SemiBold',
        fontSize:14,
    },
    contentText:{
        textAlign:"justify",
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        marginBottom:10,
    },
    cardContent:{
        paddingTop:20,
        paddingHorizontal:20,
        paddingBottom:5,
    },
    providerView:{
        width: Dimensions.get('screen').width,
        flexDirection:'row',
    },
    profileImg:{
        height:45,
        width:45,
        borderRadius:100,
        marginRight:10,
    },
    cardBottom:{
        backgroundColor:"#FAFAFC",
        alignItems:'center',
        width: '100%',
        padding:20,
        borderBottomRightRadius:8,
        borderBottomLeftRadius:8,
        borderTopWidth: 1,
        borderTopColor:'#E6E6F0',
    },
    prizeText:{
        color:"#206A5D",
        fontSize:14,
        fontFamily:'Poppins_600SemiBold',
        marginLeft:20,
    },
    button:{
        backgroundColor:'#206A5D',
        height:49,
        width:'100%',
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText:{
        color:'white',
        fontFamily:'Poppins_600SemiBold',
        marginLeft:10,        
    }

})