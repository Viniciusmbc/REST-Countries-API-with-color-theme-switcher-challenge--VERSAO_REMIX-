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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: country.flags.png,
    alt: ""
  }), /* @__PURE__ */ React.createElement("h2", null, country.name.common));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-T25RR5ZS.js.map
