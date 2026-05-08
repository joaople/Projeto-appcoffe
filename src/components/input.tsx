import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from '../styles/colors';

export function Input(props: TextInputProps) {
    return (
      <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        borderWidth: 3,
        borderColor: colors.color1,
        borderRadius: 8,
        fontSize: 15,
        paddingLeft: 16,
        backgroundColor: colors.color4,
    },
})