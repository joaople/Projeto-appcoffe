import { Link } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colors } from '../styles/colors';

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Button(props: ButtonProps) {
    return (
        <TouchableOpacity style={styles.conteiner} activeOpacity={0.7} {...props}>
            <Text style={styles.label}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        width: '100%',
        height: 48,
        backgroundColor: colors.color1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,  
    },
    label: {
        color: colors.color4,
        fontSize: 16,
        fontWeight: 600,
    },
});