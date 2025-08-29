import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OrangeButtonProps {
  title: string;
  onPress: () => void;
}

const OrangeButton = ({ title, onPress }: OrangeButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 310,
    height: 51,
    backgroundColor: '#E78454',
    borderRadius: 10,
    justifyContent: 'center', // Alinha o texto verticalmente
    alignItems: 'center', // Alinha o texto horizontalmente
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OrangeButton;