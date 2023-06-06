import { Text, View, Image, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { useContext } from 'react';

export function Produto({ item, adicionar }) {

  const {
    viuProduto
  } = useContext(ProdutosContext)

  return (
    <View style={estilos.cartao}>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      {adicionar &&
        <View style={estilos.botaoArea}>
          <TouchableOpacity style={estilos.botaoRemover} onPress={() => viuProduto(item)}>
            <Text style={estilos.botaoTexto}>-</Text>
          </TouchableOpacity>
          <View style={estilos.quantidade} >
            <Text>{item.preco}</Text>
          </View>
          <TouchableOpacity style={estilos.botaoAdicionar} onPress={() => viuProduto(item)}>
            <Text style={estilos.botaoTexto}>+</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
}
