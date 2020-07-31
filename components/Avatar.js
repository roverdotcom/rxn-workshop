import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function Avatar({ source }) {
  return <Image style={styles.avatar} source={source} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8,
  },
});
