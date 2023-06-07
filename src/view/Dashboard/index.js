import { View, Text, Alert, Image, } from 'react-native'
import { PedidoContext } from "../../contexts/PedidoContext";
import { TemaContext } from "../../contexts/TemaContext";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import itens from './cards';
import { estilos } from './estilos'
import { Value } from 'react-native-reanimated';
import { Carrossel } from '../../components/Carrossel';
import { VictoryChart, VictoryLine, VictoryPie } from 'victory-native';
import { StatusBar } from 'react-native';
import Topo from '../../components/Topo';

export default function Dashboaed() {

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)


    return <>
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#15AABF' />
            <Topo texto='Dashboaed' />
            <View style={estilo.carrosselArea}>
                <Text style={estilo.textoCarrossel}>Vendas</Text>
                <Text style={estilo.valorCarrossel}>R$: 14.485,52</Text>
                <Text style={estilo.tituloCarrossel}>Dashboaed</Text>
            </View >
            <Carrossel data={itens} />

            <View>
                <VictoryChart>
                    <VictoryLine
                        data={[
                            { x: 1, y: 2 },
                            { x: 2, y: 3 },
                            { x: 3, y: 5 },
                            { x: 4, y: 4 },
                            { x: 5, y: 6 }
                        ]}
                    />
                </VictoryChart>
            </View>
        </View>

    </>
}