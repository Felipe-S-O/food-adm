import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import { EmpresaContext } from '../../contexts/EmpresaContext';;
import { buscalista } from '../../server/firestore';
import { ListaCadastro } from '../../components/ListaCadastro';
import Topo from '../../components/Topo';
import ProdutoModal from '../../components/ProdutoModal';
import ComboModal from '../../components/ComboModal';
import CategoriaModal from '../../components/CategoriaModal';
import FormaPagModal from '../../components/FormaPagModal';
import FornecedorModal from '../../components/FornecedorModal';
import ClienteModal from '../../components/ClienteModal'

export default () => {

    const route = useRoute()

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)

    const { idEmpresa } = useContext(EmpresaContext);
    const [lista, setLista] = useState([])
    const [codigo, setCodigo] = useState(1)
    const [itemSelecionado, setItemSelecionado] = useState({})
    const tabela = (route.params)


    useEffect(() => {
        buscalista(setLista, tabela, idEmpresa)

    }, [])

    useEffect(() => {
        let contador = 1
        lista.forEach(function (doc) {
            if (lista.length > 0) {
                contador = (contador + 1)
                setCodigo(contador)
            }
        })
    }, [lista])

    return (
        <View style={estilo.container}>

            {route.params == 'produtos' ? <Topo texto='Produto' />
                : route.params == 'combos' ? <Topo texto='Combo' />
                    : route.params == 'categorias' ? <Topo texto='Categoria' />
                        : route.params == 'fornecedores' ? <Topo texto='Fornecedor' />
                            : route.params == 'formasDePagamentos' ? <Topo texto='Forma de pagamento' />
                                : route.params == 'clientes' ? <Topo texto='Cliente' /> : <></>
            }
            <FlatList
                data={lista}
                keyExtractor={item => Math.random()}
                renderItem={({ item }) => <ListaCadastro item={item} tabela={route.params}
                    setItemSelecionado={setItemSelecionado} />}
                showsVerticalScrollIndicator={false}
            />
            {route.params == 'produtos' ? <ProdutoModal
                itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} />
                : route.params == 'combos' ? <ComboModal
                    itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} />
                    : route.params == 'categorias' ? <CategoriaModal
                        itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} />
                        : route.params == 'fornecedores' ? <FornecedorModal
                            itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} />
                            : route.params == 'formasDePagamentos' ? <FormaPagModal
                                itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} />
                                : route.params == 'clientes' ? <ClienteModal
                                    itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} /> : <></>
            }
        </View>



    )

}