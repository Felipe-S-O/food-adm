import { View, Text, StatusBar, TouchableOpacity, LayoutAnimation, } from 'react-native';
import AgendaAnimacao from '../../assets/agenda-animacao.json'
import { EntradaTexto } from '../../components/EntradaTexto';
import FundoOndulado from '../../components/FundoOndulado';
import { useNavigation } from '@react-navigation/native';
import { logar } from '../../server/authentication';
import React, { useContext, useEffect, useState } from "react";
import { Alerta } from '../../components/Alerta';
import Empresa from '../../components/Empresa';
import LottieView from 'lottie-react-native';
import { auth } from '../../config/Firbase'
import { estilos } from './estilos'
import { EmpresaContext } from '../../contexts/EmpresaContext';
import { pegarEmpresaTempoReal } from '../../server/firestore';
import { TemaContext } from "../../contexts/TemaContext";


export default function Login() {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  const navigation = useNavigation();
  const { idEmpresa } = useContext(EmpresaContext);
  const [idAmpresaAtual, setIdEmpresaAtual] = useState("vazio2");
  const [empresa, setEmpresa] = useState([]);

  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemError, setMensagemError] = useState("");
  const [statusError, setStatusError] = useState("");

  useEffect(() => {
    const estadoUsurio = auth.onAuthStateChanged(
      usuario => {
        if (usuario) {
          navigation.replace('Dashboard');
        }
      })

    estadoUsurio();
    pegarEmpresaTempoReal(setEmpresa)
  }, [])

  useEffect(() => {
    if (empresa.length > 0) {
      empresa.forEach(function (empresa) {
        if (empresa.id == idEmpresa) {
          setIdEmpresaAtual(empresa.id)
          console.log(empresa.id)
        }
      })
    }
  }, [empresa, idEmpresa])



  async function realizarLogin() {
    if (email == '') {
      setMensagemError('O email é obrigatório!');
      setStatusError('email')
    } else if (senha == '') {
      setMensagemError('O senha é obrigatório!');
      setStatusError('senha')
    } else {
      const resultado = await logar(email, senha)
      if (resultado === 'Error') {
        setStatusError('firebase')
        setMensagemError('Email ou Senha não conferem!');
      } else {
        navigation.replace('Dashboard')
      }
    }
  }

  const animacaoCustomizada = {
    duration: 1500,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 0.7
    }
  }

  LayoutAnimation.configureNext(animacaoCustomizada);

  function avancar() {

    if (idEmpresa == idAmpresaAtual) {
      LayoutAnimation.linear();
      setAltura(390);
      setFazerLogin(true);
    } else {
      setStatusError('empresa')
      setMensagemError('Empresa não localizada, por favor verifca o ID da sua empresa');
    }
  }

  return (

    <View style={estilo.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#15AABF' />
      <Empresa />
      <LottieView
        style={estilo.atendenteImg}
        source={AgendaAnimacao}
        loop={true}
        autoPlay={true}
      />
      <FundoOndulado height={altura}>
        <View style={estilo.infoArea}>
          {fazerLogin ?
            <View>
              <Text style={estilo.titulo}>Olá! Acesse sua conta</Text>
              <Text style={estilo.texto}>Entre com suas informações</Text>
              <View style={estilo.inputArea}>
                <EntradaTexto
                  label="E-mail"
                  value={email}
                  onChangeText={texto => setEmail(texto)}
                  error={statusError == 'email'}
                  messageError={mensagemError}
                />
                <EntradaTexto
                  label="Senha"
                  value={senha}
                  onChangeText={texto => setSenha(texto)}
                  secureTextEntry
                  error={statusError == 'senha'}
                  messageError={mensagemError}
                />
                <Alerta
                  mensagem={mensagemError}
                  error={statusError == 'firebase'}
                  setError={setStatusError}
                />
              </View>
            </View>
            :
            <View>
              <Text style={estilo.titulo}>Gerencie sua agenda</Text>
              <Text style={estilo.texto}>
                Você consegue gerenciar seus horarios e controla os agendamentos.
              </Text>
              <Alerta
                mensagem={mensagemError}
                error={statusError == 'empresa'}
                setError={setStatusError}
              />
            </View>
          }
          {fazerLogin ?
            <TouchableOpacity style={estilo.botao} onPress={() => realizarLogin()} >
              <Text style={estilo.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={estilo.botao} onPress={avancar} >
              <Text style={estilo.botaoTexto}>Começar</Text>
            </TouchableOpacity>
          }
        </View>
      </FundoOndulado>
    </View>

  );
}