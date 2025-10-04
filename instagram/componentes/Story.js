import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function Story({ nome, imagem }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", marginHorizontal: 8 },
  imagem: { width: 70, height: 70, borderRadius: 35, borderWidth: 2, borderColor: "green" },
  nome: { fontSize: 12, marginTop: 5 }
});
