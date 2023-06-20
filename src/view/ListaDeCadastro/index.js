import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StatusBar, } from 'react-native'
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
import LottieView from 'lottie-react-native';
import lottiOK from '../../assets/ok.json'

export default () => {

    const route = useRoute()

    const { temaEscolhido } = useContext(TemaContext);
    const estilo = estilos(temaEscolhido)
    const [lottieOK, setLottieOK] = useState(0)
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


    function tempo() {
        const intervalo = setInterval(() => {
            setLottieOK(0)
            clearInterval(intervalo);
        }, 3000)
    }

    return (
        <View style={estilo.container}>
            <StatusBar barStyle='dark-content' backgroundColor='#139fb2' />

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
                itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo}  setLottieOK={setLottieOK}/>
                : route.params == 'combos' ? <ComboModal
                    itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo}  setLottieOK={setLottieOK}/>
                    : route.params == 'categorias' ? <CategoriaModal
                        itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo}  setLottieOK={setLottieOK}/>
                        : route.params == 'fornecedores' ? <FornecedorModal
                            itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo}  setLottieOK={setLottieOK}/>
                            : route.params == 'formasDePagamentos' ? <FormaPagModal
                                itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo} setLottieOK={setLottieOK}/>
                                : route.params == 'clientes' ? <ClienteModal
                                    itemSelecionado={itemSelecionado} setItemSelecionado={setItemSelecionado} codigo={codigo}  setLottieOK={setLottieOK}/> : <></>
            }
            {lottieOK == 1 ?
                <LottieView
                    style={estilos.lettieOK}
                    source={lottiOK}
                    loop={false}
                    autoPlay={true}
                    onAnimationFinish={tempo()}
                /> : <></>
            }
        </View>



    )

}