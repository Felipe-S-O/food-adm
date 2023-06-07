import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TouchableOpacity, FlatList } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext";
import Checkbox from 'expo-checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import CampoTexto from "../CampoTexto";
import { ListaCadastro } from "../ListaCadastro";
import { ListaComposicao } from "../ListaComposicao";
import { Picker } from "@react-native-picker/picker";
import { atualizar, buscalista, salvarItem } from "../../server/firestore";
import LottieView from 'lottie-react-native';
import lottiOK from '../../assets/ok.json'
import { Alerta } from "../Alerta";
import Button from "../Button";
import { Promocao } from "../Promocao";
import { Composicao } from "../Composicao";

export default function ProdutoModal({ itemSelecionado, setItemSelecionado, codigo }) {

  useEffect(() => {
    if (itemSelecionado.id) {
      editarProduto()
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
  const [lottieOK, setLottieOK] = useState(0)
  const [produtoParaAtualizar, setProdutoParaAtualizar] = useState(false)
  const [tipoMedida, setTipoMedida] = useState('')
  const [EAN, setEAN] = useState('')
  const [preco, setPreco] = useState('')
  const [nomeProduto, setNomeProduto] = useState('')
  const [codigoAtual, setCodigoAtual] = useState('')
  const [mensagemError, setMensagemError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [custo, setCusto] = useState(0)
  const [venda, setVenda] = useState(false)
  const [insumo, setInsumo] = useState(false)
  const [composicao, setComposicao] = useState(false)
  const [taxa, setTaxa] = useState(false)
  const [seg, setSeg] = useState(false)
  const [ter, setTer] = useState(false)
  const [qua, setQua] = useState(false)
  const [qui, setQui] = useState(false)
  const [sex, setSex] = useState(false)
  const [sab, setSab] = useState(false)
  const [dom, setDom] = useState(false)
  const [lista, setLista] = useState([])
  const [open, setOpen] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  const [items, setItems] = useState([]);
  const tabela = ('produtos')

  const [itemsComposicao, setItemsComposicao] = useState([]);

  useEffect(() => {
    const tabela = ('categorias')
    buscalista(setLista, tabela, idEmpresa)
  }, [])

  useEffect(() => {
    let categorias = []
    lista.forEach(function (doc) {
      if (lista.length > 0) {
        categorias.push({ label: doc.categoria, value: doc.categoria })
      }
    })
    setItems(categorias)
  }, [lista])


  useEffect(() => {
    if (insumo) {
      setComposicao(false)
    }
  }, [insumo])

  useEffect(() => {
    if (composicao) {
      setInsumo(false)
    }
  }, [composicao])

  function editarProduto() {
    setCodigoAtual(itemSelecionado.codigo)
    setTaxa(itemSelecionado.taxa)
    setComposicao(itemSelecionado.composicao)
    setCusto(itemSelecionado.custo)
    setDom(itemSelecionado.dom)
    setSab(itemSelecionado.sab)
    setSeg(itemSelecionado.seg)
    setSex(itemSelecionado.sex)
    setQua(itemSelecionado.qua)
    setQui(itemSelecionado.qui)
    setTer(itemSelecionado.ter)
    setVenda(itemSelecionado.venda)
    setInsumo(itemSelecionado.insumo)
    setNomeProduto(itemSelecionado.produto)
    setPreco(itemSelecionado.preco)
    setTipoMedida(itemSelecionado.tipoMedida)
    setCategoriaSelecionada(itemSelecionado.categoria)
  }


  function limpaModal() {
    setTaxa(false)
    setComposicao(false)
    setDom(false)
    setSab(false)
    setSeg(false)
    setSex(false)
    setQua(false)
    setQui(false)
    setTer(false)
    setVenda(false)
    setInsumo(false)
    setNomeProduto('')
    setCusto(0)
    setPreco('')
    setTipoMedida('')
    setCategoriaSelecionada(null)
    setProdutoParaAtualizar(false)
    setStatusError('')
    setModalVisivel(false)
    setItemSelecionado({})
    setMenu('geral')
    setItemsComposicao([])
  }

  async function salvar() {
    let resultado

    if (produtoParaAtualizar) {
      resultado = await atualizar(itemSelecionado.id, {
        insumo: insumo,
        venda: venda,
        codigo: codigoAtual,
        produto: nomeProduto,
        tipoMedida: tipoMedida,
        preco: preco,
        taxa: taxa,
        seg: seg,
        ter: ter,
        qua: qua,
        qui: qui,
        sex: sex,
        sab: sab,
        dom: dom,
        categoria: categoriaSelecionada,
        idEmpresa: idEmpresa
      }, tabela)
    } else {
      resultado = await salvarItem({
        insumo: insumo,
        venda: venda,
        codigo: codigo,
        produto: nomeProduto,
        tipoMedida: tipoMedida,
        preco: preco,
        taxa: taxa,
        seg: seg,
        ter: ter,
        qua: qua,
        qui: qui,
        sex: sex,
        sab: sab,
        dom: dom,
        categoria: categoriaSelecionada,
        itemsComposicao: itemsComposicao,
        idEmpresa: idEmpresa
      }, tabela)
    }
    setLottieOK(1)
    limpaModal()

    if (resultado === 'Error') {
      setStatusError('firebase')
      setMensagemError('Erro ao tentar salvar tarefa!');
    }
  }

  function tempo() {
    const intervalo = setInterval(() => {
      setLottieOK(0)
      clearInterval(intervalo);
    }, 3000)
  }

  function t() {
    if (insumo) {
      setComposicao(false)
    } else if (composicao) {
      setInsumo(false)
    }
  }

  function loadingBotao() {
    if (!venda && !insumo) {
      setMensagemError('O tipo do produto é obrigatório!');
      setStatusError('tipo')
    } else if (nomeProduto == '') {
      setMensagemError('O nome do produto é obrigatório!');
      setStatusError('produto')
    } else if (tipoMedida == '') {
      setMensagemError('O tipo de medida é obrigatório!');
      setStatusError('tipoMedida')
    } else if (preco == '') {
      setMensagemError('O preço é obrigatório!');
      setStatusError('preco')
    } else if (categoriaSelecionada == null) {
      setMensagemError('A categoria é obrigatório!');
      setStatusError('categoria')
    } else {
      setIsLoading(true)
      salvar()
      const intervalo = setInterval(() => {
        setIsLoading(false)
        clearInterval(intervalo);
      }, 3500)
    }
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
            <Text style={estilo.modalTitulo}>Criar produto</Text>

            <View style={estilo.menu}>
              <TouchableOpacity style={menu == 'geral' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                : estilo.menuItem} onPress={() => setMenu('geral')}>
                <Text style={estilo.menuTitulo}>Geral</Text>
              </TouchableOpacity>
              <TouchableOpacity style={menu == 'promoção' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                : estilo.menuItem} onPress={() => setMenu('promoção')}>
                <Text style={estilo.menuTitulo}>Promoção</Text>
              </TouchableOpacity>
              {composicao ? <TouchableOpacity style={menu == 'composição' ? [estilo.menuItem, { borderBottomColor: "#FAB005" }]
                : estilo.menuItem} onPress={() => setMenu('composição')}>
                <Text style={estilo.menuTitulo}>Composição</Text>
              </TouchableOpacity> : <></>}

            </View>

            {menu == 'geral' ?
              <View>
                <Text style={estilo.subTitulo}>Tipo*</Text>
                <View style={estilo.checkbox}>
                  <CheckboxPesonalisado texto=" Venda" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={venda} setValue={setVenda} />
                  <CheckboxPesonalisado texto=" Insumo" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={insumo} setValue={setInsumo} />
                  <CheckboxPesonalisado texto=" Composição" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={composicao} setValue={setComposicao} />
                </View>
                <Text style={estilo.mensagemError}>{statusError == 'tipo' ? mensagemError : ''}</Text>

                <View style={estilo.precoArea}>
                  <View style={estilo.area}>
                    <Text style={estilo.subTitulo}>Código*</Text>
                    {produtoParaAtualizar ?
                      <Text style={estilo.modalInput}>{codigoAtual}</Text>
                      :
                      <Text style={estilo.modalInput}>{codigo}</Text>
                    }
                    <Text style={estilo.mensagemError}>{statusError == 'tipoMedida' ? mensagemError : ''}</Text>
                  </View>

                  <CampoTexto
                    subTitulo='EAN'
                    setValue={setEAN}
                    value={EAN}
                    tipo='numeric'
                    descricao="Digite aqui a EAN" />
                </View>

                <CampoTexto
                  subTitulo='Nome do produto*'
                  mensagemError={statusError == 'produto' ? mensagemError : ''}
                  setValue={setNomeProduto}
                  value={nomeProduto}
                  descricao="Digite o nome do produto"
                />

                <View style={estilo.precoArea}>
                  <View style={estilo.area}>
                    <Text style={estilo.subTitulo}>Tipo de medida*</Text>
                    <Picker selectedValue={tipoMedida} style={estilo.picker}
                      onValueChange={(itemValue, itemIndex) => setTipoMedida(itemValue)}
                    >
                      <Picker.Item label="" value='' style={estilo.itemPicker} />
                      <Picker.Item label="UN" value='UN' style={estilo.itemPicker} />
                      <Picker.Item label="KG" value='KG' style={estilo.itemPicker} />
                    </Picker>
                    <Text style={estilo.mensagemError}>{statusError == 'tipoMedida' ? mensagemError : ''}</Text>
                  </View>

                  <View >
                    <Text style={estilo.subTitulo}>Custo unitário</Text>
                    <Text style={estilo.modalInput}>{custo}</Text>

                    <CampoTexto
                      subTitulo='Preço de venda*'
                      mensagemError={statusError == 'preco' ? mensagemError : ''}
                      setValue={setPreco}
                      value={preco}
                      tipo='numeric'
                      descricao="Digite aqui a preço" />
                  </View>
                </View>

                <Text style={estilo.subTitulo}>Categoria*</Text>
                <DropDownPicker
                  style={estilo.dropDownPicker}
                  open={open}
                  value={categoriaSelecionada}
                  items={items}
                  searchable={true}
                  dropDownDirection="TOP"
                  language="PT"
                  //theme="DARK"
                  setOpen={setOpen}
                  setValue={setCategoriaSelecionada}
                  setItems={setItems}
                />
                <Text style={estilo.mensagemError}>{statusError == 'categoria' ? mensagemError : ''}</Text>

                <View style={estilo.checkboxTaxa}>
                  <CheckboxPesonalisado texto=" Taxa" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={taxa} setValue={setTaxa} />
                </View >

                <Text style={estilo.subTitulo}>Disponível</Text>
                <View style={[estilo.checkbox, { marginBottom: 28 }]}>
                  <CheckboxPesonalisado texto="Seg" cor="#FAB005" botaoAtivo={true} value={seg} setValue={setSeg} />
                  <CheckboxPesonalisado texto="Ter" cor="#FAB005" botaoAtivo={true} value={ter} setValue={setTer} />
                  <CheckboxPesonalisado texto="Qua" cor="#FAB005" botaoAtivo={true} value={qua} setValue={setQua} />
                  <CheckboxPesonalisado texto="Qui" cor="#FAB005" botaoAtivo={true} value={qui} setValue={setQui} />
                  <CheckboxPesonalisado texto="Sex" cor="#FAB005" botaoAtivo={true} value={sex} setValue={setSex} />
                  <CheckboxPesonalisado texto="Sab" cor="#FAB005" botaoAtivo={true} value={sab} setValue={setSab} />
                  <CheckboxPesonalisado texto="Dom" cor="#FAB005" botaoAtivo={true} value={dom} setValue={setDom} />
                </View>

              </View>
              : menu == 'promoção' ?
                <View>
                  <Promocao />
                </View>
                :
                <View>
                  <Composicao idEmpresa={idEmpresa} itemsComposicao={itemsComposicao} setItemsComposicao={setItemsComposicao} />
                </View>
            }
            <View style={estilo.modalBotoes}>
              <Button title='Salvar' isLoading={loading} onPress={loadingBotao} />
              <Button title='Cancelar' onPress={limpaModal} />
            </View>
          </View>
          <Alerta
            mensagem={mensagemError}
            error={statusError == 'firebase'}
            setError={setStatusError}
          />
        </View >
      </Modal>
      {lottieOK == 1 ?
        <LottieView
          style={estilos.lettieOK}
          source={lottiOK}
          loop={false}
          autoPlay={true}
          onAnimationFinish={tempo()}
        /> : <></>
      }
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilo.adicionarMemo}>
        <Text style={estilo.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}


