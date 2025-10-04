import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image
} from "react-native";

import { useNavigation } from '@react-navigation/native';


export default function InstagramLogin() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Logo do Instagram */}
            <Image source={require('../assets/Instagram Logo.png')} style={styles.logo} />

            {/* Caixa de Login */}
            <View style={styles.box}>
              <TextInput
                style={styles.input}
                placeholder="Número de telefone, usuário ou e-mail"
                placeholderTextColor="#999"
                value={usuario}
                onChangeText={setUsuario}
              />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#999"
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
              />

              {/* Esqueceu a senha */}
              <TouchableOpacity style={styles.esqueceuSenha}>
                <Text style={styles.esqueceuSenhaText}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>

              {/* Botão de login */}
              <TouchableOpacity style={styles.loginButton}
               onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>

              {/* Login com Facebook */}
              <TouchableOpacity style={styles.fbLogin}>
                <Text style={styles.fbText}>Entrar com Facebook</Text>
              </TouchableOpacity>
            </View>

            {/* OU */}
            <View style={styles.ouContainer}>
              <View style={styles.linha} />
              <Text style={styles.ouText}>OU</Text>
              <View style={styles.linha} />
            </View>

            {/* Cadastro */}
            <View style={styles.cadastroContainer}>
              <Text style={styles.cadastroText}>Não tem uma conta? </Text>
              <TouchableOpacity>
                <Text style={styles.cadastroLink}>Cadastrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    fontFamily: "Billabong", // fonte do Instagram (pode instalar custom)
    marginBottom: 30,
  },
  box: {
    width: "100%",
    padding: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 14,
    backgroundColor: "#fafafa",
  },
  esqueceuSenha: {
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  esqueceuSenhaText: {
    fontSize: 12,
    color: "#00376b",
  },
  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#3897f0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  fbLogin: {
    flexDirection: "row",
    alignItems: "center",
  },
  fbText: {
    color: "#385185",
    fontWeight: "bold",
  },
  ouContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "80%",
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  ouText: {
    marginHorizontal: 10,
    color: "#999",
    fontWeight: "bold",
  },
  cadastroContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cadastroText: {
    color: "#999",
  },
  cadastroLink: {
    color: "#3897f0",
    fontWeight: "bold",
  },
});
