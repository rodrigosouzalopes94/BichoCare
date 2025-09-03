import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OrangeButton from "../components/common/OrangeButton";
import LightButton from "../components/common/LightButton";
import LabeledInput from "../components/common/LabeledInput";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <LabeledInput label="E-mail" placeholder="Digite seu e-mail" />
      <LabeledInput label="Senha" placeholder="Digite sua senha" secureTextEntry />

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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4F2D27",
    marginBottom: 30,
    fontFamily: "Alexandria",
    textAlign: "center",
  },
});

export default LoginScreen;
