import { StyleSheet } from "react-native";

export const estilos = (tema) => {

    return StyleSheet.create({
        modalBotaoSalvar: {
            backgroundColor: "#3f9e1c",
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
        textoBotao: {
            color: "#FFFFFF",
            fontWeight: "600"
        },

    })
}