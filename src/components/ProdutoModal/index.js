import { atualizar, buscaDuasCondicoes, buscalista, salvarItem } from "../../server/firestore"
import { Modal, View, Text, TouchableOpacity } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext"
import React, { useContext, useEffect, useState } from "react"
import { TemaContext } from "../../contexts/TemaContext"
import { Composicao } from "../Composicao"
import { Promocao } from "../Promocao"
import { Produto } from "../Produto"
import { estilos } from './estilos'
import { Alerta } from "../Alerta"
import Button from "../Button"
import CodeScanner from "../CodeScanner"

export default function ProdutoModal({ itemSelecionado, setItemSelecionado, codigo, setLottieOK }) {

  useEffect(() => {
    if (itemSelecionado.id) {
      setProduto(itemSelecionado)
      setScanned(itemSelecionado.ean)
      buscaPromocaoComposicao()
      setAlterarMenu('geral')
      setModalVisivel(true)
      setProdutoParaAtualizar(true)
    }
  }, [itemSelecionado])

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const { idEmpresa } = useContext(EmpresaContext)
  const [menu, setMenu] = useState('geral')
  const [loading, setIsLoading] = useState(false)
  const [modalVisivel, setModalVisivel] = useState(false)
  const [produtoParaAtualizar, setProdutoParaAtualizar] = useState(false)
  const [mensagemError, setMensagemError] = useState(null);
  const [statusError, setStatusError] = useState(null);
  const [composicaoAtual, setComposicaoAtual] = useState(false)
  const [lista, setLista] = useState([])
  const [listaCategoria, setListaCategoria] = useState([]);
  const [itemsComposicao, setItemsComposicao] = useState([20]);
  const [listaitemsComposicao, setListaItemsComposicao] = useState([]);
  const [listaProduto, setListaProduto] = useState([]);
  const [produto, setProduto] = useState({});
  const [listaPromocao, setListaPromocao] = useState([]);
  const [promocao, setPromocao] = useState({});
  const [idPromocao, setIdPromocao] = useState(null)
  const [idcomposicao, setIdComposicao] = useState(null)
  const [carregaDados, setCarregaDados] = useState(0)
  const [alterarMenu, setAlterarMenu] = useState('')
  const [scanned, setScanned] = useState(undefined);

  function buscaPromocaoComposicao() {
    buscaDuasCondicoes(setListaPromocao, 'promocao', idEmpresa, 'codigoProduto', itemSelecionado.codigo)
    buscaDuasCondicoes(setListaItemsComposicao, 'composicao', idEmpresa, 'codigoProduto', itemSelecionado.codigo)
  }

  useEffect(() => {
    buscalista(setListaProduto, 'produtos', idEmpresa,)
  }, [listaitemsComposicao])

  useEffect(() => {
    let itens = []
    let contador = 1
    listaitemsComposicao.forEach(function (doc) {
      if (listaProduto.length > 0) {
        listaProduto.forEach(function (pro) {
          if (doc.codigoItem1 == pro.codigo || doc.codigoItem2 == pro.codigo || doc.codigoItem3 == pro.codigo || doc.codigoItem4 == pro.codigo ||
            doc.codigoItem5 == pro.codigo || doc.codigoItem6 == pro.codigo || doc.codigoItem7 == pro.codigo || doc.codigoItem8 == pro.codigo ||
            doc.codigoItem9 == pro.codigo || doc.codigoItem10 == pro.codigo || doc.codigoItem11 == pro.codigo || doc.codigoItem12 == pro.codigo ||
            doc.codigoItem15 == pro.codigo || doc.codigoItem16 == pro.codigo || doc.codigoItem17 == pro.codigo || doc.codigoItem18 == pro.codigo ||
            doc.codigoItem19 == pro.codigo || doc.codigoItem20 == pro.codigo) {

            {
              contador == 1 ? itens.push({ codigo: doc.codigoItem1, quantidade: doc.quantidade1, preco: doc.quantidade1 * pro.preco, produto: pro.produto })
                : contador == 2 ? itens.push({ codigo: doc.codigoItem2, quantidade: doc.quantidade2, preco: doc.quantidade2 * pro.preco, produto: pro.produto })
                  : contador == 3 ? itens.push({ codigo: doc.codigoItem3, quantidade: doc.quantidade3, preco: doc.quantidade3 * pro.preco, produto: pro.produto })
                    : contador == 4 ? itens.push({ codigo: doc.codigoItem4, quantidade: doc.quantidade4, preco: doc.quantidade4 * pro.preco, produto: pro.produto })
                      : contador == 5 ? itens.push({ codigo: doc.codigoItem5, quantidade: doc.quantidade5, preco: doc.quantidade5 * pro.preco, produto: pro.produto })
                        : contador == 6 ? itens.push({ codigo: doc.codigoItem6, quantidade: doc.quantidade6, preco: doc.quantidade6 * pro.preco, produto: pro.produto })
                          : contador == 7 ? itens.push({ codigo: doc.codigoItem7, quantidade: doc.quantidade7, preco: doc.quantidade7 * pro.preco, produto: pro.produto })
                            : contador == 8 ? itens.push({ codigo: doc.codigoItem8, quantidade: doc.quantidade8, preco: doc.quantidade8 * pro.preco, produto: pro.produto })
                              : contador == 9 ? itens.push({ codigo: doc.codigoItem9, quantidade: doc.quantidade9, preco: doc.quantidade9 * pro.preco, produto: pro.produto })
                                : contador == 10 ? itens.push({ codigo: doc.codigoItem10, quantidade: doc.quantidade10, preco: doc.quantidade10 * pro.preco, produto: pro.produto })
                                  : contador == 11 ? itens.push({ codigo: doc.codigoItem11, quantidade: doc.quantidade11, preco: doc.quantidade11 * pro.preco, produto: pro.produto })
                                    : contador == 12 ? itens.push({ codigo: doc.codigoItem12, quantidade: doc.quantidade12, preco: doc.quantidade12 * pro.preco, produto: pro.produto })
                                      : contador == 13 ? itens.push({ codigo: doc.codigoItem13, quantidade: doc.quantidade13, preco: doc.quantidade13 * pro.preco, produto: pro.produto })
                                        : contador == 14 ? itens.push({ codigo: doc.codigoItem14, quantidade: doc.quantidade14, preco: doc.quantidade14 * pro.preco, produto: pro.produto })
                                          : contador == 15 ? itens.push({ codigo: doc.codigoItem15, quantidade: doc.quantidade15, preco: doc.quantidade15 * pro.preco, produto: pro.produto })
                                            : contador == 16 ? itens.push({ codigo: doc.codigoItem16, quantidade: doc.quantidade16, preco: doc.quantidade16 * pro.preco, produto: pro.produto })
                                              : contador == 17 ? itens.push({ codigo: doc.codigoItem17, quantidade: doc.quantidade17, preco: doc.quantidade17 * pro.preco, produto: pro.produto })
                                                : contador == 18 ? itens.push({ codigo: doc.codigoItem18, quantidade: doc.quantidade18, preco: doc.quantidade18 * pro.preco, produto: pro.produto })
                                                  : contador == 19 ? itens.push({ codigo: doc.codigoItem19, quantidade: doc.quantidade19, preco: doc.quantidade19 * pro.preco, produto: pro.produto })
                                                    : itens.push({ codigo: doc.codigoItem20, quantidade: doc.quantidade20, preco: doc.quantidade20 * pro.preco, produto: pro.produto })

            }
            contador += 1
          }
        })
      }
      setIdComposicao(doc.id)
    })
    setItemsComposicao(itens)
  }, [listaProduto])

  useEffect(() => {
    buscalista(setLista, 'categorias', idEmpresa)
  }, [])

  useEffect(() => {
    let categorias = []
    lista.forEach(function (doc) {
      if (doc.ativo) {
        categorias.push({ label: doc.categoria, value: doc.codigo })
      }
    })
    setListaCategoria(categorias)
  }, [lista])

  useEffect(() => {
    listaPromocao.forEach(function (doc) {
      if (listaPromocao.length > 0) {
        setPromocao(doc)
        setIdPromocao(doc.id)
      }
    })
  }, [listaPromocao])

  useEffect(() => {
    if (carregaDados == 2) {
      loadingBotao()
      salvar()
      setCarregaDados(0)
    }
  }, [carregaDados])

  function procurandoDados() {
    setCarregaDados(1)
  }

  function AlterarMenu(value) {
    setAlterarMenu(value)
  }

  async function salvar() {
    let resultado
    if (produtoParaAtualizar) {
      if (idPromocao) {
        resultado = await atualizar(idPromocao, {
          codigoProduto: produto.codigo, idEmpresa: idEmpresa,
          seg: promocao.seg, segHorarioInicial: promocao.segHorarioInicial, segHorarioFinal: promocao.segHorarioFinal, segPromocao: promocao.segPromocao,
          ter: promocao.ter, terHorarioInicial: promocao.terHorarioInicial, terHorarioFinal: promocao.terHorarioFinal, terPromocao: promocao.terPromocao,
          qua: promocao.qua, quaHorarioInicial: promocao.quaHorarioInicial, quaHorarioFinal: promocao.quaHorarioFinal, quaPromocao: promocao.quaPromocao,
          qui: promocao.qui, quiHorarioInicial: promocao.quiHorarioInicial, quiHorarioFinal: promocao.quiHorarioFinal, quiPromocao: promocao.quiPromocao,
          sex: promocao.sex, sexHorarioInicial: promocao.sexHorarioInicial, sexHorarioFinal: promocao.sexHorarioFinal, sexPromocao: promocao.sexPromocao,
          sab: promocao.sab, sabHorarioInicial: promocao.sabHorarioInicial, sabHorarioFinal: promocao.sabHorarioFinal, sabPromocao: promocao.sabPromocao,
          dom: promocao.dom, domHorarioInicial: promocao.domHorarioInicial, domHorarioFinal: promocao.domHorarioFinal, domPromocao: promocao.domPromocao,
        }, 'promocao')
      }
      if (produto.composicao) {
        converteComposicao()
      }

    } else {
      if (promocao.seg || promocao.ter || promocao.qua || promocao.qui || promocao.sex || promocao.sab || promocao.dom) {
        resultado = await salvarItem({
          codigoProduto: codigo, idEmpresa: idEmpresa,
          seg: promocao.seg, segHorarioInicial: promocao.segHorarioInicial, segHorarioFinal: promocao.segHorarioFinal, segPromocao: promocao.segPromocao,
          ter: promocao.ter, terHorarioInicial: promocao.terHorarioInicial, terHorarioFinal: promocao.terHorarioFinal, terPromocao: promocao.terPromocao,
          qua: promocao.qua, quaHorarioInicial: promocao.quaHorarioInicial, quaHorarioFinal: promocao.quaHorarioFinal, quaPromocao: promocao.quaPromocao,
          qui: promocao.qui, quiHorarioInicial: promocao.quiHorarioInicial, quiHorarioFinal: promocao.quiHorarioFinal, quiPromocao: promocao.quiPromocao,
          sex: promocao.sex, sexHorarioInicial: promocao.sexHorarioInicial, sexHorarioFinal: promocao.sexHorarioFinal, sexPromocao: promocao.sexPromocao,
          sab: promocao.sab, sabHorarioInicial: promocao.sabHorarioInicial, sabHorarioFinal: promocao.sabHorarioFinal, sabPromocao: promocao.sabPromocao,
          dom: promocao.dom, domHorarioInicial: promocao.domHorarioInicial, domHorarioFinal: promocao.domHorarioFinal, domPromocao: promocao.domPromocao,
        }, 'promocao')
      }
      if (produto.composicao) {
        converteComposicao()
      }
    }
    if (resultado === 'Error') {
      setStatusError('firebase')
      setMensagemError('Erro ao tentar salvar tarefa!');
    }
  }

  function converteComposicao() {
    let itens = [{
      codigoItem1: '', quantidade1: '', codigoItem2: '', quantidade2: '', codigoItem3: '', quantidade3: '',
      codigoItem4: '', quantidade4: '', codigoItem5: '', quantidade5: '', codigoItem6: '', quantidade6: '',
      codigoItem7: '', quantidade7: '', codigoItem8: '', quantidade8: '', codigoItem9: '', quantidade9: '',
      codigoItem10: '', quantidade10: '', codigoItem11: '', quantidade11: '', codigoItem12: '', quantidade12: '',
      codigoItem13: '', quantidade13: '', codigoItem14: '', quantidade14: '', codigoItem15: '', quantidade15: '',
      codigoItem16: '', quantidade16: '', codigoItem17: '', quantidade17: '', codigoItem18: '', quantidade18: '',
      codigoItem19: '', quantidade19: '', codigoItem20: '', quantidade20: ''
    }]
    let contador = 1
    itemsComposicao.forEach(function (doc) {
      {
        contador == 1 ? (itens[0].codigoItem1 = doc.codigo, itens[0].quantidade1 = doc.quantidade)
          : contador == 2 ? (itens[0].codigoItem2 = doc.codigo, itens[0].quantidade2 = doc.quantidade)
            : contador == 3 ? (itens[0].codigoItem3 = doc.codigo, itens[0].quantidade3 = doc.quantidade)
              : contador == 4 ? (itens[0].codigoItem4 = doc.codigo, itens[0].quantidade4 = doc.quantidade)
                : contador == 5 ? (itens[0].codigoItem5 = doc.codigo, itens[0].quantidade5 = doc.quantidade)
                  : contador == 6 ? (itens[0].codigoItem6 = doc.codigo, itens[0].quantidade6 = doc.quantidade)
                    : contador == 7 ? (itens[0].codigoItem7 = doc.codigo, itens[0].quantidade7 = doc.quantidade)
                      : contador == 8 ? (itens[0].codigoItem8 = doc.codigo, itens[0].quantidade8 = doc.quantidade)
                        : contador == 9 ? (itens[0].codigoItem9 = doc.codigo, itens[0].quantidade9 = doc.quantidade)
                          : contador == 10 ? (itens[0].codigoItem10 = doc.codigo, itens[0].quantidade10 = doc.quantidade)
                            : contador == 11 ? (itens[0].codigoItem11 = doc.codigo, itens[0].quantidade11 = doc.quantidade)
                              : contador == 12 ? (itens[0].codigoItem12 = doc.codigo, itens[0].quantidade12 = doc.quantidade)
                                : contador == 13 ? (itens[0].codigoItem13 = doc.codigo, itens[0].quantidade13 = doc.quantidade)
                                  : contador == 14 ? (itens[0].codigoItem14 = doc.codigo, itens[0].quantidade14 = doc.quantidade)
                                    : contador == 15 ? (itens[0].codigoItem15 = doc.codigo, itens[0].quantidade15 = doc.quantidade)
                                      : contador == 16 ? (itens[0].codigoItem16 = doc.codigo, itens[0].quantidade16 = doc.quantidade)
                                        : contador == 17 ? (itens[0].codigoItem17 = doc.codigo, itens[0].quantidade17 = doc.quantidade)
                                          : contador == 18 ? (itens[0].codigoItem18 = doc.codigo, itens[0].quantidade18 = doc.quantidade)
                                            : contador == 19 ? (itens[0].codigoItem19 = doc.codigo, itens[0].quantidade19 = doc.quantidade)
                                              : (itens[0].codigoItem20 = doc.codigo, itens[0].quantidade20 = doc.quantidade)
      }
      contador += 1
    })
    itens.forEach(function (composicao) {
      salvarComposicao(composicao)
    })
  }

  async function salvarComposicao(composicao) {
    let resultado
    if (produtoParaAtualizar) {
      if (idcomposicao) {
        resultado = await atualizar(idcomposicao, {
          codigoProduto: produto.codigo, idEmpresa: idEmpresa,
          codigoItem1: composicao.codigoItem1, quantidade1: composicao.quantidade1,
          codigoItem2: composicao.codigoItem2, quantidade2: composicao.quantidade2,
          codigoItem3: composicao.codigoItem3, quantidade3: composicao.quantidade3,
          codigoItem4: composicao.codigoItem4, quantidade4: composicao.quantidade4,
          codigoItem5: composicao.codigoItem5, quantidade5: composicao.quantidade5,
          codigoItem6: composicao.codigoItem6, quantidade6: composicao.quantidade6,
          codigoItem7: composicao.codigoItem7, quantidade7: composicao.quantidade7,
          codigoItem8: composicao.codigoItem8, quantidade8: composicao.quantidade8,
          codigoItem9: composicao.codigoItem9, quantidade9: composicao.quantidade9,
          codigoItem10: composicao.codigoItem10, quantidade10: composicao.quantidade10,
          codigoItem11: composicao.codigoItem11, quantidade11: composicao.quantidade11,
          codigoItem12: composicao.codigoItem12, quantidade12: composicao.quantidade12,
          codigoItem13: composicao.codigoItem13, quantidade13: composicao.quantidade13,
          codigoItem14: composicao.codigoItem14, quantidade14: composicao.quantidade14,
          codigoItem15: composicao.codigoItem15, quantidade15: composicao.quantidade15,
          codigoItem16: composicao.codigoItem16, quantidade16: composicao.quantidade16,
          codigoItem17: composicao.codigoItem17, quantidade17: composicao.quantidade17,
          codigoItem18: composicao.codigoItem18, quantidade18: composicao.quantidade18,
          codigoItem19: composicao.codigoItem19, quantidade19: composicao.quantidade19,
          codigoItem20: composicao.codigoItem20, quantidade20: composicao.quantidade20,
        }, 'composicao')
      }
    } else {
      resultado = await salvarItem({
        codigoProduto: codigo, idEmpresa: idEmpresa,
        codigoItem1: composicao.codigoItem1, quantidade1: composicao.quantidade1,
        codigoItem2: composicao.codigoItem2, quantidade2: composicao.quantidade2,
        codigoItem3: composicao.codigoItem3, quantidade3: composicao.quantidade3,
        codigoItem4: composicao.codigoItem4, quantidade4: composicao.quantidade4,
        codigoItem5: composicao.codigoItem5, quantidade5: composicao.quantidade5,
        codigoItem6: composicao.codigoItem6, quantidade6: composicao.quantidade6,
        codigoItem7: composicao.codigoItem7, quantidade7: composicao.quantidade7,
        codigoItem8: composicao.codigoItem8, quantidade8: composicao.quantidade8,
        codigoItem9: composicao.codigoItem9, quantidade9: composicao.quantidade9,
        codigoItem10: composicao.codigoItem10, quantidade10: composicao.quantidade10,
        codigoItem11: composicao.codigoItem11, quantidade11: composicao.quantidade11,
        codigoItem12: composicao.codigoItem12, quantidade12: composicao.quantidade12,
        codigoItem13: composicao.codigoItem13, quantidade13: composicao.quantidade13,
        codigoItem14: composicao.codigoItem14, quantidade14: composicao.quantidade14,
        codigoItem15: composicao.codigoItem15, quantidade15: composicao.quantidade15,
        codigoItem16: composicao.codigoItem16, quantidade16: composicao.quantidade16,
        codigoItem17: composicao.codigoItem17, quantidade17: composicao.quantidade17,
        codigoItem18: composicao.codigoItem18, quantidade18: composicao.quantidade18,
        codigoItem19: composicao.codigoItem19, quantidade19: composicao.quantidade19,
        codigoItem20: composicao.codigoItem20, quantidade20: composicao.quantidade20,
      }, 'composicao')
    }
  }

  function loadingBotao() {
    setIsLoading(true)
    const intervalo = setInterval(() => {
      setIsLoading(false)
      limpaModal()
      setLottieOK(1)
      clearInterval(intervalo);
    }, 2500)
  }

  function limpaModal() {
    setProduto({})
    setPromocao({})
    setMensagemError(null);
    setStatusError(null)
    setModalVisivel(false)
    setItemSelecionado({})
    setScanned(undefined)
    setMenu('geral')
    setAlterarMenu('geral')
    setListaProduto([])
    setIdComposicao(null)
    setItemsComposicao([])
    setListaItemsComposicao([])
    setProdutoParaAtualizar(false)
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={() => { setModalVisivel(false) }}
      >
        <View style={menu == 'codeScanner' ? [estilo.centralizaModal, { alignItems: "center" }] : estilo.centralizaModal}>
          <View style={estilo.modal}>
            {menu == 'codeScanner' ? <></> :
              <View>
                <Text style={estilo.modalTitulo}>Criar produto</Text>
                <View style={estilo.menu}>
                  <TouchableOpacity style={menu == 'geral' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                    : estilo.menuItem} onPress={() => AlterarMenu('geral')}>
                    <Text style={estilo.menuTitulo}>Geral</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={menu == 'promoção' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                    : estilo.menuItem} onPress={() => AlterarMenu('promoção')}>
                    <Text style={estilo.menuTitulo}>Promoção</Text>
                  </TouchableOpacity>
                  {composicaoAtual ? <TouchableOpacity style={menu == 'composição' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                    : estilo.menuItem} onPress={() => AlterarMenu('composição')}>
                    <Text style={estilo.menuTitulo}>Composição</Text>
                  </TouchableOpacity> : <></>}
                </View>
              </View>
            }

            {menu == 'geral' ?
              <View>
                <Produto
                  codigo={codigo}
                  alterarMenu={alterarMenu}
                  listaCategoria={listaCategoria}
                  setListaCategoria={setListaCategoria}
                  produto={produto}
                  setProduto={setProduto}
                  carregaDados={carregaDados}
                  setCarregaDados={setCarregaDados}
                  setMenu={setMenu}
                  itemSelecionado={itemSelecionado}
                  produtoParaAtualizar={produtoParaAtualizar}
                  setComposicaoAtual={setComposicaoAtual}
                  mensagemError={mensagemError}
                  setMensagemError={setMensagemError}
                  statusError={statusError}
                  setStatusError={setStatusError}
                  itemsComposicao={itemsComposicao}
                  setAlterarMenu={setAlterarMenu}
                  scanned={scanned}
                  setScanned={setScanned}
                />
                <View style={estilo.modalBotoes}>
                  <Button title='Salvar' isLoading={loading} onPress={procurandoDados} />
                  <Button title='Cancelar' onPress={limpaModal} />
                </View>
              </View>
              : menu == 'promoção' ?
                <Promocao
                  alterarMenu={alterarMenu}
                  setAlterarMenu={setAlterarMenu}
                  setMenu={setMenu}
                  promocao={promocao}
                  setPromocao={setPromocao}
                  carregaDados={carregaDados}
                  mensagemError={mensagemError}
                  setMensagemError={setMensagemError}
                  statusError={statusError}
                  setStatusError={setStatusError}
                />
                : menu == 'composição' ?
                  <Composicao
                    codigo={itemSelecionado.codigo}
                    idEmpresa={idEmpresa}
                    itemsComposicao={itemsComposicao}
                    setItemsComposicao={setItemsComposicao}
                    setMenu={setMenu}
                    alterarMenu={alterarMenu} />
                  : <CodeScanner
                    setMenu={setMenu}
                    setAlterarMenu={setAlterarMenu}
                    setScanned={setScanned}
                    alterarMenu={alterarMenu} />
            }
          </View>
          <Alerta
            mensagem={mensagemError}
            error={statusError == 'firebase'}
            setError={setStatusError}
          />
        </View >
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilo.adicionarMemo}>
        <Text style={estilo.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}


