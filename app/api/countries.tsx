import { json } from 'superjson-remix';

export async function getCountries() {
  const response = await fetch(
    'https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3'
  );

  const countries = json(await response.json());

  return countries;
}

export async function getCountriesBycca(cca3) {
  
  const countries = await fetch(
    `https://restcountries.com/v3.1/alpha/${cca3.toLowerCase()}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  );
  const country = await countries.json();
  return country;
}
