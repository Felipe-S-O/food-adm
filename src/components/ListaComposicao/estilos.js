import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({

    area: {
      width: (width - 12) / 1.3,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 10,
      marginVertical: 8,
      padding: 14,
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
      maxWidth: 220,
      fontSize: 18,
      fontWeight: "700",
    },
    textoInformacao: {
      color: "#5E9B71",
      marginLeft: 10,
    },
    seta: {
      fontSize: 18,
    },
    informacaoArea: {
      flexDirection: "row",
      justifyContent: "space-between",
    }
  })
}