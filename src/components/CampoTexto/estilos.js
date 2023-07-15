import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({

        quantidadePermitida: {
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-around",
            marginBottom: 10,
            // marginTop: -8,
        },
        inputQuantidade: {
            fontSize: 18,
            paddingHorizontal: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#15AABF',
        },
        subTitulQuantidade: {
            color: '#15AABF',
            fontSize: 22,
            fontWeight: "600",
            marginEnd: -20,
        },
    })
}