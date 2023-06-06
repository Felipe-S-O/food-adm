import { View, Text, TouchableOpacity, Image, Switch } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { TemaContext } from "../../contexts/TemaContext";
import { Feather } from 'react-native-vector-icons'
import Topo from "../../components/Topo";
import React, { useContext, useState } from "react";
import { estilos } from './estilos'

export default function Conta() {

    const navigation = useNavigation();

    const { temaEscolhido } = useContext(TemaContext);
    const [isEnabled, setIsEnabled] = useState(false);

    const estilo = estilos(temaEscolhido)

    return <>
        <View style={estilo.container}>

            <Topo texto='Conta            ' icon='arrow-left' />

        </View>
        <View style={estilo.informacao}>
            <View style={estilo.areaInformacao}>
                <View style={estilo.areaTitulo}>
                    <Text style={estilo.textoTitulo}>Informações Gerais</Text>
                    <Text style={estilo.textoTaxa}>Taxa e Serviço</Text>
                </View>
                <View style={estilo.areaSwith}>
                    <Switch
                       trackColor={{false: '#767577', true: '#81b0ff'}}
                       thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                       ios_backgroundColor="#3e3e3e"
                       onValueChange={ () => setIsEnabled(previousState => !previousState)}
                       value={isEnabled}
                    />
                </View>
            </View>
            <View style={estilo.areaInformacao}>
                <View style={estilo.areaTexto}>
                    <Text style={estilo.texto}>Subtotal:</Text>
                    <Text style={estilo.texto}>Taxa e Serviço:</Text>
                    <Text style={estilo.texto}>Pago: </Text>
                    <Text style={estilo.texto}>Desconto: </Text>
                    <Text style={estilo.textoTotal}>Total:</Text>
                </View>
                <View style={estilo.areaValor}>
                    <Text style={estilo.texto}>R$ 0,00</Text>
                    <Text style={estilo.texto}>R$ 0,00</Text>
                    <Text style={estilo.texto}>R$ 0,00</Text>
                    <Text style={estilo.textoTotal}>R$ 0,00</Text>
                </View>
            </View>
            <View style={estilo.areaBotao}>
                <TouchableOpacity
                    style={estilo.botao}
                    onPress={() => navigation.navigate('Home')} >
                    <Text style={estilo.botaoTexto}>Receber</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={estilo.botaoPreConta}
                    onPress={() => navigation.navigate('Home')} >
                    <Feather style={estilo.iconBotao} name="share-2" />
                </TouchableOpacity>
            </View>
        </View>
    </>
}
