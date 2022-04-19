import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-WWNYSGAC.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();

// app/components/Borders.tsx
init_react();
function Borders({ borders }) {
  const countries = useLoaderData();
  async function loader({ borders: borders2 }) {
    const response = await fetch(`https://restcountries.com/v3/alpha?codes=${borders2.join(",")}&fields=name,flag,population,region,capital,cca3`);
    const countries2 = await response.json();
    return countries2;
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Borders: ", `${border} ,`, " "));
}

// app/routes/country/$cca3.tsx
function CountryDetails() {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country.name.common), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, "Population: ", country.population), /* @__PURE__ */ React.createElement("li", null, "Region: ", country.region), /* @__PURE__ */ React.createElement("li", null, "Sub Region:", country.subregion), /* @__PURE__ */ React.createElement("li", null, "Capital:", country.capital), /* @__PURE__ */ React.createElement("li", null, "Top Level Domain: ", country.tld[0]), /* @__PURE__ */ React.createElement("li", null, "Curriencies: ", Object.values(country.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, "Languages:", Object.values(country.languages).join(", ")), /* @__PURE__ */ React.createElement("li", null, "Border Country: ", /* @__PURE__ */ React.createElement(Borders, {
    borders: country.borders
  }), "  "))));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-UKVXF4VV.js.map
