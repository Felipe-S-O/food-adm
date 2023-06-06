import { StyleSheet } from 'react-native'

export const estilos = (tema) => {

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.tema,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tituloArea: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: tema.tema,
      position: "absolute",
      marginBottom: 14,
      top: 0,
    },
    imageTopo: {
      height: 42,
      width: 90,
      alignItems: 'center',
      marginEnd: '-14%'

    },
    topoArea: {
      width: '100%',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: tema.tema ,
      justifyContent: 'space-around',
      position: "absolute",
      padding: 5,
      top: 0,
    },
    textoTopo: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.texto,
      marginLeft: -50,
      alignItems: 'center',
    },
    switchArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
     // backgroundColor: tema.fundo,
      borderRadius: 10,
     // borderBottomWidth: 1,
      //borderBottomColor: "#CBA122",
     // borderTopWidth: 1,
     // borderTopColor: "#CBA122",
      top: '-58%',
    },
    switch: {
      width: '45%',
      marginLeft: '38%',
      marginEnd: '30%',
    },
    textoSwitch: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.tema,
      alignItems: 'center',
      marginLeft: '22%',
    },
    pickerarea: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: 20,
      marginHorizontal: 16,
      marginVertical: 8,
      padding: 16,
      backgroundColor: tema.fundo,
      top: '-66%',
    },
    textoPicker: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.tema,
      alignItems: 'center',
      marginLeft: '30%',
    },
    picker: {
      width: '60%',
     // backgroundColor:  tema.fundoBotao,
      marginLeft: '24%',
      marginEnd: '30%',
    },
    itemPicker: {
      color: tema.tema,
    }
  })

}