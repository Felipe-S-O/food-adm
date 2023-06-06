import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.fundo
        },
        areaBotao: {
            flexDirection: 'row',
            marginBottom: 12
        },
        botao: {
            height: 54,
            width: '48%',
            backgroundColor: '#3082db',
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '1%',
            marginTop: 12,
        },
        botaoTexto: {
            fontSize: 22,
            fontWeight: '400',
            color: tema.texto,
        },

        botaoPreConta: {
            height: 54,
            width: 54,
            backgroundColor: '#9b9b9b',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            marginLeft: '14%',
            marginTop: 12
        },
        iconBotao: {
            fontSize: 28,
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
        textoTitulo: {
            color: tema.texto,
            fontSize: 14,
            fontWeight: '800',
            marginTop: 12,
            marginLeft: '4%'
        },
        textoTaxa: {
            color: tema.texto,
            fontSize: 12,
            fontWeight: '500',
            marginTop: 12,
            marginLeft: '20%'
        },
        areaTitulo: {
            flexDirection: 'row',
        },
        texto: {
            color: tema.texto,
            fontSize: 12,
            margin: 2,
        },
        textoTotal: {
            color: tema.texto,
            fontWeight: '800',
            fontSize: 14,
            margin: 2,
        },
        areaTexto: {
            alignItems: 'stretch',
            justifyContent: 'space-around',
        },
        areaSwith: {
            marginLeft: '-5%'
        },
        areaValor: {
            justifyContent: 'space-around',
            alignItems: 'stretch',
            marginLeft: '44%'
        },

    })
}