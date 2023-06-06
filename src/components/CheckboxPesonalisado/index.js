import Checkbox from "expo-checkbox";
import { Text, TouchableOpacity, View } from "react-native";

export default function CheckboxPesonalisado({ texto, cor, value, setValue, flexDirection, marginBottom, botaoAtivo }) {
    return <>
        {botaoAtivo ?
            <TouchableOpacity style={{ flexDirection: flexDirection, marginBottom: marginBottom }}
                onPress={() => { value ? setValue(false) : setValue(true) }}>
                <Checkbox
                    value={value}
                    color={cor}
                    onValueChange={setValue}
                />
                <Text>{texto}</Text>
            </TouchableOpacity>
            :
            <View style={{ flexDirection: flexDirection}}>
                <Checkbox
                    value={value}
                    color={cor}
                />
                <Text>{texto}</Text>
            </View>

        }
    </>
}