import React from "react";
import { View } from "react-native";
import Foto from "./Foto";

export default function Feed() {
  const posts = [
    {
      usuario: { nome: "Nokia", foto: "https://i.pravatar.cc/100?img=6" },
      imagem: "https://picsum.photos/600/400",
      descricao: "Lucae pronome neutre na bahia ✌️"
    },
    {
      usuario: { nome: "Tequipix", foto: "https://i.pravatar.cc/100?img=7" },
      imagem: "https://picsum.photos/600/401",
      descricao: "Bom dia 🌙✨"
    },
    {
      usuario: { nome: "Bar Sem Lona", foto: "https://i.pravatar.cc/100?img=9" },
      imagem: "https://picsum.photos/600/402",
      descricao: "Futibol é vida! ⚽️"
    },
    {
      usuario: { nome: "Vegeta", foto: "https://i.pravatar.cc/100?img=10" },
      imagem: "https://picsum.photos/600/785",
      descricao: "Viagem ao deserto 🏜️"
    }
  ];

  return (
    <View>
      {posts.map((p, i) => (
        <Foto key={i} usuario={p.usuario} imagem={p.imagem} descricao={p.descricao} />
      ))}
    </View>
  );
}
