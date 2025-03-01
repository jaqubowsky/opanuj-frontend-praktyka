export type RawCountry = {
  name?: { common?: string; official?: string };
  population?: number;
  currencies?: Record<string, { name?: string; symbol?: string }>;
  capital?: string[];
  languages?: Record<string, string>;
  flag?: string;
};

export type CountryDTO = {
  name: string;
  population: number;
  currency: string;
  capital: string;
  language: string;
  flag: string;
};
