import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
} from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
//  Test Quiz 
import { useEffect } from "react";

/* useEffect(() => {
  router.replace("/quiz");
}, []); */

export default function Index() {
  function handleMessage() {
    router.push("/cadastro");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.imagem}
        resizeMode="contain"
      />
      <Text style={styles.nome_projeto}>EducaQuiz</Text>
      <Text style={styles.titulo}>Bem-vindo</Text>
      <Button title="Cadastre-se" onPress={handleMessage} />
      <Text style={styles.subtitulo}>
        Já tem uma conta?{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/login")}
        >
          Entrar
        </Text>
      </Text>
      <Text style={styles.sinopse}>
        O EducaQuiz é um aplicativo interativo para auxiliar estudantes do
        ensino médio na revisão e aprendizado de disciplinas de forma divertida
        e eficaz. Através de quizzes dinâmicos e desafiadores, o aplicativo
        incentiva o engajamento dos alunos, tornando o estudo mais estimulante e
        produtivo.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 16,
  },
  imagem: {
    width: 200,
    height: 200,
  },
  nome_projeto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0E1D50",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  botao: {
    backgroundColor: "#0E1D50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 30,
  },
  sinopse: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  link: {
    color: "red",
    textDecorationLine: "none",
  },
}); 
