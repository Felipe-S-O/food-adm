import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window')

export const estilos = (tema) => {

    return StyleSheet.create({
        centralizaModal: {
            flex: 1,
            flexDirection: "row",
            alignItems: "flex-end"
        },
        modal: {
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 32,
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
        modalTitulo: {
            color: '#15AABF',
            fontSize: 28,
            fontWeight: "600",
            marginBottom: 18,
        },
        modalInput: {
            fontSize: 18,
            marginBottom: 12,
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
            fontWeight: "600"
        },
        tituloHorario: {
            fontSize: 14,
            marginTop: 12,
            fontWeight: "600"
        },
        mensagemError: {
            fontSize: 12,
            color: '#ff0000',
            marginBottom: 8,
            fontWeight: "600"
        },
        modalBotoes: {
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
        },
        checkbox: {
            width: '100%',
            flexDirection: "row",
            justifyContent: "space-around",
            padding: 14,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: tema.cor1,
            marginBottom: 10,
        },
        filtro: {
            color: tema.cor2,
            fontSize: 40,
            marginEnd: '-80%',
            marginTop: -70,
            marginBottom: -50
        },
        filtroIcon: {
            color: tema.cor2,
            fontSize: 40,
        }
    })
}