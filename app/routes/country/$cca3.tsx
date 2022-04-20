import { Link, useFetcher, useLoaderData } from "remix";
import { useState, useEffect } from "react";
import { getCountriesBycca } from "~/api/countries";

export async function loader({ params }) {
  params.cca3 = params.cca3.toLowerCase();
  const countries = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.cca3}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders`
  );
  const country = await countries.json();

  const res = await fetch(
    `https://restcountries.com/v3.1/alpha?codes=${country.borders}`
  );

  const borders = await res.json();
  return {
    country,
    borders,
  };
}

export default function CountryDetails() {
  const { country, borders } = useLoaderData();

  return (
  <>
  
  <Link to={"/"} className="flex"> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg> <h2>Back</h2></Link>
    <div className="flex mt-10">
     
      <img src={country.flags.png} alt={`bandeira de ${country.name.common}`} />
      <div>
        <h2> {country.name.common} </h2>
        <ul>
          <li>
            Native Name:{" "}
            {
              Object.values(country.name.nativeName)[
                Object.values(country.name.nativeName).length - 1
              ].common
            }
          </li>
          <li> Population: {country.population} </li>
          <li> Region: {country.region} </li>
          <li> Sub Region: {country.subregion} </li>
          <li> Capital: {country.capital} </li>
          <li> Top Level Domain: {country.tld[0]} </li>
          <li> Curriencies: {Object.values(country.currencies)[0].name} </li>
          <li> Languages: {Object.values(country.languages).join(", ")} </li>
          <li>
            {" "}
            {country.borders.length > 0 ? (
              <div>
                {" "}
                Borders :{" "}
                {borders.map(({ name }) => (
                  <p> {name.common} </p>
                ))}
              </div>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
 </>
  );

}
