import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import LightButton from "../components/common/LightButton";
import OrangeButton from "../components/common/OrangeButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      {/* Logo */}
      <Image
        source={require("../assets/images/welcomelogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <OrangeButton
          title="Registro"
          onPress={() => console.log("Registro clicado")}
        />
        <LightButton
          title="Login"
          onPress={() => console.log("Login clicado")}
          style={{ marginTop: 15 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  buttonsContainer: {
    alignItems: "center",
  },
});

export default HomeScreen;
