import React from "react";
import estilos from './estilos'
import { Feather } from 'react-native-vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, ImageBackground } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";

const CustomizarDrawer = (props) => {

    const navigation = useNavigation();

    return (
        <View style={estilos.container}>
            <DrawerContentScrollView {...props}>
                <ImageBackground
                    source={require('../../assets/fundo2.png')}
                    style={estilos.ImageBackground}
                >
                    <Image
                        source={require('../../assets/inottec-food-branco.png')}
                        style={estilos.Image}
                    />
                    <Text style={{color:"#fff", fontSize:20}}>Olá Felipe</Text>
                  
                </ImageBackground>
                <View style={estilos.espaco} />
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={estilos.bordaSair}>
                <TouchableOpacity onPress={() => {navigation.navigate("Inicio" ) }} style={{ paddingVertical: 15 }}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <Feather name="log-out" size={22} color={'#6D6D6D'} />
                        <Text style={{fontSize:15, marginLeft: 5, color:'#6D6D6D'}}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomizarDrawer