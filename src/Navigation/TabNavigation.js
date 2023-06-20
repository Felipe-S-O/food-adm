import React, { useContext } from 'react';
import { FontAwesome, Feather } from '@expo/vector-icons'
import { TemaContext } from '../contexts/TemaContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { estilos } from './estilos'
import {
    Dashboard,
    Configuracao,
    Vendas,
    Estoque,
    Cadastro,
} from '../view'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {

    const {
        temaEscolhido
    } = useContext(TemaContext)
    const estilo = estilos(temaEscolhido)

    return <>
        <Tab.Navigator
            initialRouteName='Dashboard'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#2ECBD2',
                tabBarStyle: estilo.tabBar,
            }}
        >
            <Tab.Screen name="Financeiro" component={Vendas} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="dollar-sign" size={22} color={color} />
                ),
            }} />

            <Tab.Screen name="Cadastro" component={Cadastro} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="plus-square" size={22} color={color} />
                ),
            }} />

            <Tab.Screen name="Dashboard" component={Dashboard} options={{
                tabBarIcon: ({ color }) => (
                   
                    <FontAwesome name="bar-chart"  size={22} color={color} />
                ),
            }} />

            <Tab.Screen name="Estoque" component={Estoque} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="package" size={22} color={color} />
                ),
            }} />

            <Tab.Screen name="Configuracão" component={Configuracao} options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="settings" size={24} color={color} />
                ),
            }} />

        </Tab.Navigator>
    </>

}
