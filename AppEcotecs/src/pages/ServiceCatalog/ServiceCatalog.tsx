import React,{useState, useCallback} from 'react';
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
import Header from "../../components/Header/Index";
import {Data, DataServicos} from './datas';

import {Feather,Entypo} from '@expo/vector-icons';
import Input from '../../components/Input/Index'
import fonts from '../../config/font';


interface teste {
    id:number,
    img:string,
    title:string,
    categoria:string,
    categoria_id:string,
    provider:string,
    preco:string,
}

const { height: viewportHeight } = Dimensions.get('window');
interface statusCatalog {
    status?: string | null
}

export default function ServiceCatalog(){
    
    const [onPressCatalog, setOnPressCatalog] = useState(false);
    const [selectedCatalog, setSelectedCatalog] = useState<string | null>(null);
    const [servicos, setServicos] = useState(DataServicos);

    const handleButton = (value:string) => {
        let data ;
        if(value !== selectedCatalog){
            data = DataServicos.filter(x => x.categoria_id === value);
            setOnPressCatalog(true);
            setSelectedCatalog(value)
            
        }else if(onPressCatalog == false){
            data = DataServicos.filter(x => x.categoria_id === value);
            setOnPressCatalog(true);
            setSelectedCatalog(value)
        }else{
            data = DataServicos;
            setOnPressCatalog(false);
            setSelectedCatalog(null)
        }
        setServicos(data);

        
        console.log('mudou',selectedCatalog)
        return true;
    }
       
    const _renderItemCatalog = ({item}:any) =>{
        return (
            <TouchableOpacity 
                style={[styles.button, selectedCatalog == item.id ? styles.buttonSelected : null]} 
                onPress={() => {handleButton(item.id)}}
            >
                <Image source={item.img} style={styles.iconButton} />
                <Text style={styles.textoButton}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    const _renderItemService = ({item}:any) => {
        return (
            <TouchableOpacity  
                style={[stylesFlatlistServicos.button]} 
                onPress={()=>{
                    //handleButton(item.id)
                }}
                >
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
            
            <Header />
            <TextInput style={styles.searchBar} placeholder="Qual serviço você procura?">                
            </TextInput>
            
                <Text style={styles.title}>Categorias</Text> 
                <FlatList
                    style={{height:300}}
                    horizontal
                    data={Data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={categorias => categorias.id}
                    renderItem={_renderItemCatalog}
                />
                             
               <Text style={styles.title}>Serviços</Text> 
               
                    <FlatList
                        style={{height:Dimensions.get('screen').height}}
                        horizontal={false}
                        data={servicos}
                        keyExtractor={servicos => servicos.id}
                        renderItem={_renderItemService}
                    />
            
                
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
      }
});


const stylesFlatlistServicos = StyleSheet.create({
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