import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LightButtonProps {
  title: string;
  onPress: () => void;
}

const LightButton = ({ title, onPress }: LightButtonProps) => {
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
    backgroundColor: '#FDF0DC',
    borderColor: '#E78454',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#E78454',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LightButton;