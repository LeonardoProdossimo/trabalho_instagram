import React from "react"; 
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Foto({ usuario, imagem, descricao }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: usuario.foto }} style={styles.avatar} />
        <Text style={styles.nome}>{usuario.nome}</Text>
        <Image source={require('../assets/icones/trespontinhos.png')} style={styles.icons} />
      </View>

      <Image source={{ uri: imagem }} style={styles.imagem} />

      <View style={styles.actions}>
        <View style={styles.iconesfoto}>
            <Image source={require('../assets/icones/coracao.png')} style={styles.likes} />
            <Image source={require('../assets/icones/balaozinho.png')} style={styles.likes} />
            <Image source={require('../assets/icones/send.png')} style={styles.likes} />
        </View>
        <Image source={require('../assets/icones/favorito.png')} style={[styles.likes, styles.favorito]} />
      </View>

      <Text style={styles.descricao}>
        <Text style={styles.bold}>{usuario.nome} </Text>
        {descricao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20 },
  header: { flexDirection: "row", alignItems: "center", padding: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  nome: { fontWeight: "bold" },
  imagem: { width: "100%", height: 300 },

  actions: { width: "100%", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 8, paddingVertical: 6 },
  iconesfoto: { flexDirection: "row", gap: 10 },
  likes: { width: 24, height: 24, marginRight: 10, resizeMode: "contain" },
  favorito: { margin: 5, right: 2, position: "absolute", paddingTop: 4 },
  bold: { fontWeight: "bold" },
  descricao: { paddingHorizontal: 8, paddingTop: 4 },
  icons : { width: 6, height: 6, resizeMode: "contain", padding: 8, right: 15, position: "absolute" },
});
