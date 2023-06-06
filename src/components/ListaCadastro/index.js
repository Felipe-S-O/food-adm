import { Text, View, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { useContext } from 'react';
import CheckboxPesonalisado from '../CheckboxPesonalisado';

export function ListaCadastro({ item, tabela, setItemSelecionado }) {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)

  return (
    <TouchableOpacity style={estilo.botao} onPress={() => setItemSelecionado(item)}>
      {tabela == 'produtos' ? <View style={estilo.titulo} >
        <Text style={estilo.texto} >{item.produto}</Text>
          <Text style={estilo.texto2}>Categoria: {item.categoria}</Text>
        <View style={estilo.textoContainer}>
          <Text style={estilo.texto2}>Codigo: {item.codigo}</Text>
          <Text style={estilo.texto2}>R$: {item.preco}</Text>
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
              <CheckboxPesonalisado texto=" Ativo" cor="#FAB005" flexDirection='row' value={item.ativo} />
              <CheckboxPesonalisado texto=" Visivel" cor="#FAB005" flexDirection='row' value={item.visivel} />
            </View>
          </View>
            : tabela == 'fornecedores' ? <View style={estilo.textoContainer}>
              <Text style={estilo.texto} >{item.numero}</Text>
              <Text style={estilo.preco}>{item.preco}</Text>
            </View>
              : tabela == 'formaDePagamentos' ? <View style={estilo.textoContainer}>
                <Text style={estilo.texto} >{item.numero}</Text>
                <Text style={estilo.preco}>R$ {item.preco}</Text>
              </View>
                : tabela == 'clientes' ? <View style={estilo.textoContainer}>
                  <Text style={estilo.texto} >{item.numero}</Text>
                  <Text style={estilo.preco}>R$ {item.preco}</Text>
                </View> : <></>
      }
      <Text style={estilo.seta}>❯</Text>
    </TouchableOpacity>
  );
}
