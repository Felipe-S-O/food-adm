import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext";
import CheckboxPesonalisado from "../CheckboxPesonalisado";
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from './estilos'
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { atualizar, salvarItem } from "../../server/firestore";
import { Alerta } from "../Alerta";
import Button from "../Button";


export default function Filtro() {



  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const [loading, setIsLoading] = useState(false)
  const { idEmpresa } = useContext(EmpresaContext);
  const [codigoAtual, setCodigoAtual] = useState(null)
  const [categoria, setCategoria] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)
  const [categoriaParaAtualizar, setCategoriaParaAtualizar] = useState(false)
  const [mensagemError, setMensagemError] = useState("");
  const [statusError, setStatusError] = useState("");
  const [ativa, setAtiva] = useState('')
  const [visivel, setVisivel] = useState('')
  const tabela = ('categorias')



  function limpaModal() {
    setCodigoAtual(null)
    setCategoria('')
    setAtiva(false)
    setVisivel(false)
    setStatusError('')
    setModalVisivel(false)
    setCategoriaParaAtualizar(false)
  }



  function loadingBotao() {
    if (codigo == null) {
      setMensagemError('O codigo é obrigatório!');
      setStatusError('codigo')
    } else if (categoria == '') {
      setMensagemError('A categoria é obrigatório!');
      setStatusError('categoria')
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={estilo.modal}>
              <Text style={estilo.modalTitulo}>Criar categoria</Text>



              <Text style={estilo.modalSubTitulo}>Nome da categoria*</Text>
              <TextInput
                style={estilo.modalInput}
                onChangeText={novoCategoria => setCategoria(novoCategoria)}
                placeholder="Digite o nome da categoria"
                value={categoria} />
              <Text style={estilo.mensagemError}>{statusError == 'categoria' ? mensagemError : ''}</Text>


              <View style={[estilo.checkbox, { marginBottom: 28 }]}>
                <CheckboxPesonalisado texto=" Ativa" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={ativa} setValue={setAtiva} />
                <CheckboxPesonalisado texto=" Visivel" cor="#FAB005" flexDirection='row' botaoAtivo={true} value={visivel} setValue={setVisivel} />
              </View>

              <View style={estilo.modalBotoes}>
                <Button title='Salvar' isLoading={loading} onPress={loadingBotao} />
                <Button title='Cancelar' onPress={limpaModal} />
              </View>
              <Alerta
                mensagem={mensagemError}
                error={statusError == 'firebase'}
                setError={setStatusError}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilo.filtro}>
        <MaterialCommunityIcons style={estilo.filtroIcon} name="filter-outline" />
      </TouchableOpacity>
    </>
  )
}
