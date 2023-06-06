import React, { useState } from "react";
import { adicionaCategoria } from "../../servico/Categoria";

export default function EditarCategoria(){

    const [codigo, setCodigo] = useState();
    const [texto, setTexto] = useState();
    const [visivel, setVisivel] = useState();

    async function salvarCategoria(){
        const umaCategoria ={
            codigo: codigo,
            texto: texto,
            visivel: visivel,
        }
        await adicionaCategoria(umaCategoria)
        console.log(umaCategoria)
    }
}