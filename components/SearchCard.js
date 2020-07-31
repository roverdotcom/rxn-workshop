import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

import Avatar from './Avatar';

export default function SearchCard({ name, description, rating, price, avatarImg }) {
  return (
    <TouchableOpacity style={styles.searchCard}>
      <Avatar source={{ uri: avatarImg }} />
      <View style={styles.personContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {description}
        </Text>
        <StarRating
          starStyle={styles.rating}
          containerStyle={styles.ratingContainer}
          starSize={24}
          disabled
          maxStars={5}
          rating={rating}
        />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  searchCard: {
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
  },
  personContainer: {
    maxWidth: '60%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    marginBottom: 8,
  },
  priceContainer: {
    flex: 1,
  },
  price: {
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'right',
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  },
  rating: {
    color: 'gold',
  },
  ratingContainer: {
    justifyContent: 'flex-start',
  },
});
