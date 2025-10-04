import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icones/home.png')} />
      <Image source={require('../assets/icones/lupa.png')} />
      <Image source={require('../assets/icones/mais.png')} />
      <Image source={require('../assets/icones/video-play.png')} />
      <Image source={{ uri: "https://i.pravatar.cc/100?img=50" }} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
    resizeMode: "contain"
  },
  imagem: { width: 26, height: 26, borderRadius: 50, borderWidth: 0.5, borderColor: "red"}
});
