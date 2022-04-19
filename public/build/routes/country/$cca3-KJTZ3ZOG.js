import {
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-CYR63KRY.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
var import_react = __toESM(require_react());
var [borders, setBorders] = (0, import_react.useState)(country.borders);
var [loading, setLoading] = (0, import_react.useState)(true);
(0, import_react.useEffect)(() => {
  console.log(borders);
  if (borders != void 0) {
    setLoading(true);
    async function promises() {
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
    promises();
  }
}, []);
function CountryDetails() {
  const country2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: country2.flags.png,
    alt: `bandeira de ${country2.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country2.name.common), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", Object.values(country2.name.nativeName)[Object.values(country2.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, "Population: ", country2.population), /* @__PURE__ */ React.createElement("li", null, "Region: ", country2.region), /* @__PURE__ */ React.createElement("li", null, "Sub Region:", country2.subregion), /* @__PURE__ */ React.createElement("li", null, "Capital:", country2.capital), /* @__PURE__ */ React.createElement("li", null, "Top Level Domain: ", country2.tld[0]), /* @__PURE__ */ React.createElement("li", null, "Curriencies: ", Object.values(country2.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, "Languages:", Object.values(country2.languages).join(", ")), /* @__PURE__ */ React.createElement("li", null, "Border Countries: "))));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-KJTZ3ZOG.js.map
