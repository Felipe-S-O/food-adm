import { Text, View, TouchableOpacity } from 'react-native';
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import { useContext } from 'react';

export function Venda({ item }) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  return (
    <TouchableOpacity style={estilo.cartao} onPress={() => viuProduto(item)}>
      <View style={estilo.textoContainer}>
        <Text style={estilo.texto} >{item.numero}</Text>
        <Text style={estilo.preco}>R$ {item.preco}</Text>
      </View>
      <Text style={estilo.seta}>❯</Text>
    </TouchableOpacity>
  );
}
