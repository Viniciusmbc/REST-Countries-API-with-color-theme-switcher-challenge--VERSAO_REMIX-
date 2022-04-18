
import { useLoaderData } from "remix";

// Patch the country route
// Language: typescript
// Path: app\routes\country\index.tsx
// Compare this snippet from app\routes\country\index.tsx:
export async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();
  const countries = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.cca3}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies`
  );
  const country = await countries.json();
  return country;
}

export default function CountryDetails() {
  const country = useLoaderData();

  return (
    <div>
     <img
        src={country.flags.png}
        alt={`bandeira de ${country.name.common}`}
      ></img>
      <div>
        <h2> {country.name.common}</h2>
        <ul>
          <li>
            Native Name:
            {
              Object.values(country.name.nativeName)[
                Object.values(country.name.nativeName).length - 1
              ].common
            }
          </li>
          <li>Population: {country.population}</li>
          <li>Region: {country.region}</li>
          <li>Sub Region:{country.subregion}</li>
          <li>Capital:{country.capital}</li>
          <li>Top Level Domain: {country.tld[0]}</li>
          <li>Curriencies: {Object.values(country.currencies)[0].name} </li>
          <li>
            Languages:
            {Object.values(country.languages).join(", ")}
          </li>
          <li>Border Countries: </li>
        </ul>
      </div>
          </div>
  );
}
