import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: tema.tema
        },
        lettieOK: {
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            position: "absolute",
        },
    })
}