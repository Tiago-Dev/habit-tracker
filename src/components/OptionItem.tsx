import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OptionItemProps {
  option: string;
  isSelected: boolean;
  onPress: () => void;
}

const OptionItem: React.FC<OptionItemProps> = ({ option, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.optionContainer, isSelected ? styles.selectedOption : null]}
    onPress={onPress}
  >
    <Text style={[isSelected ? styles.selectedOptionText : styles.optionText]}>{option}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  optionContainer: {
    width: 100,
    height: 50,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  selectedOption: {
    backgroundColor: '#8985E9',
  },
  selectedOptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default OptionItem;