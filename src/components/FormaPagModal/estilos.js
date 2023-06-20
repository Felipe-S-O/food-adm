import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        centralizaModal: {
            flex: 1,
            width: "100%",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "flex-end",
        },
        modal: {
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 24,
            marginTop: 8,
            marginHorizontal: 16,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
        },
        areaCodigo: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        dropDownPicker: {
            width: (width - 12) / 1.2,
            borderColor: tema.cor1,
        },
        modalTitulo: {
            color: '#15AABF',
            fontSize: 28,
            fontWeight: "600",
            marginBottom: 18,
        },
        modalInput: {
            minWidth: 180,
            fontSize: 18,
            marginBottom: 8,
            paddingHorizontal: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#15AABF',
        },
        textoInputComissao: {
            minWidth: 180,
            fontSize: 18,
            marginBottom: 8,
            color:'#9b9b9b',
            paddingHorizontal: 4,
            borderBottomWidth: 1,
            borderBottomColor: '#15AABF',
        },
        modalHorario: {
            alignItems: "center",
            minWidth: 250,
            padding: 10,
            marginBottom: 10,
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
        modalHorarioTexto: {
            fontSize: 28,

        },
        modalSubTitulo: {
            fontSize: 14,
            marginBottom: 4,
            fontWeight: "600"
        },
        mensagemError: {
            fontSize: 12,
            color: '#ff0000',
            fontWeight: "600"
        },
        modalBotoes: {
            marginTop: 24,
            flexDirection: "row",
            justifyContent: "space-between"
        },
        modalBotaoSalvar: {
            backgroundColor: "#3f9e1c",
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: "center",
        },
        modalBotaoDeletar: {
            backgroundColor: "#e04141",
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: "center",
        },
        modalBotaoCancelar: {
            backgroundColor: "#2975c6",
            borderRadius: 5,
            padding: 8,
            width: 80,
            alignItems: "center",
        },
        modalBotaoTexto: {
            color: "#FFFFFF",
        },
        adicionarMemo: {
            height: 64,
            width: 64,
            margin: 24,
            backgroundColor: "#FAB005",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            position: "absolute",
            bottom: 0,
            right: 0,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
        adicionarMemoTexto: {
            fontSize: 32,
            lineHeight: 40,
            color: "#FFFFFF",
        },
        lettieOK: {
            width: '80%',
            alignItems: 'center',
            justifyContent: 'center',
            position: "absolute",
        }
    })
}