import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        area: {
            width: (width - 12) / 1.2,
            justifyContent: "center",
            marginHorizontal: 10,
        },
        subTitulo: {
            fontWeight: "600",
            marginBottom: 2
        },
        dropDownPicker: {
            borderColor: tema.cor1,
        },
        mensagemError: {
            fontSize: 12,
            color: '#ff0000',
            fontWeight: "600"
        },
        quatidadeArea: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        botaoAdicionar: {
            height: 35,
            padding: 8,
            marginTop: 10,
            borderRadius: 5,
            alignItems: "center",
            backgroundColor: tema.cor2,
        },
        textoBotao: {
            fontSize: 14,
            fontWeight: "600"
        },
        listaComposicaoArea: {
            maxHeight: 250,
            minHeight: 250,
            marginBottom: 28,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: tema.cor1,
        },
    })
}