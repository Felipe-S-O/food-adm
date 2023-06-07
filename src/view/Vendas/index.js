import { View, FlatList, StatusBar } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { Venda } from '../../components/Venda'
import { vendas } from './vendas';
import React, { useContext } from "react";
import { estilos } from './estilos'
import Topo from '../../components/Topo';

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#15AABF' />
            <Topo texto='Vendas' />
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