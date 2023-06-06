import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { PedidoContext } from "../../contexts/PedidoContext";
import { useNavigation } from "@react-navigation/native";
import { TemaContext } from "../../contexts/TemaContext";
import { Feather } from 'react-native-vector-icons'
import { Produto } from '../../components/Produto';
import { produtos } from './produtos'
import Topo from "../../components/Topo";
import React, { useContext } from "react";
import { estilos } from './estilos'
import { ProdutosContext } from '../../contexts/ProdutosContext';

export default function LancamentoProduto() {

  const navigation = useNavigation();
  const { mesaContext, comandaContext } = useContext(PedidoContext);

  const [texto, setTexto] = React.useState('');

  const {
    temaEscolhido, moduloAtual
  } = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)

  // const { 
  //   usuario 
  //} = useContext(AutenticacaoContext)

  const {
    quantidade,
    abrirCategoria,
  } = useContext(ProdutosContext)



  return (
    <View style={estilo.container}>

      <Topo texto='Lançamento' icon='arrow-left' />

      <View style={estilo.tituloArea} >
        {moduloAtual === 'mesa' ?
          <View style={estilo.pedidoArea} >
            <View style={estilo.comandaArea}>
              <Text style={estilo.texto}>Comanda</Text>
              <Text style={estilo.numero}>{comandaContext}</Text>
            </View>
            <View style={estilo.mesaArea}>
              <Text style={estilo.texto}>Mesa</Text>
              <Text style={estilo.numero}>{mesaContext}</Text>
            </View>
          </View>
          :
          <View style={estilo.pedidoComandaArea} >
            <View style={estilo.comanda2Area}>
              <Text style={estilo.texto}>Comanda</Text>
              <Text style={estilo.numero}>{comandaContext}</Text>
            </View>
          </View>
        }

        <View style={estilo.botaoArea}>
          <TouchableOpacity style={estilo.botaoCarrinho} onPress={() => navigation.navigate('Carrinho')}>
            <Feather name="shopping-cart" style={estilo.carrinhoIcon} />
            {quantidade > 0 &&
              <View style={estilo.carrinhoQuantidadeArea}>
                <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>
              </View>}
          </TouchableOpacity>

          <TouchableOpacity style={estilo.botaoConta} onPress={() => navigation.navigate('Conta')}>
            <MaterialCommunityIcons name="file-text" style={estilo.contaIcon} />
          </TouchableOpacity>

        </View>

      </View>

      <View style={estilo.pequisarArea}>
        <TextInput
          style={estilo.input}
          onChangeText={setTexto}
          placeholder="Código ou nome"
          value={texto}
        />
        <TouchableOpacity style={estilo.botao}>
          <Feather name="search" size={24} color={temaEscolhido.texto} onPress={() => confirmar()} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={produtos}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={true} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}