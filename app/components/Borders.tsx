import { useState, useEffect } from "react";
import React from "react";
import { useLoaderData } from "remix";

export default function Borders({ borders }) {
  const [border, setBorders] = useState([borders]);

  React.useEffect(() => {
    setBorders(borders);
    const getBorders = async () => {
      const response = await fetch(
        `https://restcountries.com/v3/alpha?codes=${borders.join(
          ","
        )}&fields=name,flag,population,region,capital,cca3`
      );
      const countries = await response.json();
      return countries;
    };
    getBorders();
  }),[borders];

  return (
    <div>
      <h2>Borders: {`${borders}`} </h2>
    </div>
  );
}
