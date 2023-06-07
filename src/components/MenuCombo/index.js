import { Text, TouchableOpacity, View } from 'react-native';
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import { useContext } from 'react';

export function MenuCombo({ passo, setPasso }) {

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>
            <TouchableOpacity style={passo === 1 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(1)}>
                <Text style={passo === 1 ? [estilo.texto, { color: '#000' }]
                    : estilo.texto} >1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={passo === 2 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(2)}>
                <Text style={passo === 2 ? [estilo.texto, { color: '#000' }]
                    : estilo.texto} >2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={passo === 3 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(3)}>
                <Text style={passo === 3 ? [estilo.texto, { color: '#000' }]
                    : estilo.texto} >3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={passo === 4 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(4)}>
                <Text style={passo === 4 ? [estilo.texto, { color: '#00' }]
                    : estilo.texto} >4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={passo === 5 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(5)}>
                <Text style={passo === 5 ? [estilo.texto, { color: '#000' }]
                    : estilo.texto}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={passo === 6 ? [estilo.passoArea, { backgroundColor: "#FAB005" }]
                : estilo.passoArea} onPress={() => setPasso(6)}>
                <Text style={passo === 6 ? [estilo.texto, { color: '#000' }]
                    : estilo.texto} >6</Text>
            </TouchableOpacity>
        </View>
    );
}
