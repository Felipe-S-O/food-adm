import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CEP, CPFouCNPJ, Celular, Codigo, Texto } from "../CampoTexto";
import { useEffect } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { StyleSheet } from "react-native";

const schema = yup.object({
    nome: yup.string().required('Informe o nome do cliente'),
    email: yup.string().email('Email invalido'),
    celular: yup.string().min(14, 'O celular deve ter pelo menos 11 digitos').required('Informa o celular'),
    identifica: yup.string().min(14, 'O celular deve ter pelo menos 11 digitos'),
    cep: yup.string().min(9, 'O celular deve ter pelo menos 11 digitos')
})

export function ControlledInput({ cliente, setCliente, status, setStatus }) {
    const { control, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),

    });

    useEffect(() => {
        setValue('codigo', cliente.codigo)
        setValue('nome', cliente.nome)
        setValue('identifica', cliente.identifica)
        setValue('celular', cliente.celular)
        setValue('email', cliente.email)
        setValue('cep', cliente.cep)
        setValue('endereço', cliente.endereço)
        setValue('numero', cliente.numero)
        setValue('bairro', cliente.bairro)
        setValue('complemento', cliente.complemento)
    }, [])

    useEffect(() => {
        if (status == 'buscadados') {
            onSubmit()
            setStatus('')
        }
    }, [status])

    const onSubmit = handleSubmit(data => setCliente(data));

    return (
        <View>
            <Controller
                name='codigo'
                control={control}
                render={({ field: { value } }) => (
                    <Codigo value={value} />
                )}
            />

            <Controller
                name='nome'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='Nome do cliente*' value={value} descricao="Digite o nome do cliente" onChange={onChange} />
                )}
            />
            {errors.nome && <Text style={estilos.textoErro}

            >{errors.nome?.message}</Text>}
            <Controller
                name='identifica'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CPFouCNPJ onChange={onChange} value={value} />
                )}
            />
            {errors.identifica && <Text style={estilos.textoErro}>{errors.identifica?.message}</Text>}
            <Controller
                name='celular'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Celular onChange={onChange} value={value} />
                )}
            />
            {errors.celular && <Text style={estilos.textoErro}>{errors.celular?.message}</Text>}

            <Controller
                name='email'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='E-mail' value={value} descricao="Digite o e-mail" onChange={onChange} />
                )}
            />
            {errors.email && <Text style={estilos.textoErro}>{errors.email?.message}</Text>}
            <Controller
                name='cep'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CEP onChange={onChange} value={value} setValue={setValue} />
                )}
            />
            {errors.cep && <Text>{errors.cep?.message}</Text>}
            <Controller
                name='endereco'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='Endereço' value={value} descricao="Digite o endereço" onChange={onChange} />
                )}
            />
            <Controller
                name='numero'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='Número' value={value} descricao="Digite o número" onChange={onChange} />
                )}
            />
            <Controller
                name='bairro'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='Bairro' value={value} descricao="Digite o bairro" onChange={onChange} />

                )}
            />
            <Controller
                name='complemento'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Texto subTitulo='Complemento' value={value} descricao="Digite o complemento" onChange={onChange} />
                )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    textoErro: {
        alignSelf: 'flex-start',
        color: '#ff0000'
    }
})