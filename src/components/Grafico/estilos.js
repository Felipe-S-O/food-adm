import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({

    botao: {
      width: (width - 12) / 1.1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 5,
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
    titulo: {
      marginHorizontal: 16,
    },
    textoContainer: {
      width: (width - 12) / 1.4,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    texto: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    texto1: {
      color: tema.cor2,
      fontWeight: "700",
      marginBottom: 4
    },
    texto2: {
      color: tema.cor1,
      fontWeight: "700",
      marginBottom: 4
    },
    seta: {
      fontSize: 18,
      fontWeight: "700",
      color: tema.cor2,
    },
    areasumario: {
      width: (width - 12) / 1.1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginVertical: 8,
      padding: 10,
      backgroundColor: tema.fundoBotao,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }
  })
}