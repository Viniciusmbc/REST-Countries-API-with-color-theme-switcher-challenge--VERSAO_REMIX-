import {
  Form,
  React,
  __toESM,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-NT6J4OTR.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
var import_react = __toESM(require_react());
function CountryDetails() {
  const country = useLoaderData();
  const [borders, setBorders] = (0, import_react.useState)(country.borders);
  const [loading, setLoading] = (0, import_react.useState)(true);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Form, {
    reloadDocument: true,
    method: "get"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "h-10",
    placeholder: "Search for a country..."
  }))), /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", country.name.common), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Native Name:", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common), /* @__PURE__ */ React.createElement("li", null, "Population: ", country.population), /* @__PURE__ */ React.createElement("li", null, "Region: ", country.region), /* @__PURE__ */ React.createElement("li", null, "Sub Region:", country.subregion), /* @__PURE__ */ React.createElement("li", null, "Capital:", country.capital), /* @__PURE__ */ React.createElement("li", null, "Top Level Domain: ", country.tld[0]), /* @__PURE__ */ React.createElement("li", null, "Curriencies: ", Object.values(country.currencies)[0].name, " "), /* @__PURE__ */ React.createElement("li", null, "Languages:", Object.values(country.languages).join(", ")), /* @__PURE__ */ React.createElement("li", null, "Border Country: ", borders))));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-A7LAOSEZ.js.map
