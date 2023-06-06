import { View, Text, Image, FlatList } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { Venda } from '../../components/Venda'
import { vendas } from './vendas';
import React, { useContext } from "react";
import { estilos } from './estilos'

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>
            <View style={estilo.topoArea} >
                <Text style={estilo.textoTopo}>Vendas</Text>
                <Image
                    source={require('../../assets/inottec-food-branco.png')}
                    style={estilo.imageTopo}
                />
            </View>
            <View style={estilo.vendaArea}>
                <FlatList
                    data={vendas}
                    keyExtractor={item => Math.random()}
                    renderItem={({ item }) => <Venda item={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )

}