import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({

    area: {
      width: (width - 12) / 1.2,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 10,
      marginBottom: 7,
    },
    botao: {
      width: (width - 12) / 6.4,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
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
      fontSize: 14,
      fontWeight: "700",
    },
    textoInformacao: {
      color: "#5E9B71",
      fontWeight: "700",
    },
    mensagemError: {
      fontSize: 12,
      color: '#ff0000',
      fontWeight: "600",
      marginTop: -18,
      marginLeft: 20,
    },

  })
}