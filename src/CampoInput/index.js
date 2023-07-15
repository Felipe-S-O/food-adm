import { useState } from "react";
import { Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";


export function Lista() {

    const [selected, setSelected] = useState("");

    const data = [
        { key: '1', value: 'Preço do produto de maior valor' },
        { key: '2', value: 'Somar o preço dos produtos ao produto principal' },
        { key: '3', value: 'Somar os preços e dividir pela qtde de prod selecionados' },
        { key: '4', value: 'Ignorar o preço dos produtos e considerar apenas o preço do prod. principal' },
    ]

    return <>
        <Text>Método de cálculo *</Text>
        <SelectList
            setSelected={(val) => setSelected(val)}
            placeholder="Selecione o método"
            searchPlaceholder="Procurar"
            data={data}
            save="value"
        />
    </>

};