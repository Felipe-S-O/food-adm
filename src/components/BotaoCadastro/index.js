import { Text, TouchableOpacity, View } from 'react-native';
import { estilos } from './estilos'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { TemaContext } from "../../contexts/TemaContext";
import { useContext } from 'react';

export function BotaoCadastro({ item }) {
  const navigation = useNavigation();
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  function abrirLista() {
    navigation.navigate('ListaDeCadastro', item);
  }
  return (
    <TouchableOpacity style={estilo.botao} onPress={() => abrirLista()}>
      {item == 'produtos' ? <View style={estilo.araeInterna}>
        <MaterialCommunityIcons style={estilo.botaoIcon} name="tag-multiple-outline" />
        <Text style={estilo.botaoTexto}>Produtos</Text></View>
        : item == 'combos' ? <View style={estilo.araeInterna}>
          <MaterialCommunityIcons style={estilo.botaoIcon} name="food" />
          <Text style={estilo.botaoTexto}>Combos</Text></View>
          : item == 'categorias' ? <View style={estilo.araeInterna}>
            <MaterialCommunityIcons style={estilo.botaoIcon} name="view-grid-outline" />
            <Text style={estilo.botaoTexto}>Categorias</Text></View>
            : item == 'fornecedores' ? <View style={estilo.araeInterna}>
              <MaterialCommunityIcons style={estilo.botaoIcon} name="truck-outline" />
              <Text style={estilo.botaoTexto}>Fornecedores</Text></View>
              : item == 'formasDePagamentos' ? <View style={estilo.araeInterna}>
                <MaterialCommunityIcons style={estilo.botaoIcon} name="cash-multiple" />
                <Text style={estilo.botaoTexto}>   Forma de Pagamentos</Text></View>
                : item == 'clientes' ? <View style={estilo.araeInterna}>
                  <MaterialCommunityIcons style={estilo.botaoIcon} name="account-heart-outline" />
                  <Text style={estilo.botaoTexto}>Clientes</Text></View> : <></>
      }
    </TouchableOpacity>
  );
}
export function BotaoFinaceiro({ item }) {
  const navigation = useNavigation();
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  function abrirLista() {
    navigation.navigate('ListaDeCadastro', item);
  }
  return (
    <TouchableOpacity style={estilo.botao} onPress={() => abrirLista()}>
      {item == 'Espelho de caixa' ? <View style={estilo.araeInterna}>
        <MaterialCommunityIcons style={estilo.botaoIcon} name="cash-register" />
        <Text style={estilo.botaoTexto}>Espelho de caixa</Text></View>
        : item == 'Contas de clientes' ? <View style={estilo.araeInterna}>
          <MaterialCommunityIcons style={estilo.botaoIcon} name="account-cash-outline" />
          <Text style={estilo.botaoTexto}>Contas de clientes</Text></View>
          : item == 'Contas a receber' ? <View style={estilo.araeInterna}>
            <MaterialCommunityIcons style={estilo.botaoIcon} name="cash-plus" />
            <Text style={estilo.botaoTexto}>Contas a receber</Text></View>
            : item == 'Contas a pagar' ? <View style={estilo.araeInterna}>
              <MaterialCommunityIcons style={estilo.botaoIcon} name="cash-minus" />
              <Text style={estilo.botaoTexto}>Contas a pagar</Text></View> : <></>
      }
    </TouchableOpacity>
  );
}
export function BotaoEstoque({ item }) {
  const navigation = useNavigation();
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  function abrirLista() {
    navigation.navigate('ListaDeCadastro', item);
  }
  return (
    <TouchableOpacity style={estilo.botao} onPress={() => abrirLista()}>
      {item == 'Saldo' ? <View style={estilo.araeInterna}>
        <MaterialCommunityIcons style={estilo.botaoIcon} name="chart-line" />
        <Text style={estilo.botaoTexto}>Saldo</Text></View>
        : item == 'Balanco' ? <View style={estilo.araeInterna}>
          <MaterialCommunityIcons style={estilo.botaoIcon} name="scale-unbalanced" />
          <Text style={estilo.botaoTexto}>Balanço</Text></View>
          : item == 'Produzir' ? <View style={estilo.araeInterna}>
            <MaterialCommunityIcons style={estilo.botaoIcon} name="chef-hat" />
            <Text style={estilo.botaoTexto}>Produção</Text></View>
            : item == 'Entrada avulsa' ? <View style={estilo.araeInterna}>
              <MaterialCommunityIcons style={estilo.botaoIcon} name="archive-plus-outline" />
              <Text style={estilo.botaoTexto}>Entrada de produtos</Text></View>
              : item == 'Receita' ? <View style={estilo.araeInterna}>
                <MaterialCommunityIcons style={estilo.botaoIcon} name="file-document-edit-outline" />
                <Text style={estilo.botaoTexto}>Receita</Text></View> : <></>
      }
    </TouchableOpacity>
  );
}
