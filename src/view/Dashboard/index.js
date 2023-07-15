import { View, Text, TouchableOpacity, StatusBar, ScrollView, FlatList } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import React, { useContext, useState } from "react";
import itens from './cards';
import { estilos } from './estilos'
import { Carrossel } from '../../components/Carrossel';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import Topo from '../../components/Topo';
import { BotaoCadastro } from '../../components/BotaoCadastro';
import Grafico from '../../components/Grafico';
import ProdutoModal from '../../components/ProdutoModal';
import Filtro from '../../components/Filtro';

export default function Dashboaed() {

    const [viewMode, setViewMode] = useState('chart')
    const botoes = ['produtos', 'categorias', 'combos', 'formasDePagamentos',
        'clientes', 'fornecedores']

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    function menuDeSecao() {
        return (
            <View style={estilo.containerMenu} >
                <View>
                    <Text style={estilo.tituloMenu}>{viewMode == 'chart' ? 'Categorias' : 'Relatorios'}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[estilo.botaoMenu, { backgroundColor: viewMode == 'chart' ? "#FAB005" : null }]}
                        onPress={() => setViewMode('chart')}
                    >
                        <AntDesign style={estilo.iconMenu} name="piechart" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[estilo.botaoMenu, { backgroundColor: viewMode == 'list' ? "#FAB005" : null }]}
                        onPress={() => setViewMode('list')}
                    >
                        <MaterialCommunityIcons style={estilo.iconMenu} name="view-grid" />
                    </TouchableOpacity>
                </View>
            </View >
        )
    }



    return <>
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#139fb2' />
            <Topo texto='Dashboaed' />
            <View style={estilo.carrosselArea}>
                <Filtro />
                <Text style={estilo.textoCarrossel}>Total de Vendas</Text>
                <Text style={estilo.valorCarrossel}>R$:14.485,52</Text>
            </View >
            <Carrossel data={itens} />

            {menuDeSecao()}
            {viewMode == 'list' ?
                <FlatList
                    style={{ marginBottom: 64 }}
                    numColumns={2}
                    data={botoes}
                    keyExtractor={item => Math.random(item)}
                    renderItem={({ item }) => <BotaoCadastro item={item} />}
                    showsVerticalScrollIndicator={false}
                />

                :
                <Grafico />
            }
        </View>

    </>
}