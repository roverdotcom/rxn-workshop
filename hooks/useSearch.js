import { useMemo } from 'react';

import useDataApi from './useDataApi';

function buildSearchUrl({ dog, cat, serviceType }) {
  const baseUrl = 'https://www.rover.com/api/v4/search/';
  const queryParams = {
    service_type: serviceType,
    pet_type: [dog && 'dog', cat && 'cat'].filter(f => f).join(','),
    centerlat: '45.4695',
    centerlng: '-111.394',
  };
  // eslint-disable-next-line no-undef
  const urlSearchParams = new URLSearchParams(queryParams);
  return `${baseUrl}?${urlSearchParams.toString()}`;
}

export default function useSearch({ dog, cat, serviceType }) {
  const url = buildSearchUrl({ cat, dog, serviceType });
  const { data, isLoading, isError } = useDataApi(url);
  const results = useMemo(() => {
    if (!data || !Array.isArray(data.results)) return [];
    return data.results.map(result => ({
      name: result.person_name,
      description: result.description,
      rating: Number(result.ratings_average),
      price: result.price,
      avatarImg: result.thumb,
    }));
  }, [data]);
  return { results, isLoading, isError };
}
