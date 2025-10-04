import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Instagram Logo.png')} style={styles.logo} />
      <View style={styles.row}>
        <Image source={require('../assets/icones/coracao.png')} style={styles.icons} />
        <Image source={require('../assets/icones/send.png')} style={styles.icons} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", padding: 10 },
  logo: { height: 30, width: 120, resizeMode: "contain" },
  row: { flexDirection: "row" },
  icons : { width: 22, height: 18, marginLeft: 15, resizeMode: "contain", padding: 12 }
});
