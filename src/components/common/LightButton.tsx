import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface LightButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const LightButton = ({ title, onPress, style }: LightButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
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