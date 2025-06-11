import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import { Link, router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("/perfil")}>
          {" "}
          <Ionicons name="person-circle-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.nome_projeto}>
          Educa<Text style={{ color: "#800000" }}>Quiz</Text>
        </Text>
        <TouchableOpacity onPress={() => router.push("/config")}>
          <Feather name="settings" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}>Matérias</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#D99A9A" }]}
        >
          <FontAwesome5 name="globe" size={32} color="black" />
          <Text style={styles.materiaTexto}>Geografia</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#CED9A9" }]}
        >
          <FontAwesome5 name="landmark" size={32} color="black" />
          <Text style={styles.materiaTexto}>História</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#D9A9D4" }]}
        >
          <FontAwesome5 name="microscope" size={32} color="black" />
          <Text style={styles.materiaTexto}>Ciências</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#A9D7D9" }]}
        >
          <FontAwesome5 name="flag" size={32} color="black" />
          <Text style={styles.materiaTexto}>Português</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#C9C9A1" }]}
        >
          <MaterialCommunityIcons
            name="calculator-variant"
            size={32}
            color="black"
          />
          <Text style={styles.materiaTexto}>Matemática</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.materiaBox, { backgroundColor: "#1AA7BC" }]}
        >
          <FontAwesome5 name="paint-brush" size={32} color="black" />
          <Text style={styles.materiaTexto}>Artes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B83A2",
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nome_projeto: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    gap: 15,
  },
  materiaBox: {
    width: 130,
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  materiaTexto: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  footer: {
    alignItems: "center",
    marginBottom: 30,
  },
});
