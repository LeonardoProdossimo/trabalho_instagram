import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Story from "./Story";

export default function Stories() {
  const listaStories = [
    { nome: "Seu story", imagem: "https://i.pravatar.cc/100?img=50" },
    { nome: "Kodak", imagem: "https://i.pravatar.cc/100?img=2" },
    { nome: "Windows", imagem: "https://i.pravatar.cc/100?img=3" },
    { nome: "Linux", imagem: "https://i.pravatar.cc/100?img=4" },
    { nome: "Sansung", imagem: "https://i.pravatar.cc/100?img=5" },
    { nome: "Nokia", imagem: "https://i.pravatar.cc/100?img=6" },
    { nome: "Tequipix", imagem: "https://i.pravatar.cc/100?img=7" },
    { nome: "Apple", imagem: "https://i.pravatar.cc/100?img=8" }
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {listaStories.map((s, index) => (
          <Story key={index} nome={s.nome} imagem={s.imagem} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 10, borderBottomWidth: 0.5, borderColor: "#ccc" }
});
