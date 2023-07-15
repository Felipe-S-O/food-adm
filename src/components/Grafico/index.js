import { View, Text, Dimensions, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import React, { useContext, useState } from "react";
import { estilos } from './estilos'
import { VictoryPie } from 'victory-native';
import categoriesDados from './categoriesDados';

const { width, height } = Dimensions.get("window");

export default function Grafico() {

    const [selecioneCategoria, setSelecioneCategoria] = useState('teste')
    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    function categoriaData() {
        ///filtrar despesas com status "confirmado"
        let chartData = categoriesDados.map((item) => {
            let confirmarDespesas = item.expenses.filter(a => a.status == "C")
            var total = confirmarDespesas.reduce((a, b) => a + (b.total || 0), 0)

            return {
                name: item.name,
                y: total,
                despasasContagem: confirmarDespesas.length,
                color: item.color,
                id: item.id
            }
        })

        //filtrar categorias sem dados/despesas
        let filterChartData = chartData.filter(a => a.y > 0)

        //calcule as despesas totais
        let totalDespesas = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

        //Calcular porcentagem e preencher novamente os dados do gráfico
        let finalChartData = filterChartData.map((item) => {
            let porcentagem = (item.y / totalDespesas * 100).toFixed(0)
            return {
                label: `${porcentagem}%`,
                y: Number(item.y),
                despasasContagem: item.despasasContagem,
                color: item.color,
                name: item.name,
                id: item.id
            }
        })

        return finalChartData;
    }

    function setSelecioneCategoriaPeloNome(name) {
        let category = categoriesDados.filter(a => a.name == name)
        setSelecioneCategoria(category[0])
    }

    function menuChart() {
        let chartData = categoriaData()
        let colorScales = chartData.map((item) => item.color)
        let totalDespesasContagem = chartData.reduce((a, b) => a + (b.despasasContagem || 0), 0)


        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <VictoryPie
                    data={chartData}
                    colorScale={colorScales}
                    labels={(datum) => `${datum.y}`}
                    radius={({ datum }) => (selecioneCategoria && selecioneCategoria.name == datum.name) ? width * 0.4 : width * 0.4 - 26}
                    innerRadius={52}
                    labelRadius={({ innerRadius }) => (width * 0.4 + innerRadius) / 2.5}
                    style={{
                        labels: { fill: "#FFF", fontSize: 16, fontWeight: "700" },
                        parent: {
                            ...estilo.shadow
                        }
                    }}
                    width={width * 0.8}
                    height={width * 0.8}
                    events={[{
                        target: 'data',
                        eventHandlers: {
                            onPress: () => {
                                return [{
                                    target: 'labels',
                                    mutation: (props) => {
                                        let categoriaNome = chartData[props.index].name
                                        setSelecioneCategoriaPeloNome(categoriaNome)
                                    }
                                }]
                            }
                        }
                    }]}
                />
                <View style={{ position: 'absolute', top: '40%', left: '41%' }}>
                    <Text style={{ fontSize: 24, textAlign: 'center', color: "#FAB005", fontWeight: "700" }}>{totalDespesasContagem}</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: "#FAB005", fontWeight: "700" }}>Despesas</Text>
                </View>
            </View>
        )
    }

   

    return <>
        <ScrollView showsVerticalScrollIndicator={true}>
            {menuChart()}
            <View style={estilo.areasumario} >
                <Text style={estilo.texto1}>Categoria: teste </Text>
                <View style={estilo.textoContainer}>
                    <Text style={estilo.texto2}>COD: 01</Text>
                    <Text style={estilo.texto2}>Valor: R$:105</Text>
                </View>
            </View>
        </ScrollView>
    </>
}