// screens/RecoverPasswordScreen.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInputField from "../components/common/TextInputField";
import OrangeButton from "../components/common/OrangeButton";
import BackButton from "../components/common/BackButton"; // já criado

const RecoverPasswordScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header com BackButton */}
      <View style={styles.header}>
        <BackButton />
      </View>

      {/* Título centralizado */}
      <Text style={styles.title}>Recuperar senha</Text>

      {/* Campo de e-mail */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInputField
          placeholder="Login ou E-mail"
          keyboardType="email-address"
        />
      </View>

      {/* Botão */}
      <OrangeButton
        title="Confirmar"
        onPress={() => console.log("Recuperar senha")}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 40, // espaço pro backbutton no topo
  },
  header: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    fontFamily: "Alexandria-Bold",
    fontSize: 28,
    color: "#4F2D27",
    textAlign: "center",
    marginTop: 60, // empurra abaixo do botão
    marginBottom: 40,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: "#4F2D27",
    marginBottom: 5,
  },
});

export default RecoverPasswordScreen;
