import React, { useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";

export default function DateTime({ horarioTexto, setHorarioAtual, setDataAtual, setDiaModalHorario, tipo }) {

    const [mode, setMode] = useState(tipo);
    const [show, setShow] = useState(false);
    const [data, setData] = useState('');
    const [horario, setHorario] = useState("-- : --");
 
    useEffect(() => {
        let tempDate = new Date();
        let fDate

        if ((tempDate.getMonth() + 1) <= 9 && tempDate.getDate() <= 9) {
            fDate = '0' + tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else if (tempDate.getDate() > 9 && (tempDate.getMonth() + 1) <= 9) {
            fDate = tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else if (tempDate.getDate() <= 9 && (tempDate.getMonth() + 1) > 9) {
            fDate = '0' + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()

        } else {
            fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear()
        }

        setData(fDate)

    }, [])

    const onChangeDate = (e, selecteDate) => {
        const currentDate = selecteDate || date;
        setShow(Platform.OS == "ios");
        setData(currentDate);

        let tempDate = new Date(currentDate);
        setDiaModalHorario(tempDate.getDay())
        let fDate

        if ((tempDate.getMonth() + 1) <= 9 && tempDate.getDate() <= 9) {
            fDate = '0' + tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

        } else if (tempDate.getDate() > 9 && (tempDate.getMonth() + 1) <= 9) {
            fDate = tempDate.getDate() + '/0' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

        } else if (tempDate.getDate() <= 9 && (tempDate.getMonth() + 1) > 9) {
            fDate = '0' + tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();

        } else {
            fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        }

        setData(fDate)
        setDataAtual(fDate)
    }

    const onChangeTime = (e, selecteDate) => {
        const currentDate = selecteDate || date;
        setShow(Platform.OS == "ios");
        setData(currentDate);

        let tempDate = new Date(currentDate);

        let fTime

        if (tempDate.getHours() <= 9 && tempDate.getMinutes() <= 9) {
            fTime = '0' + tempDate.getHours() + ':' + '0' + tempDate.getMinutes();

        } else if (tempDate.getHours() > 9 && tempDate.getMinutes() <= 9) {
            fTime = tempDate.getHours() + ':' + '0' + tempDate.getMinutes();

        } else if (tempDate.getHours() <= 9 && tempDate.getMinutes() > 9) {
            fTime = '0' + tempDate.getHours() + ':' + tempDate.getMinutes();

        } else {
            fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        }

        setHorarioAtual(fTime)
        // setHorario(fTime)
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode)
    }

    return (
        <View>

            <View>
                {tipo === 'date' ?
                    <TouchableOpacity onPress={() => showMode('date')} style={estilos.button}>
                        <Text style={estilos.text}>{data + ' 📆'}</Text>
                    </TouchableOpacity>
                    : horarioTexto == null ?
                        <TouchableOpacity onPress={() => showMode('time')} style={estilos.botao}>
                            <Text style={estilos.text}>{horario}</Text>
                        </TouchableOpacity> : <TouchableOpacity onPress={() => showMode('time')} style={estilos.botao}>
                            <Text style={estilos.text}>{horarioTexto}</Text>
                        </TouchableOpacity>
                }
            </View>
            {show && (
                <DateTimePicker
                    testID='dateTimePicker'
                    value={new Date()}
                    mode={mode}
                    is24Hour={true}
                    display='dafault'
                    onChange={tipo == 'date' ? onChangeDate : onChangeTime}
                />)}
        </View>
    )
}

const estilos = StyleSheet.create({
    button: {
        alignItems: "center",
        minWidth: 250,
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
    botao: {
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
    text: {
        color: "#5E9B71",
        fontWeight: "700",
    }

})