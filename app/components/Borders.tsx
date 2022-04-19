import { useState, useEffect } from "react";
import React from "react";
import { useLoaderData } from "remix";

export default function Borders({ borders }) {
  const [border, setBorders] = useState([]);

  useEffect(() => {
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
  }),[];

  return (
    <div>
      <h2>Borders: {`${border}`} </h2>
    </div>
  );
}
