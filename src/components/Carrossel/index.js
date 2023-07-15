import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, Text } from 'react-native';
import estilo from './estilos';
import { ListaCarrosel } from "../ListaCarrosel";

export function Carrossel({ data, tempoAnimacao = 1000 }) {
  const [indice, setIndice] = useState(0);
  const carrosselRef = useRef();

  function alteraPosicaoObjeto() {
    if (indice < data.length - 1) {
      setIndice(indice + 1);
    }
    else {
      setIndice(0);
    }
  }

  useEffect(() => {
    carrosselRef.current.scrollToIndex({ index: indice })

    const intervalo = setInterval(() => {
      alteraPosicaoObjeto();
    }, tempoAnimacao)

    return () => clearInterval(intervalo);
  }, [indice])

  return (
    <View style={estilo.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item}) => <ListaCarrosel item={item} />}
        ref={carrosselRef}
      />
    </View>
  )
}