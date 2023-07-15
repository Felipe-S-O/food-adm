import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { TextInputMask } from 'react-native-masked-text';
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { ActivityIndicator } from "react-native-paper";
import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useState } from "react";
import axios from "axios";



export function CampoTexto({ subTitulo, mensagemError, setValue, value, descricao, tamanhoMedio, tipo }) {
    return <>
        {
            tipo == 'maney' ?
                <View>
                    <Text style={estilos.subTitulo}>{subTitulo}</Text>
                    <TextInputMask
                        style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                            : estilos.input}
                        type={'money'}
                        maxLength={10}
                        placeholder={descricao}
                        onChangeText={value => {
                            value = value.replace('R$', '');
                            value = value.replace('.', '');
                            value = value.replace(',', '.');
                            setValue(value)
                        }}
                        value={value}
                    />
                    <Text style={estilos.mensagemError}>{mensagemError}</Text>
                </View>
                : tipo == 'qtd' ?
                    <View>
                        <Text style={estilos.subTitulo}>{subTitulo}</Text>
                        <TextInputMask
                            style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                                : estilos.input}
                            type={'money'}
                            maxLength={7}
                            placeholder={descricao}
                            options={{
                                precision: 3,
                                separator: ',',
                                unit: '',
                            }}
                            onChangeText={value => {
                                value = value.replace(',', '.');
                                setValue(value)
                            }}
                            value={value}
                        />
                        <Text style={estilos.mensagemError}>{mensagemError}</Text>
                    </View>
                    :
                    <View>
                        < Text style={estilos.subTitulo} > {subTitulo}</Text >
                        <TextInput
                            style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                                : estilos.input}
                            onChangeText={texto => setValue(texto)}
                            placeholder={descricao}
                            value={value}
                            keyboardType={tipo}
                        />
                        <Text style={estilos.mensagemError}>{mensagemError}</Text>
                    </View >
        }
    </>
}

export function Email({ subTitulo, mensagemError, setValue, value, descricao, tamanhoMedio, campo }) {
    return <>
        < Text style={estilos.subTitulo} >{subTitulo}</Text >
        <TextInput
            style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                : estilos.input}
            onChangeText={texto => setValue({ email: texto })}
            placeholder={descricao}
            value={value}
        />
        <Text style={estilos.mensagemError}>{mensagemError}</Text>
    </>
}
export function Texto({ subTitulo, value, descricao, onChange }) {
    return <>
        < Text style={estilos.subTitulo} >{subTitulo}</Text >
        <TextInput
            style={estilos.input}
            onChangeText={onChange}
            placeholder={descricao}
            value={value}
        />
    </>
}
export function Codigo({ value }) {
    return <>
        <Text style={estilos.subTitulo}>Código*</Text>
        <Text style={estilos.input}>{value}</Text>
    </>
}

export function Celular({ onChange, value }) {
    return <>
        <Text style={estilos.subTitulo}>Celular *</Text>
        <TextInputMask
            style={estilos.input}
            type={'cel-phone'}
            options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
            }}
            value={value}
            placeholder='Digite o celular'
            onChangeText={onChange}
        />
    </>
}

export function CPFouCNPJ({ onChange, value }) {
    const [alteracaoConfirmada, setAlteracaoConfirmada] = useState(false)
    const [altera, setAltera] = useState(false)

    function removerCaracteresInválidos(valor) {
        // Remove caracteres inválidos do valor
        let onge = valor.replace(/[^0-9]/g, '');
        if (onge.length = 11 && !alteracaoConfirmada && !altera) {
            setAltera(true)
        } else if (onge.length = 11 && altera && !alteracaoConfirmada) {
            setAlteracaoConfirmada(true)
        } else if (onge.length <= 11 && altera & alteracaoConfirmada) {
            setAltera(false)
            setAlteracaoConfirmada(false)
        }
        onChange(onge)
    }

    return <>
        <Text style={estilos.subTitulo}>CPF ou CNPJ</Text>
        <TextInputMask
            style={estilos.input}
            type={alteracaoConfirmada ? 'cnpj' : 'cpf'}
            maxLength={18}
            value={value}
            placeholder="Digite o CPF ou CNPJ"
            onChangeText={(valor) => removerCaracteresInválidos(valor)}
        />
    </>
}

export function Quantidade({ subTitulo, mensagemError, setValue, value, descricao, tamanhoMedio }) {
    return <>
        <Text style={estilos.subTitulo}>{subTitulo}</Text>
        <TextInputMask
            style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                : estilos.input}
            type={'money'}
            maxLength={7}
            placeholder={descricao}
            options={{
                precision: 3,
                separator: ',',
                unit: '',
            }}
            onChangeText={value => {
                value = value.replace(',', '.');
                setValue(value)
            }}
            value={value}
        />
        <Text style={estilos.mensagemError}>{mensagemError}</Text>
    </>
}

export function Dinheiro({ subTitulo, mensagemError, setValue, value, descricao, tamanhoMedio }) {
    return <>
        <Text style={estilos.subTitulo}>{subTitulo}</Text>
        <TextInputMask
            style={tamanhoMedio ? [estilos.input, { width: '50%' }]
                : estilos.input}
            type={'money'}
            maxLength={10}
            placeholder={descricao}
            onChangeText={value => {
                value = value.replace('R$', '');
                value = value.replace('.', '');
                value = value.replace(',', '.');
                setValue(value)
            }}
            value={value}
        />
        {mensagemError && <Text style={estilos.mensagemError}>{mensagemError}</Text>}
    </>
}

export function CEP({ onChange, value, setValue }) {

    const [isLoading, setIsLoading] = useState(false)

    async function buscaCep() {
        if (value?.length == 9) {
            carrega()
            await axios.get(`https://viacep.com.br/ws/${value?.replace('-', '')}/json/`)
                .then((response) => {
                    setValue('endereco', response.data.logradouro)
                    setValue('bairro', response.data.bairro)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.error(error)
                })
        }
        // setVisivel('tabela')
    }

    function carrega() {
        setIsLoading(true)
        const intervalo = setInterval(() => {
            setIsLoading(false)
            clearInterval(intervalo);
        }, 1500)
    }

    return <>
        <View style={[estilos.area, { alignItems: 'center' }]}>
            <View>
                <Text style={estilos.subTitulo}>CEP</Text>
                <TextInputMask
                    style={[estilos.input, { width: 260 }]}
                    type={'zip-code'}
                    value={value}
                    placeholder="Digite o cep"
                    onChangeText={onChange}
                />

            </View>
            <TouchableOpacity onPress={buscaCep}>
                {isLoading ?
                    <ActivityIndicator color="#000" />
                    :
                    <FontAwesome name="search" size={30} color='#FAB005' />
                }
            </TouchableOpacity>
        </View>
    </>
}

export function Min({ onChange, value }) {

    return <>
        <View style={estilos.areaQuantidadePermitida}>
            <Text style={estilos.subTitulQuantidade}>Mín</Text>
            <TextInput
                style={estilos.inputQuantidade}
                onChangeText={onChange}
                placeholder="00"
                value={value}
                keyboardType='numeric'
            />
        </View>
    </>
}

export function Max({ onChange, value }) {

    return <>
        <View style={estilos.areaQuantidadePermitida}>
            <Text style={estilos.subTitulQuantidade}>Max</Text>
            <TextInput
                style={estilos.inputQuantidade}
                onChangeText={onChange}
                placeholder="00"
                value={value}
                keyboardType='numeric'
            />
        </View>
    </>
}

const estilos = StyleSheet.create({

    input: {
        marginBottom: 8,
        fontSize: 18,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#15AABF',
    },
    subTitulo: {
        fontSize: 14,
        fontWeight: "600"
    },
    mensagemError: {
        fontSize: 12,
        color: '#ff0000',
        fontWeight: "600"
    },
    area: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputQuantidade: {
        fontSize: 18,
        paddingHorizontal: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#15AABF',
        marginLeft: 30
    },
    subTitulQuantidade: {
        color: '#15AABF',
        fontSize: 22,
        fontWeight: "600",
        marginEnd: -20,
    },
    areaQuantidadePermitida: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        marginBottom: 10,
    },
});
