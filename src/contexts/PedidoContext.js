import { createContext, useState } from "react";

export const PedidoContext = createContext({})

export function PedidoProvider({ children }) {

    const [mesaContext, setMesaContext] = useState()
    const [comandaContext, setComandaContext] = useState()

    function salvarMesaComanda( mesa, comanda ) {
        setMesaContext(mesa)
        setComandaContext(comanda)
    }

    return (
        <PedidoContext.Provider value={{ mesaContext, comandaContext, salvarMesaComanda }}>
            {children}
        </PedidoContext.Provider>
    )
}