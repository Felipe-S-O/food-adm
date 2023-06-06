import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({

    pedidoArea: {
        backgroundColor: "#ad6800",
        width: (width - 12) / 3.4,
        height: (width - 12) / 3.7,
        margin: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    botaoArea: {
        width: (width - 12) / 3.4,
        height: (width - 12) / 3.8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    valor: {
        color: "#000",
        fontSize: 14,
        top: 10,

    },
    numero: {
        color: "#FFF",
        fontWeight: '600',
        fontSize: 22,
    },
})
