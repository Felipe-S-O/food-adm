import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

    return StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: tema.tema
        },
        carrosselArea: {
            width: '100%',
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: tema.cor1,
            marginTop:-16,
        },
        textoCarrossel: {
            fontSize: 18,
            fontWeight: 'bold',
            color:tema.titulo,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop:-50,            
        },
        valorCarrossel: {
            fontSize: 28,
            fontWeight: 'bold',
            color: tema.texto,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 16
        },
        tituloCarrossel: {
            fontSize: 18,
            fontWeight: "700",            
            color: tema.titulo,
            marginLeft: '-70%'
        },
    })
}