import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    flexDirection: 'row',
    marginBottom: 24,
  }
});
