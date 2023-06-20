import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native"
import { TemaContext } from "../../contexts/TemaContext";
import { EmpresaContext } from "../../contexts/EmpresaContext";
import { estilos } from './estilos'
import DropDownPicker from "react-native-dropdown-picker";
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { atualizar, salvarItem } from "../../server/firestore";
import Button from "../Button";

export default function FormaPagModal({ itemSelecionado, setItemSelecionado, codigo, setLottieOK }) {

  useEffect(() => {
    if (itemSelecionado.id) {
      editarItem()
      setModalVisivel(true)
      setPagtoParaAtualizar(true)
    }
  }, [itemSelecionado])

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  const { idEmpresa } = useContext(EmpresaContext)
  const [codigoAtual, setCodigoAtual] = useState(null)
  const [descricao, setDescricao] = useState('')
  const [comissao, setComissao] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)
  const [pagtoParaAtualizar, setPagtoParaAtualizar] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const [mensagemError, setMensagemError] = useState("");
  const [statusError, setStatusError] = useState('');
  const [ativa, setAtiva] = useState(false)
  const tabela = ('formasDePagamentos')

  const [open, setOpen] = useState(false);
  const [tipoPagto, setTipoPagto] = useState('');
  const [items, setItems] = useState([
    { label: 'Dinheiro', value: 'Dinheiro' },
    { label: 'Cartão Crédito', value: 'Cartão Crédito' },
    { label: 'Cartão Débito', value: 'Cartão Débito' },
    { label: 'Outro', value: 'Outro' },
  ]);

  function editarItem() {
    setCodigoAtual(itemSelecionado.codigo)
    setAtiva(itemSelecionado.ativa)
    setDescricao(itemSelecionado.descricao)
    setTipoPagto(itemSelecionado.tipoPagto)
    setComissao(itemSelecionado.comissao)
  }

  function limpaModal() {
    setCodigoAtual('')
    setAtiva(false)
    setDescricao('')
    setTipoPagto('')
    setOpen(false)
    setComissao('')
    setStatusError('')
    setModalVisivel(false)
    setItemSelecionado(false)
  }

  async function salvar() {
    let resultado
    if (pagtoParaAtualizar) {
      resultado = await atualizar(itemSelecionado.id, {
        codigo: codigoAtual,
        ativa: ativa,
        descricao: descricao,
        tipoPagto: tipoPagto,
        comissao: comissao,
        idEmpresa: idEmpresa
      }, tabela)
    } else {
      resultado = await salvarItem({
        codigo: codigo,
        ativa: ativa,
        descricao: descricao,
        tipoPagto: tipoPagto,
        comissao: comissao,
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

  function loadingBotao() {
    if (descricao == '') {
      setMensagemError('A forma de pagamento é obrigatório!');
      setStatusError('descricao')
    } else if (tipoPagto == '') {
      setMensagemError('O Tipo de pagamento é obrigatório!');
      setStatusError('tipoPagto')
    } else {
      setIsLoading(true)
      salvar()
      const intervalo = setInterval(() => {
        setIsLoading(false)
        clearInterval(intervalo);
      }, 2000)
    }
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
            <Text style={estilo.modalTitulo}>Criar forma de pagamento</Text>
            <View style={estilo.areaCodigo}>
              <View>
                <Text style={estilo.modalSubTitulo}>Codigo*</Text>
                {(tipoPagto == 'Dinheiro') || (tipoPagto == '') ?
                  <Text style={estilo.modalInput}>{codigo}</Text>
                  :
                  <Text style={estilo.modalInput}>{codigoAtual}</Text>
                }
              </View>
              <CheckboxPesonalisado texto=" Ativa" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={ativa} setValue={setAtiva} />
            </View>

            <Text style={estilo.modalSubTitulo}>Nome:</Text>
            <TextInput
              style={estilo.modalInput}
              onChangeText={novoDescricao => setDescricao(novoDescricao)}
              placeholder="Digite o nome"
              value={descricao} />
            <Text style={estilo.mensagemError}>{statusError == 'descricao' ? mensagemError : ''}</Text>

            <Text style={estilo.modalSubTitulo}>Tipo Pagto:</Text>
            <DropDownPicker
              style={estilo.dropDownPicker}
              open={open}
              value={tipoPagto}
              items={items}
              searchable={true}
              dropDownDirection="TOP"
              language="PT"
              setOpen={setOpen}
              setValue={setTipoPagto}
              setItems={setItems}
            />
            <Text style={estilo.mensagemError}>{statusError == 'tipoPagto' ? mensagemError : ''}</Text>
            {(tipoPagto == 'Dinheiro') || (tipoPagto == '') ?
              <View>
                <Text style={estilo.modalSubTitulo}>Comissão:</Text>
                <Text style={estilo.textoInputComissao}>%0,0</Text>
              </View>
              :
              <View>
                <Text style={estilo.modalSubTitulo}>Comissão:</Text>
                <TextInput
                  style={estilo.modalInput}
                  multiline={true}
                  onChangeText={novoComissao => setComissao(novoComissao)}
                  placeholder="%0,0"
                  value={comissao} />
              </View>
            }
            <View style={estilo.modalBotoes}>
              <Button title='Salvar' isLoading={loading} onPress={loadingBotao} />
              <Button title='Cancelar' onPress={limpaModal} />
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
