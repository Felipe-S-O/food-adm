import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useEffect, useState } from 'react';
import CampoTexto from '../CampoTexto';
import DropDownPicker from 'react-native-dropdown-picker';
import { ListaComposicao } from '../ListaComposicao';
import { vendas } from './vendas';
import { buscaListaInsumo } from '../../server/firestore';

export function Composicao({ idEmpresa }) {

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    const [quantidade, setQuantidade] = useState('')
    const [mensagemError, setMensagemError] = useState("");
    const [statusError, setStatusError] = useState("");
    const [open, setOpen] = useState(false);
    const [produtoSelecionado, setProdutoSelecionada] = useState(null);
    const [items, setItems] = useState([]);
    const [lista, setLista] = useState([])
    const [itemsComposicao, setItemsComposicao] = useState([]);


    useEffect(() => {
        const tabela = ('produtos')
        buscaListaInsumo(setLista, tabela, idEmpresa)
    }, [])

    useEffect(() => {
        let produtos = []
        lista.forEach(function (doc) {
            if (lista.length > 0) {
                produtos.push({ label: doc.produto, value: doc.codigo })
            }
        })
        setItems(produtos)
    }, [lista])

    function limpaModal() {
        setQuantidade('')
        setMensagemError('')
        setStatusError('')
        setOpen(false)
        setProdutoSelecionada(null)
    }

    function adicionar() {
        if (produtoSelecionado == null) {
            setMensagemError('o produto é obrigatório!');
            setStatusError('produto')
        } else if (quantidade == '') {
            setMensagemError('a quantidade é obrigatório!');
            setStatusError('quantidade')
        } else {
            let listaDeProdutos = []
            let codigoProduto

            lista.forEach(function (doc) {
                if (doc.codigo == produtoSelecionado) {
                    codigoProduto = doc.codigo
                    listaDeProdutos.push({ codigo: doc.codigo, produto: doc.produto, preco: doc.preco, quantidade: quantidade })
                }
            })

            itemsComposicao.forEach(function (doc) {
                if (itemsComposicao.length > 0) {
                    if (doc.codigo == codigoProduto) {
                        // pula array
                    } else {
                        listaDeProdutos.push(doc)
                    }
                }
            })

            setItemsComposicao(listaDeProdutos)
            limpaModal()
        }
    }

    function removerItem(codigo) {

        // let index = buscaItem(codigo)
        let ajusteDeComposicao = []

        itemsComposicao.forEach(function (doc) {
            if (itemsComposicao.length > 0) {
                if (doc.codigo == codigo) {
                    // pula array
                } else {
                    ajusteDeComposicao.push(doc)
                }
            }
        })

        setItemsComposicao(ajusteDeComposicao)
    }

    // function buscaItem(codigo) {
    //     return itemsComposicao.findIndex(produto => produto.codigo == codigo)
    //  }



    return <>
        <View style={estilo.area}>
            <Text style={estilo.subTitulo}>Produto*</Text>
            <DropDownPicker
                style={estilo.dropDownPicker}
                open={open}
                value={produtoSelecionado}
                items={items}
                searchable={true}
                dropDownDirection="TOP"
                language="PT"
                setOpen={setOpen}
                setValue={setProdutoSelecionada}
                setItems={setItems}
            />
            <Text style={estilo.mensagemError}>{statusError == 'produto' ? mensagemError : ''}</Text>

            <View style={estilo.quatidadeArea}>
                <CampoTexto
                    subTitulo='Quantidade*'
                    mensagemError={statusError == 'quantidade' ? mensagemError : ''}
                    setValue={setQuantidade}
                    value={quantidade}
                    tipo='numeric'
                    descricao="Digite aqui a quantidade"
                />
                <TouchableOpacity style={estilo.botaoAdicionar} onPress={() => { adicionar() }}>
                    <Text style={estilo.textoBotao}>Adicionar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilo.listaComposicaoArea}>
                <FlatList
                    data={itemsComposicao}
                    keyExtractor={item => Math.random()}
                    renderItem={({ item }) => <ListaComposicao item={item} removerItem={removerItem} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    </>
}
