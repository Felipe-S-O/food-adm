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
            backgroundColor: '#15AABF',
        },
        textoTopo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#FFFFFF',
            marginLeft: 10,
        },
    })
}