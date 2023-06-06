import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: tema.fundo
    },
    text: {
        color: '#fff'
    },
    tituloArea: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: "#ddb027",
        position: "absolute",
        marginBottom: 14,
        top: 0,
    },
    texto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 5,
    },
    menu: {
        padding: 10,
    }, 
})
}