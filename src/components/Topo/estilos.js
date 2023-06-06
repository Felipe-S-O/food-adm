import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        imageTopo: {
            height: 42,
            width: 90,
            marginEnd: 10,
        },
        topoArea: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 5,
            marginBottom: 16,
            backgroundColor: tema.cor1,
        },
        textoTopo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: tema.texto,
            marginLeft: 10,
        },
    })
}