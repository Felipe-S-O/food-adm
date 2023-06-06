import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.fundo,

        },
        row: {
            maxWidth: '100%',
            flexDirection: "row",
        },
        inputArea: {
            width: '100%',
            alignItems: 'center',
            marginBottom: '-22%'
        },
        input: {
            height: 70,
            width: '70%',
            backgroundColor: '#a5a5a5',
            marginBottom: 14,
            padding: 10,
            borderRadius: 5,
            color: tema.texto,
            fontSize: 37,
        },
        inputComanda: {
            fontSize: 18,
            color: tema.tema,
            marginLeft: '-46%'
        },
        inputMesa: {
            fontSize: 18,
            color: tema.tema,
            marginLeft: '-54%'
        },
        botao: {
            height: 63,
            width: '70%',
            backgroundColor: '#4894FF',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            marginTop: 18,
        },
        botaoTexto: {
            fontSize: 25,
            fontWeight: '400',
            color: '#FFFFFF',
        },
        areaBotao: {
            backgroundColor: tema.fundo,
            alignItems: 'center',
            padding: 16,
            paddingBottom: '22%',
        },
        imageTopo: {
            height: 42,
            width: 90,
            alignItems: 'center',
            marginEnd: '-20%'

        },
        topoArea: {
            width: '100%',
            height: 250,
            alignItems: 'baseline',
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
            marginLeft: '-18%',
            alignItems: 'center',
            top: -12,
        },
        carrosselArea: {
            position: "absolute",
            alignItems: 'center',
            justifyContent: 'center',
            top: 90,
        },
        textoCarrossel: {
            fontSize: 14,
            fontWeight: 'bold',
            color: tema.texto,
            alignItems: 'center',
            justifyContent: 'center',
            top: -35,
        },
        valorCarrossel: {
            fontSize: 26,
            fontWeight: 'bold',
            color: tema.texto,
            alignItems: 'center',
            justifyContent: 'center',
            top: -30,
        },
        tituloCarrossel: {
            fontSize: 12,
            fontWeight: 'bold',
            color: tema.texto,
            marginLeft: '-70%'


        },
        pie: {
            top: 200,
            width: '100%',
            alignItems: 'center',
        }

    })
}