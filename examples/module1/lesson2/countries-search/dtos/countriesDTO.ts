import type { CountryDTO, RawCountry } from '../types/Country';

export function transformToCountryDTO(rawData: RawCountry): CountryDTO {
  return {
    name: rawData?.name?.official|| "Unknown",
    population: rawData?.population || 0,
    currency: rawData?.currencies ? Object.keys(rawData.currencies)?.[0] : "Unknown",
    capital: rawData?.capital?.[0] || "Unknown",
    language: rawData.languages ? Object.values(rawData.languages)?.[0] : "Unknown",
    flag: rawData?.flag || "Unknown"
  };
}
