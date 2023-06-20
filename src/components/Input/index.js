import { Text, View, StyleSheet } from "react-native";
import { TextInputMask } from 'react-native-masked-text';


export function CampoTexto({}) {
    return <>

        <View>
            <Text style={estilos.subTitulo}>{subTitulo}</Text>
            <TextInputMask
                style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                    : estilos.input}
                type={'money'}
                maxLength={10}
                placeholder={descricao}
                onChangeText={value => {
                    value = value.replace('R$', '');
                    value = value.replace('.', '');
                    value = value.replace(',', '.');
                    setValue(value)
                }}
                value={value}
            />
            <Text style={estilos.mensagemError}>{mensagemError}</Text>
        </View>

    </>
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
