import { Text, TouchableOpacity, View } from 'react-native';
import estilos  from './estilos'
export function Pedido({ item }) {

    return (
        <View style={estilos.pedidoArea}>
            <TouchableOpacity style={estilos.botaoArea} onPress={() => navigation.navigate('Conta')}>
                <Text style={estilos.numero}>C {item.numero}</Text>
                <Text style={estilos.valor}>{item.preco}</Text>
            </TouchableOpacity>
        </View>
    );
}
