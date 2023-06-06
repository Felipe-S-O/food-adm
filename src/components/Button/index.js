import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { estilos } from "../Button/estilos";
import { TemaContext } from "../../contexts/TemaContext";
import { ActivityIndicator } from "react-native-paper";

export default function Button({ title, onPress, isLoading = false }) {


    const { temaEscolhido } = useContext(TemaContext);

    const estilo = estilos(temaEscolhido)


    return (
        <TouchableOpacity style={title== 'Salvar'? estilo.modalBotaoSalvar : estilo.modalBotaoCancelar} onPress={onPress}>
            {isLoading ?
               <ActivityIndicator color="#FFF"/>
                :
                <Text style={estilo.textoBotao}>{title}</Text>
            }
        </TouchableOpacity>
    );
}
