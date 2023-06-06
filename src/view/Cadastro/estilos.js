import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: tema.tema
        },   
    })
}