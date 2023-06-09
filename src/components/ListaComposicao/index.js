import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useState } from 'react';

export function ListaComposicao({ item, removerItem }) {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  return (
    <View style={estilo.area}>
      <View >
        <Text style={estilo.texto} >{item.produto}</Text>
        <View style={estilo.informacaoArea}>
          <Text style={[estilo.textoInformacao, { marginLeft: 1 }]}>Cod: {item.codigo}</Text>
          <Text style={estilo.textoInformacao}>Qtd: {item.quantidade.replace('.', ',')}</Text>
          <Text style={estilo.textoInformacao}>Custro: {item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
        </View>
      </View>
      <TouchableOpacity style={estilo.botao} onPress={() => removerItem(item.codigo)}>
        <Text style={estilo.seta}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}
