import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import TextInputField from "./TextInputField";

interface LabeledInputProps {
  label: string;
  secureTextEntry?: boolean;
  placeholder?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({
  label,
  secureTextEntry,
  placeholder,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ marginBottom: 15 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInputField
          placeholder={placeholder}
          secureTextEntry={secureTextEntry && !visible}
          style={{ flex: 1 }}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Ionicons
              name={visible ? "eye-off" : "eye"}
              size={22}
              color="#E78454"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: "Poppins",
    color: "#4F2D27",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LabeledInput;
