import {
  useLoaderData
} from "/build/_shared/chunk-D76HYSAF.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-CYR63KRY.js";

// browser-route-module:C:\Users\viniciuscaceres\Downloads\node-grqkjw\app\routes\country\$cca3.tsx?browser
init_react();

// app/routes/country/$cca3.tsx
init_react();
function Country() {
  const country = useLoaderData();
  return /* @__PURE__ */ React.createElement("section", {
    className: "container mx-auto max-w-screen-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-y-12 gap-x-16 mt-11"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white shadow-md shadow-white"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-32 w-full",
    src: country.flag,
    alt: `bandeira de ${country.name.common}`
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("b", null, country.name.common, " "), " "), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Population:"), " ", country.population), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Region:"), " ", country.region), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("b", null, "Capital:"), " ", country.capital))));
}
export {
  Country as default
};
//# sourceMappingURL=/build/routes/country/$cca3-HCZN33QV.js.map
