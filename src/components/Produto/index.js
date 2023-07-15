import React, { useContext, useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import DropDownPicker from 'react-native-dropdown-picker';
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { CampoTexto } from "../CampoTexto";
import { atualizar, salvarItem } from "../../server/firestore";
import { EmpresaContext } from "../../contexts/EmpresaContext";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Produto({ codigo, alterarMenu, listaCategoria, setListaCategoria, produto, setProduto,
  carregaDados, setCarregaDados, setMenu, setComposicaoAtual, produtoParaAtualizar, itemSelecionado,
  mensagemError, setMensagemError, statusError, setStatusError, itemsComposicao, setAlterarMenu, scanned, setScanned }) {

  useEffect(() => {
    if (alterarMenu == 'composição' || alterarMenu == 'promoção' || alterarMenu == 'codeScanner') {
      guardarProduto()
    } else if (alterarMenu == 'geral') {
      editarProduto()
    }
  }, [alterarMenu])

  useEffect(() => {
    if (itemSelecionado.id) {
      editarProduto()
    }
  }, [itemSelecionado])

  useEffect(() => {
    let custoComposicao = 0
    if (itemsComposicao.length > 0) {
      itemsComposicao.forEach(function (doc) {
        custoComposicao += doc.preco
      })
    }
    setCusto(custoComposicao)
  }, [itemsComposicao])

  const { temaEscolhido } = useContext(TemaContext)
  const estilo = estilos(temaEscolhido)
  const { idEmpresa } = useContext(EmpresaContext)
  const [venda, setVenda] = useState(false)
  const [insumo, setInsumo] = useState(false)
  const [composicao, setComposicao] = useState(false)
  const [codigoAtual, setCodigoAtual] = useState(codigo)
  const [nomeProduto, setNomeProduto] = useState('')
  const [preco, setPreco] = useState('')
  const [taxa, setTaxa] = useState(false)
  const [seg, setSeg] = useState(false)
  const [ter, setTer] = useState(false)
  const [qua, setQua] = useState(false)
  const [qui, setQui] = useState(false)
  const [sex, setSex] = useState(false)
  const [sab, setSab] = useState(false)
  const [dom, setDom] = useState(false)
  const [open, setOpen] = useState(false)
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null)
  const [custo, setCusto] = useState(0)


  const [openTipo, setOpenTipo] = useState(false);
  const [tipoMedida, setTipoMedida] = useState(null)
  const [itemsMedida, setItemsMedida] = useState([
    { label: 'UN', value: 'UN' },
    { label: 'KG', value: 'KG' },
    { label: 'LT', value: 'LT' }
  ]);

  useEffect(() => {
    if (insumo) {
      setComposicao(false)
      setComposicaoAtual(false)
    }
  }, [insumo])

  useEffect(() => {
    if (composicao) {
      setComposicaoAtual(true)
      setInsumo(false)
    }
  }, [composicao])

  useEffect(() => {
    if (carregaDados == 1) {
      validarProduto()
    }
  }, [carregaDados])

  function editarProduto() {
    if (produto.codigo) {
      setVenda(produto.venda)
      setInsumo(produto.insumo)
      setComposicao(produto.composicao)
      setNomeProduto(produto.produto)
      setTipoMedida(produto.tipoMedida)
      setPreco(produto.preco)
      setCategoriaSelecionada(produto.categoria)
      setTaxa(produto.taxa)
      setSeg(produto.seg)
      setTer(produto.ter)
      setQua(produto.qua)
      setQui(produto.qui)
      setSex(produto.sex)
      setSab(produto.sab)
      setDom(produto.dom)
      setCodigoAtual(produto.codigo)
    }
  }

  function validarProduto() {
    if (!venda && !insumo) {
      setMensagemError('O tipo do produto é obrigatório!');
      setStatusError('tipo')
      setCarregaDados(0)
    } else if (nomeProduto == '') {
      setMensagemError('O nome do produto é obrigatório!');
      setStatusError('produto')
      setCarregaDados(0)
    } else if (tipoMedida == '') {
      setMensagemError('O tipo de medida é obrigatório!');
      setStatusError('tipoMedida')
      setCarregaDados(0)
    } else if (preco == '') {
      setMensagemError('O preço é obrigatório!');
      setStatusError('preco')
      setCarregaDados(0)
    } else if (categoriaSelecionada == null) {
      setMensagemError('A categoria é obrigatório!');
      setStatusError('categoria')
      setCarregaDados(0)
    } else {
      salvar()
      setCarregaDados(2)
    }
  }

  async function salvar() {
    let resultado
    if (produtoParaAtualizar) {
      resultado = await atualizar(itemSelecionado.id, {
        venda: venda, insumo: insumo, composicao: composicao, codigo: codigoAtual, ean: scanned,
        produto: nomeProduto, tipoMedida: tipoMedida, preco: preco, categoria: categoriaSelecionada,
        taxa: taxa, seg: seg, ter: ter, qua: qua, qui: qui, sex: sex, sab: sab, dom: dom, idEmpresa: idEmpresa
      }, 'produtos')

    } else {
      resultado = await salvarItem({
        venda: venda, insumo: insumo, composicao: composicao, codigo: codigoAtual, ean: scanned,
        produto: nomeProduto, tipoMedida: tipoMedida, preco: preco, categoria: categoriaSelecionada,
        taxa: taxa, seg: seg, ter: ter, qua: qua, qui: qui, sex: sex, sab: sab, dom: dom, idEmpresa: idEmpresa
      }, 'produtos')
    }

    if (resultado === 'Error') {
      setStatusError('firebase')
      setMensagemError('Erro ao tentar salvar tarefa!');
    }
  }

  function guardarProduto() {
    setProduto({
      venda: venda, insumo: insumo, composicao: composicao, codigo: codigoAtual, ean: scanned,
      produto: nomeProduto, tipoMedida: tipoMedida, preco: preco, categoria: categoriaSelecionada,
      taxa: taxa, seg: seg, ter: ter, qua: qua, qui: qui, sex: sex, sab: sab, dom: dom,
    })
    setMenu(alterarMenu)
  }

  return (
    <View>
      <Text style={estilo.subTitulo}>Tipo*</Text>
      <View style={estilo.checkbox}>
        <CheckboxPesonalisado texto=" Venda" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={venda} setValue={setVenda} />
        <CheckboxPesonalisado texto=" Insumo" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={insumo} setValue={setInsumo} />
        <CheckboxPesonalisado texto=" Composição" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={composicao} setValue={setComposicao} />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'tipo' ? mensagemError : null}</Text>

      <View style={estilo.precoArea}>
        <View style={estilo.area}>
          <Text style={estilo.subTitulo}>Código*</Text>
          <Text style={estilo.modalInput}>{codigoAtual}</Text>
        </View>

        <CampoTexto
          subTitulo='Código de barra'
          setValue={setScanned}
          value={scanned}
          tipo='numeric'
          descricao="Código de barra" />

        <TouchableOpacity style={estilo.botaoCamera} onPress={() => setAlterarMenu('codeScanner')}>
          <MaterialCommunityIcons name="barcode-scan" size={30} color='#FAB005' />
        </TouchableOpacity>
      </View>

      <CampoTexto
        subTitulo='Nome do produto*'
        mensagemError={statusError == 'produto' ? mensagemError : null}
        setValue={setNomeProduto}
        value={nomeProduto}
        descricao="Digite o nome do produto"
      />

      <View style={estilo.precoArea}>
        <View>
          <Text style={estilo.subTitulo}>Tipo de medida*</Text>
          <DropDownPicker
            style={estilo.dropDownPicker}
            open={openTipo}
            value={tipoMedida}
            items={itemsMedida}
            dropDownDirection="TOP"
            language="PT"
            setOpen={setOpenTipo}
            setValue={setTipoMedida}
            setItems={setItemsMedida}
          />
          <Text style={estilo.mensagemError}>{statusError == 'tipoMedida' ? mensagemError : null}</Text>
        </View>

        <View >
          <Text style={estilo.subTitulo}>Custo unitário</Text>
          <Text style={estilo.modalInput}>{custo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Text>
          <CampoTexto
            subTitulo='Preço de venda*'
            mensagemError={statusError == 'preco' ? mensagemError : null}
            setValue={setPreco}
            value={preco}
            tipo='maney'
            descricao="R$0,00" />
        </View>
      </View>

      <Text style={estilo.subTitulo}>Categoria*</Text>
      <DropDownPicker
        style={estilo.dropDownPicker}
        open={open}
        value={categoriaSelecionada}
        items={listaCategoria}
        searchable={true}
        dropDownDirection="TOP"
        language="PT"
        setOpen={setOpen}
        setValue={setCategoriaSelecionada}
        setItems={setListaCategoria}
      />
      <Text style={estilo.mensagemError}>{statusError == 'categoria' ? mensagemError : null}</Text>

      <View style={estilo.checkboxTaxa}>
        <CheckboxPesonalisado texto=" Taxa" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={taxa} setValue={setTaxa} />
      </View >

      <Text style={estilo.subTitulo}>Disponível</Text>
      <View style={[estilo.checkbox, { marginBottom: 24 }]}>
        <CheckboxPesonalisado texto="Seg" cor="#FAB005" botaoAtivo={true} value={seg} setValue={setSeg} />
        <CheckboxPesonalisado texto="Ter" cor="#FAB005" botaoAtivo={true} value={ter} setValue={setTer} />
        <CheckboxPesonalisado texto="Qua" cor="#FAB005" botaoAtivo={true} value={qua} setValue={setQua} />
        <CheckboxPesonalisado texto="Qui" cor="#FAB005" botaoAtivo={true} value={qui} setValue={setQui} />
        <CheckboxPesonalisado texto="Sex" cor="#FAB005" botaoAtivo={true} value={sex} setValue={setSex} />
        <CheckboxPesonalisado texto="Sab" cor="#FAB005" botaoAtivo={true} value={sab} setValue={setSab} />
        <CheckboxPesonalisado texto="Dom" cor="#FAB005" botaoAtivo={true} value={dom} setValue={setDom} />
      </View>

    </View>
  )
}
