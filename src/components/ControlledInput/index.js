import { View, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { CEP, CPFouCNPJ, Celular, Codigo, Texto } from "../CampoTexto";
import { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { StyleSheet } from "react-native";
import validaCpfCnpj from "../CampoTexto/validaCpfCnpj";

const schema = yup.object({
    nome: yup.string().required('Informe o nome do cliente'),
    email: yup.string().email('Email invalido'),
    celular: yup.string().min(14, 'O celular deve ter pelo menos 11 digitos').required('Informa o celular'),
    cep: yup.string().min(9, 'O cep deve ter pelo menos 9 digitos')
})

export function ControlledInput({ itemSelecionado, setCadastro, status, setStatus, codigo, idEmpresa }) {

    const [statusError, setStatusError] = useState()
    const { control, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            bairro: '',
            endereco: '',
            complemento: '',
            identifica: itemSelecionado.identifica,
            numero: '',
            idEmpresa: idEmpresa
        }
    });

    useEffect(() => {
        setValue('codigo', codigo)
    }, [])

    useEffect(() => {
        if (status == 'buscadados') {
            validaIdentifica()
        } else if (status == 'atualizar') {
            setValue('nome', itemSelecionado.nome)
            setValue('codigo', itemSelecionado.codigo)
            setValue('identifica', itemSelecionado.identifica)
            setValue('celular', itemSelecionado.celular)
            setValue('email', itemSelecionado.email)
            setValue('cep', itemSelecionado.cep)
            setValue('endereco', itemSelecionado.endereco)
            setValue('numero', itemSelecionado.numero)
            setValue('bairro', itemSelecionado.bairro)
            setValue('complemento', itemSelecionado.complemento)
        }
    }, [status])

    const onSubmit = handleSubmit(data => setCadastro(data));

    function validaIdentifica() {
        let value = watch('identifica')
        if (validaCpfCnpj(value)) {
            onSubmit()
            setStatus('salvar')
            setStatusError('')
        } else {
            setStatusError('erro')
            setStatus('erro identifica')
        }
    }

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
                    <Texto subTitulo='Nome *' value={value} descricao="Digite o nome" onChange={onChange} />
                )}
            />
            {errors.nome && <Text style={estilos.textoErro}>{errors.nome?.message}</Text>}

            <Controller
                name='identifica'
                control={control}
                render={({ field: { onChange, value } }) => (
                    <CPFouCNPJ onChange={onChange} value={value} />
                )}
            />
            {statusError == 'erro' && <Text style={estilos.textoErro}>CPF ou CNPJ invalido!</Text>}

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
            {errors.cep && <Text style={estilos.textoErro}>{errors.cep?.message}</Text>}
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