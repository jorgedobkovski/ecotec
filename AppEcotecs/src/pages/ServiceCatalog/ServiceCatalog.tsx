import React,{useState, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
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

import {styles,stylesFlatlistServicos,stylesInputSearch} from './Style';


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

export default function ServiceCatalog( { navigation }:any){
    
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
                  navigation.navigate('ServicePage')
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
            
            <Header navigation={navigation} />
            <View style={stylesInputSearch.container}>
                 <Feather 
                    name="search"
                    size={20}
                    style={stylesInputSearch.icon} />
                <TextInput  placeholder="Qual serviço você procura?"/>   
            </View>

            
            
                <Text style={styles.title}>Categorias</Text> 
                <FlatList
                    style={{height:400}}
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
