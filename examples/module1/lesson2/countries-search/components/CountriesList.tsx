import type { CountryDTO } from '../types/Country';

type CountriesListProps = {
  countries: CountryDTO[];
  renderFunc: (country: CountryDTO) => React.ReactElement;
};

export const CountriesList = ({
  countries,
  renderFunc,
}: CountriesListProps) => {
  return countries?.length === 0 ? (
    <p className="text-2xl mt-4 text-zinc-900">No countries found...</p>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => renderFunc(country))}
    </div>
  );
};
