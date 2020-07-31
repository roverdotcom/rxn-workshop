import { useState } from 'react';

export default function useFilters() {
  const [dog, setDog] = useState(true);
  const [cat, setCat] = useState(false);
  const [serviceType, setServiceType] = useState('overnight-boarding');
  return { dog, cat, serviceType, setDog, setCat, setServiceType };
}
