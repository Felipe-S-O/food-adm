import React, { useContext, useEffect, useState } from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { EmpresaContext } from "../../contexts/EmpresaContext";
import { ControlledInput } from "../ControlledInput";
import { atualizar, salvarItem } from "../../server/firestore";
import Button from "../Button";
import validaCpfCnpj from "../CampoTexto/validaCpfCnpj";

export default function ClienteModal({ itemSelecionado, setItemSelecionado, codigo, setLottieOK }) {

  useEffect(() => {
    if (itemSelecionado.id) {
      setModalVisivel(true)
      setStatus('atualizar')
      setClienteAtualizar(true)
    }
  }, [itemSelecionado])

  const { idEmpresa } = useContext(EmpresaContext)
  const [cadastro, setCadastro] = useState({})
  const [loading, setIsLoading] = useState(false)
  const [status, setStatus] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)
  const [clienteAtualizar, setClienteAtualizar] = useState(false)

  useEffect(() => {
    if (cadastro.nome) {
      if (validaCpfCnpj(cadastro.identifica)) {
        carrega()
      } else {
        setStatus('identifica')
      }
    }
  }, [cadastro])

  function limpaModal() {
    setModalVisivel(false)
    setStatus('')
    setCadastro({})
    setItemSelecionado({})
    setClienteAtualizar(false)
  }

  function carrega() {
    setIsLoading(true)
    salvar()
    const intervalo = setInterval(() => {
      setIsLoading(false)
      clearInterval(intervalo);
    }, 2000)
  }

  function alteraStatus() {
    setStatus('buscadados')
  }

  async function salvar() {
    let resultado
    if (clienteAtualizar) {
      resultado = await atualizar(itemSelecionado.id, {
        ...cadastro
      }, 'clientes')
    } else {
      resultado = await salvarItem({
        ...cadastro
      }, 'clientes')
    }
    setLottieOK(1)
    limpaModal()

    if (resultado === 'Error') {
      setStatusError('firebase')
      setMensagemError('Erro ao tentar salvar tarefa!');
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
        <View style={estilos.centralizaModal}>
          <View style={estilos.modal}>
            <Text style={estilos.modalTitulo}>Criar Cliente</Text>

            <ScrollView style={estilos.area} showsVerticalScrollIndicator={true}>
              <ControlledInput itemSelecionado={itemSelecionado} setCadastro={setCadastro} status={status} setStatus={setStatus} codigo={codigo} idEmpresa={idEmpresa} />
            </ScrollView>

            <View style={estilos.modalBotoes}>
              <Button title='Salvar' isLoading={loading} onPress={alteraStatus} />
              <Button title='Cancelar' onPress={limpaModal} />
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
