import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: tema.tema
        },
    })
}