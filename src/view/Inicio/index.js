import React, { useEffect } from "react";
import estilos from "./estilos";
import { View, LayoutAnimation, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inicio() {

    const navigation = useNavigation();

    function alteraTela() {
        navigation.reset({
            index: 0,
            routes: [{ name: "Login" }]
        });
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            alteraTela();
            clearInterval(intervalo);
        }, 4000)
    }, [])

    LayoutAnimation.spring();
    return (
        < View style={estilos.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#15AABF' />
            <Image
                source={require('../../assets/inottecCompleto.gif')}
                style={estilos.image}
            />
        </View>
    )
}