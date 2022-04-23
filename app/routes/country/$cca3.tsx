import { Link, useLoaderData } from "remix";
import styles from "~/styles/countryDetails.css";
import { IoArrowBackOutline } from "react-icons/io5";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
    <article className="country_details_main">
      <div className="back_button">
        <IoArrowBackOutline className="back_button_arrow" />
        <Link to={"/"}>Back</Link>
      </div>

      <div className="country_details_card">
        <figure>
          <img
            className="country_details_flag"
            src={country.flags.svg}
            alt={`bandeira de ${country.name.common}`}
          />
        </figure>

        <div className="country_details_card_body">
          <h2> {country.name.common} </h2>

          <div className="country_details_card_text">
            <div>
              <ul>
                <li>
                  <b>Native Name: </b>
                  {
                    Object.values(country.name.nativeName)[
                      Object.values(country.name.nativeName).length - 1
                    ].common
                  }
                </li>
                <li>
                  <b>Population: </b> {country.population}
                </li>
                <li>
                  <b>Region: </b>
                  {country.region}
                </li>
                <li>
                  <b>Sub Region: </b> {country.subregion}{" "}
                </li>
                <li>
                  <b>Capital: </b> {country.capital}{" "}
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <b>Top Level Domain: </b>
                  {country.tld[0]}
                </li>
                <li>
                  <b>Curriencies: </b>
                  {Object.values(country.currencies)[0].name}{" "}
                </li>
                <li>
                  <b>Languages: </b>
                  {Object.values(country.languages).join(", ")}{" "}
                </li>
              </ul>
            </div>
          </div>
          {country.borders.length > 0 ? (
            <article className="borders_countries">
              <b>Border Countries: </b>
              {borders.map(({ name }) => (
                <p> {name.common} </p>
              ))}
            </article>
          ) : null}
        </div>
      </div>
    </article>
  );
}
