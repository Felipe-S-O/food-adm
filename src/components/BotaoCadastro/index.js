import { Text, TouchableOpacity } from 'react-native';
import { estilos } from './estilos'
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
      {item == 'produtos' ? <Text style={estilo.botaoTexto}>Produto</Text>
        : item == 'combos' ? <Text style={estilo.botaoTexto}>Combo</Text>
          : item == 'categorias' ? <Text style={estilo.botaoTexto}>Categoria</Text>
            : item == 'fornecedores' ? <Text style={estilo.botaoTexto}>Fornecedor</Text>
              : item == 'formasDePagamentos' ? <Text style={estilo.botaoTexto}>Forma de pagamento</Text>
                : item == 'clientes' ? <Text style={estilo.botaoTexto}>Cliente</Text> : <></>
      }
    </TouchableOpacity>
  );
}
