import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'

export function Venda({ item }) {


  return (
    <TouchableOpacity style={estilos.cartao} onPress={() => viuProduto(item)}>
      <View style={estilos.textoContainer}>
        <Text style={estilos.texto} >{item.numero}</Text>
        <Text style={estilos.preco}>R$ {item.preco}</Text>
      </View>
      <Text style={estilos.seta}>❯</Text>
    </TouchableOpacity>

  );
}
