import { useState, useEffect } from "react";
import React from "react";
import { useLoaderData } from "remix";

export default function Borders({ borders }) {
  const [border, setBorders] = useState([borders]);

    useEffect(() => {
        setBorders([1,2,3]);
        borders.map(async (border) => {
            const response = await fetch(
                `https://restcountries.com/v3.1/alpha/${border}?fields=name,flags,population,region,subregion,capital,languages,tld,currencies,borders` 
            );
            const country = await response.json();
            setBorders(border => [...border, country]);
        });
    }, []);

  return (
    <div>
      <h2>Borders: {`${border}`} </h2>
    </div>
  );
}
