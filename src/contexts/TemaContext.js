import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { escuro, claro } from "../estilos/estilosGlobais";

export const TemaContext = createContext({})

export function TemaProvider({ children }) {

    const [temaAtual, setTemaAtual] = useState('claro')
    const [moduloAtual, setModuloAtual] = useState()

    const temas = {
        'escuro': escuro,
        'claro': claro
    }

    useEffect(() => {
        async function getTema() {
            const temaSalvo = await AsyncStorage.getItem('@tema')
            if (temaSalvo) {
                setTemaAtual(temaSalvo)
            }
        }
        getTema()
        async function getmodulo() {
            const moduloSalvo = await AsyncStorage.getItem('@modulo')
            if (moduloSalvo) {
                setModuloAtual(moduloSalvo)
            }
        }
        getmodulo()
    }, [])

    async function salvarTemaNoDispositivo(tema) {
        await AsyncStorage.setItem('@tema', tema)
        setTemaAtual(tema)
    }

    async function salvarModulo(modulo) {
        await AsyncStorage.setItem('@modulo', modulo)
        setModuloAtual(modulo)
    }

    return (
        <TemaContext.Provider value={{ temaAtual, temaEscolhido: temas[temaAtual], salvarTemaNoDispositivo, moduloAtual, salvarModulo }}>
            {children}
        </TemaContext.Provider>
    )
}