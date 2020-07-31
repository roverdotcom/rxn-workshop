import React from 'react';
import { View, Text, Switch, StyleSheet, Button } from 'react-native';

import Select from '../components/Select';

export default function SearchScreen({ filters, navigation }) {
  const { dog, setDog, cat, setCat, serviceType, setServiceType } = filters;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.fieldLabel}>Pets</Text>
        <View style={styles.filterField}>
          <Text>Dogs</Text>
          <Switch value={dog} onValueChange={setDog} />
        </View>
        <View style={[styles.filterField, styles.lastFilterField]}>
          <Text>Cats</Text>
          <Switch value={cat} onValueChange={setCat} />
        </View>
        <Text style={styles.fieldLabel}>Service</Text>
        <Select
          value={serviceType}
          onValueChange={setServiceType}
          items={[
            { label: 'Dog Boarding', value: 'overnight-boarding' },
            { label: 'House Sitting', value: 'overnight-traveling' },
            { label: 'Drop-in Visits', value: 'drop-in' },
            { label: 'Doggy Day Care', value: 'doggy-day-care' },
          ]}
        />
        <Button title="Done" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  filterField: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginLeft: -16,
    marginRight: -16,
    borderTopColor: 'lightgrey',
    borderTopWidth: 1,
  },
  lastFilterField: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  fieldLabel: {
    textTransform: 'uppercase',
    color: 'darkgrey',
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
