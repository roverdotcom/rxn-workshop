import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function Select({ items, value, onValueChange }) {
  const [tempValue, setTempValue] = useState(value);

  return (
    <RNPickerSelect
      style={pickerStyles}
      value={Platform.OS === 'ios' ? tempValue : value}
      onValueChange={value => {
        if (Platform.OS === 'ios') {
          setTempValue(value);
        } else {
          onValueChange(value);
        }
      }}
      onDonePress={() => onValueChange(tempValue)}
      items={items}
      useNativeAndroidPickerStyle={false}
    />
  );
}

const pickerStyles = StyleSheet.create({
  inputIOS: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginLeft: -16,
    marginRight: -16,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingRight: 30,
  },
  inputAndroid: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginLeft: -16,
    marginRight: -16,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingRight: 30,
  },
});
