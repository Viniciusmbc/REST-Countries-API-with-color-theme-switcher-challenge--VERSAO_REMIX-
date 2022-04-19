import {
  useLoaderData
} from "/build/_shared/chunk-GQGRMOJC.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-PCIYXL4K.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\$cca3.tsx?browser
init_react();

// app/routes/$cca3.tsx
init_react();
function CountryDetails() {
  const { country } = useLoaderData();
  return country.map(({ name }) => /* @__PURE__ */ React.createElement("h1", null, name.common));
}
export {
  CountryDetails as default
};
//# sourceMappingURL=/build/routes/$cca3-XJNFCIAQ.js.map
