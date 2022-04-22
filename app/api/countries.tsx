import { json } from "superjson-remix";

export async function getCountries() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cca3"
  );

  const countries = json(await response.json());

  return countries;
}
