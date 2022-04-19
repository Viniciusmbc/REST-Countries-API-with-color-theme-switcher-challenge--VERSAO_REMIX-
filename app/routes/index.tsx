import { Link } from "@remix-run/react";
import { useLoaderData } from "superjson-remix";
import { useState } from "react";
import { getCountries } from "~/api/countries";

export async function loader() {
  return getCountries();
}
export default function Index() {
  const countries = useLoaderData();

  // Search bar
  const [query, setQuery] = useState("");

  return (
    <section className="container mx-auto max-w-screen-lg">
      <section className="flex">
        <div className="mt-11">
          <input
            className="h-10"
            placeholder="Search for a country..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="ml-auto mt-11">
          <input className="h-10" placeholder="Filter by region" />
        </div>
      </section>

      <div className="grid grid-cols-4 gap-y-12 gap-x-16 mt-11">
        {countries
          .filter(({ name }) => {
            if (name === "") {
              return countries;
            } else if (
              name.common.toLowerCase().includes(query.toLowerCase())
            ) {
              return countries;
            }
          })
          .map(({ flags, name, population, region, capital, cca3 }) => (
            <div key={name.common} className="bg-white shadow-md shadow-white">
         
              <img
                className="h-32 w-full"
                src={flags.png}
                alt={`bandeira de ${name.common}`}
              />
              <Link to={`/country/${cca3.toLowerCase()}`}>
              <h2 className="my-4">
                <b>{name.common} </b>{" "}
              </h2>
                 </Link>
             
              <p>
                <b>Population:</b> {population}
              </p>
              <p>
                <b>Region:</b> {region}
              </p>
          
              <p>
                <b>Capital:</b> {capital}
              </p>
            </div>
          ))
          .splice(0, 8)}
      </div>
    </section>
  );
}
