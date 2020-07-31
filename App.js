import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button } from 'react-native';

import useFilters from './hooks/useFilters';
import FiltersScreen from './screens/FiltersScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createStackNavigator();

export default function App() {
  const filters = useFilters();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: 'RoverLight',
            headerRight: () => (
              <Button onPress={() => navigation.navigate('Filters')} title="Filters" />
            ),
          })}>
          {props => <SearchScreen {...props} filters={filters} />}
        </Stack.Screen>
        <Stack.Screen
          name="Filters"
          options={{
            title: 'Refine Search',
          }}>
          {props => <FiltersScreen {...props} filters={filters} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
