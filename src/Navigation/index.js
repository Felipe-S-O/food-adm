import React from 'react'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import { TemaProvider } from '../contexts/TemaContext'
import { EmpresaProvider } from '../contexts/EmpresaContext'
import { PedidoProvider } from '../contexts/PedidoContext'
import { ProdutosProvider } from '../contexts/ProdutosContext'

export default function Navigation() {

    return <>
        <TemaProvider>
            <EmpresaProvider>
                <PedidoProvider>
                    <ProdutosProvider>
                        <NavigationContainer>
                            <StackNavigation />
                        </NavigationContainer>
                    </ProdutosProvider>
                </PedidoProvider>
            </EmpresaProvider>
        </TemaProvider>

    </>
}