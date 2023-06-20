import React, { useContext, useState } from "react";
import { Text, View, Switch, Image, TouchableOpacity } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { Picker } from "@react-native-picker/picker";
import { Feather } from 'react-native-vector-icons'
import { auth } from '../../config/Firbase'
import Topo from '../../components/Topo';
import { useNavigation } from "@react-navigation/native";

export default function Configuracoes() {

    const navigation = useNavigation();

    const { temaAtual, temaEscolhido, salvarTemaNoDispositivo, moduloAtual, salvarModulo } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    const [selectedValue, setSelectedValue] = useState()

    function setModulo(itemValue) {
        setSelectedValue(itemValue)
        salvarModulo(itemValue)
    }

    function deslogar() {
        auth.signOut();
        navigation.replace('Login');
    }

    return (
        <TemaContext.Provider value={temaAtual}>
            <View style={estilo.container}>
                <Topo texto='Configuração' />
                <View style={estilo.sairArea}>
                    <TouchableOpacity style={estilo.botao} onPress={() => deslogar()} >
                        <Text style={estilo.botaoTexto}>sair </Text>
                        <Feather text='sair' name="log-out" size={32} color="#139fb2" />
                    </TouchableOpacity>
                </View>
                <View style={estilo.switchArea}>
                    <Text style={estilo.textoSwitch}>Tema: </Text>
                    <Text style={estilo.textoTema}>{temaAtual === 'escuro' ? 'escuro' : 'claro'}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: "#FAB005" }}
                        style={estilo.switch}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => temaAtual === 'escuro' ? salvarTemaNoDispositivo('claro') : salvarTemaNoDispositivo('escuro')}
                        value={temaAtual === 'escuro' ? true : false}
                    />
                </View>
            </View >
        </TemaContext.Provider>

    );
}
