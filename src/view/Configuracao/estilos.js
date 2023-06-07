import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: tema.tema
    },
    sairArea: {
      width: '90%',
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: tema.tema,
    },
    botao: {
      flexDirection: "row",
      alignItems: 'center',
      padding: 5,
      backgroundColor: tema.fundoBotao,
      borderRadius: 10,
      shadowColor: tema.borda,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    botaoTexto: {
      fontWeight: "700",
      fontFamily: "Roboto",
      fontSize: 12,
      color: tema.cor2,
    },
    switchArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
      backgroundColor: tema.tema,
      backgroundColor: tema.fundoBotao,
      borderRadius: 10,
      shadowColor: tema.borda,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textoSwitch: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.cor1,
      alignItems: 'center',
      marginLeft: '28%',
    },
    textoTema: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.cor2,
      alignItems: 'center',
    },
    switch: {
      width: '45%',
      marginLeft: '20%',
      marginEnd: '30%',
    }
  })

}