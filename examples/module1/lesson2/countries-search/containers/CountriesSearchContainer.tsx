import { useState } from 'react';
import { CountriesError } from '../components/CountriesError';
import { CountriesList } from '../components/CountriesList';
import { CountriesTitle } from '../components/CountriesTitle';
import { CountryItem } from '../components/CountryItem';
import CurrencyFilter from '../components/CurrencyFilter';
import { DropdownFilter } from '../components/DropdownFilter';
import NameFilter from '../components/NameFilter';
import { Spinner } from '../components/Spinner';
import { useCountriesSearch } from '../hooks/useCountriesSearch';

const CountriesSearchContainer = () => {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');
  const [capital, setCapital] = useState('');

  const { countries, filteredCountries, isLoading, error } = useCountriesSearch({
    name,
    currency,
    language,
    capital,
  });

  const languageOptions = [
    ...new Set(countries.map((country) => country.language)),
  ]
    .filter(Boolean)
    .map((language) => ({ label: language, value: language }));

  const capitalOptions = [
    ...new Set(countries.map((country) => country.capital)),
  ]
    .filter(Boolean)
    .map((capital) => ({ label: capital, value: capital }));

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <CountriesTitle />

      <div className="container mx-auto py-8 px-4">
        {isLoading ? (
          <div className="h-96 flex items-center justify-center">
            <Spinner />
          </div>
        ) : error ? (
          <CountriesError error={error} />
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="flex items-center justify-center gap-2">
                  <NameFilter name={name} setName={setName} />
                  <CurrencyFilter
                    currency={currency}
                    setCurrency={setCurrency}
                  />
                </div>

                <div className="flex items-center justify-center">
                  <DropdownFilter
                    value={language}
                    onChange={setLanguage}
                    options={languageOptions}
                    label="Select language"
                  />
                  <DropdownFilter
                    value={capital}
                    onChange={setCapital}
                    options={capitalOptions}
                    label="Select capital"
                  />
                </div>
              </div>

              <CountriesList
                countries={filteredCountries}
                renderFunc={(country) => <CountryItem {...country} />}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountriesSearchContainer;
