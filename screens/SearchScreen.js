import React, { useState, useMemo } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import SearchResults from '../components/SearchResults';
import useSearch from '../hooks/useSearch';

export default function SearchScreen({ filters }) {
  const { dog, cat, serviceType } = filters;
  const [sortBy, setSortBy] = useState(0);
  const { results, isLoading } = useSearch({ dog, cat, serviceType });

  const sortedResults = useMemo(() => {
    if (sortBy === 0) return results;
    const copy = [...results];
    copy.sort((a, b) => Number(a.service_price) - Number(b.service_price));
    return copy;
  }, [results, sortBy]);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <SegmentedControlTab
          values={['Relevance', 'Price']}
          selectedIndex={sortBy}
          onTabPress={setSortBy}
        />
      </View>
      {isLoading ? (
        <View style={styles.contentContainer}>
          <ActivityIndicator size="large" color="#00BD70" />
        </View>
      ) : (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <SearchResults results={sortedResults} />
        </ScrollView>
      )}
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
});
