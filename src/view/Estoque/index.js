import { TemaContext } from "../../contexts/TemaContext";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { estilos } from './estilos'

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>
            <View style={estilo.topoArea} >
                <Text style={estilo.textoTopo}>Estoque</Text>
                <Image
                    source={require('../../assets/inottec-food-branco.png')}
                    style={estilo.imageTopo}
                />
            </View>
            <View style={estilo.areaCaixa}>
                <TouchableOpacity style={estilo.botaoArea}>
                    <Text style={estilo.text}>Saldo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.botaoArea}>
                    <Text style={estilo.text}>Entrada Avulsa</Text>
                </TouchableOpacity>
            </View>


        </View>
    )

}