import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
    LancamentoCategoria,
    Carrinho,
    Conta,
    LancamentoProduto,
} from '../view'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName='LancamentoCategoria'>
        <Stack.Screen name="LancamentoCategoria" component={LancamentoCategoria} options={{ headerShown: false }} />
        <Stack.Screen name="Carrinho" component={Carrinho} options={{ headerShown: false }}/>
        <Stack.Screen name="Conta" component={Conta}  options={{ headerShown: false }} />
        <Stack.Screen name="LancamentoProduto" component={LancamentoProduto} options={{ headerShown: false }} />
    </Stack.Navigator>

)