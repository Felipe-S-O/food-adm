import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import Topo from '../../components/Topo'
import { estilos } from './estilos'
import { ProdutosContext } from "../../contexts/ProdutosContext";
import { Produto } from "../../components/Produto";

export default function Carrinho() {

    const navigation = useNavigation();

    const {
        temaEscolhido
    } = useContext(TemaContext)
    const estilo = estilos(temaEscolhido)

    // const { 
    //  usuario 
    // } = useContext(AutenticacaoContext)

    const {
        quantidade,
        carrinho
    } = useContext(ProdutosContext)


    return <>
        <View style={estilo.container}>
            <Topo texto='Carrinho      ' icon='arrow-left' />
                <FlatList
                    data={carrinho}
                    keyExtractor={item => Math.random()}
                    renderItem={({ item }) => <Produto item={item} adicionar={true} />}
                    style={estilo.lista}
                    showsVerticalScrollIndicator={false}
                />
            <View>

            </View>
        </View>
        <View style={estilo.informacao}>
            <View style={estilo.areaInformacao}>

                <Text style={estilo.texto}>Subtotal:</Text>
                <Text style={estilo.textoValor}>R$ 0,00</Text>

            </View>
            <TouchableOpacity
                style={estilo.botao}
                onPress={() => navigation.navigate('Home')} >
                <Text style={estilo.botaoTexto}>Enviar</Text>
            </TouchableOpacity>
        </View>
    </>
}