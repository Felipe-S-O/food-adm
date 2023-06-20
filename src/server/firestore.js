import { db } from "../config/Firbase";
import { collection, addDoc, doc, updateDoc, deleteDoc, query, where, onSnapshot } from "firebase/firestore";

export async function salvarItem(dados, tabela) {
    try {
        await addDoc(collection(db, tabela), dados)
        return 'ok'
    } catch (error) {
        console.log('Erro add categoria: ', error)
        return 'erro'
    }
}

export async function buscalista(setLista, tabela, idEmpresa) {
    try {
        const q = query(collection(db, tabela), where('idEmpresa', "==", idEmpresa));
        onSnapshot(q, (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ id: doc.id, ...doc.data() });
            });
            setLista(lista)
        });
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function buscaListaInsumo(setLista, tabela, idEmpresa) {
    try {
        const q = query(collection(db, tabela), where('idEmpresa', "==", idEmpresa), where('insumo', "==", true));
        onSnapshot(q, (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ id: doc.id, ...doc.data() });
            });
            setLista(lista)
        });
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function buscaDuasCondicoes(setLista, tabela, idEmpresa, coluna, filtro) {
    try {
        const q = query(collection(db, tabela), where('idEmpresa', "==", idEmpresa), where(coluna, "==", filtro));
        onSnapshot(q, (querySnapshot) => {
            const lista = [];
            querySnapshot.forEach((doc) => {
                lista.push({ id: doc.id, ...doc.data() });
            });
            setLista(lista)
        });
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function pegarEmpresaTempoReal(setEmpresa) {
    try {
        const ref = query(collection(db, 'empresa'))
        onSnapshot(ref, (querySnapshot) => {
            const empresas = []
            querySnapshot.forEach((doc) => {
                empresas.push({ id: doc.id, ...doc.data() })
            })
            setEmpresa(empresas)
        });

    } catch (error) {
        console.log(error)
        return []
    }
}

export async function atualizar(id, dados, tabela) {
    try {
        const itemRef = doc(db, tabela, id);
        await updateDoc(itemRef, dados);
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function atualizarTarefa(id, dados, idEmpresa) {
    try {
        const tarefaRef = doc(db, "tarefa:" + idEmpresa, id);
        await updateDoc(tarefaRef, dados);
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function excluirTarefa(id, idEmpresa) {
    try {
        await deleteDoc(doc(db, "tarefa:" + idEmpresa, id));
        return 'ok'
    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

