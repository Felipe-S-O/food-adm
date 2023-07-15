import { useForm, Controller } from "react-hook-form";
import { Max, Min, Texto } from "../CampoTexto";
import { useContext, useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import validaCpfCnpj from "../CampoTexto/validaCpfCnpj";
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import DropDownPicker from 'react-native-dropdown-picker';
import { vendas } from "./vendas";

import { Venda } from "../Venda";
import { Lista } from "../../CampoInput";





export function FormeCombo() {

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)
    const [statusError, setStatusError] = useState()


    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [value, setValue] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Preço', value: '01' },
        { label: 'Somar', value: '02' },
        { label: 'Somar', value: '03' },
        { label: 'Ignorar', value: '05' },
    ]);
    const [items, setItems] = useState([
        { label: 'Preço do produto de maior valor', value: '01' },
        { label: 'Somar o preço dos produtos ao produto principal', value: '02' },
        { label: 'Somar os preços e dividir pela qtde de prod selecionados', value: '03' },
        { label: 'Ignorar o preço dos produtos e considerar apenas o preço do prod. principal', value: '05' },
    ]);

    const { control, handleSubmit, watch, formState: { errors } } = useForm({


    });




    const onSubmit = handleSubmit(data => setCadastro(data));



    return (
        <View>
            <View style={estilo.quantidadePermitida}>
                <Controller
                    name='min'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Min onChange={onChange} value={value} />
                    )}
                />
                {errors.min && <Text style={estilo.textoErro}>{errors.min?.message}</Text>}
                <Controller
                    name='max'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Max onChange={onChange} value={value} />
                    )}
                />
                {errors.max && <Text style={estilo.textoErro}>{errors.max?.message}</Text>}
            </View>

            <Controller
                name='max'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Lista onChange={onChange} value={value} />
                )}
            />
            {errors.max && <Text style={estilo.textoErro}>{errors.max?.message}</Text>}



        </View>
    )
}

