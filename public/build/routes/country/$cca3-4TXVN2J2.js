import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-CYR63KRY.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
function CountryDetails() {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, country.map(({ name }) => /* @__PURE__ */ React.createElement("h1", null, name.common)));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-4TXVN2J2.js.map
