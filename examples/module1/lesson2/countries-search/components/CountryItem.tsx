import type { CountryDTO } from '../types/Country';

export const CountryItem = (country: CountryDTO) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg">
      <div className="p-5">
        <div className="flex items-center gap-4">
          <div className="text-2xl">{country.flag}</div>
          <h2 className="text-xl font-semibold text-gray-800">
            {country.name}
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="text-sm">
            <span className="font-medium text-gray-500">Population:</span>
            <p className="text-gray-700">
              {country.population.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
