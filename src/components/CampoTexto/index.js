import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { TextInputMask } from 'react-native-masked-text';
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { useState } from "react";
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
        <Text style={estilos.subTitulo}>Celular*</Text>
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

    return <>
        <Text style={estilos.subTitulo}>CPF ou CNPJ</Text>
        <TextInputMask
            style={estilos.input}
            type={value?.length > 13 ? 'cnpj' : 'cpf'}
            maxLength={18}
            value={value}
            placeholder="Digite o CPF ou CNPJ"
            onChangeText={onChange}
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
        <Text style={estilos.mensagemError}>{mensagemError}</Text>
    </>
}
export function CEP({ onChange, value, setValue }) {

    async function buscaCep() {
        await axios.get(`https://viacep.com.br/ws/${value?.replace('-', '')}/json/`)
            .then((response) => {
                setValue('endereco', response.data.logradouro)
                setValue('bairro', response.data.bairro)
                console.log('🚀 Consulta Finalizada com Sucesso! 🙅😁')
                console.log(response.data)
            })
            .catch((error) => {
                console.log('🚀 Erro ao Consultar Api! 😩😭')
                console.error(error)
            })
        // setVisivel('tabela')
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
                <FontAwesome name="search" size={30} color='#FAB005' />
            </TouchableOpacity>
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
        marginBottom: 4,
        fontWeight: "600"
    },
    area: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

});
