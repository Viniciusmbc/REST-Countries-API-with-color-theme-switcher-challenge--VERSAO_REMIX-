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
      <article className="flex my-10">
        <div>
          <input
            placeholder="Search for a country..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className="ml-auto">
          <input placeholder="Filter by region" />
        </div>
      </article>

      <article className="grid grid-cols-4 gap-x-14 gap-y-24">
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
          .map(({ flags, name, population, region, capital }) => (
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={flags.png} alt={`bandeira de ${name.common}`} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <b>{name.common}</b>
                </h2>
                <p>
                  <b>Population: </b> {population}
                </p>
                <p>
                  <b>Region: </b> {region}
                </p>
                <p>
                  <b>Capital: </b> {capital}
                </p>
              </div>
            </div>
          ))
          .splice(0, 8)}
      </article>
    </section>
  );
}
