import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { useContext, useState } from 'react';
import CheckboxPesonalisado from '../CheckboxPesonalisado';
import CampoTexto from '../CampoTexto';
import DateTime from '../DateTime';

export function Promocao() {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const [segPromocao, setSegPromocao] = useState(null)
  const [terPromocao, setTerPromocao] = useState(null)
  const [quaPromocao, setQuaPromocao] = useState(null)
  const [quiPromocao, setQuiPromocao] = useState(null)
  const [sexPromocao, setSexPromocao] = useState(null)
  const [sabPromocao, setSabPromocao] = useState(null)
  const [domPromocao, setDomPromocao] = useState(null)
  const [seg, setSeg] = useState(false)
  const [ter, setTer] = useState(false)
  const [qua, setQua] = useState(false)
  const [qui, setQui] = useState(false)
  const [sex, setSex] = useState(false)
  const [sab, setSab] = useState(false)
  const [dom, setDom] = useState(false)
  const [segHorarioInicial, setSegHorarioInicial] = useState('')
  const [segHorarioFinal, setSegHorarioFinal] = useState('')
  const [terHorarioInicial, setTerHorarioInicial] = useState('')
  const [terHorarioFinal, setTerHorarioFinal] = useState('')
  const [quaHorarioInicial, setQuaHorarioInicial] = useState('')
  const [quaHorarioFinal, setQuaHorarioFinal] = useState('')
  const [quiHorarioInicial, setQuiHorarioInicial] = useState('')
  const [quiHorarioFinal, setQuiHorarioFinal] = useState('')
  const [sexHorarioInicial, setSexHorarioInicial] = useState('')
  const [sexHorarioFinal, setSexHorarioFinal] = useState('')
  const [sabHorarioInicial, setSabHorarioInicial] = useState('')
  const [sabHorarioFinal, setSabHorarioFinal] = useState('')
  const [domHorarioInicial, setDomHorarioInicial] = useState('')
  const [domHorarioFinal, setDomHorarioFinal] = useState('')
  const [horarioTexto, setHorarioTexto] = useState("00:00")

  return (
    <View>
      <Text style={estilo.texto}>Disponível</Text>
      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Seg" cor="#FAB005" botaoAtivo={true} value={seg} setValue={setSeg} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSegHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSegHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSegPromocao} value={segPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Ter" cor="#FAB005" botaoAtivo={true} value={ter} setValue={setTer} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setTerHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setTerHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setTerPromocao} value={terPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Qua" cor="#FAB005" botaoAtivo={true} value={qua} setValue={setQua} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setQuaHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setQuaHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setQuaPromocao} value={quaPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Qui" cor="#FAB005" botaoAtivo={true} value={qui} setValue={setQui} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setQuiHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setQuiHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setQuiPromocao} value={quiPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Sex" cor="#FAB005" botaoAtivo={true} value={sex} setValue={setSex} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSexHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSexHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSexPromocao} value={sexPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Sab" cor="#FAB005" botaoAtivo={true} value={sab} setValue={setSab} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSabHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setSabHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setSabPromocao} value={sabPromocao} tipo='numeric' descricao="valor" />
      </View>

      <View style={estilo.area}>
        <CheckboxPesonalisado texto="Dom" cor="#FAB005" botaoAtivo={true} value={dom} setValue={setDom} />
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setDomHorarioInicial} />
        <Text style={estilo.texto}>as</Text>
        <DateTime tipo='time' horarioTexto={horarioTexto} setHorarioAtual={setDomHorarioFinal} />
        <CampoTexto subTitulo='Preço de Venda' setValue={setDomPromocao} value={domPromocao} tipo='numeric' descricao="valor" />
      </View>

    </View>
  )
}
