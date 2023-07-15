import { BotaoCadastro, BotaoEstoque } from "../../components/BotaoCadastro";
import { TemaContext } from "../../contexts/TemaContext";
import { View, FlatList } from 'react-native'
import React, { useContext } from "react";
import { StatusBar } from "react-native";
import Topo from '../../components/Topo';
import { estilos } from './estilos'

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)
    const botoes = ['Saldo', 'Balanco', 'Produzir', 'Entrada avulsa', 'Receita']

    return (
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#139fb2' />
            <Topo texto='Estoque' />
            <FlatList
                numColumns={2}
                data={botoes}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <BotaoEstoque item={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )

}