import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { EmpresaContext } from "../../contexts/EmpresaContext"
import { useContext, useEffect, useState } from 'react';
import CheckboxPesonalisado from '../CheckboxPesonalisado';
import { buscalista } from '../../server/firestore';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export function ListaCadastro({ item, tabela, setItemSelecionado }) {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)
  const { idEmpresa } = useContext(EmpresaContext)
  const [lista, setLista] = useState([])
  const [categoriaProduto, setcategoriaProduto] = useState('')

  useEffect(() => {
    if (tabela == 'produtos') {
      buscalista(setLista, 'categorias', idEmpresa)
    }
  }, [])

  useEffect(() => {
    if (lista.length > 0) {
      lista.forEach(function (doc) {
        if (item.categoria == doc.codigo) { setcategoriaProduto(doc.categoria) }
      })
    }
  }, [lista])


  return (
    <TouchableOpacity style={estilo.botao} onPress={() => setItemSelecionado(item)}>
      {tabela == 'produtos' ? <View style={estilo.titulo} >
        <Text style={estilo.texto} >{item.produto}</Text>
        <Text style={estilo.texto2}>Categoria: {categoriaProduto}</Text>
        <View style={estilo.textoContainer}>
          <Text style={estilo.texto2}>Codigo: {item.codigo}</Text>
          <Text style={estilo.texto2}>R$: {item.preco.replace('.', ',')}</Text>
          <Text style={estilo.texto2}>{item.tipoMedida}</Text>
        </View>
        <View style={estilo.textoContainer}>
          <CheckboxPesonalisado texto=" Venda" cor="#FAB005" flexDirection='row' value={item.venda} />
          <CheckboxPesonalisado texto=" Insumo" cor="#FAB005" flexDirection='row' value={item.insumo} />
          <CheckboxPesonalisado texto=" Taxa" cor="#FAB005" flexDirection='row' value={item.taxa} />
        </View>
      </View>
        : tabela == 'combos' ? <View style={estilo.textoContainer}>
          <Text style={estilo.texto} >{item.numero}</Text>
          <Text style={estilo.preco}>R$ {item.preco}</Text>
        </View>
          : tabela == 'categorias' ? <View style={estilo.titulo} >
            <Text style={estilo.texto} >{item.categoria}</Text>
            <View style={estilo.textoContainer}>
              <Text style={estilo.texto2}>COD: {item.codigo}</Text>
              <CheckboxPesonalisado texto=" Ativa" cor="#FAB005" flexDirection='row' value={item.ativo} />
              <CheckboxPesonalisado texto=" Visivel" cor="#FAB005" flexDirection='row' value={item.visivel} />
            </View>
          </View>
            : tabela == 'fornecedores' ? <View style={estilo.titulo} >
              <Text style={estilo.texto} >{item.nome}</Text>
              <View style={estilo.iconTextoArea}>
                <MaterialCommunityIcons name="phone" size={18} color='#FAB005' />
                <Text style={estilo.texto2}> {item.celular}</Text>
              </View>
              {item.email ?
                <View style={estilo.iconTextoArea}>
                  <MaterialCommunityIcons name="email" size={18} color='#FAB005' />
                  <Text style={estilo.texto2}> {item.email}</Text>
                </View> : <></>
              }
            </View>
              : tabela == 'formasDePagamentos' ? <View style={estilo.titulo} >
                <Text style={estilo.texto} >{item.descricao}</Text>
                <View style={estilo.textoContainer}>
                  <Text style={estilo.texto2}>COD: {item.codigo}</Text>
                  <Text style={estilo.texto2}>TIPO: {item.tipoPagto}</Text>
                  <CheckboxPesonalisado texto=" Ativa" cor="#FAB005" flexDirection='row' value={item.ativa} />
                </View>
              </View>
                : tabela == 'clientes' ? <View style={estilo.titulo}>
                  <Text style={estilo.texto} >{item.nome}</Text>
                  <View style={estilo.iconTextoArea}>
                    <MaterialCommunityIcons name="phone" size={18} color='#FAB005' />
                    <Text style={estilo.texto2}> {item.celular}</Text>
                  </View>
                  {item.email ?
                    <View style={estilo.iconTextoArea}>
                      <MaterialCommunityIcons name="email" size={18} color='#FAB005' />
                      <Text style={estilo.texto2}> {item.email}</Text>
                    </View> : <></>
                  }
                </View> : <></>
      }
      <Text style={estilo.seta}>❯</Text>
    </TouchableOpacity>
  );
}
