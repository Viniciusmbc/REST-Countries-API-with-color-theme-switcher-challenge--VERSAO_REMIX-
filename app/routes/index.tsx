import { Link } from "@remix-run/react";
import { useLoaderData } from "superjson-remix";
import { useState } from "react";
import { getCountries } from "~/api/countries";
import { IoSearchSharp } from "react-icons/io5";

import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export async function loader() {
  return getCountries();
}
export default function Index() {
  const countries = useLoaderData();

  // Search bar
  const [query, setQuery] = useState("");

  return (
    <article className="container">
      <article className="inputs_search_filter">
        <div className="input_search">
          <IoSearchSharp className="input_search_icon" />
          <input
            className="input_search_input"
            type="text"
            placeholder="Search for a country..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="input_filter_region">
          <ul id="menu">
            <li>
              <input id="check01" type="checkbox" name="menu" />
              <label htmlFor="check01">Filter by Region</label>
              <ul className="submenu">
                <li>
                  <Link to={`/countries/africa`}>Africa</Link>
                </li>
                <li>
                  <Link to={`/countries/america`}>America</Link>
                </li>
                <li>
                  <Link to={`/countries/asia`}>Asia</Link>
                </li>
                <li>
                  <Link to={`/countries/europe`}>Europe</Link>
                </li>
                <li>
                  <Link to={`/countries/oceania`}>Oceania</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </article>

      <article className="card_grid">
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
            <div key={cca3} className="cards">
              <img
                className="card_flags"
                src={flags.png}
                alt={`bandeira de ${name.common}`}
              />
              <div className="card_body">
                <Link to={`/country/${cca3.toLowerCase()}`}>
                  <h2>
                    <b>{name.common}</b>
                  </h2>
                </Link>

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
    </article>
  );
}
