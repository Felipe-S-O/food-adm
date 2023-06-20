import CheckboxPesonalisado from '../CheckboxPesonalisado';
import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import CampoTexto from '../CampoTexto';
import { estilos } from './estilos'
import DateTime from '../DateTime';

export function Promocao({ alterarMenu, setMenu, promocao, setPromocao, mensagemError,
  setMensagemError, statusError, setStatusError, setAlterarMenu }) {

  useEffect(() => {
    if (alterarMenu == 'composição' || alterarMenu == 'geral') {
      guardarPromocao()
    } else if (alterarMenu == 'promoção') {
      editarPromocao()
    }
  }, [alterarMenu])

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const [segPromocao, setSegPromocao] = useState('')
  const [terPromocao, setTerPromocao] = useState('')
  const [quaPromocao, setQuaPromocao] = useState('')
  const [quiPromocao, setQuiPromocao] = useState('')
  const [sexPromocao, setSexPromocao] = useState('')
  const [sabPromocao, setSabPromocao] = useState('')
  const [domPromocao, setDomPromocao] = useState('')
  const [seg, setSeg] = useState(false)
  const [ter, setTer] = useState(false)
  const [qua, setQua] = useState(false)
  const [qui, setQui] = useState(false)
  const [sex, setSex] = useState(false)
  const [sab, setSab] = useState(false)
  const [dom, setDom] = useState(false)
  const [segHorarioInicial, setSegHorarioInicial] = useState("-- : --")
  const [segHorarioFinal, setSegHorarioFinal] = useState("-- : --")
  const [terHorarioInicial, setTerHorarioInicial] = useState("-- : --")
  const [terHorarioFinal, setTerHorarioFinal] = useState("-- : --")
  const [quaHorarioInicial, setQuaHorarioInicial] = useState("-- : --")
  const [quaHorarioFinal, setQuaHorarioFinal] = useState("-- : --")
  const [quiHorarioInicial, setQuiHorarioInicial] = useState("-- : --")
  const [quiHorarioFinal, setQuiHorarioFinal] = useState("-- : --")
  const [sexHorarioInicial, setSexHorarioInicial] = useState("-- : --")
  const [sexHorarioFinal, setSexHorarioFinal] = useState("-- : --")
  const [sabHorarioInicial, setSabHorarioInicial] = useState("-- : --")
  const [sabHorarioFinal, setSabHorarioFinal] = useState("-- : --")
  const [domHorarioInicial, setDomHorarioInicial] = useState("-- : --")
  const [domHorarioFinal, setDomHorarioFinal] = useState("-- : --")

  function editarPromocao() {
    if (promocao.seg) {
      setSeg(promocao.seg)
      setSegHorarioInicial(promocao.segHorarioInicial)
      setSegHorarioFinal(promocao.segHorarioFinal)
      setSegPromocao(promocao.segPromocao)
    }
    if (promocao.ter) {
      setTer(promocao.ter)
      setTerHorarioInicial(promocao.terHorarioInicial)
      setTerHorarioFinal(promocao.terHorarioFinal)
      setTerPromocao(promocao.terPromocao)
    }
    if (promocao.qua) {
      setQua(promocao.qua)
      setQuaHorarioInicial(promocao.quaHorarioInicial)
      setQuaHorarioFinal(promocao.quaHorarioFinal)
      setQuaPromocao(promocao.quaPromocao)
    }
    if (promocao.qui) {
      setQui(promocao.qui)
      setQuiHorarioInicial(promocao.quiHorarioInicial)
      setQuiHorarioFinal(promocao.quiHorarioFinal)
      setQuiPromocao(promocao.quiPromocao)
    }
    if (promocao.sex) {
      setSex(promocao.sex)
      setSexHorarioInicial(promocao.sexHorarioInicial)
      setSexHorarioFinal(promocao.sexHorarioFinal)
      setSexPromocao(promocao.sexPromocao)
    }
    if (promocao.sab) {
      setSab(promocao.sab)
      setSabHorarioInicial(promocao.sabHorarioInicial)
      setSabHorarioFinal(promocao.sabHorarioFinal)
      setSabPromocao(promocao.sabPromocao)
    }
    if (promocao.dom) {
      setDom(promocao.dom)
      setDomHorarioInicial(promocao.domHorarioInicial)
      setDomHorarioFinal(promocao.domHorarioFinal)
      setDomPromocao(promocao.domPromocao)
    }
  }

  function guardarPromocao() {
    setPromocao({
      seg: seg, segHorarioInicial: segHorarioInicial, segHorarioFinal: segHorarioFinal, segPromocao: segPromocao,
      ter: ter, terHorarioInicial: terHorarioInicial, terHorarioFinal: terHorarioFinal, terPromocao: terPromocao,
      qua: qua, quaHorarioInicial: quaHorarioInicial, quaHorarioFinal: quaHorarioFinal, quaPromocao: quaPromocao,
      qui: qui, quiHorarioInicial: quiHorarioInicial, quiHorarioFinal: quiHorarioFinal, quiPromocao: quiPromocao,
      sex: sex, sexHorarioInicial: sexHorarioInicial, sexHorarioFinal: sexHorarioFinal, sexPromocao: sexPromocao,
      sab: sab, sabHorarioInicial: sabHorarioInicial, sabHorarioFinal: sabHorarioFinal, sabPromocao: sabPromocao,
      dom: dom, domHorarioInicial: domHorarioInicial, domHorarioFinal: domHorarioFinal, domPromocao: domPromocao,
    })
    validarPromocao()
  }

  function validarPromocao() {
    if (seg && (segHorarioInicial == "-- : --" || segHorarioFinal == "-- : --" || segPromocao == '')) {
      setMensagemError('Os campos da segunda-feira é obrigatório!');
      setStatusError('seg')
      setAlterarMenu('promoção')
    } else if (ter && (terHorarioInicial == "-- : --" || terHorarioFinal == "-- : --" || terPromocao == '')) {
      setMensagemError('Os campos da terça-feira é obrigatório!');
      setStatusError('ter')
      setAlterarMenu('promoção')
    } else if (qua && (quaHorarioInicial == "-- : --" || quaHorarioFinal == "-- : --" || quaPromocao == '')) {
      setMensagemError('Os campos da quarta-feira é obrigatório!');;
      setStatusError('qua')
      setAlterarMenu('promoção')
    } else if (qui && (quiHorarioInicial == "-- : --" || quiHorarioFinal == "-- : --" || quiPromocao == '')) {
      setMensagemError('Os campos da quinta-feira é obrigatório!');
      setStatusError('qui')
      setAlterarMenu('promoção')
    } else if (sex && (sexHorarioInicial == "-- : --" || sexHorarioFinal == "-- : --" || sexPromocao == '')) {
      setMensagemError('Os campos da sexta-feira é obrigatório!');
      setStatusError('sex')
      setAlterarMenu('promoção')
    } else if (sab && (sabHorarioInicial == "-- : --" || sabHorarioFinal == "-- : --" || sabPromocao == '')) {
      setMensagemError('Os campos da sabado é obrigatório!');
      setStatusError('sab')
      setAlterarMenu('promoção')
    } else if (dom && (domHorarioInicial == "-- : --" || domHorarioFinal == "-- : --" || domPromocao == '')) {
      setMensagemError('Os campos da domingo é obrigatório!');
      setStatusError('dom')
      setAlterarMenu('promoção')
    } else {
      setMenu(alterarMenu)
      setMensagemError(null);
      setStatusError(null)
    }
  }

  return (
    <View>
      <Text style={estilo.texto}>Disponível</Text>
      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Seg" cor="#FAB005" botaoAtivo={true} value={seg} setValue={setSeg} />
        <DateTime tipo='time' horarioTexto={segHorarioInicial} setHorarioAtual={setSegHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={segHorarioFinal} setHorarioAtual={setSegHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSegPromocao} value={segPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'seg' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Ter" cor="#FAB005" botaoAtivo={true} value={ter} setValue={setTer} />
        <DateTime tipo='time' horarioTexto={terHorarioInicial} setHorarioAtual={setTerHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={terHorarioFinal} setHorarioAtual={setTerHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setTerPromocao} value={terPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'ter' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Qua" cor="#FAB005" botaoAtivo={true} value={qua} setValue={setQua} />
        <DateTime tipo='time' horarioTexto={quaHorarioInicial} setHorarioAtual={setQuaHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={quaHorarioFinal} setHorarioAtual={setQuaHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setQuaPromocao} value={quaPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'qua' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Qui" cor="#FAB005" botaoAtivo={true} value={qui} setValue={setQui} />
        <DateTime tipo='time' horarioTexto={quiHorarioInicial} setHorarioAtual={setQuiHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={quiHorarioFinal} setHorarioAtual={setQuiHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setQuiPromocao} value={quiPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'qui' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Sex" cor="#FAB005" botaoAtivo={true} value={sex} setValue={setSex} />
        <DateTime tipo='time' horarioTexto={sexHorarioInicial} setHorarioAtual={setSexHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={sexHorarioFinal} setHorarioAtual={setSexHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSexPromocao} value={sexPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'sex' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Sab" cor="#FAB005" botaoAtivo={true} value={sab} setValue={setSab} />
        <DateTime tipo='time' horarioTexto={sabHorarioInicial} setHorarioAtual={setSabHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={sabHorarioFinal} setHorarioAtual={setSabHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSabPromocao} value={sabPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'sab' ? mensagemError : null}</Text>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Dom" cor="#FAB005" botaoAtivo={true} value={dom} setValue={setDom} />
        <DateTime tipo='time' horarioTexto={domHorarioInicial} setHorarioAtual={setDomHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={domHorarioFinal} setHorarioAtual={setDomHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setDomPromocao} value={domPromocao} tipo='maney' descricao="R$0,00" />
      </View>
      <Text style={estilo.mensagemError}>{statusError == 'dom' ? mensagemError : null}</Text>

    </View>
  )
}
