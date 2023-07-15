import React, { useContext, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import DropDownPicker from 'react-native-dropdown-picker';
import { vendas } from "./vendas";
import { ListaComposicao } from "../ListaComposicao";
import { MenuCombo } from "../MenuCombo";
import { Venda } from "../Venda";
import { Dinheiro, Texto } from "../CampoTexto";

export default function ComboModal({ }) {


    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    const { idEmpresa } = useContext(EmpresaContext)
    const [combo, setCombo] = useState('')
    const [preco, setPreco] = useState('')
    const [descricao, setDescricao] = useState('')
    const [modalVisivel, setModalVisivel] = useState(false)
    const [modalSelecionaHorario, setModalSelecionaHorario] = useState(false)
    const [tarefaParaAtualizar, setTarefaParaAtualizar] = useState(false)
    const [lottieOK, setLottieOK] = useState(0)
    const [statusError, setStatusError] = useState('');
    const [passo, setPasso] = useState(1)
    const [tipoMedida, setTipoMedida] = useState('')

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

    function limpaModal() {
        setCliente('')
        setDescricao('')
        setStatusError('')
        setMinutos('')
        setHorarioAtual('')
        setModalVisivel(false)
        setTarefaParaAtualizar(false)
    }

    function tempo() {
        const intervalo = setInterval(() => {
            setLottieOK(0)
            clearInterval(intervalo);
        }, 2000)
    }


    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisivel}
                onRequestClose={() => { setModalVisivel(false) }}
            >
                <View style={estilo.centralizaModal}>
                    <View style={estilo.modal}>
                        <Text style={estilo.modalTitulo}>Criar combo</Text>
                        <Texto
                            subTitulo='Nome do combo *'
                            value={combo}
                            descricao="Digite nome do combo"
                            onChange={setCombo}
                        />
                        <Dinheiro
                            subTitulo='Preço de venda*'
                            setValue={setPreco}
                            value={preco}
                            tipo='maney'
                            descricao="R$0,00"
                        />
                        <MenuCombo passo={passo} setPasso={setPasso} />
                        <Texto
                            subTitulo='Defina um título oo passo:*'
                            value={combo}
                            descricao="Digite nome do combo"
                            onChange={setCombo}
                        />

                        <View style={estilo.quantidadePermitida}>
                            <Text style={estilo.subTitulQuantidade}>Mín</Text>
                            <TextInput
                                style={estilo.inputQuantidade}
                                onChangeText={novoCliente => setCombo(novoCliente)}
                                placeholder="00"
                                value={combo}
                                keyboardType='numeric'
                            />
                            <Text style={estilo.mensagemError}>{statusError == 'cliente' ? mensagemError : ''}</Text>

                            <Text style={estilo.subTitulQuantidade}>Máx</Text>
                            <TextInput
                                style={estilo.inputQuantidade}
                                multiline={true}
                                onChangeText={novoDescricao => setDescricao(novoDescricao)}
                                placeholder="00"
                                value={descricao}
                                keyboardType='numeric'
                            />
                            <Text style={estilo.mensagemError}>{statusError == 'cliente' ? mensagemError : ''}</Text>
                        </View>


                        <Text style={estilo.modalSubTitulo}>Método de cálculo:</Text>
                        <DropDownPicker
                            style={estilo.dropDownPicker}
                            open={open2}
                            value={value}
                            items={items}
                            searchable={true}
                            dropDownDirection="TOP"
                            language="PT"
                            setOpen={setOpen2}
                            setValue={setValue}
                            setItems={setItems}
                        />
                        <Text style={estilo.mensagemError}>{statusError == 'tipoMedida' ? mensagemError : ''}</Text>

                        <View style={estilo.adicionarProdutoArea}>
                            <View>
                                <Text style={estilo.modalSubTitulo}>Selecione o produto desejado:</Text>
                                <DropDownPicker
                                    style={estilo.dropDownPickerMenor}
                                    open={open}
                                    value={value}
                                    items={items2}
                                    searchable={true}
                                    dropDownDirection="TOP"
                                    language="PT"
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems2}
                                />
                            </View>
                            <TouchableOpacity style={estilo.botaoIncluir} onPress={() => { limpaModal() }}>
                                <Text style={estilo.texto}>incluir</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={estilo.areaListaDeProduto}>
                            <FlatList
                                data={vendas}
                                keyExtractor={item => Math.random()}
                                renderItem={({ item }) => <Venda item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                        <View style={estilo.modalBotoes}>
                            <TouchableOpacity style={estilo.modalBotaoSalvar} onPress={() => { salvar() }}>
                                <Text style={estilo.modalBotaoTexto}>Salvar</Text>
                            </TouchableOpacity>
                            {tarefaParaAtualizar ?
                                <TouchableOpacity style={estilo.modalBotaoCancelar} onPress={() => { excluir() }}>
                                    <Text style={estilo.modalBotaoTexto}>Excluir</Text>
                                </TouchableOpacity> : <></>
                            }
                            <TouchableOpacity style={estilo.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                                <Text style={estilo.modalBotaoTexto}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilo.adicionarMemo}>
                <Text style={estilo.adicionarMemoTexto}>+</Text>
            </TouchableOpacity>
        </>
    )
}

