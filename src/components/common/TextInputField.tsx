import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle } from 'react-native';

interface TextInputFieldProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

const TextInputField: React.FC<TextInputFieldProps> = (props) => {
  const { containerStyle, ...textInputProps } = props;
  
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#E78454"
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 48,
    backgroundColor: '#FDF0DC',
    borderColor: '#E78454',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#E78454',
  },
});

export default TextInputField;