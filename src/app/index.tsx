import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={style.container}>
      <Image source={require("../assets/logo.png")} style={style.logo} />

      <Text style={style.nome_projeto}>EducaQuiz</Text>

      <TouchableOpacity style={style.botao}>
        <Link href={"/cadastro"}>{" "}
          <Text style={style.botaoTexto}>Cadastrar-se</Text>
        </Link>
      </TouchableOpacity>

      <Text style={style.subtitulo}>
        Já tem uma conta?
        <Link href={"/login"} style={style.link}>
          {" "}
          <Text>Entrar</Text>
        </Link>
      </Text>

      <Text style={style.sinopse}>
        O EducaQuiz é um aplicativo interativo para auxiliar estudantes do
        ensino médio na revisão e aprendizado de disciplinas de forma divertida
        e eficaz. Através de quizzes dinâmicos e desafiadores, o aplicativo
        incentiva o engajamento dos alunos, tornando o estudo mais estimulante e
        produtivo.
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B83A2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 16,
  },
  logo: {
    width: 200,
    height: 200,
  },
  nome_projeto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000",
  },
  botao: {
    backgroundColor: "#0E1D50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 30,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitulo: {
    fontSize: 16,
    color: "#555",
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
