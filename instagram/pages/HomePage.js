import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Titulo from "../componentes/Titulo";
import Stories from "../componentes/Stories";
import Feed from "../componentes/Feed";
import Menu from "../componentes/Menu";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Titulo />
      <ScrollView>
        <Stories />
        <Feed />
      </ScrollView>
      <Menu />
    </SafeAreaView>
  );
}
