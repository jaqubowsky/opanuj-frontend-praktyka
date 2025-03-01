import type { CountryDTO } from "../types/Country";

type FilterArgs = Partial<Record<keyof CountryDTO, string>>;

export function filterCountries(countries: CountryDTO[], filters: FilterArgs): CountryDTO[] {
  if (!filters || Object.values(filters).every(value => !value)) {
    return countries;
  }

  return countries.filter(country => {
    return Object.entries(filters).every(([field, value]) => {
      if (!value) return true;

      const countryValue = country[field as keyof CountryDTO];

      if (countryValue === undefined) return true;

      if (typeof countryValue === 'string') {
        return countryValue.toLowerCase().includes(value.toLowerCase());
      }

      return countryValue.toString() === value;
    });
  });
}
