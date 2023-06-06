import { Text, View, TextInput, StyleSheet } from "react-native";

export default function CampoTexto({ subTitulo, mensagemError, setValue, value, descricao, tamanhoMedio, tipo }) {
    return (
        <View>
            <Text style={estilos.subTitulo}>{subTitulo}</Text>
            <TextInput
                style={tamanhoMedio ? [estilos.input, { width: '50%'}]
                    : estilos.input}
                onChangeText={texto => setValue(texto)}
                placeholder={descricao}
                value={value} 
                keyboardType={tipo}
                />
                
            <Text style={estilos.mensagemError}>{mensagemError}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
   
    input: {
        fontSize: 18,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#15AABF',
    },
    subTitulo: {
        fontSize: 14,
        fontWeight: "600"
    },
    mensagemError: {
        fontSize: 12,
        color: '#ff0000',
        marginBottom: 4,
        fontWeight: "600"
    },

});
