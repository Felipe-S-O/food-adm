import React, { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import Topo from "../../components/Topo";
import { View, Text} from 'react-native'
import {estilos} from './estilos'

export default () => {

    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)

    return (
        <View style={estilo.container}>

             <Topo texto='Fiado      ' icon='list' />
            
            <Text style={estilo.text}>Fiado</Text>
        </View>
    )

}