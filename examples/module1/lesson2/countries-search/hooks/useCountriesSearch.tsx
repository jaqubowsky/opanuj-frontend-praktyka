import { useCallback, useEffect, useState } from 'react';
import { transformToCountryDTO } from '../dtos/countriesDTO';
import { type CountryDTO } from '../types/Country';
import { filterCountries } from '../utils/countriesFilters';

type useCountriesSearchProps = {
  name: string;
  currency: string;
  language: string;
  capital: string;
};

export const useCountriesSearch = ({
  name,
  currency,
  language,
  capital,
}: useCountriesSearchProps) => {
  const [countries, setCountries] = useState<CountryDTO[] | []>([]);

  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const baseError = 'Failed to fetch countries. Please try again later.';
  const baseURL =
    'https://restcountries.com/v3.1/all?fields=name,population,currencies,capital,languages,flag';

  const fetchCountries = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');

      const response = await fetch(baseURL);
      if (!response.ok) throw new Error(baseError);

      const data = await response.json();
      if (!data) {
        throw new Error('No countries found. Please try again later.');
      }

      const countries = data.map(transformToCountryDTO);
      setCountries(countries);
    } catch (err) {
      if (err instanceof Error && err.message) setError(err.message);
      else setError(baseError);

      setCountries([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const filteredCountries = filterCountries(countries, {
    name,
    currency,
    language,
    capital,
  });

  return {
    countries,
    filteredCountries,
    error,
    isLoading,
  };
};
