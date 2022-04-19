import {
  getCountryByCCA3,
  json,
  useLoaderData
} from "/build/_shared/chunk-XJROHAQS.js";
import {
  React,
  init_react,
  useParams
} from "/build/_shared/chunk-KFHNTOHL.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\$cca3.tsx?browser
init_react();

// app/routes/$cca3.tsx
init_react();
var useCountryByCCA3 = () => {
  const { cca3 } = useParams();
  return useLoaderData(getCountryByCCA3(cca3), json);
};
var CountryByCCA3 = () => {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Country by cca3"), /* @__PURE__ */ React.createElement("p", null, country.name), /* @__PURE__ */ React.createElement("p", null, country.cca3));
};
export {
  CountryByCCA3,
  useCountryByCCA3
};
//# sourceMappingURL=/build/routes/$cca3-KFB223Q5.js.map
