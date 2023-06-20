import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

  return StyleSheet.create({
    subTitulo: {
      fontWeight: "600",
      marginBottom: 4,
      marginTop: -8
    },
    checkbox: {
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: tema.cor1,
    },
    mensagemError: {
      fontSize: 12,
      color: '#ff0000',
      fontWeight: "600"
    },
    precoArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: -10,
      marginTop: 5
    },
    area: {
      width: '32%',
      marginEnd:20,
      marginBottom: 4
    },
    modalInput: {
      fontSize: 18,
      paddingHorizontal: 4,
      borderBottomWidth: 1,
      borderBottomColor: '#15AABF',
      marginBottom: 6
    },
    dropDownPicker: {
      width: '100%',
      justifyContent: 'center',
      borderColor: tema.cor1,
    },
    checkboxTaxa: {
      flexDirection: "row",
      justifyContent: "flex-end",
      paddingEnd: 10,
    },
    modalBotoes: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    botaoCamera:{
      marginBottom: 34,
    }
  })
}