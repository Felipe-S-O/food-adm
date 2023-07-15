import { Text, View } from 'react-native';
import { estilos } from './estilos'
import { TemaContext } from "../../contexts/TemaContext";
import { EmpresaContext } from "../../contexts/EmpresaContext"
import { useContext } from 'react';


export function ListaCarrosel({ item }) {

  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido)



  return (
    <View style={estilo.botao}>
      <Text style={estilo.texto} >{item.nome}</Text>
      <Text style={estilo.texto2}> {item.valor} 💰</Text>
    </View>
  )
}
