import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.fundo
        },
        botao: {
            height: 54,
            width: '76%',
            backgroundColor: '#3082db',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 15,
        },
        botaoTexto: {
            fontSize: 22,
            fontWeight: '400',
            color: tema.texto,
        },
        informacao: {
            backgroundColor: tema.tema,
            alignItems: 'center',

        },
        areaInformacao: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        texto: {
            color: tema.texto,
            fontSize: 18,
            marginTop: 10,
            fontWeight: '600',
        },
        textoValor: {
            color: tema.texto,
            fontSize: 18,
            fontWeight: '600',
            marginTop: 10,
            marginLeft: '40%'
        },
        lista: {
            flex: 1,
            width: '100%',
            marginTop: '16%',
            backgroundColor: tema.fundo
        },
    })
}