import { View, FlatList, StatusBar } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { Venda } from '../../components/Venda'
import { vendas } from './vendas';
import React, { useContext } from "react";
import { estilos } from './estilos'
import Topo from '../../components/Topo';
import { BotaoFinaceiro } from '../../components/BotaoCadastro';

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)
    const botoes = ['Espelho de caixa', 'Contas de clientes', 'Contas a receber', 'Contas a pagar']

    return (
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#139fb2' />
            <Topo texto='Financeiro' />
            <FlatList
                numColumns={2}
                data={botoes}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <BotaoFinaceiro item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}