import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext";
import { CEP, CPFouCNPJ, CampoTexto2, Celular, Email, Nome } from "../CampoTexto";
import { ControlledInput } from "../ControlledInput";


export default function ClienteModal({ itemSelecionado, setItemSelecionado, codigo, setLottieOK }) {


  const { idEmpresa } = useContext(EmpresaContext)
  const [cliente, setCliente] = useState({ codigo: codigo })
  const [status, setStatus] = useState('')
  const [CNPJ, setCNPJ] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [descricao, setDescricao] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)
  const [modalSelecionaHorario, setModalSelecionaHorario] = useState(false)
  const [tarefaParaAtualizar, setTarefaParaAtualizar] = useState(false)
  //const [lottieOK, setLottieOK] = useState(0)
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState(null);


  useEffect(() => {
    console.log(cliente)
  }, [cliente])

  function limpaModal() {
    setCliente('')
    setModalVisivel(false)
  }

  function tempo() {
    const intervalo = setInterval(() => {
      //setLottieOK(0)
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
        <View style={estilos.centralizaModal}>
          <View style={estilos.modal}>
            <Text style={estilos.modalTitulo}>Criar Cliente</Text>

            <ScrollView style={estilos.area} showsVerticalScrollIndicator={true}>
              <ControlledInput cliente={cliente} setCliente={setCliente} status={status} setStatus={setStatus} />
            </ScrollView>

            <View style={estilos.modalBotoes}>
              <TouchableOpacity style={estilos.modalBotaoSalvar} onPress={() => { setStatus('buscadados') }}>
                <Text style={estilos.modalBotaoTexto}>Salvar</Text>
              </TouchableOpacity>
              {tarefaParaAtualizar ?
                <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { excluir() }}>
                  <Text style={estilos.modalBotaoTexto}>Excluir</Text>
                </TouchableOpacity> : <></>
              }
              <TouchableOpacity style={estilos.modalBotaoCancelar} onPress={() => { limpaModal() }}>
                <Text style={estilos.modalBotaoTexto}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisivel(true) }} style={estilos.adicionarMemo}>
        <Text style={estilos.adicionarMemoTexto}>+</Text>
      </TouchableOpacity>
    </>
  )
}

const estilos = StyleSheet.create({
  centralizaModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  area: {
    width: 330,
    maxHeight: 560,
    marginBottom: 20,
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitulo: {
    color: '#15AABF',
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#15AABF',
  },
  modalHorario: {
    alignItems: "center",
    minWidth: 250,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHorarioTexto: {
    fontSize: 28,

  },
  modalSubTitulo: {
    fontSize: 14,
    fontWeight: "600"
  },
  tituloHorario: {
    fontSize: 14,
    marginTop: 12,
    fontWeight: "600"
  },
  mensagemError: {
    fontSize: 12,
    color: '#ff0000',
    marginBottom: 8,
    fontWeight: "600"
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalBotaoSalvar: {
    backgroundColor: "#3f9e1c",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#e04141",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoCancelar: {
    backgroundColor: "#2975c6",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoTexto: {
    color: "#FFFFFF",
  },
  adicionarMemo: {
    height: 64,
    width: 64,
    margin: 24,
    backgroundColor: "#FAB005",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  adicionarMemoTexto: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  },
  lettieOK: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
  }
});
