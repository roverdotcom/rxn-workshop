import * as React from 'react';

import SearchCard from './SearchCard';

export default function SearchResults({ results }) {
  return results.map(result => <SearchCard key={result.name} {...result} />);
}
