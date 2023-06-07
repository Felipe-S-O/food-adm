import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({
    cartao: {
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
    textoContainer: {
      marginHorizontal: 16,
    },
    texto: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 8,
    },
    preco: {
      color: "#5E9B71",
    },
    seta: {
      fontSize: 18,
      fontWeight: "700",
      color: "#FAB005",
    }
  })
}