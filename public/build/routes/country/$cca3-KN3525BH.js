import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-E5CUEV3L.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
var import_react = __toESM(require_react());
function CountryDetails() {
  const country = useLoaderData();
  const [borders, setBorders] = (0, import_react.useState)(country.borders);
  const [loading, setLoading] = (0, import_react.useState)(true);
  (0, import_react.useEffect)(() => {
    if (country.borders.length > 0) {
      setLoading(true);
      async function promises2() {
        const vizinhos = borders.map(async (border) => {
          const data = await fetch(`https://restcountries.com/v3.1/alpha?codes=${border}`);
          const result = await data.json();
          const countryName = result.map(({ name }) => `${name.common} `);
          setLoading(false);
          return countryName;
        });
        const resolved = await Promise.all(vizinhos);
        setBorders(resolved);
        setLoading(false);
      }
    }
    promises();
  }, []);
  console.log(borders);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country.name.common), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, "Population: ", country.population), /* @__PURE__ */ React.createElement("li", null, "Region: ", country.region), /* @__PURE__ */ React.createElement("li", null, "Sub Region:", country.subregion), /* @__PURE__ */ React.createElement("li", null, "Capital:", country.capital), /* @__PURE__ */ React.createElement("li", null, "Top Level Domain: ", country.tld[0]), /* @__PURE__ */ React.createElement("li", null, "Curriencies: ", Object.values(country.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, "Languages:", Object.values(country.languages).join(", ")), /* @__PURE__ */ React.createElement("li", null, "Border Country: ", borders))));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-KN3525BH.js.map
