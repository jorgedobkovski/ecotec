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
    Platform
} from 'react-native';

import Artesanato from '../../images/artesanato.png';
import Eletronico from '../../images/eletronicos.png';
import Organico from '../../images/organicos.png';

import {Feather,Entypo} from '@expo/vector-icons';
import fonts from '../../config/font';

const DataServicos = [
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
  },
    {
      id: "2",
      img:"https://http2.mlstatic.com/D_NQ_NP_638715-MLB25309690941_012017-O.jpg",
      title: "Rebobinador eletrico",
      categoria:'Eletrônico',
      provider:'Claudio',
      preco:"R$ 60,00",
    },
    {
      id: "3",
      img:"https://cdn4.ecycle.com.br/cache/images/materias/Atitude/2011-06/como-fazer-sabao/50-750-fazer-sabao.jpg",
      title: "Sabão Caseiro da tia julia",
      categoria:'Orgânico',
      provider:'Tia julia',
      preco:"R$ 20,00",
    },
    {
      id: "4",
      img:"data:image/jpeg;base64,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",
      title: "Avião de papel",
      categoria:'Outros',
      provider:'Lucas galvão',
      preco:"R$ 0,50",
    },
    {
        id: "5",
        img:'https://static1.casapraticaqualita.com.br/articles/7/69/7/@/736-voce-pode-fazer-vasos-de-plantas-customi-article_content_img-3.jpg',
        title: "Vaso 1",
        categoria:'Artesanato',
        provider:'Diego Fernandes',
        preco:"R$ 50,00",
      },
      {
        id: "6",
        img:'https://static1.casapraticaqualita.com.br/articles/7/69/7/@/736-voce-pode-fazer-vasos-de-plantas-customi-article_content_img-3.jpg',
        title: "Vaso 2",
        categoria:'Artesanato',
        provider:'Diego Fernandes',
        preco:"R$ 50,00",
      },
      {
        id: "7",
        img:'https://static1.casapraticaqualita.com.br/articles/7/69/7/@/736-voce-pode-fazer-vasos-de-plantas-customi-article_content_img-3.jpg',
        title: "Vaso 3",
        categoria:'Artesanato',
        provider:'Diego Fernandes',
        preco:"R$ 50,00",
      },
      {
        id: "8",
        img:'https://static1.casapraticaqualita.com.br/articles/7/69/7/@/736-voce-pode-fazer-vasos-de-plantas-customi-article_content_img-3.jpg',
        title: "Vaso 4",
        categoria:'Artesanato',
        provider:'Diego Fernandes',
        preco:"R$ 50,00",
      },
  ];

  interface teste {
      id:number,
      img:string,
      title:string,
      categoria:string,
      provider:string,
      providerImg:string,
      preco:string,
  }

 const { height: viewportHeight } = Dimensions.get('window');

export default function MyProfile({ navigation }:any){
    
    const [selectedId, setSelectedId] = useState(null);
    const _renderItem= ({item}:any) => {
        return (
            <TouchableOpacity  style={stylesFlatlistServicos.buttonTest} onPress={() => {}}>
                <Image source={{uri:item.img}} style={stylesFlatlistServicos.iconButton} />
                    <View>
                        <Text style={stylesFlatlistServicos.titleButton}>{item.title}</Text>
                        <Text style={stylesFlatlistServicos.descriptionButton}>Serviço oferecido por:</Text>
                        <Text style={stylesFlatlistServicos.providerButton}>{item.provider}</Text>
                        <Text style={stylesFlatlistServicos.textPrice}>{item.preco}</Text>
                    </View>
            </TouchableOpacity>
        )
    }
   
    return(
        <SafeAreaView style={styles.container}>
                      
            
            <View style={styles.profileHeader}>
              <View style={styles.iconsHeader}>
                <Entypo name="home" style={styles.icon} />
                <Entypo name="forward" style={styles.icon} />                
              </View>              
              <Image style={styles.profilePhoto} source={{uri:'https://blog.rocketseat.com.br/content/images/2019/05/profile.png'}}/>
              <Text style={styles.profileName}>Diego Fernandes</Text>
              <Text style={styles.profileEmail}>testeeeeeeeeeeeeeeeee</Text>
              <Text style={styles.profileText}>Sou licenciado em Biologia. Trabalho com reciclagem e artesanato para trazer uma renda extra para casa.</Text>
            </View>     
                             
            <Text style={styles.title}>Seus serviços</Text> 

            <TouchableOpacity style={styles.buttonAdd} onPress={()=>{navigation.navigate("CreateService")}}>
                  <Text style={styles.buttonAddText}>+</Text>
            </TouchableOpacity>                  
                     
                <FlatList
                    style={{height:Dimensions.get('screen').height}}
                    horizontal={false}
                    data={DataServicos}
                    keyExtractor={servicos => servicos.id}
                    renderItem={_renderItem}>
                </FlatList>                                   
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingHorizontal:10,
        marginBottom:0
    },
    
    searchBar:{
        backgroundColor: '#F0F0F5',
        width: Dimensions.get('window').width * 0.9,
        height: 57,
        borderRadius: 8,
        marginTop:-30,
        paddingHorizontal:20,
    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
        paddingBottom: 10,
      },
      inputStyle: {
        flex: 1,
      },
      title:{
          width: Dimensions.get('screen').width,
          paddingHorizontal:15,
          fontFamily:'Poppins_600SemiBold',
          fontSize:20,
          marginVertical:10,
          textAlign:'justify'
      },
      buttonTest:{
          flex:1,
          alignItems:'center',
          justifyContent:'space-around',
          width:120,
          height:128,
          backgroundColor:'#F0F0F5',
          borderRadius:8,
          marginRight: 10,
          padding: 20,
      },
      textoButton:{
        fontSize:15,
        color:'black'
      },
      iconButton:{
        marginBottom:5,
      },
      profileHeader:{
        backgroundColor: '#206A5D',
        alignItems:'center',
        width: Dimensions.get('window').width,
        paddingTop:20, 
        paddingBottom:30,
        paddingHorizontal: 15,
      },
      profilePhoto:{
        height:100,
        width:100,
        borderRadius:100,
        marginBottom:10,
      },
      profileName:{
        color:'white',
        fontWeight:'bold',
      },
      profileEmail:{
        color:'white',
        marginBottom:20,
        textAlign:'justify',
      },
      profileText:{
        color:'white',
        textAlign:'justify',
      },
      iconsHeader:{
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        flexDirection:'row',
      },
      icon:{
        color:'white',
        fontSize:25,
        paddingHorizontal:20,
        transform: [
            {rotateY:"180deg"}
        ]
      },
      buttonAdd:{
        backgroundColor: '#206A5D',
        height: 60,
        width:60,
        borderRadius:100,
        position:'absolute',
        bottom:15,
        right:15,
        zIndex:1,
        shadowColor: "black",
        elevation: 3,
      },
      buttonAddText:{
        color: 'white',
        fontSize:40,
        textAlign:'center',
        justifyContent:'space-around',
        
      },
});


const stylesFlatlistServicos = StyleSheet.create({
    buttonTest:{
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