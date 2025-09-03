import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OrangeButton from "../components/common/OrangeButton";
import LabeledInput from "../components/common/LabeledInput";

const RegisterScreen = () => {
  const [userType, setUserType] = useState<"Cuidador" | "Pai de Pet">("Cuidador");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <LabeledInput label="Nome" placeholder="Digite seu nome" />
      <LabeledInput label="E-mail" placeholder="Digite seu e-mail" />
      <LabeledInput label="Senha" placeholder="Digite sua senha" secureTextEntry />
      <LabeledInput
        label="Repita sua senha"
        placeholder="Digite novamente sua senha"
        secureTextEntry
      />

      {/* Tipo de Cadastro */}
      <Text style={styles.label}>Tipo de Cadastro</Text>
      <View style={styles.optionContainer}>
        {["Cuidador", "Pai de Pet"].map((tipo) => (
          <TouchableOpacity
            key={tipo}
            style={[
              styles.optionButton,
              userType === tipo && styles.optionSelected,
            ]}
            onPress={() => setUserType(tipo as "Cuidador" | "Pai de Pet")}
          >
            <Text
              style={[
                styles.optionText,
                userType === tipo && styles.optionTextSelected,
              ]}
            >
              {tipo}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ marginTop: 30 }}>
        <OrangeButton title="Confirmar" onPress={() => console.log("Registrar")} />
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
  label: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#4F2D27",
    marginBottom: 5,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: "#E78454",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  optionSelected: { backgroundColor: "#E78454" },
  optionText: { fontSize: 16, fontFamily: "Poppins", color: "#4F2D27" },
  optionTextSelected: { color: "#FFF", fontWeight: "bold" },
});

export default RegisterScreen;
