// screens/HomeScreen.tsx
import React from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import LightButton from "../components/common/LightButton";
import OrangeButton from "../components/common/OrangeButton";
import { RootStackParamList } from "../navigation/AppNavigator"; 

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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
          onPress={() => navigation.navigate("Register")}
        />
        <LightButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
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
