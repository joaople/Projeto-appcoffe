import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View,
} from "react-native";
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { colors } from '../../styles/colors';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignIn() {
      if (!email.trim() || !password.trim()) {
        return Alert.alert("Entrar", "Preencha todos os campos!");
      }

      Alert.alert("Bem-vindo!", `Cadastro realizado com: ${email}`);

      router.push('/');
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.select({ ios: 'padding', android: 'height' })}>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <ImageBackground
        source={require('../../assets/images/imagendocadastro.jpeg')}
        style={styles.bg}
        resizeMode="cover"
      >
         <View style={styles.container}>

           <Text style={styles.title}>Cadastrar</Text>

           <Text style={styles.subtitle}>
            Crie sua conta para acessar.</Text>

           <View style={styles.form}>
            <Input placeholder="Nome" keyboardType="default" placeholderTextColor={colors.color1} onChangeText={setEmail} />
            <Input placeholder="E-mail" keyboardType="email-address" placeholderTextColor={colors.color1} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry placeholderTextColor={colors.color1} onChangeText={setPassword} /> 
            <Input placeholder="Confirmar Senha" secureTextEntry placeholderTextColor={colors.color1} onChangeText={setPassword} /> 
            <Button label="Cadastrar" onPress={handleSignIn}  />
           </View>
      
           <Text style={styles.footerText}>
              Já tem uma conta?{' '}
            <Link href="/" style={styles.footerlink}>
              Entre aqui
              </Link>
            </Text>
         </View>
       </ImageBackground>
     </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

  bg: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },

  container: {
    flex: 1,
    padding: 32,
    marginTop: 450,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.color4,

  },

  subtitle: {
    fontSize: 16,
    color: colors.color4,
  },

  form: {
    marginTop: 24,
    gap: 16,
  },

  footerText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 24,
    color: colors.color4,
  },

  footerlink: {
    color: colors.color1,
    fontWeight: 'bold',
  },

});