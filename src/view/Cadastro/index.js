import { View, FlatList } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { BotaoCadastro } from '../../components/BotaoCadastro';
import React, { useContext } from "react";
import { estilos } from './estilos'
import Topo from '../../components/Topo';
import { StatusBar } from 'react-native';

export default () => {

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)
    const botoes = ['produtos', 'categorias', 'combos', 'formasDePagamentos', 'clientes', 'fornecedores']

    return (
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#139fb2' />
            <Topo texto='Cadastro' />
            <FlatList
                numColumns={2}
                data={botoes}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <BotaoCadastro item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}