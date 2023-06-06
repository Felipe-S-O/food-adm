import { Text, View,TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { useNavigation } from '@react-navigation/native';

export function Categoria({ item }) {

  const navigation = useNavigation();

  return (
    <View style={estilos.cartao}>
      <TouchableOpacity style={estilos.botaoContainer} onPress={() => navigation.navigate('LancamentoProduto')}>
        <Text style={estilos.texto} numberOfLines={1}>{item.texto}</Text>
      </TouchableOpacity>
        <Text style={estilos.textoIcon}>❯</Text>
    </View>
  );
}
