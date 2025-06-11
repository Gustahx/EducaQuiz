import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { Link, router } from "expo-router";
import { MaterialIcons, Feather } from "@expo/vector-icons";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (senha.length < 12 || senha.length > 16) {
      Alert.alert("Erro", "A senha deve ter entre 12 e 16 caracteres.");
      return;
    }

    Alert.alert("Sucesso", `Login feito com Sucesso!`);

    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={() => router.push("/")}>
        <MaterialIcons name="arrow-back" size={45} color="#0E1D50" />
      </TouchableOpacity>

      <Text style={styles.titulo}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.campoSenha}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Feather
            name={mostrarSenha ? "eye" : "eye-off"}
            size={24}
            color="#0E1D50"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => router.push("/cadastro")}
      >
        <Text style={{ color: "#0E1D50" }}>
          Ainda não tem conta?{" "}
          <Text style={{ fontWeight: "bold" }}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B83A2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#0E1D50",
  },
  input: {
    backgroundColor: "#fff",
    width: "70%",
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  campoSenha: {
    backgroundColor: "#fff",
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  inputSenha: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#0E1D50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  textoBotao: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 10,
  },
});