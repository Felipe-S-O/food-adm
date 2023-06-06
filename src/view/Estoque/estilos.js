import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.fundo
        },
        imageTopo: {
            height: 42,
            width: 90,
            alignItems: 'center',
            marginEnd: '-16%',

        },
        topoArea: {
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: tema.tema,
            justifyContent: 'space-around',
            position: "absolute",
            padding: 5,
            top: 0,
        },
        textoTopo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.texto,
            marginLeft: '-14%',
            alignItems: 'center',
        },
        areaCaixa: {
            flexDirection: 'row',
            top: '-62%',
        },
        text: {
            color: '#FFF',
            fontSize: 18,
            
        },
        botaoArea: {
            width: (width - 12) / 2.4,
            height: (width - 12) / 2.6,
            borderRadius: 10,
            backgroundColor: '#9b9b9b',
            alignItems: 'center',
            justifyContent: 'center',
            margin:4
        }
    })
}