import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: tema.tema,
        },
        carrosselArea: {
            width: '100%',
            height: 160,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.cor1,
            marginTop: -16,
        },
        textoCarrossel: {
            fontSize: 18,
            fontWeight: "800",
            color: tema.cor2,
            alignItems: 'baseline',
            justifyContent: 'flex-start',
        },
        valorCarrossel: {
            fontSize: 28,
            fontWeight: 'bold',
            color: '#FFF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        tituloCarrossel: {
            fontSize: 14,
            fontWeight: "700",
            color: tema.cor2,
            marginLeft: '-70%'
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 2,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 3,
        },
        containerMenu: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 12,
        },
        tituloMenu: {
            color: "#194868",
            fontSize: 16,
            fontWeight: "700",
            color: tema.cor2,
        },
        botaoMenu: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            borderRadius: 25,
        },
        iconMenu: {
            color: tema.titulo,
            fontSize: 20,
        },
        filtro: {
            color: tema.cor2,
            fontSize: 40,
            marginEnd: '-80%',
            marginTop: -70,
            marginBottom: -50
        },
        filtroIcon: {
            color: tema.cor2,
            fontSize: 40,
        }
    })
}