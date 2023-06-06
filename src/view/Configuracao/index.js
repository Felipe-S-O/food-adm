import React, { useContext, useState } from "react";
import { Text, View, Switch, Image, TouchableOpacity } from 'react-native'
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { Picker } from "@react-native-picker/picker";
import { auth } from '../../config/Firbase'
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
                <View style={estilo.topoArea} >
                    <Text style={estilo.textoTopo}>Configurações</Text>
                    <Image
                        source={require('../../assets/inottec-food-branco.png')}
                        style={estilo.imageTopo}
                    />
                </View>
                <TouchableOpacity style={estilos.botao} onPress={() => deslogar()} >
                    <Text style={estilos.botaoTexto}>Sair</Text>
                </TouchableOpacity>
                <View style={estilo.switchArea}>
                    <Text style={estilo.textoSwitch}>Tema</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        style={estilo.switch}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => temaAtual === 'escuro' ? salvarTemaNoDispositivo('claro') : salvarTemaNoDispositivo('escuro')}
                        value={temaAtual === 'escuro' ? true : false}
                    />
                </View>
                <View style={estilo.pickerarea}>
                    <Text style={estilo.textoPicker}>Modúlos</Text>
                    <Picker
                        selectedValue={moduloAtual}
                        style={estilo.picker}
                        onValueChange={(itemValue, itemIndex) => setModulo(itemValue)}
                    >
                        <Picker.Item label="Comanda/Mesa" value='mesa' style={estilo.itemPicker} />
                        <Picker.Item label="Comanda" value='comanda' style={estilo.itemPicker} />
                    </Picker>
                </View>
            </View >
        </TemaContext.Provider>

    );
}
