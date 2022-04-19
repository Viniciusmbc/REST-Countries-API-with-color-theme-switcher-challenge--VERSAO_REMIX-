import {
  useLoaderData
} from "/build/_shared/chunk-PT63G2MD.js";
import {
  React,
  init_react,
  useParams
} from "/build/_shared/chunk-5QYGALTY.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\$cca3.tsx?browser
init_react();

// app/routes/$cca3.tsx
init_react();
function useCountryByName() {
  const { name } = useParams();
  const loader = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const country = await response.json();
    return country[0];
  };
  return useLoaderData(loader);
}
var CountryByCCA3 = () => {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Country by cca3"), /* @__PURE__ */ React.createElement("p", null, country.name), /* @__PURE__ */ React.createElement("p", null, country.cca3));
};
export {
  CountryByCCA3,
  useCountryByName
};
//# sourceMappingURL=/build/routes/$cca3-K2IPLSWT.js.map
