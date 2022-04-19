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
  }), /* @__PURE__ */ React.createElement("h2", null, country.name.common), /* @__PURE__ */ React.createElement("p", null, "Native Name: ", Object.values(country.name.nativeName)[Object.values(country.name.nativeName).length - 1].common));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/country/$cca3-OA4T4Q4X.js.map