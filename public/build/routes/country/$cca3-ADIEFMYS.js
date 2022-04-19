import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-WWNYSGAC.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();

// app/components/Borders.tsx
init_react();
var import_react = __toESM(require_react());
function Borders({ borders }) {
  const [border, setBorders] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    setBorders(borders);
    const getBorders = async () => {
      const response = await fetch(`https://restcountries.com/v3/alpha?codes=${borders.join(",")}&fields=name,flag,population,region,capital,cca3`);
      const countries = await response.json();
      return countries;
    };
    getBorders();
  }, [borders]);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, "Borders: ", `${border} ,`, " "));
}

// app/routes/country/$cca3.tsx
function CountryDetails() {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country.name.common), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, "Population: ", country.population), /* @__PURE__ */ React.createElement("li", null, "Region: ", country.region), /* @__PURE__ */ React.createElement("li", null, "Sub Region:", country.subregion), /* @__PURE__ */ React.createElement("li", null, "Capital:", country.capital), /* @__PURE__ */ React.createElement("li", null, "Top Level Domain: ", country.tld[0]), /* @__PURE__ */ React.createElement("li", null, "Curriencies: ", Object.values(country.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, "Languages:", Object.values(country.languages).join(", ")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Borders, {
    borders: country.name.common
  }), "  "))));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-ADIEFMYS.js.map
