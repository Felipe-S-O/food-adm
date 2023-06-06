import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({
    botao: {
      backgroundColor: tema.cor2,
      width: (width - 12) / 2.4,
      height: (width - 12) / 2.7,
      margin: 8,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    botaoTexto: {
      color: "#000",
      fontSize: 20,
      fontWeight: "700",
      lineHeight: 20,
    }
  })
}