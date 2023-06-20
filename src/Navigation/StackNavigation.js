import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation'
import LancamentoNavigation from './LancamentoNavigation'

import {
    Login,
    Inicio,
    ListaDeCadastro,
} from '../view'


const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator
        initialRouteName='Inicia'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Inicia" component={Inicio}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="ListaDeCadastro" component={ListaDeCadastro} />
        <Stack.Screen name="DashboardStack" component={TabNavigation}/>
        <Stack.Screen name="LancamentoStack" component={LancamentoNavigation} />
    </Stack.Navigator>

)

