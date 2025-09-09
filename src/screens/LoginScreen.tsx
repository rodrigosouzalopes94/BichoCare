import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OrangeButton from "../components/common/OrangeButton";
import LightButton from "../components/common/LightButton";
import LabeledInput from "../components/common/LabeledInput";
import BackButton from "../components/common/BackButton"; // importando

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header com BackButton + Título */}
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.title}>Login</Text>
      </View>

      <LabeledInput label="E-mail" />
      <LabeledInput label="Senha" secureTextEntry />

      <View style={{ marginTop: 30 }}>
        <OrangeButton title="Confirmar" onPress={() => console.log("Login")} />
        <LightButton
          title="Esqueceu sua senha?"
          onPress={() => console.log("Recuperar senha")}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4F2D27",
    fontFamily: "Alexandria",
    marginLeft: 10, // espaço entre o botão e o texto
  },
});

export default LoginScreen;
