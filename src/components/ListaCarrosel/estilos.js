import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({

    botao: {
      width: (width - 12) / 2.4,
      height: (height - 12) / 7.2,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 16,
      marginVertical: 8,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    texto: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    texto1: {
      color: tema.cor2,
      fontWeight: "700",
    },
    texto2: {
      color: tema.cor1,
      fontWeight: "700",
    },

  })
}